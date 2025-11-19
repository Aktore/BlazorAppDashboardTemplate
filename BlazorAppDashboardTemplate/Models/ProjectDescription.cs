using System.ComponentModel.DataAnnotations;

namespace BlazorAppDashboardTemplate.Models
{
    public class ProjectDescription
    {
        [Key]
        public int ProjectDescriptionId { get; set; }

        [Required]
        public int ProjectId { get; set; }

        [Required]
        [MaxLength(500)]
        public string Description { get; set; }

        // Navigation property
        public Project Project { get; set; }
    }
}
