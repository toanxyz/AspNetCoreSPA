using AspNetCoreSPA.Framework.EntityFramework;

namespace AspNetCoreSPA.EntityFramework.Repositories.Student
{
    public class StudentRepository: EfRepositoryBase<ApplicationDbContext,Common.Entities.Student, long>, IStudentRepository
    {
        public StudentRepository(ApplicationDbContext dbContextProvider) 
            : base(dbContextProvider)
        {
        }
    }
}
