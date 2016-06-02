using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetCoreSPA.Common.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreSPA.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/account")]
    [Authorize]
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public AccountController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [Route("login"), HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] LoginViewModel loginInfo)
        {
            if (ModelState.IsValid)
            {
                var result = await _signInManager.PasswordSignInAsync(loginInfo.UserName, loginInfo.Password, isPersistent: false, lockoutOnFailure: false);
                if (result.Succeeded)
                {
                    return Json("OK");
                }

                return BadRequest();
            }

            return BadRequest();
        }

        [Route("logoff"), HttpPost]
        public async Task<IActionResult> LogOff()
        {
            await _signInManager.SignOutAsync();

            return Json("OK");
        }
    }

    public class LoginViewModel
    {
        public string UserName { get; set; }

        public string Password { get; set; }
    }
}