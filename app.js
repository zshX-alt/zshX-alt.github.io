const params = new URLSearchParams(window.location.search);
const babId = parseInt(params.get('bab')) || 1;

async function loadData() {
    const content = document.getElementById('content');
    try {
        const module = await import(`./data/bab${babId}.js`);
        const data = module.default;
        document.getElementById('title').innerText = data.title;
        document.getElementById('desc').innerText = data.description;

        // MODE 1: Tabel Kanji (Untuk Bab 52+)
        if (data.vocabulary) {
            let html = '<div class="vocab-grid">';
            html += data.vocabulary.map(v => `
                <div class="vocab-item">
                    <span class="vocab-hira">${v.hira}</span>
                    <span class="vocab-kanji">${v.kanji}</span>
                    <span class="vocab-indo">${v.id}</span>
                </div>
            `).join('');
            content.innerHTML = html + '</div>';
        } 
        
        // MODE 2: Materi Biasa / Bunpou (Bab 1-51)
        else if (data.bunpou) {
            content.innerHTML = data.bunpou.map(item => `
                <div class="card">
                    <span class="pola-title">${item.pola}</span>
                    <p class="jp">${item.jp}</p>
                    <p class="ro">${item.ro}</p> <p class="id">${item.id}</p>
                </div>
            `).join('');
        }

        // TAMBAHAN: Render Tips di bawah materi
        if (data.tips && data.tips.length > 0) {
            content.innerHTML += `
                <div class="card" style="border-left: 4px solid var(--gold); margin-top: 20px;">
                    <span class="pola-title" style="color: var(--gold);">💡 Tips Pro:</span>
                    <ul style="color: var(--text-gray); padding-left: 20px; margin-top: 10px; font-size: 0.9rem;">
                        ${data.tips.map(t => `<li style="margin-bottom: 10px; line-height: 1.4;">${t}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        document.getElementById('next').onclick = () => {
            window.location.href = `template.html?bab=${babId + 1}`;
        };
    } catch (e) {
        content.innerHTML = `<div class="card">Materi Bab ${babId} belum ada di folder /data/, Bro!</div>`;
    }
}
loadData();
