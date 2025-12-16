namespace BlazorAppDashboardTemplate.Models
{
    public class ProcessType
    {
        public int Id { get; set; }
        public string Name { get; set; } // Процесс атауы
        public string Description { get; set; } // Процесстің сипаттамасы
        public string FieldsJson { get; set; } // JSON автоматты түрде генерацияланады
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }

    public class FieldMeta
    {
        public string Name { get; set; } = string.Empty;
        public string Type { get; set; } = "String"; // String, Decimal, DateTime, Boolean
        public bool Required { get; set; } = false;
    }
}
