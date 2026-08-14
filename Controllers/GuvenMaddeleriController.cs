using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moilya.API.Context;
using Moilya.API.Entities;

namespace Moilya.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GuvenMaddeleriController : ControllerBase
    {
        private readonly AppDbContext _context;

        public GuvenMaddeleriController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetirTumu()
        {
            var liste = await _context.GuvenMaddeleri.OrderBy(x => x.SiraNo).ToListAsync();
            return Ok(liste);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Ekle([FromBody] GuvenMaddesi madde)
        {
            _context.GuvenMaddeleri.Add(madde);
            await _context.SaveChangesAsync();
            return Ok(madde);
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> Guncelle(int id, [FromBody] GuvenMaddesi guncel)
        {
            var madde = await _context.GuvenMaddeleri.FindAsync(id);
            if (madde == null) return NotFound("Güven maddesi bulunamadı.");

            madde.Metin = guncel.Metin;
            madde.SiraNo = guncel.SiraNo;
            await _context.SaveChangesAsync();
            return Ok(madde);
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> Sil(int id)
        {
            var madde = await _context.GuvenMaddeleri.FindAsync(id);
            if (madde == null) return NotFound("Güven maddesi bulunamadı.");

            _context.GuvenMaddeleri.Remove(madde);
            await _context.SaveChangesAsync();
            return Ok(new { Mesaj = "Silindi." });
        }
    }
}