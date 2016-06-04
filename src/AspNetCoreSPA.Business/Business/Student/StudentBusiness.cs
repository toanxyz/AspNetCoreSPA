using System.Linq;
using AspNetCoreSPA.Common.Dtos;
using AspNetCoreSPA.EntityFramework.Repositories.Student;
using AspNetCoreSPA.Framework.Domain.Repositories;
using AspNetCoreSPA.Framework.Domain.Uow;

namespace AspNetCoreSPA.Business.Student
{
    public class StudentBusiness : IStudentBusiness
    {
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        private readonly IStudentRepository _studentRepository;

        public StudentBusiness(IUnitOfWorkManager unitOfWorkManager, IStudentRepository studentRepository)
        {
            _unitOfWorkManager = unitOfWorkManager;
            _studentRepository = studentRepository;
        }

        public bool CreateStudent(StudentInputDto studentInputDto)
        {
            using (var unitOfWork = _unitOfWorkManager.Begin())
            {
                var student = _studentRepository.Insert(new Common.Entities.Student
                {
                    Email = studentInputDto.Email,
                    FirstName = studentInputDto.FirstName,
                    LastName = studentInputDto.LastName
                });

                unitOfWork.Complete();
            }

            return true;
        }
    }
}
