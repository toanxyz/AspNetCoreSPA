using System.Collections.Generic;
using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace AspNetCoreSPA.Web.Configurations
{
    public class MyRazorViewEngine : RazorViewEngine
    {
        public MyRazorViewEngine(IRazorPageFactoryProvider pageFactory, IRazorPageActivator pageActivator, HtmlEncoder htmlEncoder, IOptions<RazorViewEngineOptions> optionsAccessor, ILoggerFactory loggerFactory) : base(pageFactory, pageActivator, htmlEncoder, optionsAccessor, loggerFactory)
        {
        }

        public override IEnumerable<string> ViewLocationFormats => new List<string>()
        {
            "~/wwwroot/app/components/{1}/{0}.html",
            "~/wwwroot/app/{1}/{0}.html",
            "~/wwwroot/app/{0}.html"
        };
    }

    public static class MyRazorViewEngineExtension
    {
        public static void ReplaceDefaultViewEngine(this IServiceCollection services)
        {
            services.Replace(ServiceDescriptor.Singleton<IRazorViewEngine, MyRazorViewEngine>());
        }
    }
}
