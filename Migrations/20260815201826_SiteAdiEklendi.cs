using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Moilya.API.Migrations
{
    /// <inheritdoc />
    public partial class SiteAdiEklendi : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "SiteAdi",
                table: "AnaSayfaMansetleri",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SiteAdi",
                table: "AnaSayfaMansetleri");
        }
    }
}
