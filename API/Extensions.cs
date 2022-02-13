using API.Data;
using System;
using Microsoft.EntityFrameworkCore;

namespace API
{
    public static class Extensions
    {
        public static void AddDatabase(this IServiceCollection services, ConfigurationManager configuration)
        {
            services.AddDbContext<DataContext>(options =>
            {
                options.UseSqlite(configuration.GetConnectionString("DefaultConnection"));
            });
        }
    }
}