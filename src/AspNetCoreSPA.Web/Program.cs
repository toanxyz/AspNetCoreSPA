using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using AspNetCoreSPA.Web.Configurations;
using Microsoft.AspNetCore.Hosting;

namespace AspNetCoreSPA.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            ProcessHelper.EnsureOnlyInstanceOf(Process.GetCurrentProcess());

            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
