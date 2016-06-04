namespace AspNetCoreSPA.Framework.Domain.Auditing
{
    /// <summary>
    /// Adds navigation properties to <see cref="IFullAudited"/> interface for user.
    /// </summary>
    /// <typeparam name="TUser">Type of the user</typeparam>
    public interface IFullAudited<TUser> : IAudited<TUser>, IFullAudited, IDeletionAudited<TUser> 
        where TUser : IEntity<int>
    {

    }
}