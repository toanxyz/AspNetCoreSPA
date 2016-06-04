using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreSPA.Framework
{
    public class ApplicationException : Exception
    {
        public ApplicationException()
        {

        }

        /// <summary>
        /// Creates a new <see cref="BusinessException"/> object.
        /// </summary>
        /// <param name="message">Exception message</param>
        public ApplicationException(string message)
            : base(message)
        {

        }

        /// <summary>
        /// Creates a new <see cref="BusinessException"/> object.
        /// </summary>
        /// <param name="message">Exception message</param>
        /// <param name="innerException">Inner exception</param>
        public ApplicationException(string message, Exception innerException)
            : base(message, innerException)
        {

        }
    }
}
