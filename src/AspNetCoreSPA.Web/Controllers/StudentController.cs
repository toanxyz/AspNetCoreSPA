using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using AspNetCoreSPA.Web.Models;

namespace AspNetCoreSPA.Web.Controllers
{
    [Route("api/student")]
    public class StudentController : Controller
    {
        //private static List<Student> _students = new List<Student>
        //{
        //    new Student { ID = 1, FirstName = "John", LastName = "Doe", Email = "john@example.com"},
        //    new Student { ID = 2, FirstName = "Mary", LastName = "Moe", Email = "mary@example.com"},
        //    new Student { ID = 3, FirstName = "July", LastName = "Dooley", Email = "july@example.com"}
        //};

        public StudentController(StudentDbContext dbContext)
        {
            // Dependency Injection
            // Constructor Injection
            _dbContext = dbContext;
        }

        //Add database
        private StudentDbContext _dbContext;

        [Route("getAll")]
        [HttpGet]
        public IActionResult GetAll()
        {
            //return Json(_students);
            return Json(_dbContext.Students.ToList());
        }

        [Route("createStudent")]
        [HttpPost]
        public IActionResult CreateStudent([FromBody] Student student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            //_students.Add(student);
            _dbContext.Students.Add(student);
            _dbContext.SaveChanges();

            return Json(_dbContext.Students.ToList());
        }
        
        [Route("searchStudent")]
        [HttpGet]
        public IActionResult Search([FromQuery] string firstName)
        {
            if(firstName == null)
            {
                return RedirectToAction("GetAll");
            }
            return Json(_dbContext.Students.Where(student => student.FirstName.Equals(firstName)));
        }
		
        [Route("editStudent")]
        [HttpGet]
        public IActionResult Edit([FromQuery]int? id)
        {
            if (id == null)
            {
                return BadRequest();
            }
            IEnumerable<Student> lstStudent = _dbContext.Students.Where(student => student.ID.Equals(id));
            if (lstStudent.Count() == 0)
            {
                return HttpNotFound();
            } 
            return Json(lstStudent);
        }

        private IActionResult HttpNotFound()
        {
            throw new NotImplementedException();
        }


        [Route("editStudent")]
        [HttpPost]
        public IActionResult Edit([FromBody] Student student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            return RedirectToAction("GetAll");
        }


        [Route("deleteStudent")]
        [HttpGet]
        public IActionResult Delete([FromQuery]int? id)
        {
            if (id == null)
            {
                return BadRequest();
            }
            IEnumerable<Student> lstStudent = _dbContext.Students.Where(student => student.ID.Equals(id));
            if (lstStudent.Count() == 0)
            {
                return HttpNotFound();
            }
            return Json(lstStudent);
        }

        [Route("deleteStudent")]
        [HttpPost]
        public IActionResult DeleteConfirmed([FromBody]int id)
        {
            _dbContext.Students.Remove(new Student() { ID = 1 });
            return RedirectToAction("GetAll");
        }
    }
}
