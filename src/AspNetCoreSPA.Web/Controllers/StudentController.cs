using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreSPA.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/student")]
    [Authorize]
    public class StudentController : Controller
    {
        private static List<Student> _students = new List<Student>
        {
            new Student { FirstName = "John", LastName = "Doe", Email = "john@example.com"},
            new Student { FirstName = "Mary", LastName = "Moe", Email = "mary@example.com"},
            new Student { FirstName = "July", LastName = "Dooley", Email = "july@example.com"}
        };

        [Route("getAll"), HttpGet]
        public IActionResult GetAll()
        {
            return Json(_students);
        }

        [Route("createStudent"), HttpPost]
        public IActionResult CreateStudent([FromBody] Student student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            _students.Add(student);

            return Json(_students);
        }
        
        [Route("searchStudent"), HttpGet]
        public IActionResult Search([FromQuery] string firstName)
        {
            return Json(_students.Where(student => student.FirstName.Equals(firstName)));
        }
    }

    public class Student
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Email { get; set; }
    }
}
