const n4Data = {
    vocabulary: [
        { id: "v1", word: "会社", reading: "かいしゃ (kaisha)", meaning: "Perusahaan" },
        { id: "v2", word: "準備", reading: "じゅんび (junbi)", meaning: "Persiapan" },
        { id: "v3", word: "反対", reading: "はんたい (hantai)", meaning: "Berlawanan/Setuju" },
        { id: "v4", word: "練習", reading: "れんしゅう (renshuu)", meaning: "Latihan" },
        { id: "v5", word: "最近", reading: "さいきん (saikin)", meaning: "Akhir-akhir ini" },
        { id: "v6", word: "台所", reading: "だいどころ (daidokoro)", meaning: "Dapur" },
        { id: "v7", word: "役に立つ", reading: "やくにたつ (yaku ni tatsu)", meaning: "Bermanfaat" },
        { id: "v8", word: "一生懸命", reading: "いっしょうけんめい (isshoukenmei)", meaning: "Sungguh-sungguh" },
        { id: "v9", word: "安全", reading: "あんぜん (anzen)", meaning: "Aman" },
        { id: "v10", word: "注意", reading: "ちゅうい (chuui)", meaning: "Perhatian/Peringatan" }
    ],
    grammar: [
        // BAB 1
        { 
            id: "g1", 
            bab: 1, 
            pattern: "～たい", 
            usage: "Keinginan (Ingin...)", 
            formula: "KK (Bentuk Masu) + たい", 
            example: "日本へ行きたいです。(Ingin pergi ke Jepang.)" 
        },
        { 
            id: "g2", 
            bab: 1, 
            pattern: "～つもり", 
            usage: "Rencana/Niat", 
            formula: "KK (Bentuk Kamus) + つもり", 
            example: "来年、結婚するつもりです。(Tahun depan berniat menikah.)" 
        },
        // BAB 2
        { 
            id: "g3", 
            bab: 2, 
            pattern: "～てあげる", 
            usage: "Memberi bantuan", 
            formula: "KK (Bentuk Te) + あげる", 
            example: "荷物を持ってあげます。(Saya bawakan barangnya.)" 
        }
    ]
};
