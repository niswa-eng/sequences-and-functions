import { StepTranslation } from './stepTranslations';

export const stepTranslations9_3: Record<'id' | 'uz', Record<string, StepTranslation>> = {
  id: {
    '9.3-obj': {
      title: 'Tujuan Pembelajaran (Learning Objectives)',
      keyTerms: ['Suku ke-n (nth term)', 'Posisi n (Position n)', 'Rumus (Formula)'],
      sentences: [
        'Memahami aturan posisi-ke-suku (position-to-term rule) berbentuk n ± a dan a × n.',
        'Menggunakan suku ke-n (nth term) untuk menghitung suku mana pun dan memeriksa keanggotaan bilangan.',
      ],
    },
    '9.3-c1': {
      title: 'Posisi dan Suku (Position and Term)',
      keyTerms: ['Posisi (Position n)', 'Suku (Term)'],
      sentences: [
        'Setiap suku dalam barisan memiliki nomor posisi n (1, 2, 3, ...).',
        'Suku ke-1 berada pada posisi n = 1; Suku ke-2 berada pada posisi n = 2.',
      ],
    },
    '9.3-c2': {
      title: 'Aturan Posisi-ke-Suku (Position-to-Term Rule)',
      keyTerms: ['Aturan posisi-ke-suku (Position-to-term rule)', 'Suku ke-n (nth term)'],
      sentences: [
        'Kita menggunakan huruf n untuk mewakili nomor posisi mana pun.',
        'Rumus suku ke-n (nth term) menghitung nilai suku langsung dari posisi n.',
      ],
    },
    '9.3-c3': {
      title: 'Aturan: n + 3 (Rule: n + 3)',
      keyTerms: ['Tambah ke n (Add to n)'],
      sentences: [
        'Masukkan nomor posisi n ke dalam rumus.',
        'Untuk n = 1, 2, 3, 4, suku-sukunya adalah 4, 5, 6, 7.',
      ],
    },
    '9.3-c4': {
      title: 'Aturan: n − 2 (Rule: n − 2)',
      keyTerms: ['Kurang dari n (Subtract from n)', 'Suku negatif (Negative terms)'],
      sentences: [
        'Ketika n = 1, sukunya adalah 1 − 2 = −1.',
        'Untuk n = 1, 2, 3, 4, suku-sukunya adalah −1, 0, 1, 2.',
      ],
    },
    '9.3-c5': {
      title: 'Aturan: 4n (Kelipatan / Multiples)',
      keyTerms: ['4n artinya 4 × n'],
      sentences: [
        'Dalam aljabar, 4n berarti 4 dikalikan dengan n.',
        'Untuk n = 1, 2, 3, 4, suku-sukunya adalah 4, 8, 12, 16.',
      ],
    },
    '9.3-c6': {
      title: 'Langsung Melompat ke Suku Mana Pun',
      keyTerms: ['Suku ke-10 (10th term)', 'Suku ke-20 (20th term)'],
      sentences: [
        'Rumus suku ke-n memungkinkanmu menghitung suku besar tanpa mendaftar semua suku sebelumnya.',
        'Jika rumus suku ke-n adalah 5n: suku ke-10 = 5 × 10 = 50; suku ke-20 = 5 × 20 = 100.',
      ],
    },
    '9.3-c7': {
      title: 'Menentukan Rumus Suku ke-n',
      keyTerms: ['Bandingkan dengan n (Compare with n)'],
      sentences: [
        'Barisan 5, 10, 15, 20 memiliki suku ke-n = 5n (tabel perkalian 5).',
        'Barisan 4, 5, 6, 7 memiliki suku ke-n = n + 3 (setiap suku bernilai 3 lebih besar dari posisi n).',
      ],
    },
    '9.3-c8': {
      title: 'Memeriksa Apakah Bilangan Termasuk Suku',
      keyTerms: ['Persamaan (Equation)', 'Bilangan bulat n (Whole number n)'],
      sentences: [
        'Apakah 65 ada di barisan 5n? Selesaikan 5n = 65 menghasilkan n = 13 (bilangan bulat, jadi YA!).',
        'Apakah 62 ada di barisan 5n? 62 ÷ 5 = 12.4 (bukan bilangan bulat, jadi BUKAN).',
      ],
    },
    '9.3-we1': {
      title: 'Contoh Soal 1 (Worked Example 1)',
      sentences: [
        'Rumus suku ke-n suatu barisan adalah 6n.',
      ],
      workedExample: {
        problem: 'Hitunglah suku ke-8, dan tentukan posisi dari suku bernilai 54',
        steps: [
          {
            label: 'Bagian a: Suku ke-8',
            math: '\\text{Untuk } n = 8: \\quad 6 \\times 8 = 48',
            explanation: 'Suku ke-8 adalah 48.',
          },
          {
            label: 'Bagian b: Posisi suku 54',
            math: '6n = 54 \\implies n = 54 \\div 6 = 9',
            explanation: 'Posisinya adalah n = 9 (suku ke-9).',
          },
        ],
      },
    },
    '9.3-we2': {
      title: 'Contoh Soal 2 (Worked Example 2)',
      sentences: [
        'Tentukan rumus suku ke-n dari barisan 9, 10, 11, 12.',
      ],
      workedExample: {
        problem: 'Tentukan rumus suku ke-n dari barisan 9, 10, 11, 12',
        steps: [
          {
            label: 'Langkah 1: Bandingkan setiap suku dengan posisinya n',
            explanation: 'Posisi 1: 9 (1 + 8). Posisi 2: 10 (2 + 8). Posisi 3: 11 (3 + 8).',
          },
          {
            label: 'Langkah 2: Tuliskan rumus suku ke-n',
            math: '\\text{suku ke-n} = n + 8',
            explanation: 'Setiap suku bernilai 8 lebih banyak dari nomor posisinya n.',
          },
        ],
      },
    },
    '9.3-mistakes': {
      title: 'Kesalahan Umum (Common Mistakes)',
      keyTerms: ['4n vs 4+n', 'Posisi vs Suku'],
      sentences: [
        '4n berarti 4 dikalikan dengan n, bukan 4 ditambah n.',
        'Jangan tertukar antara nomor posisi n dengan nilai dari suku tersebut.',
      ],
      mistakeContent: {
        misconception: 'Menuliskan aturan antar-suku "tambah 5" saat ditanya rumus suku ke-n.',
        correction: 'Aturan antar-suku menunjukkan langkah maju; rumus suku ke-n menghubungkan posisi n langsung ke nilai suku.',
        takeaway: 'Selalu periksa: masukkan n = 1, 2, 3 ke dalam rumusmu, apakah menghasilkan suku barisan yang benar?',
      },
    },
    '9.3-vocab': {
      title: 'Kosakata Unit (Unit Vocabulary)',
      vocabList: [
        { term: 'Suku ke-n (nth term)', meaning: 'Bentuk aljabar yang menyatakan nilai suku pada posisi n.' },
        { term: 'Posisi n (Position n)', meaning: 'Letak urutan suatu suku di dalam barisan (ke-1, ke-2, ke-3, ...).' },
        { term: 'Aturan posisi-ke-suku (Position-to-term rule)', meaning: 'Aturan yang menggunakan nomor posisi n untuk menghitung suku.' },
        { term: 'Rumus (Formula)', meaning: 'Hubungan matematika yang dinyatakan dengan huruf dan simbol.' },
        { term: 'Variabel n (Variable n)', meaning: 'Huruf yang mewakili sebarang nomor posisi bulat.' },
        { term: 'Kelipatan (Multiples)', meaning: 'Bilangan dalam tabel perkalian, dinyatakan dalam aljabar sebagai an (contoh 3n, 4n).' },
      ],
    },
    '9.3-p-l1-q1': {
      title: 'Latihan: Level 1 (Soal 1)',
      practiceQuestionText: 'Rumus suku ke-n suatu barisan adalah n + 5.\n\nTuliskan empat suku pertama dari barisan ini.',
    },
    '9.3-p-l1-q2': {
      title: 'Latihan: Level 1 (Soal 2)',
      practiceQuestionText: 'Rumus suku ke-n suatu barisan adalah 3n.\n\nTuliskan empat suku pertama dan nilai suku ke-10.',
    },
    '9.3-p-l1-q3': {
      title: 'Latihan: Level 1 (Soal 3)',
      practiceQuestionText: 'Rumus suku ke-n suatu barisan adalah n − 2.\n\nHitunglah nilai suku ke-5.',
    },
    '9.3-p-l2-q4': {
      title: 'Latihan: Level 2 (Soal 4)',
      practiceQuestionText: 'Tentukan rumus suku ke-n (nth term) dari barisan berikut:\n\n6, 12, 18, 24, ...',
    },
    '9.3-p-l2-q5': {
      title: 'Latihan: Level 2 (Soal 5)',
      practiceQuestionText: 'Tentukan rumus suku ke-n (nth term) dari barisan berikut:\n\n8, 9, 10, 11, ...',
    },
    '9.3-p-l2-q6': {
      title: 'Latihan: Level 2 (Soal 6)',
      practiceQuestionText: 'Rumus suku ke-n suatu barisan adalah 4n.\n\nHitunglah nilai suku ke-12 dan tentukan posisi suku yang bernilai 60.',
    },
    '9.3-p-l3-q7': {
      title: 'Latihan: Level 3 (Soal 7)',
      practiceQuestionText: 'Rumus suku ke-n adalah 5n.\n\nApakah 75 termasuk suku barisan? Apakah 82 termasuk suku barisan?\nJelaskan jawabanmu dengan perhitungan.',
    },
    '9.3-p-l3-q8': {
      title: 'Latihan: Level 3 (Soal 8)',
      practiceQuestionText: 'Rumus suku ke-n adalah n + 9.\n\nSuku keberapakah yang bernilai sama dengan 31?',
    },
    '9.3-p-l3-q9': {
      title: 'Latihan: Level 3 (Soal 9)',
      practiceQuestionText: 'Seorang murid mengatakan suku ke-n dari 7, 14, 21, 28 adalah n + 7.\n\nJelaskan mengapa murid tersebut keliru dan tuliskan rumus suku ke-n yang benar.',
    },
  },
  uz: {
    '9.3-obj': {
      title: "O'quv Maqsadlari (Learning Objectives)",
      keyTerms: ['n-had (nth term)', "O'rin n (Position n)", 'Formula (Formula)'],
      sentences: [
        "n ± a va a × n ko'rinishidagi o'rindan-hadga qoidalarni (position-to-term rule) tushunish.",
        "Ixtiyoriy hadni hisoblash va sonning ketma-ketlikka tegishliligini tekshirish uchun n-haddan foydalanish.",
      ],
    },
    '9.3-c1': {
      title: "O'rin va Had (Position and Term)",
      keyTerms: ["O'rin n (Position n)", 'Had (Term)'],
      sentences: [
        "Ketma-ketlikdagi har bir had o'zining n tartib raqamiga (pozitsiyasiga) ega.",
        "1-had n = 1 o'rinda joylashgan; 2-had n = 2 o'rinda joylashgan.",
      ],
    },
    '9.3-c2': {
      title: "O'rindan-hadga qoida (Position-to-Term Rule)",
      keyTerms: ["O'rindan-hadga qoida (Position-to-term rule)", 'n-had (nth term)'],
      sentences: [
        "Biz ixtiyoriy o'rin raqamini ifodalash uchun n harfidan foydalanamiz.",
        "n-had qoidasi ixtiyoriy hadni to'g'ridan-to'g'ri uning n o'rnidan hisoblab topadi.",
      ],
    },
    '9.3-c3': {
      title: "Qoida: n + 3 (Rule: n + 3)",
      keyTerms: ["n ga qo'shish (Add to n)"],
      sentences: [
        "Har bir n o'rin raqamini formulaga qo'ying.",
        "n = 1, 2, 3, 4 uchun hadlar: 4, 5, 6, 7.",
      ],
    },
    '9.3-c4': {
      title: "Qoida: n − 2 (Rule: n − 2)",
      keyTerms: ["n dan ayirish (Subtract from n)", 'Manfiy hadlar (Negative terms)'],
      sentences: [
        "n = 1 bo'lganda, had: 1 − 2 = −1 bo'ladi.",
        "n = 1, 2, 3, 4 uchun hadlar: −1, 0, 1, 2.",
      ],
    },
    '9.3-c5': {
      title: "Qoida: 4n (Karrali sonlar / Multiples)",
      keyTerms: ['4n bu 4 × n degani'],
      sentences: [
        "Algebrada 4n yozuvi 4 ni n ga ko'paytirishni bildiradi.",
        "n = 1, 2, 3, 4 uchun hadlar: 4, 8, 12, 16.",
      ],
    },
    '9.3-c6': {
      title: "Ixtiyoriy hadga to'g'ridan-to'g'ri o'tish",
      keyTerms: ['10-had (10th term)', '20-had (20th term)'],
      sentences: [
        "n-had formulasi barcha oldingi hadlarni yozmasdan turib, istalgan hadni hisoblash imkonini beradi.",
        "Agar n-had 5n bo'lsa: 10-had = 5 × 10 = 50; 20-had = 5 × 20 = 100.",
      ],
    },
    '9.3-c7': {
      title: 'n-hadni topish (Finding the nth Term)',
      keyTerms: ["n bilan taqqoslash (Compare with n)"],
      sentences: [
        "5, 10, 15, 20 ketma-ketligining n-hadi: 5n (5 ga ko'paytirish jadvali).",
        "4, 5, 6, 7 ketma-ketligining n-hadi: n + 3 (har bir had o'zining n o'rnidan 3 taga ortiq).",
      ],
    },
    '9.3-c8': {
      title: "Sonning ketma-ketlikda borligini tekshirish",
      keyTerms: ['Tenglama yechish (Solve equation)', 'Butun son n (Whole number n)'],
      sentences: [
        "65 soni 5n ketma-ketligida bormi? 5n = 65 tenglamasini yechsak n = 13 (butun son, demak HA!).",
        "62 soni 5n da bormi? 62 ÷ 5 = 12.4 (butun son emas, demak YO'Q).",
      ],
    },
    '9.3-we1': {
      title: 'Namunaviy Misol 1 (Worked Example 1)',
      sentences: [
        'Ketma-ketlikning n-hadi 6n ga teng.',
      ],
      workedExample: {
        problem: "8-hadni toping va 54 ga teng bo'lgan hadning o'rnini aniqlang",
        steps: [
          {
            label: 'a-qism: 8-had',
            math: 'n = 8 \\text{ uchun}: \\quad 6 \\times 8 = 48',
            explanation: '8-had 48 ga teng.',
          },
          {
            label: "b-qism: 54 ga teng hadning o'rni",
            math: '6n = 54 \\implies n = 54 \\div 6 = 9',
            explanation: "O'rni n = 9 (9-had).",
          },
        ],
      },
    },
    '9.3-we2': {
      title: 'Namunaviy Misol 2 (Worked Example 2)',
      sentences: [
        '9, 10, 11, 12 ketma-ketligining n-hadini toping.',
      ],
      workedExample: {
        problem: '9, 10, 11, 12 ketma-ketligining n-hadini toping',
        steps: [
          {
            label: "1-qadam: Har bir hadni n o'rni bilan taqqoslang",
            explanation: "1-o'rin: 9 (1 + 8). 2-o'rin: 10 (2 + 8). 3-o'rin: 11 (3 + 8).",
          },
          {
            label: '2-qadam: n-had qoidasini yozing',
            math: '\\text{n-had} = n + 8',
            explanation: "Har bir had o'zining n o'rnidan 8 taga ortiq.",
          },
        ],
      },
    },
    '9.3-mistakes': {
      title: 'Keng tarqalgan xatolar (Common Mistakes)',
      keyTerms: ['4n va 4+n', "O'rin va Had"],
      sentences: [
        "4n bu 4 ni n ga ko'paytirish demakdir, hech qachon 4 qo'shuv n emas.",
        "n o'rin raqami bilan hadning qiymatini adashtirmang.",
      ],
      mistakeContent: {
        misconception: "n-had so'ralganda \"5 qo'shish\" haddan-hadga qoidasini yozish.",
        correction: "Haddan-hadga qoida oldinga bir qadam siljishni ko'rsatadi; n-had esa n o'rinni to'g'ridan-to'g'ri had qiymatiga bog'laydi.",
        takeaway: "Tekshirib ko'ring: formulangizga n = 1, 2, 3 qo'yganda to'g'ri hadlar chiqyaptimi?",
      },
    },
    '9.3-vocab': {
      title: "Bo'lim lug'ati (Unit Vocabulary)",
      vocabList: [
        { term: 'n-had (nth term)', meaning: "n-o'rindagi hadning qiymatini ifodalovchi algebraik ifoda." },
        { term: "O'rin n (Position n)", meaning: "Hadning ketma-ketlikdagi joylashuvi (1-chi, 2-chi, 3-chi, ...)." },
        { term: "O'rindan-hadga qoida (Position-to-term rule)", meaning: "n o'rin raqamidan foydalanib hadni hisoblab beruvchi qoida." },
        { term: 'Formula (Formula)', meaning: "Harflar va belgilar orqali ifodalangan matematik munosabat." },
        { term: "O'zgaruvchi n (Variable n)", meaning: "Ixtiyoriy butun o'rin raqamini bildiruvchi harf." },
        { term: 'Karralilar (Multiples)', meaning: "Ko'paytirish jadvali sonlari, algebrada an (masalan 3n, 4n) shaklida yoziladi." },
      ],
    },
    '9.3-p-l1-q1': {
      title: 'Mashq: 1-daraja (1-savol)',
      practiceQuestionText: "Ketma-ketlikning n-hadi n + 5 ga teng.\n\nKetma-ketlikning dastlabki to'rtta hadini yozing.",
    },
    '9.3-p-l1-q2': {
      title: 'Mashq: 1-daraja (2-savol)',
      practiceQuestionText: "Ketma-ketlikning n-hadi 3n ga teng.\n\nDastlabki to'rtta hadni va 10-hadni yozing.",
    },
    '9.3-p-l1-q3': {
      title: 'Mashq: 1-daraja (3-savol)',
      practiceQuestionText: "Ketma-ketlikning n-hadi n − 2 ga teng.\n\n5-hadni hisoblang.",
    },
    '9.3-p-l2-q4': {
      title: 'Mashq: 2-daraja (4-savol)',
      practiceQuestionText: "Quyidagi ketma-ketlikning n-hadini (nth term) yozing:\n\n6, 12, 18, 24, ...",
    },
    '9.3-p-l2-q5': {
      title: 'Mashq: 2-daraja (5-savol)',
      practiceQuestionText: "Quyidagi ketma-ketlikning n-hadini (nth term) yozing:\n\n8, 9, 10, 11, ...",
    },
    '9.3-p-l2-q6': {
      title: 'Mashq: 2-daraja (6-savol)',
      practiceQuestionText: "Ketma-ketlikning n-hadi 4n ga teng.\n\n12-hadni hisoblang va 60 ga teng bo'lgan hadning o'rnini toping.",
    },
    '9.3-p-l3-q7': {
      title: 'Mashq: 3-daraja (7-savol)',
      practiceQuestionText: "n-had 5n ga teng.\n\n75 ushbu ketma-ketlikning hadimi? 82-chi?\nJavoblaringizni hisob-kitob bilan tushuntiring.",
    },
    '9.3-p-l3-q8': {
      title: 'Mashq: 3-daraja (8-savol)',
      practiceQuestionText: "n-had n + 9 ga teng.\n\nNechanchi had 31 ga teng bo'ladi?",
    },
    '9.3-p-l3-q9': {
      title: 'Mashq: 3-daraja (9-savol)',
      practiceQuestionText: "O'quvchi 7, 14, 21, 28 ketma-ketligining n-hadi n + 7 ga teng deb aytdi.\n\nNima uchun bu xato ekanligini tushuntiring va to'g'ri n-hadni yozing.",
    },
  },
};
