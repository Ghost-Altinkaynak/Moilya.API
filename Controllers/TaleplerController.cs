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
        public async Task<IActionResult> GetirTalepler()
        {
            var talepler = await _context.Talepler
                .OrderByDescending(x => x.OlusturmaTarihi)
                .ToListAsync();

            return Ok(talepler);
        }

        [HttpPost]
        public async Task<IActionResult> OlusturTalep([FromBody] Talep talep)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            talep.OlusturmaTarihi = DateTime.Now;
            talep.IslendiMi = false; // Yeni gelen talep henüz işlenmedi olarak kaydolur.

            _context.Talepler.Add(talep);
            await _context.SaveChangesAsync();

            return Ok(new { Mesaj = "Talebiniz başarıyla alındı. En kısa sürede dönüş yapılacaktır." });
        }
    }
}