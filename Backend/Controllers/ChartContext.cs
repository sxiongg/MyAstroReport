using Microsoft.EntityFrameworkCore;

namespace Backend
{
    public class ChartContext : DbContext     //  inherits from dbcontext. this is what makes it an entity framework
    {
        public ChartContext(DbContextOptions<ChartContext> options) : base(options)    
        {

        }

        public DbSet<Chart> Charts { get; set; }    // database set
        public DbSet<User> Users { get; set; }
        public DbSet<Month> Months { get; set; }


    }

}