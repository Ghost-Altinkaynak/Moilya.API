using Microsoft.EntityFrameworkCore;
using Moilya.API.Entities;

namespace Moilya.API.Context
{
    public static class DbInitializer
    {
        public static async Task SeedAsync(AppDbContext context)
        {
            await context.Database.MigrateAsync();

            if (!await context.AnaSayfaMansetleri.AnyAsync())
            {
                context.AnaSayfaMansetleri.Add(new AnaSayfaManset
                {
                    SiteAdi = "Moilya",
                    UstBaslik = "Özel Ölçü Mobilya Atölyesi",
                    AnaBaslik = "Duvarınızın ölçüsü kadar ",
                    VurguluBaslik = "dolap.",
                    AciklamaMetni = "Moilya; gardırobunuzdan mutfak dolabınıza kadar evinizin her köşesini milimetrik ölçüyle tasarlar, kendi atölyesinde üretir, kapınızda monte eder."
                });
            }

            if (!await context.GuvenMaddeleri.AnyAsync())
            {
                context.GuvenMaddeleri.AddRange(
                    new GuvenMaddesi { Metin = "Yerinde ücretsiz ölçü", SiraNo = 1 },
                    new GuvenMaddesi { Metin = "Birinci sınıf malzeme", SiraNo = 2 },
                    new GuvenMaddesi { Metin = "5 yıl garanti", SiraNo = 3 },
                    new GuvenMaddesi { Metin = "Anahtar teslim montaj", SiraNo = 4 }
                );
            }

            var hizmetler = await context.Hizmetler.ToListAsync();
            if (hizmetler.Count == 0)
            {
                hizmetler = new List<Hizmet>
                {
                    new Hizmet { Baslik = "Gardırop & Vestiyer", Aciklama = "Yatak odanızın her santimini değerlendiren, sürgülü veya kanatlı kapaklı gardıroplar.", SiraNo = 1 },
                    new Hizmet { Baslik = "Mutfak Dolabı", Aciklama = "Tezgahtan tavana, mutfağınızın çalışma düzenine göre kurgulanan dolap sistemleri.", SiraNo = 2 },
                    new Hizmet { Baslik = "Çocuk Odası Mobilyası", Aciklama = "Büyüyen ihtiyaçlara göre uyarlanabilen, dayanıklı ve güvenli çocuk odası dolapları.", SiraNo = 3 },
                    new Hizmet { Baslik = "Kiler & Ankastre Dolap", Aciklama = "Boşluk kalan her köşeyi kullanışlı depolama alanına çeviren özel çözümler.", SiraNo = 4 }
                };
                context.Hizmetler.AddRange(hizmetler);
                await context.SaveChangesAsync();
            }

            if (!await context.SurecAdimlari.AnyAsync())
            {
                context.SurecAdimlari.AddRange(
                    new SurecAdimi { Baslik = "Keşif & Ölçü", Aciklama = "Evinize gelir, alanı milimetrik olarak ölçer, ihtiyaçlarınızı dinleriz.", SiraNo = 1 },
                    new SurecAdimi { Baslik = "Tasarım", Aciklama = "Ölçülere göre tasarımı hazırlar, sizinle birlikte netleştiririz.", SiraNo = 2 },
                    new SurecAdimi { Baslik = "Üretim", Aciklama = "Atölyemizde seçtiğiniz malzeme ve renkle üretime başlarız.", SiraNo = 3 },
                    new SurecAdimi { Baslik = "Montaj & Teslim", Aciklama = "Evinizde özenle monte eder, temizleyip anahtarı size teslim ederiz.", SiraNo = 4 }
                );
            }

            if (!await context.NedenBizMaddeleri.AnyAsync())
            {
                context.NedenBizMaddeleri.AddRange(
                    new NedenBizMaddesi { Baslik = "Milimetrik özel ölçü", Aciklama = "Standart ebat değil, duvarınızın tam ölçüsüne göre üretim.", SiraNo = 1 },
                    new NedenBizMaddesi { Baslik = "Nem ve çarpılmaya dayanıklı malzeme", Aciklama = "Birinci sınıf laminat ve masif seçenekleriyle uzun ömür.", SiraNo = 2 },
                    new NedenBizMaddesi { Baslik = "Şeffaf fiyatlandırma", Aciklama = "Keşif sonrası net teklif, sürpriz maliyet yok.", SiraNo = 3 },
                    new NedenBizMaddesi { Baslik = "5 yıl garanti", Aciklama = "Montaj sonrası ücretsiz kontrol ve destek.", SiraNo = 4 }
                );
            }

            if (!await context.Istatistikler.AnyAsync())
            {
                context.Istatistikler.AddRange(
                    new Istatistik { Deger = "500+", Etiket = "tamamlanan özel ölçü proje", SiraNo = 1 },
                    new Istatistik { Deger = "10 yıl", Etiket = "atölye tecrübesi", SiraNo = 2 },
                    new Istatistik { Deger = "48 saat", Etiket = "içinde keşif planlama", SiraNo = 3 },
                    new Istatistik { Deger = "5 yıl", Etiket = "garanti süresi", SiraNo = 4 }
                );
            }

            if (!await context.GaleriOgeleri.AnyAsync() && hizmetler.Count > 0)
            {
                context.GaleriOgeleri.AddRange(
                    new GaleriOgesi { Baslik = "Sürgülü Gardırop — Ataşehir", Renk1 = "#C9A27A", Renk2 = "#8B6142", SiraNo = 1, HizmetId = hizmetler[0].Id },
                    new GaleriOgesi { Baslik = "Mutfak Dolabı — Kadıköy", Renk1 = "#D8C6A6", Renk2 = "#71805A", SiraNo = 2, HizmetId = hizmetler[1].Id },
                    new GaleriOgesi { Baslik = "Vestiyer & Kiler — Beylikdüzü", Renk1 = "#B8703E", Renk2 = "#3B2A1F", SiraNo = 3, HizmetId = hizmetler[3].Id }
                );
            }

            if (!await context.IletisimBilgileri.AnyAsync())
            {
                context.IletisimBilgileri.Add(new IletisimBilgisi
                {
                    Telefon = "0500 000 00 00",
                    Eposta = "merhaba@moilya.com",
                    Instagram = "@moilya",
                    Adres = "İstanbul, Türkiye",
                    HaritaAramasi = "Kadıköy, İstanbul"
                });
            }

            if (!await context.Yoneticiler.AnyAsync())
            {
                context.Yoneticiler.Add(new Yonetici
                {
                    KullaniciAdi = "admin",
                    SifreHash = BCrypt.Net.BCrypt.HashPassword("moilya2026")
                });
            }

            await context.SaveChangesAsync();
        }
    }
}