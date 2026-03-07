async function testAI() {
    const input = document.getElementById('user-input').value;
    const display = document.getElementById('result');
    
    // GANTI dengan URL dari tab 'Settings' > 'Public Networking' di Railway
    const RAILWAY_URL = "https://neko-sensei-server-production.up.railway.app/ask"; 

    if(!input) return alert("Ketik dulu, Nyaa! 🐾");
    display.innerHTML = "<em>Neko-Sensei sedang berpikir... 🐾</em>";

    try {
        const response = await fetch(RAILWAY_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: input })
        });
        
        const data = await response.json();
        
        if (data.choices && data.choices[0].message) {
            display.innerText = data.choices[0].message.content;
        } else {
            display.innerText = "Koneksi sukses, tapi jawaban kosong. Cek Log di Railway!";
        }
    } catch (e) {
        display.innerText = "Gagal terhubung ke Railway! Pastikan URL sudah benar dan aktif.";
    }
}
