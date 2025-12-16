using BlazorAppDashboardTemplate.Models;
using Microsoft.EntityFrameworkCore;

using System.Collections.Generic;
namespace BlazorAppDashboardTemplate.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<ProcessType> ProcessTypes { get; set; }
        public DbSet<ProcessData> ProcessDataHistory { get; set; }
    }
}
