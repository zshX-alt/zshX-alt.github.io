const params = new URLSearchParams(window.location.search);
const babId = parseInt(params.get('bab')) || 1;

async function loadData() {
    try {
        // Mengambil data dari folder data/babX.js
        const module = await import(`./data/bab${babId}.js`);
        const data = module.default;
        
        document.getElementById('title').innerText = data.title;
        document.getElementById('desc').innerText = data.description;

        let html = "";
        data.bunpou.forEach(item => {
            html += `
                <div class="card">
                    <div class="pola-title">${item.pola}</div>
                    <div class="example-box">
                        <p class="jp">${item.jp}</p>
                        <p class="ro">${item.ro}</p>
                        <p class="id">"${item.id}"</p>
                    </div>
                </div>`;
        });
        document.getElementById('content').innerHTML = html;

        document.getElementById('next').onclick = () => {
            window.location.href = `template.html?bab=${babId + 1}`;
        };
    } catch (error) {
        document.getElementById('title').innerText = "Data Belum Tersedia";
        document.getElementById('desc').innerText = "Bab ini masih dalam proses penyusunan.";
        console.error("Gagal load file:", error);
    }
}

loadData();
