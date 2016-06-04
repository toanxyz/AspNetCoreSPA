using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using AspNetCoreSPA.Business.Student;
using AspNetCoreSPA.Common.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreSPA.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/student")]
    [Authorize]
    public class StudentController : Controller
    {
        private static List<StudentInputDto> _students = new List<StudentInputDto>
        {
            new StudentInputDto { FirstName = "John", LastName = "Doe", Email = "john@example.com"},
            new StudentInputDto { FirstName = "Mary", LastName = "Moe", Email = "mary@example.com"},
            new StudentInputDto { FirstName = "July", LastName = "Dooley", Email = "july@example.com"}
        };

        private IStudentBusiness _studentBusiness;

        public StudentController(IStudentBusiness studentBusiness)
        {
            _studentBusiness = studentBusiness;
        }

        [Route("getAll"), HttpGet]
        public IActionResult GetAll()
        {
            return Json(_students);
        }

        [Route("createStudent"), HttpPost]
        public IActionResult CreateStudent([FromBody] StudentInputDto student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            if (_studentBusiness.CreateStudent(student))
            {
                _students.Add(student);
            }

            return Json(_students);
        }
        
        [Route("searchStudent"), HttpGet]
        public IActionResult Search([FromQuery] string firstName)
        {
            return Json(_students.Where(student => student.FirstName.Equals(firstName)));
        }
    }
}
