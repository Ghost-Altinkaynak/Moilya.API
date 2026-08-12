using Microsoft.EntityFrameworkCore;
using Moilya.API.Entities;

namespace Moilya.API.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<AnaSayfaManset> AnaSayfaMansetleri { get; set; }
        public DbSet<GuvenMaddesi> GuvenMaddeleri { get; set; }
        public DbSet<Hizmet> Hizmetler { get; set; }
        public DbSet<SurecAdimi> SurecAdimlari { get; set; }
        public DbSet<NedenBizMaddesi> NedenBizMaddeleri { get; set; }
        public DbSet<Istatistik> Istatistikler { get; set; }
        public DbSet<GaleriOgesi> GaleriOgeleri { get; set; }
        public DbSet<IletisimBilgisi> IletisimBilgileri { get; set; }
        public DbSet<Talep> Talepler { get; set; }
        public DbSet<Yonetici> Yoneticiler { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<GaleriOgesi>()
                .HasOne(g => g.Hizmet)
                .WithMany(h => h.GaleriOgeleri)
                .HasForeignKey(g => g.HizmetId)
                .OnDelete(DeleteBehavior.SetNull);
        }
    }
}