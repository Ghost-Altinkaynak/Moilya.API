using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moilya.API.Context;
using Moilya.API.Entities;

namespace Moilya.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IstatistiklerController : ControllerBase
    {
        private readonly AppDbContext _context;

        public IstatistiklerController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetirTumu()
        {
            var liste = await _context.Istatistikler.OrderBy(x => x.SiraNo).ToListAsync();
            return Ok(liste);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Ekle([FromBody] Istatistik istatistik)
        {
            _context.Istatistikler.Add(istatistik);
            await _context.SaveChangesAsync();
            return Ok(istatistik);
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> Guncelle(int id, [FromBody] Istatistik guncel)
        {
            var istatistik = await _context.Istatistikler.FindAsync(id);
            if (istatistik == null) return NotFound("İstatistik bulunamadı.");

            istatistik.Deger = guncel.Deger;
            istatistik.Etiket = guncel.Etiket;
            istatistik.SiraNo = guncel.SiraNo;
            await _context.SaveChangesAsync();
            return Ok(istatistik);
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> Sil(int id)
        {
            var istatistik = await _context.Istatistikler.FindAsync(id);
            if (istatistik == null) return NotFound("İstatistik bulunamadı.");

            _context.Istatistikler.Remove(istatistik);
            await _context.SaveChangesAsync();
            return Ok(new { Mesaj = "Silindi." });
        }
    }
}