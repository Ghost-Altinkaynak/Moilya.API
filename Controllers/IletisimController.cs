using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moilya.API.Context;
using Moilya.API.Entities;

namespace Moilya.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IletisimController : ControllerBase
    {
        private readonly AppDbContext _context;

        public IletisimController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetirIletisimBilgileri()
        {
            var iletisim = await _context.IletisimBilgileri.FirstOrDefaultAsync();
            return Ok(iletisim);
        }

        [HttpPut]
        [Authorize]
        public async Task<IActionResult> Guncelle([FromBody] IletisimBilgisi guncel)
        {
            var mevcut = await _context.IletisimBilgileri.FirstOrDefaultAsync();
            if (mevcut == null)
            {
                guncel.GuncellenmeTarihi = DateTime.UtcNow;
                _context.IletisimBilgileri.Add(guncel);
            }
            else
            {
                mevcut.Telefon = guncel.Telefon;
                mevcut.Eposta = guncel.Eposta;
                mevcut.Instagram = guncel.Instagram;
                mevcut.Adres = guncel.Adres;
                mevcut.HaritaAramasi = guncel.HaritaAramasi;
                mevcut.GuncellenmeTarihi = DateTime.UtcNow;
            }

            await _context.SaveChangesAsync();
            return Ok(new { Mesaj = "İletişim bilgileri güncellendi." });
        }
    }
}