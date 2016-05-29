using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace AspNetCoreSPA.Web.Configurations
{
    public static class ProcessHelper
    {
        public static void EnsureOnlyInstanceOf(Process process)
        {
            if (process == null)
            {
                return;
            }

            var duplicated = Process.GetProcessesByName(process.ProcessName);

            foreach (var proc in duplicated.Where(p => p.Id != process.Id))
            {
                proc.Kill();
            }
        }
    }
}
