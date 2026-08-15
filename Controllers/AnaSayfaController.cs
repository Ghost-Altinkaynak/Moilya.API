using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moilya.API.Context;
using Moilya.API.Entities;

namespace Moilya.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnaSayfaController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AnaSayfaController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetirAnaSayfaVerileri()
        {
            var manset = await _context.AnaSayfaMansetleri.FirstOrDefaultAsync();
            var guvenMaddeleri = await _context.GuvenMaddeleri.OrderBy(x => x.SiraNo).ToListAsync();
            var nedenBiz = await _context.NedenBizMaddeleri.OrderBy(x => x.SiraNo).ToListAsync();
            var surecAdimlari = await _context.SurecAdimlari.OrderBy(x => x.SiraNo).ToListAsync();
            var istatistikler = await _context.Istatistikler.OrderBy(x => x.SiraNo).ToListAsync();

            return Ok(new
            {
                Manset = manset,
                GuvenMaddeleri = guvenMaddeleri,
                NedenBiz = nedenBiz,
                SurecAdimlari = surecAdimlari,
                Istatistikler = istatistikler
            });
        }

        [HttpPut("manset")]
        [Authorize]
        public async Task<IActionResult> GuncelleManset([FromBody] AnaSayfaManset guncel)
        {
            var manset = await _context.AnaSayfaMansetleri.FirstOrDefaultAsync();
            if (manset == null)
            {
                guncel.GuncellenmeTarihi = DateTime.UtcNow;
                _context.AnaSayfaMansetleri.Add(guncel);
            }
            else
            {
                manset.SiteAdi = guncel.SiteAdi;
                manset.UstBaslik = guncel.UstBaslik;
                manset.AnaBaslik = guncel.AnaBaslik;
                manset.VurguluBaslik = guncel.VurguluBaslik;
                manset.AciklamaMetni = guncel.AciklamaMetni;
                manset.GuncellenmeTarihi = DateTime.UtcNow;
            }

            await _context.SaveChangesAsync();
            return Ok(new { Mesaj = "Manşet güncellendi." });
        }
    }
}