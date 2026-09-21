using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moilya.API.Context;
using Moilya.API.Entities;

namespace Moilya.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IletisimMaddeleriController : ControllerBase
    {
        private readonly AppDbContext _context;

        public IletisimMaddeleriController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetirTumu()
        {
            var liste = await _context.IletisimMaddeleri.OrderBy(x => x.SiraNo).ToListAsync();
            return Ok(liste);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Ekle([FromBody] IletisimMaddesi madde)
        {
            _context.IletisimMaddeleri.Add(madde);
            await _context.SaveChangesAsync();
            return Ok(madde);
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> Guncelle(int id, [FromBody] IletisimMaddesi guncel)
        {
            var madde = await _context.IletisimMaddeleri.FindAsync(id);
            if (madde == null) return NotFound("Madde bulunamadı.");

            madde.Metin = guncel.Metin;
            madde.SiraNo = guncel.SiraNo;

            await _context.SaveChangesAsync();
            return Ok(madde);
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> Sil(int id)
        {
            var madde = await _context.IletisimMaddeleri.FindAsync(id);
            if (madde == null) return NotFound("Madde bulunamadı.");

            _context.IletisimMaddeleri.Remove(madde);
            await _context.SaveChangesAsync();
            return Ok(new { Mesaj = "Silindi." });
        }
    }
}