import React, { useState } from 'react';
import { kanjiRadicals } from '../data/kanjiData';

const KanjiDashboard = () => {
    // State buat filter level
    const [filter, setFilter] = useState('Semua');

    // Filter data berdasarkan level
    const filteredData = filter === 'Semua' 
        ? kanjiRadicals 
        : kanjiRadicals.filter(item => item.level === filter);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h2>Dashboard Radikal Kanji</h2>
            
            {/* Tombol Filter */}
            <div style={{ marginBottom: '20px' }}>
                {['Semua', 'N5', 'N4'].map(lvl => (
                    <button key={lvl} onClick={() => setFilter(lvl)} style={{ marginRight: '10px', padding: '8px 16px' }}>
                        {lvl}
                    </button>
                ))}
            </div>

            {/* List Otomatis */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
                {filteredData.map(item => (
                    <div key={item.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', background: '#f4f4f4' }}>
                        <h3 style={{ fontSize: '30px', margin: '0' }}>{item.radikal}</h3>
                        <p><strong>Level:</strong> {item.level}</p>
                        <p><strong>Arti:</strong> {item.arti}</p>
                        <p><strong>Contoh:</strong> {item.contoh}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KanjiDashboard;
