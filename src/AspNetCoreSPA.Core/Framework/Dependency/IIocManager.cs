using System;

namespace AspNetCoreSPA.Framework.Dependency
{
    /// <summary>
    /// This interface is used to directly perform dependency injection tasks.
    /// </summary>
    public interface IIocManager : IIocResolver, IDisposable
    {
        /// <summary>
        /// Reference to the IServiceProvider
        /// </summary>
        IServiceProvider ServiceProvider { get; }

        void WrapServiceProvider(IServiceProvider serviceProvider);
    }
}