using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreSPA.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View("index");
        }
    }
}