using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moilya.API.Context;
using Moilya.API.Dtos;
using Moilya.API.Services;

namespace Moilya.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly JwtTokenService _tokenService;

        public AuthController(AppDbContext context, JwtTokenService tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            var yonetici = await _context.Yoneticiler
                .FirstOrDefaultAsync(y => y.KullaniciAdi == dto.KullaniciAdi);

            if (yonetici == null || !BCrypt.Net.BCrypt.Verify(dto.Sifre, yonetici.SifreHash))
                return Unauthorized(new { Mesaj = "Kullanıcı adı veya şifre hatalı." });

            var token = _tokenService.TokenOlustur(yonetici.KullaniciAdi);

            return Ok(new TokenResponseDto
            {
                Token = token,
                GecerlilikTarihi = DateTime.UtcNow.AddMinutes(480)
            });
        }
    }
}