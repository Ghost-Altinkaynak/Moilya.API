
async function verileriVeritabaninaKaydet(yeniIcerik) {
    try {
        const response = await fetch('/api/AnaSayfa', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(yeniIcerik)
        });

        if (response.ok) {
            alert("Süper! Veriler doğrudan MS SQL veritabanına kaydedildi. 🎉");
            location.reload(); 
        } else {
            alert("Kaydederken bir hata oluştu. Backend loglarını kontrol et.");
        }
    } catch (error) {
        console.error("API Kayıt Hatası:", error);
        alert("Sunucuya ulaşılamadı!");
    }
}