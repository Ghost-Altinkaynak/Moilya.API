namespace Moilya.API.Entities
{
    public class AnaSayfaManset
    {
        public int Id { get; set; }
        public string UstBaslik { get; set; } = string.Empty;
        public string AnaBaslik { get; set; } = string.Empty;
        public string VurguluBaslik { get; set; } = string.Empty;
        public string AciklamaMetni { get; set; } = string.Empty;
        public DateTime GuncellenmeTarihi { get; set; } = DateTime.UtcNow;
    }
}