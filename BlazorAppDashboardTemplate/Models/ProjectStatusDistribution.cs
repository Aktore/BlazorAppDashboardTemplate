using System.ComponentModel.DataAnnotations;

namespace BlazorAppDashboardTemplate.Models
{
    public class ProjectStatusDistribution
    {
        [Key]
        public int Id { get; set; }
        public string Status { get; set; }
        public int Count { get; set; } = 0;
    }
}
