using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreSPA.Web.Controllers
{
    public class AppViewController : Controller
    {
        public IActionResult Load(string viewUrl)
        {
            return View(viewUrl);
        }
    }
}
