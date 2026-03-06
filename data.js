// Database Kosakata N4 (Target 25 per hari)
const vocabDatabase = [
    // --- HARI 1 ---
    { id: 1, kanji: "案内", reading: "あんない", meaning: "Panduan/Informasi", day: 1 },
    { id: 2, kanji: "用意", reading: "ようい", meaning: "Persiapan", day: 1 },
    { id: 3, kanji: "理由", reading: "りゆう", meaning: "Alasan", day: 1 },
    { id: 4, kanji: "注意", reading: "ちゅうい", meaning: "Peringatan/Hati-hati", day: 1 },
    { id: 5, kanji: "反対", reading: "はんたい", meaning: "Berlawanan/Oposisi", day: 1 },
    { id: 6, kanji: "最近", reading: "さいきん", meaning: "Akhir-akhir ini", day: 1 },
    { id: 7, kanji: "計画", reading: "けいかく", meaning: "Rencana", day: 1 },
    { id: 8, kanji: "経験", reading: "けいけん", meaning: "Pengalaman", day: 1 },
    { id: 9, kanji: "習慣", reading: "しゅうかん", meaning: "Kebiasaan", day: 1 },
    { id: 10, kanji: "火事", reading: "かじ", meaning: "Kebakaran", day: 1 },
    { id: 11, kanji: "道具", reading: "どうぐ", meaning: "Alat", day: 1 },
    { id: 12, kanji: "場所", reading: "ばしょ", meaning: "Tempat", day: 1 },
    { id: 13, kanji: "目的", reading: "もくてき", meaning: "Tujuan", day: 1 },
    { id: 14, kanji: "約束", reading: "やくそく", meaning: "Janji", day: 1 },
    { id: 15, kanji: "予定", reading: "よてい", meaning: "Jadwal", day: 1 },
    { id: 16, kanji: "特別", reading: "とくべつ", meaning: "Istimewa", day: 1 },
    { id: 17, kanji: "合格", reading: "ごうかく", meaning: "Lulus", day: 1 },
    { id: 18, kanji: "参加", reading: "さんか", meaning: "Partisipasi", day: 1 },
    { id: 19, kanji: "一生懸命", reading: "いっしょうけんめい", meaning: "Sungguh-sungguh", day: 1 },
    { id: 20, kanji: "失敗", reading: "しっぱい", meaning: "Gagal", day: 1 },
    { id: 21, kanji: "安全", reading: "あんぜん", meaning: "Aman", day: 1 },
    { id: 22, kanji: "危険", reading: "きけん", meaning: "Bahaya", day: 1 },
    { id: 23, kanji: "連絡", reading: "れんらく", meaning: "Hubungi", day: 1 },
    { id: 24, kanji: "相談", reading: "そうだん", meaning: "Konsultasi", day: 1 },
    { id: 25, kanji: "復習", reading: "ふくしゅう", meaning: "Review Pelajaran", day: 1 },

    // --- HARI 2 ---
    { id: 26, kanji: "技術", reading: "ぎじゅつ", meaning: "Teknologi", day: 2 },
    { id: 27, kanji: "経済", reading: "けいざい", meaning: "Ekonomi", day: 2 },
    { id: 28, kanji: "国際", reading: "こくさい", meaning: "Internasional", day: 2 },
    { id: 29, kanji: "祭り", reading: "まつり", meaning: "Festival", day: 2 },
    { id: 30, kanji: "産業", reading: "さんぎょう", meaning: "Industri", day: 2 },
    { id: 31, kanji: "事情", reading: "じじょう", meaning: "Keadaan/Situasi", day: 2 },
    { id: 32, kanji: "出席", reading: "しゅっせき", meaning: "Kehadiran", day: 2 },
    { id: 33, kanji: "翻訳", reading: "ほんやく", meaning: "Terjemahan", day: 2 },
    { id: 34, kanji: "教育", reading: "きょういく", meaning: "Pendidikan", day: 2 },
    { id: 35, kanji: "公務員", reading: "こうむいん", meaning: "PNS", day: 2 },
    { id: 36, kanji: "警察", reading: "けいさつ", meaning: "Polisi", day: 2 },
    { id: 37, kanji: "政治", reading: "せいじ", meaning: "Politik", day: 2 },
    { id: 38, kanji: "歴史", reading: "れきし", meaning: "Sejarah", day: 2 },
    { id: 39, kanji: "法律", reading: "ほうりつ", meaning: "Hukum", day: 2 },
    { id: 40, kanji: "平和", reading: "へいわ", meaning: "Damai", day: 2 },
    { id: 41, kanji: "貿易", reading: "ぼうえき", meaning: "Perdagangan", day: 2 },
    { id: 42, kanji: "放送", reading: "ほうそう", meaning: "Siaran", day: 2 },
    { id: 43, kanji: "番組", reading: "ばんぐみ", meaning: "Acara TV", day: 2 },
    { id: 44, kanji: "広告", reading: "こうこく", meaning: "Iklan", day: 2 },
    { id: 45, kanji: "文化", reading: "ぶんか", meaning: "Budaya", day: 2 },
    { id: 46, kanji: "未来", reading: "みらい", meaning: "Masa Depan", day: 2 },
    { id: 47, kanji: "人口", reading: "じんこう", meaning: "Populasi", day: 2 },
    { id: 48, kanji: "空気", reading: "くうき", meaning: "Udara", day: 2 },
    { id: 49, kanji: "原因", reading: "げんいん", meaning: "Penyebab", day: 2 },
    { id: 50, kanji: "結果", reading: "けっか", meaning: "Hasil", day: 2 }
];

// Database Grammar N4
const grammarDatabase = [
    { id: 1, pattern: "～間に (Aida ni)", meaning: "Selama/Di sela-sela", example: "寝ている間に地震がありました。" },
    { id: 2, pattern: "～はずです (Hazu desu)", meaning: "Pasti/Seharusnya", example: "彼は今日来るはずです。" },
    { id: 3, pattern: "～方 (Kata)", meaning: "Cara melakukan...", example: "この漢字の書き方を教えてください。" }
];
