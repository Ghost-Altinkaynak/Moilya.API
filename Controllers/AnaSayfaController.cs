using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moilya.API.Context;

namespace Moilya.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnaSayfaController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AnaSayfaController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetirAnaSayfaVerileri()
        {
            var manset = await _context.AnaSayfaMansetleri.FirstOrDefaultAsync();
            var guvenMaddeleri = await _context.GuvenMaddeleri.OrderBy(x => x.SiraNo).ToListAsync();
            var nedenBiz = await _context.NedenBizMaddeleri.OrderBy(x => x.SiraNo).ToListAsync();
            var surecAdimlari = await _context.SurecAdimlari.OrderBy(x => x.SiraNo).ToListAsync();
            var istatistikler = await _context.Istatistikler.OrderBy(x => x.SiraNo).ToListAsync();

            return Ok(new
            {
                Manset = manset,
                GuvenMaddeleri = guvenMaddeleri,
                NedenBiz = nedenBiz,
                SurecAdimlari = surecAdimlari,
                Istatistikler = istatistikler
            });
        }
    }
}