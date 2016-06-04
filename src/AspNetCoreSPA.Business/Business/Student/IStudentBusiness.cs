using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetCoreSPA.Common.Dtos;

namespace AspNetCoreSPA.Business.Student
{
    public interface IStudentBusiness
    {
        bool CreateStudent(StudentInputDto studentInputDto);
    }
}
