using AspNetCoreSPA.Framework.Domain;
using AspNetCoreSPA.Framework.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace AspNetCoreSPA.Framework.EntityFramework
{
    public class EfRepositoryBase<TDbContext, TEntity> : EfRepositoryBase<TDbContext, TEntity, int>, IRepository<TEntity>
        where TEntity : class, IEntity<int>
        where TDbContext : DbContext
    {
        public EfRepositoryBase(TDbContext dbContextProvider)
            : base(dbContextProvider)
        {
        }
    }
}