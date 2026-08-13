document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/AnaSayfa')
        .then(response => response.json())
        .then(data => {
            console.log("API'den gelen veriler:", data);
        })
        .catch(error => console.error('API Hatası:', error));
});