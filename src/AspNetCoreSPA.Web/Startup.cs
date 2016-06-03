using System;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using AspNetCoreSPA.Common.Entities;
using AspNetCoreSPA.EntityFramework;
using AspNetCoreSPA.Web.Configurations;
using Microsoft.AspNetCore.Authentication.Cookies;
using AspNetCoreSPA.Web.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace AspNetCoreSPA.Web
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

            Configuration = builder.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"),
                    o => o.MigrationsAssembly("AspNetCoreSPA.Web")));

            services.AddDbContext<StudentDbContext>(options => 
                options.UseSqlServer(Configuration.GetConnectionString("StudentConnection"),
                    o => o.MigrationsAssembly("AspNetCoreSPA.Web")));

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddMvc();

            services.ReplaceDefaultViewEngine();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseStaticFiles();

            app.UseMyIdentity();

            app.UseMvcWithDefaultRoute();

            CreateSampleData(app.ApplicationServices);
        }

        private static async void CreateSampleData(IServiceProvider applicationServices)
        {
            using (var dbContext = applicationServices.GetService<ApplicationDbContext>())
            {
                var sqlServerDatabase = dbContext.Database;
                if (sqlServerDatabase != null)
                {
                    // add some users
                    var userManager = applicationServices.GetService<UserManager<ApplicationUser>>();
                    ApplicationUser user = await userManager.FindByEmailAsync("test01@example.com");
                    if (user == null)
                    {
                        user = new ApplicationUser { UserName = "test01", Email = "test01@example.com" };
                        await userManager.CreateAsync(user, "Qwer!@#12345");
                    }
                }
            }
        }
    }
}
