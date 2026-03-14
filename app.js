const params = new URLSearchParams(window.location.search);
const babId = parseInt(params.get('bab')) || 1;

// Progress Bar
const prog = document.getElementById('progress');
if(prog) prog.style.width = `${(babId / 50) * 100}%`;

// Load Data Bab
import(`./data/bab${babId}.js`)
    .then(m => {
        const d = m.default;
        render(d);
        setupNav();
    })
    .catch(() => {
        document.getElementById('title').innerText = "Segera Hadir!";
    });

function render(data) {
    document.title = data.title;
    document.getElementById('title').innerText = data.title;
    document.getElementById('desc').innerText = data.description;

    let html = `<h2>Tata Bahasa (文法)</h2>`;
    data.bunpou.forEach(item => {
        html += `
            <div class="card">
                <h3 style="color:var(--accent); margin:0 0 10px 0;">${item.pola}</h3>
                <p style="font-size:0.95rem;">${item.penjelasan}</p>
                <div class="example-box">
                    <p style="margin:0; font-size:1.1rem;">${item.jp}</p>
                    <p style="margin:5px 0 0 0; color:var(--text-dim); font-size:0.85rem;">${item.id}</p>
                </div>
            </div>`;
    });
    document.getElementById('content').innerHTML = html;
}

function setupNav() {
    const n = document.getElementById('next');
    const p = document.getElementById('prev');
    if (babId < 50) n.onclick = () => window.location.href = `template.html?bab=${babId + 1}`;
    else n.onclick = () => window.location.href = 'index.html';
    if (babId > 1) { p.style.display = "block"; p.onclick = () => window.location.href = `template.html?bab=${babId - 1}`; }
}
