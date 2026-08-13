using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moilya.API.Context;
using Moilya.API.Entities;

namespace Moilya.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GaleriController : ControllerBase
    {
        private readonly AppDbContext _context;

        public GaleriController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetirGaleri()
        {
            var galeri = await _context.GaleriOgeleri
                .Include(x => x.Hizmet)
                .OrderBy(x => x.SiraNo)
                .ToListAsync();

            return Ok(galeri);
        }

        [HttpPost]
        public async Task<IActionResult> EkleGaleriOgesi([FromBody] GaleriOgesi oge)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.GaleriOgeleri.Add(oge);
            await _context.SaveChangesAsync();

            return Ok(new { Mesaj = "Galeri öğesi eklendi.", OgeId = oge.Id });
        }
    }
}