using System.ComponentModel.DataAnnotations;

namespace WebAssemblyTemplate.Models
{
    public class ProjectStatusDistribution
    {
        [Key]
        public int Id { get; set; }
        public string Status { get; set; }
        public int Count { get; set; } = 0;
    }
}
