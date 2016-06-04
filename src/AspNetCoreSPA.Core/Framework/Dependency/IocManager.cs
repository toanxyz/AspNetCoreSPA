using System;
using Microsoft.Extensions.DependencyInjection;

namespace AspNetCoreSPA.Framework.Dependency
{
    /// <summary>
    /// This class is used to directly perform dependency injection tasks.
    /// </summary>
    public class IocManager : IIocManager
    {
        /// <summary>
        /// Reference to the Castle Windsor Container.
        /// </summary>
        public IServiceProvider ServiceProvider { get; private set; }

        /// <summary>
        /// Creates a new <see cref="IocManager"/> object.
        /// Normally, you don't directly instantiate an <see cref="IocManager"/>.
        /// This may be useful for test purposes.
        /// </summary>
        public IocManager()
        {
        }

        public void WrapServiceProvider(IServiceProvider serviceProvider)
        {
            ServiceProvider = serviceProvider;
        }

        public T Resolve<T>()
        {
            return ServiceProvider.GetService<T>();
        }

        public T Resolve<T>(Type type)
        {
            return (T)ServiceProvider.GetService(type);
        }

        public void Dispose()
        {
            
        }
    }
}