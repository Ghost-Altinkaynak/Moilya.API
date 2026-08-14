using Microsoft.AspNetCore.Authorization;
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
                .OrderBy(x => x.SiraNo)
                .ToListAsync();

            return Ok(galeri);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> EkleGaleriOgesi([FromBody] GaleriOgesi oge)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.GaleriOgeleri.Add(oge);
            await _context.SaveChangesAsync();

            return Ok(new { Mesaj = "Galeri öğesi eklendi.", OgeId = oge.Id });
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> GuncelleGaleriOgesi(int id, [FromBody] GaleriOgesi guncel)
        {
            var oge = await _context.GaleriOgeleri.FindAsync(id);
            if (oge == null) return NotFound("Galeri öğesi bulunamadı.");

            oge.Baslik = guncel.Baslik;
            oge.ResimYolu = guncel.ResimYolu;
            oge.Renk1 = guncel.Renk1;
            oge.Renk2 = guncel.Renk2;
            oge.SiraNo = guncel.SiraNo;
            oge.HizmetId = guncel.HizmetId;
            await _context.SaveChangesAsync();

            return Ok(oge);
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> SilGaleriOgesi(int id)
        {
            var oge = await _context.GaleriOgeleri.FindAsync(id);
            if (oge == null) return NotFound("Galeri öğesi bulunamadı.");

            _context.GaleriOgeleri.Remove(oge);
            await _context.SaveChangesAsync();

            return Ok(new { Mesaj = "Galeri öğesi silindi." });
        }

        [HttpPost("yukle")]
        [Authorize]
        [RequestSizeLimit(10_000_000)]
        public async Task<IActionResult> ResimYukle(IFormFile dosya)
        {
            if (dosya == null || dosya.Length == 0)
                return BadRequest("Dosya seçilmedi.");

            var izinliUzantilar = new[] { ".jpg", ".jpeg", ".png", ".webp" };
            var uzanti = Path.GetExtension(dosya.FileName).ToLowerInvariant();
            if (!izinliUzantilar.Contains(uzanti))
                return BadRequest("Sadece jpg, jpeg, png veya webp yükleyebilirsiniz.");

            var klasor = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
            Directory.CreateDirectory(klasor);

            var dosyaAdi = $"{Guid.NewGuid()}{uzanti}";
            var tamYol = Path.Combine(klasor, dosyaAdi);

            using (var stream = new FileStream(tamYol, FileMode.Create))
            {
                await dosya.CopyToAsync(stream);
            }

            var goreliYol = $"/uploads/{dosyaAdi}";
            return Ok(new { ResimYolu = goreliYol });
        }
    }
}