using Microsoft.AspNetCore.Authorization;
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

        [HttpPost("sifre-degistir")]
        [Authorize]
        public async Task<IActionResult> SifreDegistir([FromBody] ChangePasswordDto dto)
        {
            var kullaniciAdi = User.Identity?.Name;
            var yonetici = await _context.Yoneticiler
                .FirstOrDefaultAsync(y => y.KullaniciAdi == kullaniciAdi);

            if (yonetici == null)
                return Unauthorized(new { Mesaj = "Kullanıcı bulunamadı." });

            if (!BCrypt.Net.BCrypt.Verify(dto.MevcutSifre, yonetici.SifreHash))
                return BadRequest(new { Mesaj = "Mevcut şifre hatalı." });

            if (string.IsNullOrWhiteSpace(dto.YeniSifre) || dto.YeniSifre.Length < 6)
                return BadRequest(new { Mesaj = "Yeni şifre en az 6 karakter olmalı." });

            yonetici.SifreHash = BCrypt.Net.BCrypt.HashPassword(dto.YeniSifre);
            await _context.SaveChangesAsync();

            return Ok(new { Mesaj = "Şifre başarıyla güncellendi." });
        }
    }
}