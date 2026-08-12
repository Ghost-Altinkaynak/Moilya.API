namespace Moilya.API.Entities
{
    public class NedenBizMaddesi
    {
        public int Id { get; set; }
        public string Baslik { get; set; } = string.Empty;
        public string Aciklama { get; set; } = string.Empty;
        public int SiraNo { get; set; }
    }
}