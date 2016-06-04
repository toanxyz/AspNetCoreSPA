using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetCoreSPA.Framework.Domain.Repositories;

namespace AspNetCoreSPA.EntityFramework.Repositories.Student
{
    public interface IStudentRepository : IRepository<Common.Entities.Student, long>
    {
    }
}
