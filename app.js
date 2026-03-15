const params = new URLSearchParams(window.location.search);
const babId = parseInt(params.get('bab')) || 1;

async function loadData() {
    try {
        // Dynamic Import Bab berdasarkan URL
        const module = await import(`./data/bab${babId}.js`);
        const data = module.default;
        
        // Update Title & Description
        document.getElementById('title').innerText = data.title;
        document.getElementById('desc').innerText = data.description;

        // Render List Bunpou (Pola Kalimat)
        const content = document.getElementById('content');
        content.innerHTML = data.bunpou.map(item => `
            <div class="card">
                <div class="pola-title">${item.pola}</div>
                <div class="example-box">
                    <p class="jp">${item.jp}</p>
                    <p class="ro">${item.ro}</p>
                    <p class="id">"${item.id}"</p>
                </div>
            </div>
        `).join('');

        // Render Tips Pro (Fitur baru buat Firman)
        if (data.tips && data.tips.length > 0) {
            const tipsHtml = `
                <div class="card" style="border-left: 4px solid #f1c40f;">
                    <h3 style="color: #f1c40f; margin-top: 0;">Tips Pro buat Firman:</h3>
                    <ul style="padding-left: 20px; color: #ccc;">
                        ${data.tips.map(t => `<li style="margin-bottom: 8px;">${t}</li>`).join('')}
                    </ul>
                </div>
            `;
            content.innerHTML += tipsHtml;
        }

        // Progress Tracking
        localStorage.setItem(`bab-${babId}-done`, 'true');

        // Navigation Next
        const nextBtn = document.getElementById('next');
        if (babId >= 50) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.onclick = () => window.location.href = `template.html?bab=${babId + 1}`;
        }

    } catch (error) {
        document.getElementById('title').innerText = "Data Belum Tersedia";
        document.getElementById('content').innerHTML = `
            <div class="card">
                <p>Bab ${babId} masih dalam proses penyusunan nih, Firman. Sabar ya!</p>
            </div>`;
        console.error("Gagal load bab:", error);
    }
}

// Jalankan fungsi
loadData();
