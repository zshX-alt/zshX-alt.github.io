const JLPT_Data = {
    "0. CHEAT SHEET (TABEL KONJUGASI)": [
        { 
            jdl: "Jurus Konjugasi Utama", 
            jepang: "書く (Kaku) & 食べる (Taberu)", 
            baca: "Tabel Konjugasi Dasar", 
            arti: "Cheat Sheet Perubahan Kata Kerja", 
            pen: "Kamus: Kaku / Taberu | Masu: Kakimasu / Tabemasu | Te: Kaite / Tabete | Ta: Kaita / Tabeta | Potensial: Kakeru / Taberareru" 
        }
    ],
    "1. N5 - FOUNDATION (DASAR)": [
        { jdl: "Struktur Kalimat & Partikel Dasar", jepang: "私は日本語を勉強します。", baca: "Watashi wa nihongo o benkyou shimasu.", arti: "Saya belajar bahasa Jepang.", pen: "Pola S-O-P + Partikel (Wa, Ga, O, Ni, De, E, To)." },
        { jdl: "Kata Sifat (I & Na)", jepang: "おいしいラーメン。", baca: "Oishii ramen.", arti: "Ramen enak.", pen: "Perubahan bentuk (Negatif/Lampau) dan penggunaan 'Na' pada Na-Adj." },
        { jdl: "Kata Kerja Masu (Sopan)", jepang: "毎日行きます。", baca: "Mainichi ikimasu.", arti: "Setiap hari pergi.", pen: "Konjugasi sopan (positif, negatif, lampau, lampau negatif)." },
        { jdl: "Keberadaan & Jumlah", jepang: "猫がいます。", baca: "Neko ga imasu.", arti: "Ada kucing.", pen: "Imasu (hidup) vs Arimasu (mati) + Counter (hitungan benda)." },
        { jdl: "Tingkat Perbandingan", jepang: "AはBより大きいです。", baca: "A wa B yori ookii desu.", arti: "A lebih besar dari B.", pen: "Yori (lebih dari) dan Hodo (tidak se-)." },
        { jdl: "Permintaan (Te-Form Dasar)", jepang: "食べてください。", baca: "Tabete kudasai.", arti: "Tolong makan.", pen: "Te-Form untuk permohonan, izin (te mo ii), dan larangan (te wa ikemasen)." },
        { jdl: "Sedang Berlangsung", jepang: "本を読んでいます。", baca: "Hon o yonde imasu.", arti: "Sedang membaca buku.", pen: "Te + imasu (aksi sedang berlangsung)." },
        { jdl: "Waktu & Frekuensi", jepang: "よく行きます。", baca: "Yoku ikimasu.", arti: "Sering pergi.", pen: "Keterangan waktu, frekuensi (yoku, tokidoki), dan durasi." }
    ],
    "2. N4 - CONJUGATION & PLAIN FORM": [
        { jdl: "Bentuk Kamus (Plain Form)", jepang: "友達と遊ぶ。", baca: "Tomodachi to asobu.", arti: "Bermain dengan teman.", pen: "Bentuk dasar untuk menggabung kalimat kasual." },
        { jdl: "Bentuk Nai & Ta (Kasual)", jepang: "行かない。行った。", baca: "Ikanai. Itta.", arti: "Tidak pergi. Telah pergi.", pen: "Negasi & Lampau versi kasual/akrab." },
        { jdl: "Bentuk Potensial (Bisa)", jepang: "漢字が書けます。", baca: "Kanji ga kakemasu.", arti: "Bisa menulis Kanji.", pen: "Kemampuan diri (U-E-Ru)." },
        { jdl: "Bentuk Keinginan (~Tai)", jepang: "日本に行きたい。", baca: "Nihon ni ikitai.", arti: "Ingin pergi ke Jepang.", pen: "Keinginan pribadi (Masu-stem + tai)." },
        { jdl: "Bentuk Perintah & Larangan", jepang: "走れ！走るな！", baca: "Hashire! Hashiru na!", arti: "Lari! Jangan lari!", pen: "Imperatif dan larangan keras." },
        { jdl: "Kondisional (Tara/Ba/Nara)", jepang: "あれば買います。", baca: "Areba kaimasu.", arti: "Kalau ada, saya beli.", pen: "Syarat terjadinya aksi (Ba/Tara/Nara)." },
        { jdl: "Transitif & Intransitif", jepang: "窓を開ける/開く。", baca: "Mado o akeru / aku.", arti: "Membuka jendela / jendela terbuka.", pen: "Perbedaan aksi sengaja vs kondisi alami (PENTING!)." },
        { jdl: "Bentuk Kausatif (Menyuruh)", jepang: "練習させます。", baca: "Renshuu sasemasu.", arti: "Menyuruh latihan.", pen: "Memberi izin atau menyuruh orang lain." }
    ],
    "3. N4 - COMPLEX EXPRESSIONS": [
        { jdl: "Memberi & Menerima", jepang: "花をもらいました。", baca: "Hana o moraimashita.", arti: "Terima bunga.", pen: "Ageru (Kasih), Kureru (Dikasih), Morau (Terima)." },
        { jdl: "Pasif (Passive)", jepang: "褒められました。", baca: "Homeraremashita.", arti: "Dipuji.", pen: "Subjek menderita aksi (terkena dampak)." },
        { jdl: "Pasif-Kausatif", jepang: "待たされました。", baca: "Matasaremashita.", arti: "Dipaksa menunggu.", pen: "Aksi terpaksa dilakukan karena disuruh." },
        { jdl: "Tujuan & Alasan", jepang: "健康のために走る。", baca: "Kenkou no tame ni hashiru.", arti: "Lari demi kesehatan.", pen: "Tame ni (Tujuan/demi), Node/Kara (Alasan objektif/subjektif)." },
        { jdl: "Keadaan Benda (Te-iru/aru)", jepang: "窓が開いている。", baca: "Mado ga aite iru.", arti: "Jendela terbuka.", pen: "Kondisi alami (Te-iru) vs hasil dari aksi sengaja (Te-aru)." },
        { jdl: "Dugaan (Sou/You/Hazuda)", jepang: "降りそうだ。", baca: "Furisou da.", arti: "Kelihatannya mau hujan.", pen: "Dugaan kesan (Sou), dugaan opini (You), dugaan logika (Hazuda)." },
        { jdl: "Kalimat Relatif", jepang: "昨日買った本。", baca: "Kinou katta hon.", arti: "Buku yang dibeli kemarin.", pen: "Menggunakan kata kerja/sifat untuk modifikasi kata benda." },
        { jdl: "Bentuk Saran (~Ta hou ga ii)", jepang: "行ったほうがいい。", baca: "Itta hou ga ii.", arti: "Sebaiknya pergi.", pen: "Rekomendasi tindakan yang lebih baik." },
        { jdl: "Keigo (Bahasa Sopan)", jepang: "おっしゃる。", baca: "Ossharu.", arti: "Berbicara (hormat).", pen: "Sonkeigo (Hormat ke orang lain) & Kenjougo (Merendahkan diri)." },
        { jdl: "Penghubung (~Nagara / ~Tari)", jepang: "食べながら飲む。", baca: "Tabenagara nomu.", arti: "Makan sambil minum.", pen: "Nagara (sambil), Tari-tari (melakukan aksi berselang-seling)." }
    ]
};
