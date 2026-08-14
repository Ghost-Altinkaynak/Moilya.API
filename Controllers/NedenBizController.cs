using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moilya.API.Context;
using Moilya.API.Entities;

namespace Moilya.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NedenBizController : ControllerBase
    {
        private readonly AppDbContext _context;

        public NedenBizController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetirTumu()
        {
            var liste = await _context.NedenBizMaddeleri.OrderBy(x => x.SiraNo).ToListAsync();
            return Ok(liste);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Ekle([FromBody] NedenBizMaddesi madde)
        {
            _context.NedenBizMaddeleri.Add(madde);
            await _context.SaveChangesAsync();
            return Ok(madde);
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> Guncelle(int id, [FromBody] NedenBizMaddesi guncel)
        {
            var madde = await _context.NedenBizMaddeleri.FindAsync(id);
            if (madde == null) return NotFound("Madde bulunamadı.");

            madde.Baslik = guncel.Baslik;
            madde.Aciklama = guncel.Aciklama;
            madde.SiraNo = guncel.SiraNo;
            await _context.SaveChangesAsync();
            return Ok(madde);
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> Sil(int id)
        {
            var madde = await _context.NedenBizMaddeleri.FindAsync(id);
            if (madde == null) return NotFound("Madde bulunamadı.");

            _context.NedenBizMaddeleri.Remove(madde);
            await _context.SaveChangesAsync();
            return Ok(new { Mesaj = "Silindi." });
        }
    }
}