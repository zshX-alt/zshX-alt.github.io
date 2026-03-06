// Data 25 Kosakata Pertama (Contoh dari 1500)
const vocabularyData = [
    { kanji: "日本", reading: "nihon", meaning: "Jepang" },
    { kanji: "先生", reading: "sensei", meaning: "Guru" },
    { kanji: "学生", reading: "gakusei", meaning: "Siswa" },
    { kanji: "何", reading: "nani", meaning: "Apa" },
    { kanji: "行く", reading: "iku", meaning: "Pergi" },
    // Tambahkan data lainnya sampai 1500 di sini
];

// --- Core App Logic ---
function initApp() {
    const container = document.getElementById('kanji-container');
    const todayTarget = vocabularyData.slice(0, 25); // Ambil 25 kata pertama

    todayTarget.forEach(item => {
        const card = document.createElement('div');
        card.className = "kanji-card bg-slate-800 p-4 rounded-xl border border-slate-700 text-center cursor-pointer group";
        card.innerHTML = `
            <div class="text-3xl font-bold mb-1">${item.kanji}</div>
            <div class="text-xs text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">${item.reading}</div>
            <div class="text-xs text-slate-500 uppercase mt-1">${item.meaning}</div>
        `;
        container.appendChild(card);
    });

    // Update Progress
    document.getElementById('progress-bar').style.width = `${(25 / 1500) * 100}%`;
    document.getElementById('progress-text').innerText = `25 / 1500`;
}

// --- AI Logic (Gemini API) ---
async function checkSentence() {
    const userInput = document.getElementById('user-input').value;
    const aiBox = document.getElementById('ai-response');
    const key = localStorage.getItem('neko_api_key');

    if (!key) {
        alert("Masukkan API Key di Settings dulu!");
        toggleSettings();
        return;
    }

    aiBox.innerHTML = "Neko-Sensei sedang berpikir... 🐾";

    const prompt = `Bertindaklah sebagai Neko-Sensei, pakar bahasa Jepang.
    Bedah kalimat ini: "${userInput}".
    Gunakan instruksi ini:
    1. Berikan format HTML dengan class: <span class="subject"> untuk Subjek, <span class="particle"> untuk Partikel, <span class="object"> untuk Objek, <span class="verb"> untuk Kata Kerja.
    2. Berikan penjelasan LOGIKA teks singkat (max 2 kalimat) tentang fungsi partikel di sana.
    3. TANPA AUDIO/SUARA.`;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        const data = await response.json();
        const result = data.candidates[0].content.parts[0].text;
        
        // Render hasil AI (Gemini biasanya mengembalikan Markdown, kita bisa bersihkan jika perlu)
        aiBox.innerHTML = result.replace(/```html|```/g, ''); 
    } catch (err) {
        aiBox.innerHTML = "Gagal memanggil Neko-Sensei. Cek API Key kamu.";
    }
}

// --- Settings Logic ---
function toggleSettings() {
    document.getElementById('settings-modal').classList.toggle('hidden');
}

function saveSettings() {
    const val = document.getElementById('api-key-input').value;
    localStorage.setItem('neko_api_key', val);
    alert("Key disimpan secara lokal!");
    toggleSettings();
}

// Jalankan saat load
window.onload = initApp;
