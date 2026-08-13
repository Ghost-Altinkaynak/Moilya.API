using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Moilya.API.Context;
using Moilya.API.Entities;

namespace Moilya.API.Context
{
    public static class DbInitializer
    {
        public static async Task SeedAsync(AppDbContext context)
        {
            await context.Database.EnsureCreatedAsync();

            // 1. Manşet Bilgisi
            if (!await context.AnaSayfaMansetleri.AnyAsync())
            {
                context.AnaSayfaMansetleri.Add(new AnaSayfaManset());
            }

            // 2. Güven Maddeleri
            if (!await context.GuvenMaddeleri.AnyAsync())
            {
                context.GuvenMaddeleri.Add(new GuvenMaddesi { SiraNo = 1 });
                context.GuvenMaddeleri.Add(new GuvenMaddesi { SiraNo = 2 });
            }

            // 3. Hizmetler
            if (!await context.Hizmetler.AnyAsync())
            {
                context.Hizmetler.Add(new Hizmet { SiraNo = 1 });
                context.Hizmetler.Add(new Hizmet { SiraNo = 2 });
            }

            // 4. İstatistikler
            if (!await context.Istatistikler.AnyAsync())
            {
                context.Istatistikler.Add(new Istatistik { SiraNo = 1 });
                context.Istatistikler.Add(new Istatistik { SiraNo = 2 });
            }

            // 5. İletişim Bilgileri
            if (!await context.IletisimBilgileri.AnyAsync())
            {
                context.IletisimBilgileri.Add(new IletisimBilgisi
                {
                    Telefon = "+90 (555) 000 00 00",
                    Adres = "İstanbul, Türkiye"
                });
            }

            await context.SaveChangesAsync();
        }
    }
}