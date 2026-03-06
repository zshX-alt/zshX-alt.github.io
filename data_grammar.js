const grammarDatabase = [
    // 1. Keinginan & Saran (Desire & Advice)
    { 
        id: "G1",
        pattern: "V (Stem) + たい / たがる", 
        meaning: "Ingin (たい untuk diri sendiri, たがる untuk orang lain)", 
        example: "日本へ行きたいです (Saya ingin pergi ke Jepang)." 
    },
    { 
        id: "G2",
        pattern: "V-た + ほうがいい", 
        meaning: "Saran: Lebih baik...", 
        example: "早く寝たほうがいいですよ (Lebih baik tidur cepat lho)." 
    },
    { 
        id: "G3",
        pattern: "V-ない + ほうがいい", 
        meaning: "Saran: Lebih baik jangan...", 
        example: "あまり飲まないほうがいいです (Lebih baik jangan terlalu banyak minum)." 
    },
    { 
        id: "G4",
        pattern: "V (Maksud) + と思う", 
        meaning: "Berniat / Berencana", 
        example: "明日、友達に会おうと思います (Besok, saya berniat bertemu teman)." 
    },

    // 2. Pengandaian (Conditions)
    { 
        id: "G5",
        pattern: "V-たら", 
        meaning: "Jika / Setelah", 
        example: "お金があったら、車を買います (Jika punya uang, saya akan beli mobil)." 
    },
    { 
        id: "G6",
        pattern: "V-ると / V-ないと", 
        meaning: "Jika - Pasti terjadi (Hukum alam/mesin)", 
        example: "このボタンを押すと、お釣りが出ます (Jika tekan tombol ini, uang kembalian keluar)." 
    },
    { 
        id: "G7",
        pattern: "V-ば", 
        meaning: "Jika - Syarat kondisi", 
        example: "安ければ買います (Jika murah, saya beli)." 
    },

    // 3. Dugaan & Penampilan (Conjecture)
    { 
        id: "G8",
        pattern: "V (Stem) + そうです", 
        meaning: "Sepertinya (Visual / Kelihatan dari luar)", 
        example: "雨が降りそうです (Sepertinya akan turun hujan)." 
    },
    { 
        id: "G9",
        pattern: "V (Kamus) + らしい", 
        meaning: "Katanya / Sepertinya (Berdasarkan kabar burung)", 
        example: "田中さんは来るらしいです (Katanya Tanaka-san akan datang)." 
    },
    { 
        id: "G10",
        pattern: "V (Kamus) + かもしれません", 
        meaning: "Mungkin / Kemungkinan", 
        example: "あしたは雨かもしれません (Besok mungkin hujan)." 
    },

    // 4. Perubahan & Keputusan (Changes)
    { 
        id: "G11",
        pattern: "V (Kamus/Nai) + ようになる", 
        meaning: "Menjadi bisa / Menjadi terbiasa", 
        example: "漢字が書けるようになりました (Saya sudah menjadi bisa menulis Kanji)." 
    },
    { 
        id: "G12",
        pattern: "V (Kamus/Nai) + ことにする", 
        meaning: "Memutuskan sendiri untuk...", 
        example: "毎日、歩くことにしました (Saya memutuskan untuk jalan kaki setiap hari)." 
    },

    // 5. Memberi & Menerima (Giving & Receiving)
    { 
        id: "G13",
        pattern: "V-て + くれる", 
        meaning: "Orang lain melakukan sesuatu untuk kita", 
        example: "田中さんが本を貸してくれました (Tanaka meminjamkan buku untuk saya)." 
    },
    { 
        id: "G14",
        pattern: "V-て + もらう", 
        meaning: "Menerima bantuan/jasa dari orang lain", 
        example: "先生に教えてもらいました (Saya diajarkan oleh guru)." 
    },

    // 6. Persiapan & Penyesalan (Aspects)
    { 
        id: "G15",
        pattern: "V-て + おく", 
        meaning: "Melakukan persiapan (melakukan dulu)", 
        example: "料理を作っておきます (Saya akan memasak dulu [sebagai persiapan])." 
    },
    { 
        id: "G16",
        pattern: "V-て + しまう", 
        meaning: "Terlanjur / Selesai total / Penyesalan", 
        example: "宿題を忘れてしまいました (Aduh, saya terlanjur lupa PR-nya)." 
    },
    { 
        id: "G17",
        pattern: "V-て + ある", 
        meaning: "Sudah dilakukan & hasilnya masih ada/terlihat", 
        example: "窓が開けてあります (Jendelanya [sudah] dibuka)." 
    }
];
