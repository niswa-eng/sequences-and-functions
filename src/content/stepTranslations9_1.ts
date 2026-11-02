import { StepTranslation } from './stepTranslations';

export const stepTranslations9_1: Record<'id' | 'uz', Record<string, StepTranslation>> = {
  id: {
    '9.1-obj': {
      title: 'Tujuan Pembelajaran (Learning Objectives)',
      keyTerms: ['Barisan (Sequence)', 'Suku (Term)', 'Aturan (Rule)'],
      sentences: [
        'Memahami dan menghasilkan barisan bilangan bulat (integer sequences).',
        'Menemukan dan menggunakan aturan antar-suku (term-to-term rule) untuk melanjutkan barisan.',
      ],
    },
    '9.1-c1': {
      title: 'Barisan dan Suku (Sequences & Terms)',
      keyTerms: ['Barisan (Sequence)', 'Suku (Term)'],
      sentences: [
        'Barisan (sequence) adalah daftar bilangan dengan urutan tertentu.',
        'Setiap bilangan di dalam barisan disebut suku (term).',
      ],
      componentProps: { ruleLabel: 'Tambah 5 (Add 5)' },
    },
    '9.1-c2': {
      title: 'Aturan Antar-Suku (Term-to-Term Rule)',
      keyTerms: ['Aturan antar-suku (Term-to-term rule)'],
      sentences: [
        'Aturan antar-suku (term-to-term rule) menjelaskan cara mendapatkan suku berikutnya.',
        'Aturan ini menunjukkan bilangan apa yang ditambah atau dikurang setiap kali melangkah.',
      ],
      componentProps: { ruleLabel: 'Tambah 6 (Add 6)' },
    },
    '9.1-c3': {
      title: 'Barisan Meningkat (Increasing Sequences)',
      keyTerms: ['Meningkat (Increasing)', 'Tambah (Add)'],
      sentences: [
        'Barisan meningkat nilainya makin besar dengan menambahkan bilangan yang sama setiap kali.',
        'Pada barisan 3, 7, 11, 15, aturan antar-sukunya adalah tambah 4 (add 4).',
      ],
      componentProps: { ruleLabel: 'Tambah 4 (Add 4)' },
    },
    '9.1-c4': {
      title: 'Barisan Menurun (Decreasing Sequences)',
      keyTerms: ['Menurun (Decreasing)', 'Kurang (Subtract)'],
      sentences: [
        'Barisan menurun nilainya makin kecil dengan mengurangkan bilangan yang sama setiap kali.',
        'Pada barisan 50, 45, 40, 35, aturan antar-sukunya adalah kurangi 5 (subtract 5).',
      ],
      componentProps: { ruleLabel: 'Kurang 5 (Subtract 5)' },
    },
    '9.1-c5': {
      title: 'Menghasilkan Barisan (Generating a Sequence)',
      keyTerms: ['Suku pertama (First term)', 'Aturan (Rule)'],
      sentences: [
        'Mulailah dari suku pertama (first term) lalu terapkan aturan langkah demi langkah.',
        'Suku pertama: 6. Aturan antar-suku: tambah 3 (add 3).',
      ],
      componentProps: { ruleLabel: 'Tambah 3 (Add 3)' },
    },
    '9.1-c6': {
      title: 'Menemukan Selisih (Finding the Difference)',
      keyTerms: ['Berurutan (Consecutive)', 'Selisih (Difference)'],
      sentences: [
        'Hitung selisih antara suku-suku yang berurutan untuk mencari aturan barisan.',
        'Periksa lebih dari satu pasang suku untuk memastikan aturan tersebut konsisten.',
      ],
      componentProps: { ruleLabel: 'Selisih = 15 − 8 = 7' },
    },
    '9.1-c7': {
      title: 'Melanjutkan ke Bilangan Negatif',
      keyTerms: ['Bilangan negatif (Negative numbers)', 'Nol (Zero)'],
      sentences: [
        'Barisan menurun dapat berlanjut melewati angka nol menuju bilangan negatif.',
        'Barisan: 12, 8, 4, 0, −4, −8 dengan aturan kurangi 4 (subtract 4).',
      ],
    },
    '9.1-we1': {
      title: 'Contoh Soal 1 (Worked Example 1)',
      sentences: [
        'Tentukan aturan antar-suku dan dua suku berikutnya dari 13, 20, 27, 34.',
      ],
      workedExample: {
        problem: 'Tentukan aturan antar-suku dan dua suku berikutnya dari 13, 20, 27, 34',
        steps: [
          {
            label: 'Langkah 1: Cari selisih antar-suku',
            math: '20 - 13 = 7 \\quad \\text{dan} \\quad 27 - 20 = 7',
            explanation: 'Selisih antara suku-suku yang berurutan adalah +7.',
          },
          {
            label: 'Langkah 2: Nyatakan aturan barisan',
            explanation: 'Aturan antar-suku (term-to-term rule) adalah tambah 7 (add 7).',
          },
          {
            label: 'Langkah 3: Hitung suku ke-5 dan ke-6',
            math: '34 + 7 = 41 \\quad \\text{dan} \\quad 41 + 7 = 48',
            explanation: 'Dua suku berikutnya adalah 41 dan 48.',
          },
        ],
      },
    },
    '9.1-we2': {
      title: 'Contoh Soal 2 (Worked Example 2)',
      sentences: [
        'Suku pertama adalah 40 dan aturan antar-suku adalah kurangi 7 (subtract 7).',
      ],
      workedExample: {
        problem: 'Tuliskan lima suku pertama jika suku awal 40 dan aturan kurangi 7',
        steps: [
          { label: 'Suku ke-1', math: '40' },
          { label: 'Suku ke-2', math: '40 - 7 = 33' },
          { label: 'Suku ke-3', math: '33 - 7 = 26' },
          { label: 'Suku ke-4', math: '26 - 7 = 19' },
          { label: 'Suku ke-5', math: '19 - 7 = 12' },
        ],
      },
    },
    '9.1-mistakes': {
      title: 'Kesalahan Umum (Common Mistakes)',
      keyTerms: ['Periksa suku', 'Arah barisan'],
      sentences: [
        'Selalu periksa lebih dari dua suku untuk memastikan aturan barisan.',
        'Hati-hati membedakan antara barisan meningkat (tambah) dan barisan menurun (kurang).',
      ],
      mistakeContent: {
        misconception: 'Hanya memeriksa dua suku pertama sebelum menyimpulkan aturan.',
        correction: 'Selalu periksa setidaknya dua selisih berurutan: (Suku 2 − Suku 1) dan (Suku 3 − Suku 2).',
        takeaway: 'Terkecoh antara arah meningkat dan menurun mengakibatkan menambah alih-alih mengurang.',
      },
    },
    '9.1-vocab': {
      title: 'Kosakata Unit (Unit Vocabulary)',
      vocabList: [
        { term: 'Barisan (Sequence)', meaning: 'Daftar bilangan yang disusun berurutan berdasarkan suatu aturan.' },
        { term: 'Suku (Term)', meaning: 'Sebuah bilangan tunggal di dalam suatu barisan.' },
        { term: 'Aturan antar-suku (Term-to-term rule)', meaning: 'Aturan yang menghubungkan suatu suku ke suku berikutnya.' },
        { term: 'Meningkat (Increasing)', meaning: 'Nilai bilangan makin besar (biasanya melalui penjumlahan).' },
        { term: 'Menurun (Decreasing)', meaning: 'Nilai bilangan makin kecil (biasanya melalui pengurangan).' },
        { term: 'Suku pertama (First term)', meaning: 'Bilangan awal tempat dimulainya barisan.' },
        { term: 'Berurutan (Consecutive)', meaning: 'Suku-suku yang berdampingan secara langsung tanpa jeda.' },
        { term: 'Selisih (Difference)', meaning: 'Hasil pengurangan antara suku berikutnya dengan suku sebelumnya.' },
      ],
    },
    '9.1-p-l1-q1': {
      title: 'Latihan: Level 1 (Soal 1)',
      practiceQuestionText: '5, 9, 13, 17, ... \n\nTuliskan aturan antar-suku (term-to-term rule) dan dua suku berikutnya.',
    },
    '9.1-p-l1-q2': {
      title: 'Latihan: Level 1 (Soal 2)',
      practiceQuestionText: 'Suku pertama adalah 20 dan aturannya adalah kurangi 3 (subtract 3).\n\nTuliskan lima suku pertama dari barisan ini.',
    },
    '9.1-p-l1-q3': {
      title: 'Latihan: Level 1 (Soal 3)',
      practiceQuestionText: '100, 90, 80, 70, ...\n\nTuliskan dua suku berikutnya dari barisan ini.',
    },
    '9.1-p-l2-q4': {
      title: 'Latihan: Level 2 (Soal 4)',
      practiceQuestionText: 'Lengkapilah suku-suku yang hilang pada barisan ini:\n\n6,  __ ,  14,  __ ,  22',
    },
    '9.1-p-l2-q5': {
      title: 'Latihan: Level 2 (Soal 5)',
      practiceQuestionText: 'Suku pertama adalah 7 dan aturan antar-sukunya adalah tambah 6 (add 6).\n\nHitunglah nilai suku ke-8 dari barisan ini.',
    },
    '9.1-p-l2-q6': {
      title: 'Latihan: Level 2 (Soal 6)',
      practiceQuestionText: 'Maya mengatakan aturan untuk 4, 9, 14, 19 adalah "tambah 4".\n\nJelaskan mengapa pendapat Maya keliru.',
    },
    '9.1-p-l3-q7': {
      title: 'Latihan: Level 3 (Soal 7)',
      practiceQuestionText: 'Suatu barisan dimulai dari 2 dengan aturan tambah 5 (add 5).\n\nApakah 52 merupakan suku dari barisan ini? Apakah 60 juga termasuk? Jelaskan alasanmu.',
    },
    '9.1-p-l3-q8': {
      title: 'Latihan: Level 3 (Soal 8)',
      practiceQuestionText: 'Suatu barisan dimulai dari 50 dengan aturan kurangi 6 (subtract 6).\n\nTuliskan suku pertama yang bernilai negatif.',
    },
    '9.1-p-l3-q9': {
      title: 'Latihan: Level 3 (Soal 9)',
      practiceQuestionText: 'Aturan antar-suku adalah tambah 3 dan suku ke-4 bernilai 19.\n\nHitunglah nilai suku pertama (first term).',
    },
  },
  uz: {
    '9.1-obj': {
      title: "O'quv Maqsadlari (Learning Objectives)",
      keyTerms: ['Ketma-ketlik (Sequence)', 'Had (Term)', 'Qoida (Rule)'],
      sentences: [
        "Butun sonli ketma-ketliklarni tushunish va hosil qilish.",
        "Ketma-ketlikni davom ettirish uchun haddan-hadga qoidani (term-to-term rule) topish va qo'llash.",
      ],
    },
    '9.1-c1': {
      title: 'Ketma-ketlik va Hadlar (Sequences & Terms)',
      keyTerms: ['Ketma-ketlik (Sequence)', 'Had (Term)'],
      sentences: [
        "Ketma-ketlik (sequence) — ma'lum tartibdagi sonlar ro'yxatidir.",
        "Ketma-ketlikdagi har bir son had (term) deb ataladi.",
      ],
      componentProps: { ruleLabel: "5 qo'shish (Add 5)" },
    },
    '9.1-c2': {
      title: 'Haddan-hadga qoida (Term-to-Term Rule)',
      keyTerms: ['Haddan-hadga qoida (Term-to-term rule)'],
      sentences: [
        "Haddan-hadga qoida (term-to-term rule) bir haddan keyingisiga qanday o'tishni bildiradi.",
        "U har qadamda qaysi son qo'shilishi yoki ayirilishini ko'rsatadi.",
      ],
      componentProps: { ruleLabel: "6 qo'shish (Add 6)" },
    },
    '9.1-c3': {
      title: "O'suvchi ketma-ketliklar (Increasing Sequences)",
      keyTerms: ["O'suvchi (Increasing)", "Qo'shish (Add)"],
      sentences: [
        "O'suvchi ketma-ketlik har safar bir xil sonni qo'shish hisobiga kattalashib boradi.",
        "3, 7, 11, 15 ketma-ketligida haddan-hadga qoida: 4 qo'shish (add 4).",
      ],
      componentProps: { ruleLabel: "4 qo'shish (Add 4)" },
    },
    '9.1-c4': {
      title: 'Kamayuvchi ketma-ketliklar (Decreasing Sequences)',
      keyTerms: ['Kamayuvchi (Decreasing)', 'Ayirish (Subtract)'],
      sentences: [
        "Kamayuvchi ketma-ketlik har safar bir xil sonni ayirish orqali kichrayib boradi.",
        "50, 45, 40, 35 ketma-ketligida haddan-hadga qoida: 5 ayirish (subtract 5).",
      ],
      componentProps: { ruleLabel: '5 ayirish (Subtract 5)' },
    },
    '9.1-c5': {
      title: 'Ketma-ketlikni hosil qilish (Generating a Sequence)',
      keyTerms: ['Birinchi had (First term)', 'Qoida (Rule)'],
      sentences: [
        "Birinchi haddan boshlab qoidani bosqichma-bosqich qo'llang.",
        "Birinchi had: 6. Haddan-hadga qoida: 3 qo'shish (add 3).",
      ],
      componentProps: { ruleLabel: "3 qo'shish (Add 3)" },
    },
    '9.1-c6': {
      title: 'Farqni topish (Finding the Difference)',
      keyTerms: ['Ketma-ket (Consecutive)', 'Farq (Difference)'],
      sentences: [
        "Qoidani topish uchun ketma-ket turgan hadlar orasidagi farqni hisoblang.",
        "Qoidaning to'g'riligini tasdiqlash uchun bir nechta juftlikni tekshiring.",
      ],
      componentProps: { ruleLabel: 'Farq = 15 − 8 = 7' },
    },
    '9.1-c7': {
      title: "Manfiy sonlarga o'tish (Negative Numbers)",
      keyTerms: ['Manfiy sonlar (Negative numbers)', 'Nol (Zero)'],
      sentences: [
        "Kamayuvchi ketma-ketlik noldan o'tib, manfiy sonlar tomon davom etishi mumkin.",
        "12, 8, 4, 0, −4, −8 ketma-ketligida qoida: 4 ayirish (subtract 4).",
      ],
    },
    '9.1-we1': {
      title: 'Namunaviy Misol 1 (Worked Example 1)',
      sentences: [
        '13, 20, 27, 34 ketma-ketligi uchun qoidani va keyingi ikki hadni toping.',
      ],
      workedExample: {
        problem: '13, 20, 27, 34 ketma-ketligining qoidasi va keyingi ikki hadini toping',
        steps: [
          {
            label: '1-qadam: Hadlar orasidagi farqni toping',
            math: '20 - 13 = 7 \\quad \\text{va} \\quad 27 - 20 = 7',
            explanation: "Ketma-ket hadlar orasidagi farq: +7.",
          },
          {
            label: '2-qadam: Qoidani bayon qiling',
            explanation: "Haddan-hadga qoida: 7 qo'shish (add 7).",
          },
          {
            label: '3-qadam: 5- va 6-hadlarni hisoblang',
            math: '34 + 7 = 41 \\quad \\text{va} \\quad 41 + 7 = 48',
            explanation: 'Keyingi ikki had: 41 va 48.',
          },
        ],
      },
    },
    '9.1-we2': {
      title: 'Namunaviy Misol 2 (Worked Example 2)',
      sentences: [
        'Birinchi had 40 ga teng va haddan-hadga qoida: 7 ayirish (subtract 7).',
      ],
      workedExample: {
        problem: "Birinchi hadi 40 va qoidasi 7 ayirish bo'lgan ketma-ketlikning 5 ta hadini yozing",
        steps: [
          { label: '1-had', math: '40' },
          { label: '2-had', math: '40 - 7 = 33' },
          { label: '3-had', math: '33 - 7 = 26' },
          { label: '4-had', math: '26 - 7 = 19' },
          { label: '5-had', math: '19 - 7 = 12' },
        ],
      },
    },
    '9.1-mistakes': {
      title: 'Keng tarqalgan xatolar (Common Mistakes)',
      keyTerms: ['Hadlarni tekshirish', "Yo'nalish"],
      sentences: [
        "Qoidani aniqlashda faqat bitta emas, bir nechta hadni tekshiring.",
        "O'suvchi (qo'shish) va kamayuvchi (ayirish) yo'nalishlarini adashtirmang.",
      ],
      mistakeContent: {
        misconception: "Qoidani xulosa qilishdan oldin faqat dastlabki ikkita hadni tekshirish.",
        correction: "Har doim kamida ikkita qo'shni farqni tekshiring: (2-had − 1-had) va (3-had − 2-had).",
        takeaway: "Ketma-ketlik yo'nalishini adashtirish ayirish o'rniga qo'shishga olib keladi.",
      },
    },
    '9.1-vocab': {
      title: "Bo'lim lug'ati (Unit Vocabulary)",
      vocabList: [
        { term: 'Ketma-ketlik (Sequence)', meaning: "Muayyan qoida asosida tartiblangan sonlar ro'yxati." },
        { term: 'Had (Term)', meaning: 'Ketma-ketlikdagi alohida bitta son.' },
        { term: 'Haddan-hadga qoida (Term-to-term rule)', meaning: "Bir haddan keyingi hadga o'tish qoidasi." },
        { term: "O'suvchi (Increasing)", meaning: "Qiymati kattalashib boruvchi (odatda qo'shish orqali)." },
        { term: 'Kamayuvchi (Decreasing)', meaning: 'Qiymati kichrayib boruvchi (odatda ayirish orqali).' },
        { term: 'Birinchi had (First term)', meaning: 'Ketma-ketlik boshlanadigan eng birinchi son.' },
        { term: 'Ketma-ket (Consecutive)', meaning: "Birin-ketin, orasi uzilmagan holda keladigan hadlar." },
        { term: 'Farq (Difference)', meaning: "Keyingi haddan oldingi hadni ayirish natijasi." },
      ],
    },
    '9.1-p-l1-q1': {
      title: 'Mashq: 1-daraja (1-savol)',
      practiceQuestionText: "5, 9, 13, 17, ... \n\nHaddan-hadga qoidani (term-to-term rule) va keyingi ikki hadni yozing.",
    },
    '9.1-p-l1-q2': {
      title: 'Mashq: 1-daraja (2-savol)',
      practiceQuestionText: "Birinchi had 20 va qoida: 3 ayirish (subtract 3).\n\nKetma-ketlikning dastlabki beshta hadini yozing.",
    },
    '9.1-p-l1-q3': {
      title: 'Mashq: 1-daraja (3-savol)',
      practiceQuestionText: '100, 90, 80, 70, ...\n\nKeyingi ikki hadni yozing.',
    },
    '9.1-p-l2-q4': {
      title: 'Mashq: 2-daraja (4-savol)',
      practiceQuestionText: "Ketma-ketlikdagi tushirib qoldirilgan hadlarni to'ldiring:\n\n6,  __ ,  14,  __ ,  22",
    },
    '9.1-p-l2-q5': {
      title: 'Mashq: 2-daraja (5-savol)',
      practiceQuestionText: "Birinchi had 7 va qoida: 6 qo'shish (add 6).\n\nKetma-ketlikning 8-hadini hisoblang.",
    },
    '9.1-p-l2-q6': {
      title: 'Mashq: 2-daraja (6-savol)',
      practiceQuestionText: "Maya 4, 9, 14, 19 ketma-ketligining qoidasini \"4 qo'shish\" deb aytdi.\n\nMayaning nima uchun adashganini tushuntiring.",
    },
    '9.1-p-l3-q7': {
      title: 'Mashq: 3-daraja (7-savol)',
      practiceQuestionText: "Ketma-ketlik 2 dan boshlanadi va qoida: 5 qo'shish (add 5).\n\n52 ushbu ketma-ketlikning hadimi? 60-chi? Javobingizni asoslang.",
    },
    '9.1-p-l3-q8': {
      title: 'Mashq: 3-daraja (8-savol)',
      practiceQuestionText: "Ketma-ketlik 50 dan boshlanadi va qoida: 6 ayirish (subtract 6).\n\nBirinchi manfiy bo'ladigan hadni toping.",
    },
    '9.1-p-l3-q9': {
      title: 'Mashq: 3-daraja (9-savol)',
      practiceQuestionText: "Haddan-hadga qoida: 3 qo'shish va 4-had 19 ga teng.\n\nBirinchi hadni (first term) hisoblang.",
    },
  },
};
