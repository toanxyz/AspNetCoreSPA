using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreSPA.Framework
{
    public class BusinessException : Exception
    {
        public BusinessException()
        {

        }

        /// <summary>
        /// Creates a new <see cref="BusinessException"/> object.
        /// </summary>
        /// <param name="message">Exception message</param>
        public BusinessException(string message)
            : base(message)
        {

        }

        /// <summary>
        /// Creates a new <see cref="BusinessException"/> object.
        /// </summary>
        /// <param name="message">Exception message</param>
        /// <param name="innerException">Inner exception</param>
        public BusinessException(string message, Exception innerException)
            : base(message, innerException)
        {

        }
    }
}
