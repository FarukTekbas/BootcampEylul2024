function saaatiGoster() {
    const zaman = new Date();
    const divSaat = document.getElementById("saat");
    divSaat.textContent = zaman.toLocaleTimeString("tr");
}

saaatiGoster();

// her 1000 ms'de  bir bu metodu çalıştır.
setInterval(saaatiGoster, 1000);
