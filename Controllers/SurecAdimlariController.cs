using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moilya.API.Context;
using Moilya.API.Entities;

namespace Moilya.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SurecAdimlariController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SurecAdimlariController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetirTumu()
        {
            var liste = await _context.SurecAdimlari.OrderBy(x => x.SiraNo).ToListAsync();
            return Ok(liste);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Ekle([FromBody] SurecAdimi adim)
        {
            _context.SurecAdimlari.Add(adim);
            await _context.SaveChangesAsync();
            return Ok(adim);
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> Guncelle(int id, [FromBody] SurecAdimi guncel)
        {
            var adim = await _context.SurecAdimlari.FindAsync(id);
            if (adim == null) return NotFound("Süreç adımı bulunamadı.");

            adim.Baslik = guncel.Baslik;
            adim.Aciklama = guncel.Aciklama;
            adim.SiraNo = guncel.SiraNo;
            await _context.SaveChangesAsync();
            return Ok(adim);
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> Sil(int id)
        {
            var adim = await _context.SurecAdimlari.FindAsync(id);
            if (adim == null) return NotFound("Süreç adımı bulunamadı.");

            _context.SurecAdimlari.Remove(adim);
            await _context.SaveChangesAsync();
            return Ok(new { Mesaj = "Silindi." });
        }
    }
}