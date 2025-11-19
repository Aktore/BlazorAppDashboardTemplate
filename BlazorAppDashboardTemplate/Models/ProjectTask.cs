using System.ComponentModel.DataAnnotations;

namespace BlazorAppDashboardTemplate.Models
{
    public class ProjectTask
    {
        [Key]
        public int TaskId { get; set; }
        public int ProjectId { get; set; }
        public string TaskName { get; set; }
        public int ProgressPercent { get; set; }    // 0 - 100%
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; } = DateTime.MinValue;
    }
}
