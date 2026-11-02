import { StepTranslation } from './stepTranslations';

export const stepTranslations9_4: Record<'id' | 'uz', Record<string, StepTranslation>> = {
  id: {
    '9.4-obj': {
      title: 'Tujuan Pembelajaran (Learning Objectives)',
      keyTerms: ['Fungsi (Function)', 'Masukan x (Input x)', 'Keluaran y (Output y)', 'Invers (Inverse)'],
      sentences: [
        'Memahami fungsi sebagai aturan yang menghubungkan masukan (input) tepat ke satu keluaran (output).',
        'Menggunakan mesin fungsi, aturan aljabar (y = x + c, y = mx), dan operasi invers (kebalikan).',
      ],
    },
    '9.4-c1': {
      title: 'Apa itu Fungsi? (What is a Function?)',
      keyTerms: ['Fungsi (Function)', 'Satu keluaran unik (Single output)'],
      sentences: [
        'Fungsi adalah aturan matematika yang mengubah suatu masukan (input) menjadi keluaran (output).',
        'Setiap nilai masukan selalu menghasilkan tepat SATU nilai keluaran yang unik.',
      ],
    },
    '9.4-c2': {
      title: 'Mesin Fungsi: Tambah 4 (Add 4)',
      keyTerms: ['Tambah 4 (Add 4)', 'Aturan (Rule)'],
      sentences: [
        'Bilangan masukan masuk ke dalam mesin, ditambah 4, lalu keluaran keluar.',
        'Cobalah masukan 1, 2, dan 3 untuk melihat keluarannya.',
      ],
    },
    '9.4-c3': {
      title: 'Mesin Fungsi: Kalikan 3 (Multiply by 3)',
      keyTerms: ['Kalikan 3 (Multiply by 3)'],
      sentences: [
        'Operasi ini mengalikan setiap bilangan yang masuk dengan 3.',
        'Masukan 2, 5, 10 menghasilkan keluaran 6, 15, 30.',
      ],
    },
    '9.4-c4': {
      title: 'Menulis Fungsi dengan x dan y',
      keyTerms: ['y = x + c', 'y = mx'],
      sentences: [
        'Misalkan x adalah masukan (input) dan y adalah keluaran (output).',
        'Aturan "tambah 4" ditulis y = x + 4. Aturan "kalikan 3" ditulis y = 3x.',
      ],
    },
    '9.4-c5': {
      title: 'Tabel Nilai (Table of Values)',
      keyTerms: ['Tabel nilai (Table of values)', 'Pasangan koordinat (Coordinate pairs)'],
      sentences: [
        'Tabel memasangkan setiap masukan x dengan keluaran y hasil perhitungannya.',
        'Untuk y = x + 5, setiap nilai y adalah 5 lebih banyak daripada nilai x.',
      ],
    },
    '9.4-c6': {
      title: 'Mencari Masukan (Operasi Invers)',
      keyTerms: ['Operasi invers (Inverse operation)', 'Operasi kebalikan'],
      sentences: [
        'Untuk bekerja mundur dari keluaran ke masukan, lakukan operasi invers (kebalikan).',
        'Kebalikan dari tambah adalah kurang; kebalikan dari kali adalah bagi.',
      ],
    },
    '9.4-c7': {
      title: 'Kata-kata Menjadi Fungsi Sehari-hari',
      keyTerms: ['Kehidupan nyata (Real life)', 'Soal cerita (Word problem)'],
      sentences: [
        '"Setiap buku tulis berharga 2 dolar": biaya y = 2x di mana x adalah banyak buku tulis.',
        '"Usia Sam 3 tahun lebih tua dari Lee": usia Sam y = x + 3 di mana x adalah usia Lee.',
      ],
    },
    '9.4-c8': {
      title: 'Satu Masukan, Tepat Satu Keluaran',
      keyTerms: ['Tepat satu keluaran (One output only)'],
      sentences: [
        'Fungsi sejati tidak pernah memberikan dua keluaran berbeda untuk masukan yang sama.',
        'Jika kamu memasukkan x = 5, hanya ada satu jawaban y yang benar.',
      ],
    },
    '9.4-we1': {
      title: 'Contoh Soal 1 (Worked Example 1)',
      sentences: [
        'Suatu fungsi diberikan oleh rumus y = x − 4.',
      ],
      workedExample: {
        problem: 'Hitunglah keluaran y jika masukan x = 10, dan cari masukan x jika keluaran y = 15',
        steps: [
          {
            label: 'Bagian a: Keluaran saat x = 10',
            math: 'y = 10 - 4 = 6',
            explanation: 'Ketika masukan x = 10, keluaran y = 6.',
          },
          {
            label: 'Bagian b: Masukan saat y = 15 (gunakan operasi invers)',
            math: '15 = x - 4 \\implies x = 15 + 4 = 19',
            explanation: 'Kebalikan dari kurang 4 adalah tambah 4. Ketika y = 15, x = 19.',
          },
        ],
      },
    },
    '9.4-we2': {
      title: 'Contoh Soal 2 (Worked Example 2)',
      sentences: [
        'Sebuah tabel menunjukkan masukan x: 1, 2, 3 dan keluaran y: 4, 8, 12.',
      ],
      workedExample: {
        problem: 'Tuliskan fungsi yang menghubungkan x dan y dalam bentuk aljabar',
        steps: [
          {
            label: 'Langkah 1: Bandingkan setiap pasangan x dan y',
            math: '1 \\times 4 = 4, \\quad 2 \\times 4 = 8, \\quad 3 \\times 4 = 12',
            explanation: 'Setiap keluaran y adalah 4 kali masukan x.',
          },
          {
            label: 'Langkah 2: Nyatakan rumus fungsi',
            math: 'y = 4x',
            explanation: 'Aturan aljabarnya adalah y = 4x.',
          },
        ],
      },
    },
    '9.4-mistakes': {
      title: 'Kesalahan Umum (Common Mistakes)',
      keyTerms: ['Aturan invers', 'Urutan variabel'],
      sentences: [
        'Ingatlah untuk membalik operasi saat bergerak mundur dari keluaran ke masukan.',
        'Jangan menukar posisi x dan y saat menuliskan rumus fungsi.',
      ],
      mistakeContent: {
        misconception: 'Menggunakan operasi yang sama saat berjalan mundur: jika y = x + 8 dan y = 20, menghitung 20 + 8.',
        correction: 'Untuk mencari masukan, gunakan operasi invers (kebalikan): 20 − 8 = 12.',
        takeaway: 'Perkalian dalam kata-kata: "3 kali x" ditulis y = 3x, bukan "3 + x".',
      },
    },
    '9.4-vocab': {
      title: 'Kosakata Unit (Unit Vocabulary)',
      vocabList: [
        { term: 'Fungsi (Function)', meaning: 'Aturan yang memproses sebuah masukan dan menghasilkan tepat satu keluaran.' },
        { term: 'Masukan (Input x)', meaning: 'Bilangan yang dimasukkan ke dalam suatu fungsi atau mesin fungsi.' },
        { term: 'Keluaran (Output y)', meaning: 'Bilangan hasil yang diperoleh setelah aturan diterapkan.' },
        { term: 'Mesin fungsi (Function machine)', meaning: 'Model visual yang menunjukkan masukan, kotak operasi, dan keluaran.' },
        { term: 'Operasi invers (Inverse operation)', meaning: 'Operasi lawan yang membalik pengaruhnya (tambah ↔ kurang, kali ↔ bagi).' },
        { term: 'Tabel nilai (Table of values)', meaning: 'Tabel yang memuat daftar pasangan masukan x dan keluaran y yang bersesuaian.' },
        { term: 'Variabel (Variable)', meaning: 'Huruf (seperti x atau y) yang mewakili kuantitas yang belum diketahui atau dapat berubah.' },
      ],
    },
    '9.4-p-l1-q1': {
      title: 'Latihan: Level 1 (Soal 1)',
      practiceQuestionText: 'Sebuah mesin fungsi mengalikan dengan 3 (multiplies by 3).\n\nTuliskan keluaran (output) untuk masukan 2, 5, dan 10.',
    },
    '9.4-p-l1-q2': {
      title: 'Latihan: Level 1 (Soal 2)',
      practiceQuestionText: 'Sebuah mesin fungsi menambah 8 (adds 8).\nNilai keluarannya adalah 20.\n\nHitunglah nilai masukannya (input).',
    },
    '9.4-p-l1-q3': {
      title: 'Latihan: Level 1 (Soal 3)',
      practiceQuestionText: 'Tuliskan "kalikan dengan 4" sebagai suatu fungsi dalam x dan y.\n\nKemudian hitunglah nilai y saat x = 6.',
    },
    '9.4-p-l2-q4': {
      title: 'Latihan: Level 2 (Soal 4)',
      practiceQuestionText: 'Lengkapilah tabel untuk fungsi y = x + 7:\n\nx:  1,  2,  3,  4\ny:  ?,  ?,  ?,  ?',
    },
    '9.4-p-l2-q5': {
      title: 'Latihan: Level 2 (Soal 5)',
      practiceQuestionText: 'Sebuah mesin fungsi mengalikan dengan 5 dan keluarannya adalah 45.\n\nHitunglah nilai masukannya (input).',
    },
    '9.4-p-l2-q6': {
      title: 'Latihan: Level 2 (Soal 6)',
      practiceQuestionText: 'Pensil berharga 2 dolar per batang.\n\na) Tuliskan fungsi untuk total biaya y dari x pensil.\nb) Hitunglah biaya dari 9 pensil.\nc) Berapa banyak pensil yang dapat dibeli dengan 30 dolar?',
    },
    '9.4-p-l3-q7': {
      title: 'Latihan: Level 3 (Soal 7)',
      practiceQuestionText: 'y = x − 4\n\na) Hitunglah nilai y ketika x = 10.\nb) Hitunglah nilai x ketika y = 15.',
    },
    '9.4-p-l3-q8': {
      title: 'Latihan: Level 3 (Soal 8)',
      practiceQuestionText: 'Marco mengatakan:\n"y = 3x menghasilkan dua keluaran berbeda untuk masukan 2."\n\nJelaskan mengapa pendapat Marco keliru.',
    },
    '9.4-p-l3-q9': {
      title: 'Latihan: Level 3 (Soal 9)',
      practiceQuestionText: 'Sebuah tabel menunjukkan:\nx: 2, 4, 6, 8\ny: 7, 9, 11, 13\n\na) Tuliskan fungsi yang menghubungkan x dan y.\nb) Hitunglah nilai y ketika x = 20.',
    },
  },
  uz: {
    '9.4-obj': {
      title: "O'quv Maqsadlari (Learning Objectives)",
      keyTerms: ['Funksiya (Function)', 'Kirish x (Input x)', 'Chiqish y (Output y)', 'Teskari amal (Inverse)'],
      sentences: [
        "Funksiyani har bir kirish qiymatini aniq bitta chiqish qiymatiga bog'lovchi qoida deb tushunish.",
        "Funksiya mashinalari, algebraik qoidalar (y = x + c, y = mx) va teskari amallardan foydalanish.",
      ],
    },
    '9.4-c1': {
      title: 'Funksiya nima? (What is a Function?)',
      keyTerms: ['Funksiya (Function)', 'Yagona chiqish (Single output)'],
      sentences: [
        "Funksiya — kirish (input) sonini chiqish (output) soniga aylantiruvchi matematik qoidadir.",
        "Har bir kirish qiymati doimo YAGONA (faqat bitta) chiqish qiymatini beradi.",
      ],
    },
    '9.4-c2': {
      title: "Funksiya mashinasi: 4 qo'shish (Add 4)",
      keyTerms: ["4 qo'shish (Add 4)", 'Qoida (Rule)'],
      sentences: [
        "Kiruvchi son mashinaga kiradi, unga 4 qo'shiladi va chiqish qiymati paydo bo'ladi.",
        "Chiqishlarni ko'rish uchun 1, 2 va 3 kirish sonlarini sinab ko'ring.",
      ],
    },
    '9.4-c3': {
      title: "Funksiya mashinasi: 3 ga ko'paytirish (Multiply by 3)",
      keyTerms: ["3 ga ko'paytirish (Multiply by 3)"],
      sentences: [
        "Ushbu amal har bir kiruvchi sonni 3 ga ko'paytiradi.",
        "2, 5, 10 kirish sonlari 6, 15, 30 chiqishlarini hosil qiladi.",
      ],
    },
    '9.4-c4': {
      title: 'Funksiyalarni x va y orqali yozish',
      keyTerms: ['y = x + c', 'y = mx'],
      sentences: [
        "x kirish (input) va y chiqish (output) bo'lsin.",
        "\"4 qo'shish\" qoidasi y = x + 4 shaklida, \"3 ga ko'paytirish\" qoidasi y = 3x shaklida yoziladi.",
      ],
    },
    '9.4-c5': {
      title: 'Qiymatlar jadvali (Table of Values)',
      keyTerms: ['Qiymatlar jadvali (Table of values)', 'Koordinata juftliklari'],
      sentences: [
        "Jadval har bir kirish x sonini hisoblangan chiqish y qiymati bilan juftlaydi.",
        "y = x + 5 uchun har bir y qiymati x dan 5 taga ortiqdir.",
      ],
    },
    '9.4-c6': {
      title: 'Kirishni topish (Teskari amal)',
      keyTerms: ['Teskari amal (Inverse operation)', 'Qarama-qarshi amal'],
      sentences: [
        "Chiqishdan orqaga qarab kirishni topish uchun teskari amalni bajaring.",
        "Qo'shishning teskarisi — ayirish; ko'paytirishning teskarisi — bo'lish.",
      ],
    },
    '9.4-c7': {
      title: "Hayotiy misollardan funksiyaga (Word Problems)",
      keyTerms: ['Hayotiy masala (Real life)', 'Matnli masala'],
      sentences: [
        "\"Har bir daftar 2 dollar\": umumiy xarajat y = 2x, bunda x daftarlar soni.",
        "\"Sem Lining yoshidan 3 yosh katta\": Semning yoshi y = x + 3, bunda x Lining yoshi.",
      ],
    },
    '9.4-c8': {
      title: 'Bitta kirish, aniq bitta chiqish',
      keyTerms: ['Faqat bitta chiqish (One output only)'],
      sentences: [
        "Haqiqiy funksiya bitta kirish uchun hech qachon ikkita har xil natija bermaydi.",
        "Agar siz x = 5 qo'ysangiz, y uchun faqat bitta to'g'ri javob mavjud bo'ladi.",
      ],
    },
    '9.4-we1': {
      title: 'Namunaviy Misol 1 (Worked Example 1)',
      sentences: [
        'Funksiya y = x − 4 formulasi bilan berilgan.',
      ],
      workedExample: {
        problem: 'Kirish x = 10 bo\'lganda chiqish y ni toping, va chiqish y = 15 bo\'lganda kirish x ni toping',
        steps: [
          {
            label: 'a-qism: x = 10 bo\'lgandagi chiqish',
            math: 'y = 10 - 4 = 6',
            explanation: 'Kirish x = 10 bo\'lganda chiqish y = 6.',
          },
          {
            label: 'b-qism: y = 15 bo\'lgandagi kirish (teskari amal)',
            math: '15 = x - 4 \\implies x = 15 + 4 = 19',
            explanation: '4 ayirishning teskarisi — 4 qo\'shish. y = 15 bo\'lganda x = 19.',
          },
        ],
      },
    },
    '9.4-we2': {
      title: 'Namunaviy Misol 2 (Worked Example 2)',
      sentences: [
        'Jadvalda x kirishlar: 1, 2, 3 va y chiqishlar: 4, 8, 12 berilgan.',
      ],
      workedExample: {
        problem: 'x va y ni bog\'lovchi funksiyani algebraik shaklda yozing',
        steps: [
          {
            label: '1-qadam: Har bir x va y juftligini taqqoslang',
            math: '1 \\times 4 = 4, \\quad 2 \\times 4 = 8, \\quad 3 \\times 4 = 12',
            explanation: 'Har bir y chiqishi x kirishidan 4 marta kattadir.',
          },
          {
            label: '2-qadam: Funksiya qoidasini yozing',
            math: 'y = 4x',
            explanation: 'Algebraik qoida: y = 4x.',
          },
        ],
      },
    },
    '9.4-mistakes': {
      title: 'Keng tarqalgan xatolar (Common Mistakes)',
      keyTerms: ['Teskari amal qoidasi', "O'zgaruvchilar tartibi"],
      sentences: [
        "Chiqishdan kirish tomon orqaga qaytganda amalni teskarisiga almashtirishni unutmang.",
        "Formulani yozishda x va y o'rnini almashtirib qo'ymang.",
      ],
      mistakeContent: {
        misconception: "Orqaga qaytishda ham xuddi o'sha amalni qo'llash: agar y = x + 8 va y = 20 bo'lsa, 20 + 8 deb hisoblash.",
        correction: "Kirishni topish uchun teskari amal qo'llaniladi: 20 − 8 = 12.",
        takeaway: "So'zlardagi ko'paytirish: \"3 marta x\" deganda y = 3x bo'ladi, hech qachon \"3 + x\" emas.",
      },
    },
    '9.4-vocab': {
      title: "Bo'lim lug'ati (Unit Vocabulary)",
      vocabList: [
        { term: 'Funksiya (Function)', meaning: "Kirish qiymatini qabul qilib, aniq bitta chiqish qiymatini hosil qiluvchi qoida." },
        { term: 'Kirish (Input x)', meaning: "Funksiya yoki mashinaga kiritiladigan boshlang'ich son." },
        { term: 'Chiqish (Output y)', meaning: "Qoida qo'llanilgandan so'ng olinadigan natijaviy son." },
        { term: 'Funksiya mashinasi (Function machine)', meaning: "Kirish, amal qutisi va chiqishni ko'rsatuvchi ko'rgazmali model." },
        { term: 'Teskari amal (Inverse operation)', meaning: "Amalning ta'sirini bekor qiluvchi teskari amal (qo'shish ↔ ayirish, ko'paytirish ↔ bo'lish)." },
        { term: 'Qiymatlar jadvali (Table of values)', meaning: "Mos keluvchi x kirish va y chiqish juftliklari ro'yxati." },
        { term: "O'zgaruvchi (Variable)", meaning: "Noma'lum yoki o'zgaruvchan miqdorni bildiruvchi harf (masalan x yoki y)." },
      ],
    },
    '9.4-p-l1-q1': {
      title: 'Mashq: 1-daraja (1-savol)',
      practiceQuestionText: "Funksiya mashinasi 3 ga ko'paytiradi (multiplies by 3).\n\n2, 5 va 10 kirishlari uchun chiqish (output) qiymatlarini yozing.",
    },
    '9.4-p-l1-q2': {
      title: 'Mashq: 1-daraja (2-savol)',
      practiceQuestionText: "Funksiya mashinasi 8 qo'shadi (adds 8).\nChiqish qiymati 20 ga teng.\n\nKirish qiymatini (input) hisoblang.",
    },
    '9.4-p-l1-q3': {
      title: 'Mashq: 1-daraja (3-savol)',
      practiceQuestionText: "\"4 ga ko'paytirish\"ni x va y orqali funksiya shaklida yozing.\n\nSo'ngra x = 6 bo'lganda y ning qiymatini hisoblang.",
    },
    '9.4-p-l2-q4': {
      title: 'Mashq: 2-daraja (4-savol)',
      practiceQuestionText: "y = x + 7 funksiyasi uchun jadvalni to'ldiring:\n\nx:  1,  2,  3,  4\ny:  ?,  ?,  ?,  ?",
    },
    '9.4-p-l2-q5': {
      title: 'Mashq: 2-daraja (5-savol)',
      practiceQuestionText: "Funksiya mashinasi 5 ga ko'paytiradi va chiqish qiymati 45 ga teng.\n\nKirish qiymatini hisoblang.",
    },
    '9.4-p-l2-q6': {
      title: 'Mashq: 2-daraja (6-savol)',
      practiceQuestionText: "Qalamlar donasi 2 dollardan turadi.\n\na) x ta qalamning umumiy y narxi uchun funksiya yozing.\nb) 9 ta qalamning narxini hisoblang.\nc) 30 dollarga nechta qalam sotib olish mumkinligini hisoblang.",
    },
    '9.4-p-l3-q7': {
      title: 'Mashq: 3-daraja (7-savol)',
      practiceQuestionText: "y = x − 4\n\na) x = 10 bo'lganda y ni hisoblang.\nb) y = 15 bo'lganda x ni hisoblang.",
    },
    '9.4-p-l3-q8': {
      title: 'Mashq: 3-daraja (8-savol)',
      practiceQuestionText: "Marko shunday deydi:\n\"y = 3x funksiyasida kirish 2 bo'lganda ikkita har xil chiqish chiqadi.\"\n\nMarkoning nima uchun nohaq ekanligini tushuntiring.",
    },
    '9.4-p-l3-q9': {
      title: 'Mashq: 3-daraja (9-savol)',
      practiceQuestionText: "Jadvalda:\nx: 2, 4, 6, 8\ny: 7, 9, 11, 13\n\na) x va y ni bog'lovchi funksiyani yozing.\nb) x = 20 bo'lganda y ning qiymatini hisoblang.",
    },
  },
};
