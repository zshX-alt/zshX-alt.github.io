/**
 * NIHONGO PRO - LOGIC ENGINE
 * Versi Final: All-Gray Accent (No Blue)
 */

const params = new URLSearchParams(window.location.search);
const babId = parseInt(params.get('bab')) || 1;

const progressBar = document.getElementById('progress');
if (progressBar) {
    // Progress bar pake warna abu-abu atau bisa lo ganti emas (#ffca28)
    progressBar.style.background = "#b0b0b0"; 
    progressBar.style.width = `${(babId / 50) * 100}%`;
}

import(`./data/bab${babId}.js`)
    .then(module => {
        const data = module.default;
        renderContent(data);
        setupNavigation();
    })
    .catch(err => {
        console.error("Gagal memuat data bab:", err);
        document.getElementById('title').innerText = "Konten Belum Tersedia";
    });

function renderContent(data) {
    document.title = `${data.title} - Belajar Bahasa Jepang`;
    document.getElementById('title').innerText = data.title;
    document.getElementById('desc').innerText = data.description;

    let html = `<h2>Tata Bahasa (文法)</h2>`;

    data.bunpou.forEach(item => {
        html += `
            <div class="card">
                <h3 style="color:#b0b0b0; margin:0 0 10px 0;">${item.pola}</h3>
                <p style="font-size:0.95rem; line-height:1.6; margin-bottom:15px;">${item.penjelasan}</p>
                
                <div class="example-box" style="background: rgba(255,255,255,0.03); border-left: 2px solid #444; border-radius: 4px; padding: 15px;">
                    <p style="margin:0; font-size:1.25rem; letter-spacing:1px; line-height:1.8; color:#fff;">${item.jp}</p>
                    
                    <p style="margin:8px 0; color:#b0b0b0; font-size:0.9rem; font-family: 'Courier New', Courier, monospace;">
                        ${item.ro}
                    </p>
                    
                    <p style="margin:0; color:#888; font-size:0.85rem; font-style:italic;">
                        "${item.id}"
                    </p>
                </div>
            </div>`;
    });

    if (data.tips) {
        html += `
            <div class="card" style="border-left: 4px solid #ffca28; background: rgba(255, 202, 40, 0.05); margin-top: 30px;">
                <h3 style="color:#ffca28; margin:0 0 8px 0;">💡 Tips Pro</h3>
                <p style="font-size:0.92rem; margin:0; line-height:1.5; color:#e0e0e0;">${data.tips}</p>
            </div>`;
    }

    document.getElementById('content').innerHTML = html;
}

function setupNavigation() {
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');

    if (nextBtn) {
        nextBtn.onclick = () => window.location.href = `template.html?bab=${babId + 1}`;
    }

    if (prevBtn) {
        if (babId > 1) {
            prevBtn.style.display = "block";
            prevBtn.onclick = () => window.location.href = `template.html?bab=${babId - 1}`;
        } else {
            prevBtn.style.display = "none";
        }
    }
}
