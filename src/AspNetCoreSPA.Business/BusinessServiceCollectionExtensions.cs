using System;
using AspNetCoreSPA.Business.Student;
using Microsoft.Extensions.DependencyInjection;

namespace AspNetCoreSPA
{
    public static class BusinessServiceCollectionExtensions
    {
        public static void AddBusinessTier(this IServiceCollection services)
        {
            services.AddTransient<IStudentBusiness, StudentBusiness>();
        }
    }
}
