// Database Kosakata N4 (Target 25 per hari)
const vocabDatabase = [
    // --- DAY 3 (Melanjutkan data sebelumnya) ---
    { id: 51, kanji: "行く", reading: "いく", meaning: "(V) Pergi", day: 3 },
    { id: 52, kanji: "寝る", reading: "ねる", meaning: "(V) Tidur", day: 3 },
    { id: 53, kanji: "飲む", reading: "のむ", meaning: "(V) Minum", day: 3 },
    { id: 54, kanji: "会う", reading: "あう", meaning: "(V) Bertemu", day: 3 },
    { id: 55, kanji: "買う", reading: "かう", meaning: "(V) Beli", day: 3 },
    { id: 56, kanji: "押す", reading: "おす", meaning: "(V) Tekan", day: 3 },
    { id: 57, kanji: "降る", reading: "ふる", meaning: "(V) Turun (hujan/salju)", day: 3 },
    { id: 58, kanji: "来る", reading: "くる", meaning: "(V) Datang", day: 3 },
    { id: 59, kanji: "書く", reading: "かく", meaning: "(V) Menulis", day: 3 },
    { id: 60, kanji: "歩く", reading: "あるく", meaning: "(V) Jalan kaki", day: 3 },
    { id: 61, kanji: "貸す", reading: "かす", meaning: "(V) Meminjamkan", day: 3 },
    { id: 62, kanji: "教える", reading: "おしえる", meaning: "(V) Mengajar", day: 3 },
    { id: 63, kanji: "作る", reading: "つくる", meaning: "(V) Membuat", day: 3 },
    { id: 64, kanji: "忘れる", reading: "わすれる", meaning: "(V) Lupa", day: 3 },
    { id: 65, kanji: "開ける", reading: "あける", meaning: "(V) Membuka", day: 3 },
    // Kata Benda dari List
    { id: 66, kanji: "お金", reading: "おかね", meaning: "Uang", day: 3 },
    { id: 67, kanji: "車", reading: "くるま", meaning: "Mobil", day: 3 },
    { id: 68, kanji: "雨", reading: "あめ", meaning: "Hujan", day: 3 },
    { id: 69, kanji: "漢字", reading: "かんじ", meaning: "Kanji", day: 3 },
    { id: 70, kanji: "毎日", reading: "まいにち", meaning: "Setiap hari", day: 3 },
    { id: 71, kanji: "本", reading: "ほん", meaning: "Buku", day: 3 },
    { id: 72, kanji: "先生", reading: "せんせい", meaning: "Guru", day: 3 },
    { id: 73, kanji: "料理", reading: "りょうり", meaning: "Masakan", day: 3 },
    { id: 74, kanji: "宿題", reading: "しゅくだい", meaning: "PR", day: 3 },
    { id: 75, kanji: "窓", reading: "まど", meaning: "Jendela", day: 3 }
];

// Database Tata Bahasa N4 (Grammar)
const grammarDatabase = [
    // 1. Keinginan & Saran
    { pattern: "V (Stem) + たい", meaning: "Ingin (Saya/Anda)", example: "日本へ行きたいです。" },
    { pattern: "V-た + ほうがいい", meaning: "Saran: Lebih baik...", example: "早く寝たほうがいいですよ。" },
    { pattern: "V-ない + ほうがいい", meaning: "Saran: Lebih baik jangan...", example: "あまり飲まないほうがいいです。" },
    { pattern: "V (Maksud) + と思う", meaning: "Berniat/Berencana", example: "明日、友達に会おうと思います。" },
    
    // 2. Pengandaian
    { pattern: "V-たら", meaning: "Jika / Setelah", example: "お金があったら、車を買います。" },
    { pattern: "V-ると / V-ないと", meaning: "Jika - Pasti terjadi (Hukum alam/mesin)", example: "このボタンを押すと、お釣りが出ます。" },
    { pattern: "V-ば", meaning: "Jika - Syarat kondisi", example: "安ければ買います。" },

    // 3. Dugaan & Penampilan
    { pattern: "V (Stem) + そうです", meaning: "Sepertinya (Kelihatannya secara visual)", example: "雨が降りそうです。" },
    { pattern: "V (Kamus) + らしい", meaning: "Katanya / Sepertinya (Berdasarkan kabar burung)", example: "田中さんは来るらしいです。" },
    { pattern: "V (Kamus) + かもしれません", meaning: "Mungkin", example: "あしたは雨かもしれません。" },

    // 4. Perubahan & Keputusan
    { pattern: "V (Kamus/Nai) + ようになる", meaning: "Menjadi bisa / Menjadi terbiasa", example: "漢字が書けるようになりました。" },
    { pattern: "V (Kamus/Nai) + ことにする", meaning: "Memutuskan sendiri", example: "毎日、歩ukukoto ni shimashita." },

    // 5. Memberi & Menerima
    { pattern: "V-て + くれる", meaning: "Orang lain melakukan (sesuatu) untuk kita", example: "田中さんが本を貸してくれました。" },
    { pattern: "V-て + もらう", meaning: "Menerima bantuan/jasa dari orang lain", example: "先生に教えてもらいました。" },

    // 6. Persiapan & Penyesalan
    { pattern: "V-て + おく", meaning: "Melakukan persiapan (melakukan dulu)", example: "料理を作っておきます。" },
    { pattern: "V-て + しまう", meaning: "Terlanjur / Selesai total", example: "宿題を忘れてしまいました。" },
    { pattern: "V-て + ある", meaning: "Sudah dilakukan & hasilnya masih ada/terlihat", example: "窓が開けてあります。" }
];
