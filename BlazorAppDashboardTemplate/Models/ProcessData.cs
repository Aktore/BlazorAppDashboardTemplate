using System.ComponentModel.DataAnnotations.Schema;

namespace BlazorAppDashboardTemplate.Models
{
    public class ProcessData
    {
        public int Id { get; set; }
        public string ProcessType { get; set; } = string.Empty;
        public string Data { get; set; } // JSON сақталады
        public DateTime CreatedAt { get; set; }
    }
}
