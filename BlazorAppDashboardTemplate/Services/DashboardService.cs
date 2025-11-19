using BlazorAppDashboardTemplate.Data;
using BlazorAppDashboardTemplate.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace BlazorAppDashboardTemplate.Services
{
    public class DashboardService
    {
        private readonly AppDbContext _context;

        public DashboardService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<Project>> GetProjectsAsync()
        {
            return await _context.Projects.ToListAsync();
        }

        public async Task<List<ProjectTask>> GetTasksByProjectAsync(int projectId)
        {
            return await _context.ProjectTasks
                                 .Where(t => t.ProjectId == projectId)
                                 .OrderBy(t => t.StartDate)
                                 .ToListAsync();
        }

        public async Task<Dictionary<string, int>> GetProjectStatusDistributionAsync()
        {
            return await _context.Projects
                                 .GroupBy(p => p.Status)
                                 .Select(g => new { Status = g.Key, Count = g.Count() })
                                 .ToDictionaryAsync(x => x.Status, x => x.Count);
        }
    }
}
