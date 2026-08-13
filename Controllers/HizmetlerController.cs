using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moilya.API.Context;
using Moilya.API.Entities;

namespace Moilya.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HizmetlerController : ControllerBase
    {
        private readonly AppDbContext _context;

        public HizmetlerController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetirHizmetler()
        {
            var hizmetler = await _context.Hizmetler.OrderBy(x => x.SiraNo).ToListAsync();
            return Ok(hizmetler);
        }

        [HttpPost]
        public async Task<IActionResult> EkleHizmet([FromBody] Hizmet hizmet)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.Hizmetler.Add(hizmet);
            await _context.SaveChangesAsync();

            return Ok(new { Mesaj = "Hizmet başarıyla eklendi.", HizmetId = hizmet.Id });
        }
    }
}