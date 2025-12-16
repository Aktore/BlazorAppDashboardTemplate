using BlazorAppDashboardTemplate.Models;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace BlazorAppDashboardTemplate.Data
{
    public class ProcessRepository
    {
        private readonly AppDbContext _db;

        public ProcessRepository(AppDbContext db)
        {
            _db = db;
        }

        public async Task SaveAsync(string processType, Dictionary<string, object> data)
        {
            var entity = new ProcessData
            {
                ProcessType = processType,
                Data = JsonSerializer.Serialize(data),
                CreatedAt = DateTime.UtcNow
            };
            _db.ProcessDataHistory.Add(entity);
            await _db.SaveChangesAsync();
        }

        public async Task<List<Dictionary<string, object>>> GetAllAsync(string processType)
        {
            var list = await _db.ProcessDataHistory
                .Where(p => p.ProcessType == processType)
                .ToListAsync();

            return list.Select(p => JsonSerializer.Deserialize<Dictionary<string, object>>(p.Data)!)
                .ToList();
        }
    }
}
