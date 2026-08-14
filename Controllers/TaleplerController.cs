using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moilya.API.Context;
using Moilya.API.Entities;

namespace Moilya.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaleplerController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TaleplerController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetirTalepler()
        {
            var talepler = await _context.Talepler
                .OrderByDescending(x => x.OlusturmaTarihi)
                .ToListAsync();

            return Ok(talepler);
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<IActionResult> GetirTekTalep(int id)
        {
            var talep = await _context.Talepler.FindAsync(id);
            if (talep == null) return NotFound("Talep bulunamadı.");
            return Ok(talep);
        }

        [HttpPost]
        public async Task<IActionResult> OlusturTalep([FromBody] Talep talep)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            talep.OlusturmaTarihi = DateTime.UtcNow;
            talep.IslendiMi = false;

            _context.Talepler.Add(talep);
            await _context.SaveChangesAsync();

            return Ok(new { Mesaj = "Talebiniz başarıyla alındı. En kısa sürede dönüş yapılacaktır." });
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> GuncelleTalep(int id, [FromBody] Talep guncel)
        {
            var talep = await _context.Talepler.FindAsync(id);
            if (talep == null) return NotFound("Talep bulunamadı.");

            talep.IslendiMi = guncel.IslendiMi;
            await _context.SaveChangesAsync();

            return Ok(talep);
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> Sil(int id)
        {
            var talep = await _context.Talepler.FindAsync(id);
            if (talep == null) return NotFound("Silinecek talep bulunamadı.");

            _context.Talepler.Remove(talep);
            await _context.SaveChangesAsync();

            return Ok(new { Mesaj = "Talep silindi." });
        }
    }
}