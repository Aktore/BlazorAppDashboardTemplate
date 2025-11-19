using System.ComponentModel.DataAnnotations;

namespace BlazorAppDashboardTemplate.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }

        [Required]
        [MaxLength(100)]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(100)]
        public string LastName { get; set; }

        [MaxLength(200)]
        public string Position { get; set; }

        [Required]
        public DateTime HireDate { get; set; }

        // Navigation property
        public ICollection<Project>? Projects { get; set; }
    }
}
