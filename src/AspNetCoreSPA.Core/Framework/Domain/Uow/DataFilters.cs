namespace AspNetCoreSPA.Framework.Domain.Uow
{
    /// <summary>
    /// Standard filters of Tps.
    /// </summary>
    public static class TpsDataFilters
    {
        /// <summary>
        /// "SoftDelete".
        /// Soft delete filter.
        /// Prevents getting deleted data from database.
        /// See <see cref="ISoftDelete"/> interface.
        /// </summary>
        public const string SoftDelete = "SoftDelete";
    }
}