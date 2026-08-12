using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moilya.API.Context;
using Moilya.API.Entities;

namespace Moilya.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MobilyaTalepleriController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MobilyaTalepleriController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var talepler = await _context.Talepler.ToListAsync();
            return Ok(talepler);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var talep = await _context.Talepler.FindAsync(id);
            if (talep == null) return NotFound("Talep bulunamadı.");
            return Ok(talep);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Talep talep)
        {
            await _context.Talepler.AddAsync(talep);
            await _context.SaveChangesAsync();
            return Ok("Talebiniz başarıyla alındı.");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var talep = await _context.Talepler.FindAsync(id);
            if (talep == null) return NotFound("Silinecek talep bulunamadı.");

            _context.Talepler.Remove(talep);
            await _context.SaveChangesAsync();
            return Ok("Talep silindi.");
        }
    }
}