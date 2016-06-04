using System.Linq;
using AspNetCoreSPA.Common.Dtos;
using AspNetCoreSPA.EntityFramework.Repositories.Student;
using AspNetCoreSPA.Framework.Domain.Repositories;
using AspNetCoreSPA.Framework.Domain.Uow;
using AspNetCoreSPA.EntityFramework;

namespace AspNetCoreSPA.Business.Student
{
    public class StudentBusiness : IStudentBusiness
    {
        private readonly ApplicationDbContext _dbContext;

        public StudentBusiness(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool CreateStudent(StudentInputDto studentInputDto)
        {
            _dbContext.Students.Add(new Common.Entities.Student
            {
                Email = studentInputDto.Email,
                FirstName = studentInputDto.FirstName,
                LastName = studentInputDto.LastName
            });

            _dbContext.SaveChanges();

            return true;
        }
    }
}
