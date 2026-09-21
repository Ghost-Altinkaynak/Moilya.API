using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Moilya.API.Migrations
{
    /// <inheritdoc />
    public partial class WhatsAppNumarasiEklendi : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "WhatsAppNumarasi",
                table: "IletisimBilgileri",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "WhatsAppNumarasi",
                table: "IletisimBilgileri");
        }
    }
}
