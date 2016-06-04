using AspNetCoreSPA.Common.Entities;
using AspNetCoreSPA.EntityFramework.Repositories.Student;
using AspNetCoreSPA.EntityFramework.Uow;
using AspNetCoreSPA.Framework.Domain.Repositories;
using AspNetCoreSPA.Framework.Domain.Uow;
using Microsoft.Extensions.DependencyInjection;

namespace AspNetCoreSPA
{
    public static class DataAccessServiceCollectionExtensions
    {
        public static void AddDataAccessTier(this IServiceCollection services)
        {
            services.AddTransient<IUnitOfWork, EfUnitOfWork>();
            services.AddTransient<IStudentRepository, StudentRepository>();
        }
    }
}
