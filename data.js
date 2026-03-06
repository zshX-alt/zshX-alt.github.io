const n4Data = {
    vocabulary: [
        { id: "v1", word: "会社", reading: "かいしゃ", meaning: "Perusahaan" },
        // ... teruskan daftar kosakata kamu di sini
    ],
    grammar: [
        // BAB 1: Keinginan & Niat
        { id: "g1", bab: 1, pattern: "～たい", usage: "Keinginan", formula: "V-masu + たい", example: "お茶を飲みたいです。" },
        { id: "g2", bab: 1, pattern: "～つもりだ", usage: "Niat/Rencana", formula: "V-kamasu + つもりだ", example: "日本へ行つつもりです。" },
        
        // BAB 2: Memberi & Menerima
        { id: "g3", bab: 2, pattern: "～てあげる", usage: "Memberi bantuan", formula: "V-te + あげる", example: "本を貸してあげました。" },
        { id: "g4", bab: 2, pattern: "～てくれる", usage: "Diberi bantuan", formula: "V-te + くれる", example: "母はセーターを編んでくれました。" },
        
        // BAB 3: Saran & Keharusan
        { id: "g5", bab: 3, pattern: "～ほうがいい", usage: "Saran", formula: "V-ta/nai + ほうがいい", example: "早く寝たほうがいいですよ。" },
        { id: "g6", bab: 3, pattern: "～なければならない", usage: "Keharusan", formula: "V-nai (buang i) + なければならない", example: "宿題をしなければなりません。" },
        
        // BAB 4: Sebab & Akibat
        { id: "g7", bab: 4, pattern: "～ので", usage: "Sebab (Sopan)", formula: "Kalimat Biasa + ので", example: "雨なので、行きません。" },
        { id: "g8", bab: 4, pattern: "～し、～し", usage: "Alasan beruntun", formula: "Kalimat Biasa + し", example: "安いし、美味しいです。" },

        // BAB 5: Perubahan & Usaha
        { id: "g9", bab: 5, pattern: "～くなる/になる", usage: "Menjadi", formula: "Adj-i(ku)/Adj-na(ni) + なる", example: "寒くなりました。" },
        { id: "g10", bab: 5, pattern: "～ようにする", usage: "Berusaha untuk", formula: "V-kamus/nai + ようにする", example: "毎日勉強するようにしています。" },

        // BAB 6: Dugaan & Tampaknya
        { id: "g11", bab: 6, pattern: "～そうです", usage: "Kelihatannya", formula: "V-masu/Adj (buang i/na) + そうです", example: "美味しそうです。" },
        { id: "g12", bab: 6, pattern: "～ようです", usage: "Sepertinya (Fisik)", formula: "Kalimat Biasa + ようです", example: "誰か来たようです。" },

        // BAB 7: Pengandaian
        { id: "g13", bab: 7, pattern: "～たら", usage: "Jika/Setelah", formula: "V-ta + ら", example: "お金があったら、旅行します。" },
        { id: "g14", bab: 7, pattern: "～ば", usage: "Jika (Syarat)", formula: "V-reba", example: "安ければ、買います。" },

        // BAB 8: Kemampuan & Pengalaman
        { id: "g15", bab: 8, pattern: "～ことができる", usage: "Bisa", formula: "V-kamus + ことができる", example: "漢字を書くことができます。" },
        { id: "g16", bab: 8, pattern: "～たことがある", usage: "Pernah", formula: "V-ta + ことがある", example: "寿司を食べたことがあります。" },

        // BAB 11: Pasif & Kausatif (Penting!)
        { id: "g17", bab: 11, pattern: "～られる", usage: "Bentuk Pasif", formula: "V-are", example: "先生にほめられました。" },
        { id: "g18", bab: 11, pattern: "～させる", usage: "Bentuk Menyuruh", formula: "V-ase", example: "子供に本を読ませます。" },

        // BAB 13: Keigo (Sopan)
        { id: "g19", bab: 13, pattern: "お～になります", usage: "Hormat (Sonkeigo)", formula: "お + V-masu + になります", example: "先生がお帰りになります。" }
    ]
};
