namespace Moilya.API.Entities
{
    public class Yonetici
    {
        public int Id { get; set; }
        public string KullaniciAdi { get; set; } = string.Empty;
        public string SifreHash { get; set; } = string.Empty;
        public DateTime OlusturmaTarihi { get; set; } = DateTime.UtcNow;
    }
}