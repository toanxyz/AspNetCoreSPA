using System;
using AspNetCoreSPA.Framework.Dependency;
using AspNetCoreSPA.Framework.Domain.Uow;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace AspNetCoreSPA
{
    public static class CoreServiceCollectionExtensions
    {
        public static void AddKernelModule(this IServiceCollection services)
        {
            services.AddSingleton<IIocManager, IocManager>();
            services.AddTransient<ICurrentUnitOfWorkProvider, CallContextCurrentUnitOfWorkProvider>();
            services.AddTransient<IUnitOfWorkDefaultOptions, UnitOfWorkDefaultOptions>();
            services.AddTransient<IUnitOfWorkManager, UnitOfWorkManager>();
        }

        public static void UserKernelModule(this IApplicationBuilder app)
        {
            if (app == null)
            {
                throw new ArgumentNullException("app");
            }

            var iocManager = app.ApplicationServices.GetService<IIocManager>();

            iocManager.WrapServiceProvider(app.ApplicationServices);
        }
    }
}
