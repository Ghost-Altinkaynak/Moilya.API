namespace Moilya.API.Entities
{
    public class GaleriOgesi
    {
        public int Id { get; set; }
        public string Baslik { get; set; } = string.Empty;
        public string? ResimYolu { get; set; }
        public string Renk1 { get; set; } = "#B8703E";
        public string Renk2 { get; set; } = "#3B2A1F";
        public int SiraNo { get; set; }

        public int? HizmetId { get; set; }
        public Hizmet? Hizmet { get; set; }
    }
}