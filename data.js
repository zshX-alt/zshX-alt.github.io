// --- BAGIAN 1: KOSAKATA (VOCABULARY) ---
// Fokus pada kata per kata dan target harian
const vocabDatabase = [
    { 
        id: 51, 
        kanji: "行く", 
        reading: "いく", 
        meaning: "(V) Pergi", 
        day: 3 
    },
    { 
        id: 52, 
        kanji: "寝る", 
        reading: "ねる", 
        meaning: "(V) Tidur", 
        day: 3 
    }
];

// --- BAGIAN 2: TATA BAHASA (GRAMMAR) ---
// Fokus pada pola kalimat, rumus, dan contoh penggunaan
const grammarDatabase = [
    { 
        id: "G1",
        pattern: "V (Stem) + たい", 
        meaning: "Ingin (Saya/Anda)", 
        formula: "Bentuk ます dibuang ます-nya",
        example: "日本へ行きたいです。" 
    },
    { 
        id: "G2",
        pattern: "V-た + ほうがいい", 
        meaning: "Saran: Lebih baik...", 
        formula: "Kata Kerja bentuk Lampau (Ta) + hou ga ii",
        example: "早く寝たほうがいいですよ。" 
    }
];
