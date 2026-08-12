namespace Moilya.API.Entities
{
    public class Talep
    {
        public int Id { get; set; }
        public string AdSoyad { get; set; } = string.Empty;
        public string Telefon { get; set; } = string.Empty;
        public string Bolge { get; set; } = string.Empty;
        public string? Mesaj { get; set; }
        public DateTime OlusturmaTarihi { get; set; } = DateTime.UtcNow;
        public bool IslendiMi { get; set; } = false;
    }
}