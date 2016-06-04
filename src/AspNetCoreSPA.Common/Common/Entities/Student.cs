using AspNetCoreSPA.Framework.Domain.Auditing;

namespace AspNetCoreSPA.Common.Entities
{
    public class Student : FullAuditedEntity<long>
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }
    }
}
