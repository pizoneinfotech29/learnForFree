global using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting.Server;
using System.Diagnostics.Metrics;

namespace SuperHeroApiDotNet7.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS03;Database=master;Trusted_Connection=true;TrustServerCertificate=true;", builder =>
            {
                builder.EnableRetryOnFailure(5, TimeSpan.FromSeconds(10), null);
            });
            base.OnConfiguring(optionsBuilder);
        }

        public DbSet<SuperHero> SuperHeroes { get; set; }
    }
}
