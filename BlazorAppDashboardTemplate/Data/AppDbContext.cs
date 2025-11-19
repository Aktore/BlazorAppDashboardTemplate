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

        public DbSet<Project> Projects { get; set; }
        public DbSet<ProjectTask> ProjectTasks { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<ProjectDescription> ProjectDescriptions { get; set; }
    }
}
