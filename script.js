fetch('data.json')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('materiContainer');
        data.materi.forEach(item => {
            container.innerHTML += `
                <div class="card">
                    <h3>${item.judul}</h3>
                    <p>${item.penjelasan}</p>
                </div>
            `;
        });
    });
