using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreSPA.Web.Models
{
    public class Student
    {
        [Required]
        public int ID { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Email { get; set; }

    }

    public class StudentDbContext : DbContext
    {
        public StudentDbContext(DbContextOptions<StudentDbContext> options)
            : base(options)
        { }

        public DbSet<Student> Students { get; set; }
    }
}
