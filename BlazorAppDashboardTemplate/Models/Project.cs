using System.ComponentModel.DataAnnotations;

namespace BlazorAppDashboardTemplate.Models
{
    public class Project
    {
        [Key]
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public string Status { get; set; }           // Planned, In Progress, Completed, Delayed
        public int CompletionPercent { get; set; }   // 0 - 100%
        public ICollection<Employee>? TeamMembers { get; set; }
    }
}
