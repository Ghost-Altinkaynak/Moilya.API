using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moilya.API.Context;

namespace Moilya.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IletisimController : ControllerBase
    {
        private readonly AppDbContext _context;

        public IletisimController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetirIletisimBilgileri()
        {
            var iletisim = await _context.IletisimBilgileri.FirstOrDefaultAsync();
            return Ok(iletisim);
        }
    }
}