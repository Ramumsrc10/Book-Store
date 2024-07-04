using Microsoft.EntityFrameworkCore;
namespace BookStoreAPI.Entities
{
    public class MyContext:DbContext
    {
        private IConfiguration configuration;

        public MyContext(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        public DbSet<Book> Books { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Order> Orders { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connection = configuration.GetConnectionString("MySqlConnection");
            optionsBuilder.UseMySql(connection, ServerVersion.AutoDetect(connection));
        }

    }
}
