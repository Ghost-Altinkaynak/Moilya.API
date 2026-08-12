namespace Moilya.API.Entities
{
    public class IletisimBilgisi
    {
        public int Id { get; set; }
        public string Telefon { get; set; } = string.Empty;
        public string Eposta { get; set; } = string.Empty;
        public string? Instagram { get; set; }
        public string? Adres { get; set; }
        public string? HaritaAramasi { get; set; }
        public DateTime GuncellenmeTarihi { get; set; } = DateTime.UtcNow;
    }
}