import { StepTranslation } from './stepTranslations';

export const stepTranslations9_2: Record<'id' | 'uz', Record<string, StepTranslation>> = {
  id: {
    '9.2-obj': {
      title: 'Tujuan Pembelajaran (Learning Objectives)',
      keyTerms: ['Pola spasial (Spatial pattern)', 'Korek api (Matchsticks)', 'Nomor pola (Pattern number)'],
      sentences: [
        'Mempelajari barisan yang dibentuk oleh pola visual dan spasial.',
        'Menghitung banyak elemen dan menemukan aturan antar-suku yang menghubungkan bentuk.',
      ],
    },
    '9.2-c1': {
      title: 'Pola dan Barisan (Patterns and Sequences)',
      keyTerms: ['Pola (Pattern)', 'Nomor pola (Pattern number)'],
      sentences: [
        'Pola yang terbuat dari bentuk atau batang menghasilkan barisan bilangan.',
        'Hitunglah banyak elemen pada Pola 1, Pola 2, dan Pola 3.',
      ],
    },
    '9.2-c2': {
      title: 'Persegi Korek Api Sebaris',
      keyTerms: ['Korek api (Matchstick)', 'Sisi bersama (Shared edge)'],
      sentences: [
        'Pola 1 menggunakan 4 korek api. Setiap persegi baru berbagi satu sisi.',
        'Setiap persegi baru menambah 3 korek api: 4, 7, 10, 13 (aturan tambah 3).',
      ],
    },
    '9.2-c3': {
      title: 'Segitiga Sebaris (Triangles in a Row)',
      keyTerms: ['Segitiga (Triangles)', 'Tambah 2 (Add 2)'],
      sentences: [
        'Pola 1 membutuhkan 3 batang korek api untuk membuat satu segitiga.',
        'Setiap segitiga tambahan pada baris menambah 2 korek api: 3, 5, 7, 9.',
      ],
    },
    '9.2-c4': {
      title: 'Pola Ubin dan Titik (Tile and Dot Patterns)',
      keyTerms: ['Ubin (Tiles)', 'Pertumbuhan konstan (Constant growth)'],
      sentences: [
        'Pola ubin yang bertambah dengan jumlah yang sama membentuk barisan linear.',
        'Banyaknya ubin: 5, 8, 11, 14 (aturan antar-suku tambah 3).',
      ],
    },
    '9.2-c5': {
      title: 'Menghubungkan Gambar dengan Aturan',
      keyTerms: ['Bagian tambahan (Added part)', 'Kode warna (Colour code)'],
      sentences: [
        'Perhatikan apa yang bertambah di antara pola untuk menemukan aturan.',
        'Mewarnai bagian yang baru ditambahkan memperjelas selisih yang konstan.',
      ],
    },
    '9.2-c6': {
      title: 'Pola Berkurang (Decreasing Pattern)',
      keyTerms: ['Keping (Counters)', 'Kurangi 3 (Subtract 3)'],
      sentences: [
        'Pola juga dapat berkurang nilainya saat benda disingkirkan.',
        'Mulai dengan 20 keping dan kurangi 3 setiap kali: 20, 17, 14, 11.',
      ],
    },
    '9.2-c7': {
      title: 'Melanjutkan Tanpa Menggambar',
      keyTerms: ['Lanjutkan (Continue)', 'Pola ke-8 (Pattern 8)'],
      sentences: [
        'Gunakan aturan antar-suku untuk mencari pola berikutnya tanpa menggambar.',
        'Pola 1: 4 batang. Tambahkan 3 berulang kali untuk mencapai Pola 7 atau 8.',
      ],
      componentProps: { ruleLabel: 'Tambah 3 (Add 3)' },
    },
    '9.2-we1': {
      title: 'Contoh Soal 1 (Worked Example 1)',
      sentences: [
        'Persegi sebaris: 4, 7, 10, 13 batang korek api.',
      ],
      workedExample: {
        problem: 'Tentukan banyak batang korek api pada Pola 7 (Pattern 7)',
        steps: [
          {
            label: 'Langkah 1: Identifikasi barisan bilangan',
            explanation: 'Pola 1: 4, Pola 2: 7, Pola 3: 10, Pola 4: 13.',
          },
          {
            label: 'Langkah 2: Cari aturan antar-suku',
            math: '7 - 4 = 3 \\quad \\text{dan} \\quad 10 - 7 = 3',
            explanation: 'Aturan antar-suku adalah tambah 3 korek api.',
          },
          {
            label: 'Langkah 3: Lanjutkan hingga Pola 7',
            math: '13 + 3 = 16 \\;(\\text{P5}) \\rightarrow 16 + 3 = 19 \\;(\\text{P6}) \\rightarrow 19 + 3 = 22 \\;(\\text{P7})',
            explanation: 'Pola 7 membutuhkan 22 batang korek api.',
          },
        ],
      },
    },
    '9.2-we2': {
      title: 'Contoh Soal 2 (Worked Example 2)',
      sentences: [
        'Suatu pola titik memiliki 5 titik pada Pola 1, 9 titik pada Pola 2, dan 13 titik pada Pola 3.',
      ],
      workedExample: {
        problem: 'Tentukan aturan dan banyak titik pada Pola 5',
        steps: [
          {
            label: 'Langkah 1: Periksa selisih antar pola',
            math: '9 - 5 = 4 \\quad \\text{dan} \\quad 13 - 9 = 4',
            explanation: 'Setiap pola bertambah 4 titik.',
          },
          {
            label: 'Langkah 2: Hitung Pola 4 dan Pola 5',
            math: '13 + 4 = 17 \\;(\\text{P4}) \\quad \\text{dan} \\quad 17 + 4 = 21 \\;(\\text{P5})',
            explanation: 'Pola 5 memiliki 21 titik.',
          },
        ],
      },
    },
    '9.2-mistakes': {
      title: 'Kesalahan Umum (Common Mistakes)',
      keyTerms: ['Sisi bersama', 'Total vs Perubahan'],
      sentences: [
        'Jangan pernah menghitung sisi korek api yang berimpit dua kali.',
        'Aturan menjelaskan pertambahan, bukan jumlah total bentuk.',
      ],
      mistakeContent: {
        misconception: 'Menghitung 4 batang untuk setiap persegi tunggal: 4 × 3 = 12 untuk 3 persegi.',
        correction: 'Karena persegi saling berbagi sisi di bagian dalam, 3 persegi hanya membutuhkan 4 + 3 + 3 = 10 batang.',
        takeaway: 'Pola 1 adalah suku pertama; pisahkan apa yang kamu mulai dari apa yang ditambahkan.',
      },
    },
    '9.2-vocab': {
      title: 'Kosakata Unit (Unit Vocabulary)',
      vocabList: [
        { term: 'Pola spasial (Spatial pattern)', meaning: 'Pola visual yang dibentuk oleh bangun datar, batang korek, atau ubin.' },
        { term: 'Nomor pola (Pattern number)', meaning: 'Urutan posisi (ke-1, ke-2, ke-3) suatu diagram di dalam pola.' },
        { term: 'Korek api (Matchstick)', meaning: 'Ruas garis yang mewakili satu satuan panjang dalam diagram batang.' },
        { term: 'Sisi bersama (Shared edge)', meaning: 'Sisi tempat dua bentuk yang bersebelahan menempel atau menyatu.' },
        { term: 'Aturan antar-suku (Term-to-term rule)', meaning: 'Banyak elemen yang ditambah atau dikurangi pada setiap langkah.' },
        { term: 'Melanjutkan (Continue)', meaning: 'Meneruskan barisan pola dengan mengikuti aturan yang tetap.' },
      ],
    },
    '9.2-p-l1-q1': {
      title: 'Latihan: Level 1 (Soal 1)',
      practiceQuestionText: 'Persegi sebaris yang disusun dari korek api:\nPola 1: 4 batang\nPola 2: 7 batang\nPola 3: 10 batang\n\nGambarkan Pola 4 dan tuliskan berapa banyak batang korek api yang digunakan.',
    },
    '9.2-p-l1-q2': {
      title: 'Latihan: Level 1 (Soal 2)',
      practiceQuestionText: 'Pola ubin tersusun atas 5, 8, 11 ubin.\n\nTuliskan aturan antar-suku dan banyak ubin pada Pola 4.',
    },
    '9.2-p-l1-q3': {
      title: 'Latihan: Level 1 (Soal 3)',
      practiceQuestionText: 'Barisan segitiga membutuhkan 3, 5, 7 batang korek api.\n\nTuliskan dua suku berikutnya dari barisan ini.',
    },
    '9.2-p-l2-q4': {
      title: 'Latihan: Level 2 (Soal 4)',
      practiceQuestionText: 'Pola 1 memiliki 6 titik dan setiap pola berikutnya bertambah 4 titik.\n\nBerapa banyak titik pada Pola 5?',
    },
    '9.2-p-l2-q5': {
      title: 'Latihan: Level 2 (Soal 5)',
      practiceQuestionText: 'Pola 1 memiliki 20 keping dan setiap pola berikutnya berkurang 3 keping.\n\nBerapa banyak keping pada Pola 6?',
    },
    '9.2-p-l2-q6': {
      title: 'Latihan: Level 2 (Soal 6)',
      practiceQuestionText: 'Suatu pola menggunakan 5, 9, 13 batang korek api.\n\nZara mengatakan Pola 10 membutuhkan 40 batang.\nGunakan aturan barisan untuk memeriksa jawaban Zara dan jelaskan alasannya.',
    },
    '9.2-p-l3-q7': {
      title: 'Latihan: Level 3 (Soal 7)',
      practiceQuestionText: 'Persegi sebaris menggunakan 4, 7, 10 batang korek api.\n\nBerapa banyak batang korek api yang dibutuhkan untuk Pola 8?',
    },
    '9.2-p-l3-q8': {
      title: 'Latihan: Level 3 (Soal 8)',
      practiceQuestionText: 'Persegi sebaris: 4, 7, 10, ...\n\nSuatu pola menggunakan 31 batang korek api.\nPola keberapakah itu (pattern number)?',
    },
    '9.2-p-l3-q9': {
      title: 'Latihan: Level 3 (Soal 9)',
      practiceQuestionText: 'Rancanglah sebuah pola dengan suku awal 6 dan aturan tambah 5.\n\nGambarkan tiga pola pertama dan tuliskan jumlah elemen pada masing-masing pola.',
    },
  },
  uz: {
    '9.2-obj': {
      title: "O'quv Maqsadlari (Learning Objectives)",
      keyTerms: ['Fazoviy naqsh (Spatial pattern)', "Gugurt cho'pi (Matchsticks)", 'Shakl raqami (Pattern number)'],
      sentences: [
        "Ko'rgazmali va fazoviy naqshlar hosil qilgan ketma-ketliklarni o'rganish.",
        "Elementlarni sanash va shakllarni bog'lovchi haddan-hadga qoidalarni topish.",
      ],
    },
    '9.2-c1': {
      title: 'Naqshlar va Ketma-ketliklar (Patterns and Sequences)',
      keyTerms: ['Naqsh (Pattern)', 'Shakl raqami (Pattern number)'],
      sentences: [
        "Shakllar yoki cho'plardan tuzilgan naqshlar sonli ketma-ketliklarni hosil qiladi.",
        "1-shakl, 2-shakl va 3-shakldagi elementlar sonini sanang.",
      ],
    },
    '9.2-c2': {
      title: "Bir qatordagi kvadratlar (Matchstick Squares)",
      keyTerms: ["Gugurt cho'pi (Matchstick)", "Umumiy qovurg'a (Shared edge)"],
      sentences: [
        "1-shakl 4 ta gugurt cho'pidan iborat. Har bir yangi kvadrat bitta umumiy tomonga ega bo'ladi.",
        "Har bir yangi kvadrat 3 ta cho'p qo'shadi: 4, 7, 10, 13 (qoida: 3 qo'shish).",
      ],
    },
    '9.2-c3': {
      title: 'Bir qatordagi uchburchaklar (Triangles in a Row)',
      keyTerms: ['Uchburchaklar (Triangles)', "2 qo'shish (Add 2)"],
      sentences: [
        "1-shaklda bitta uchburchak yasash uchun 3 ta gugurt cho'pi kerak bo'ladi.",
        "Qatordagi har bir yangi uchburchak 2 ta cho'p qo'shadi: 3, 5, 7, 9.",
      ],
    },
    '9.2-c4': {
      title: "Plitkalar va Nuqtalar naqshi (Tile and Dot Patterns)",
      keyTerms: ['Plitkalar (Tiles)', "Doimiy o'sish (Constant growth)"],
      sentences: [
        "Bir xil miqdorda kattalashib boruvchi plitkalar chiziqli ketma-ketlik hosil qiladi.",
        "Plitkalar soni: 5, 8, 11, 14 (haddan-hadga qoida: 3 qo'shish).",
      ],
    },
    '9.2-c5': {
      title: "Tasvirni Qoida bilan Bog'lash",
      keyTerms: ["Qo'shilgan qism (Added part)", 'Rangli belgilash (Colour code)'],
      sentences: [
        "Qoidani aniqlash uchun shakllar orasida nima o'zgarayotganiga qarang.",
        "Yangi qo'shilgan qismlarni bo'yash doimiy farqni yaqqol ko'rsatadi.",
      ],
    },
    '9.2-c6': {
      title: 'Kamayuvchi naqsh (Decreasing Pattern)',
      keyTerms: ['Donachalar (Counters)', '3 ayirish (Subtract 3)'],
      sentences: [
        "Buyumlar olib tashlanganda naqshlar kamayuvchi ketma-ketlik hosil qilishi mumkin.",
        "20 ta donachadan boshlab har safar 3 tadan olib tashlang: 20, 17, 14, 11.",
      ],
    },
    '9.2-c7': {
      title: "Chizmasdan davom ettirish (Beyond Drawing)",
      keyTerms: ['Davom ettirish (Continue)', '8-shakl (Pattern 8)'],
      sentences: [
        "Keyingi shakllarni chizmasdan topish uchun haddan-hadga qoidadan foydalaning.",
        "1-shakl: 4 ta cho'p. 7- yoki 8-shaklni topish uchun ketma-ket 3 qo'shib boring.",
      ],
      componentProps: { ruleLabel: "3 qo'shish (Add 3)" },
    },
    '9.2-we1': {
      title: 'Namunaviy Misol 1 (Worked Example 1)',
      sentences: [
        "Bir qatordagi kvadratlar: 4, 7, 10, 13 ta gugurt cho'pi.",
      ],
      workedExample: {
        problem: "7-shakldagi gugurt cho'plari sonini toping",
        steps: [
          {
            label: "1-qadam: Ketma-ketlikni aniqlang",
            explanation: "1-shakl: 4, 2-shakl: 7, 3-shakl: 10, 4-shakl: 13.",
          },
          {
            label: "2-qadam: Haddan-hadga qoidani toping",
            math: '7 - 4 = 3 \\quad \\text{va} \\quad 10 - 7 = 3',
            explanation: "Qoida: 3 ta gugurt cho'pi qo'shish.",
          },
          {
            label: "3-qadam: 7-shaklgacha davom ettiring",
            math: '13 + 3 = 16 \\;(\\text{P5}) \\rightarrow 16 + 3 = 19 \\;(\\text{P6}) \\rightarrow 19 + 3 = 22 \\;(\\text{P7})',
            explanation: "7-shakl uchun 22 ta gugurt cho'pi kerak bo'ladi.",
          },
        ],
      },
    },
    '9.2-we2': {
      title: 'Namunaviy Misol 2 (Worked Example 2)',
      sentences: [
        "Nuqtalar naqshida 1-shaklda 5 ta, 2-shaklda 9 ta va 3-shaklda 13 ta nuqta bor.",
      ],
      workedExample: {
        problem: "Qoidani va 5-shaklda nechta nuqta borligini toping",
        steps: [
          {
            label: "1-qadam: Farqni tekshiring",
            math: '9 - 5 = 4 \\quad \\text{va} \\quad 13 - 9 = 4',
            explanation: "Har bir yangi shakl 4 ta nuqta qo'shadi.",
          },
          {
            label: "2-qadam: 4- va 5-shakllarni hisoblang",
            math: '13 + 4 = 17 \\;(\\text{P4}) \\quad \\text{va} \\quad 17 + 4 = 21 \\;(\\text{P5})',
            explanation: "5-shaklda 21 ta nuqta bor.",
          },
        ],
      },
    },
    '9.2-mistakes': {
      title: 'Keng tarqalgan xatolar (Common Mistakes)',
      keyTerms: ["Umumiy tomonlar", "Umumiy son va o'zgarish"],
      sentences: [
        "Shakllar tutashganda umumiy gugurt cho'pini hech qachon ikki marta sanamang.",
        "Qoida umumiy sonni emas, har safar qancha qo'shilayotganini bildiradi.",
      ],
      mistakeContent: {
        misconception: "Har bir alohida kvadrat uchun 4 ta cho'p deb hisoblash: 3 ta kvadratga 4 × 3 = 12 ta cho'p.",
        correction: "Kvadratlar ichki qovurg'alarni o'zaro bo'lishgani uchun 3 ta kvadratga faqat 4 + 3 + 3 = 10 ta cho'p kerak.",
        takeaway: "1-shakl birinchi had hisoblanadi; boshlang'ich miqdorni qo'shiladigan miqdordan ajratib biling.",
      },
    },
    '9.2-vocab': {
      title: "Bo'lim lug'ati (Unit Vocabulary)",
      vocabList: [
        { term: 'Fazoviy naqsh (Spatial pattern)', meaning: "Shakllar, cho'plar yoki plitkalar yordamida hosil qilingan ko'rgazmali naqsh." },
        { term: 'Shakl raqami (Pattern number)', meaning: "Ketma-ketlikdagi chizmaning tartib o'rni (1-chi, 2-chi, 3-chi...)." },
        { term: "Gugurt cho'pi (Matchstick)", meaning: "Cho'plar diagrammasidagi bitta kesmani ifodalovchi birlik." },
        { term: "Umumiy qovurg'a (Shared edge)", meaning: "Ikki qo'shni shakl birlashadigan umumiy tomon." },
        { term: 'Haddan-hadga qoida (Term-to-term rule)', meaning: "Har bir bosqichda qo'shiladigan yoki olinadigan elementlar soni." },
        { term: 'Davom ettirish (Continue)', meaning: "Bir xil qoida bo'yicha ketma-ketlikni oldinga qarab yuritish." },
      ],
    },
    '9.2-p-l1-q1': {
      title: 'Mashq: 1-daraja (1-savol)',
      practiceQuestionText: "Gugurt cho'plaridan yasalgan bir qatordagi kvadratlar:\n1-shakl: 4 ta cho'p\n2-shakl: 7 ta cho'p\n3-shakl: 10 ta cho'p\n\n4-shaklni chizing va unda nechta gugurt cho'pi borligini yozing.",
    },
    '9.2-p-l1-q2': {
      title: 'Mashq: 1-daraja (2-savol)',
      practiceQuestionText: "Plitkalar naqshi 5, 8, 11 ta plitkadan iborat.\n\nHaddan-hadga qoidani va 4-shakldagi plitkalar sonini yozing.",
    },
    '9.2-p-l1-q3': {
      title: 'Mashq: 1-daraja (3-savol)',
      practiceQuestionText: "Bir qatordagi uchburchaklar 3, 5, 7 ta gugurt cho'pidan yasalgan.\n\nKetma-ketlikning keyingi ikki hadini yozing.",
    },
    '9.2-p-l2-q4': {
      title: 'Mashq: 2-daraja (4-savol)',
      practiceQuestionText: "1-shaklda 6 ta nuqta bor va har bir keyingi shaklda 4 tadan ko'proq nuqta bor.\n\n5-shaklda nechta nuqta bo'ladi?",
    },
    '9.2-p-l2-q5': {
      title: 'Mashq: 2-daraja (5-savol)',
      practiceQuestionText: "1-shaklda 20 ta donacha bor va har bir keyingi shaklda 3 tadan kam donacha bor.\n\n6-shaklda nechta donacha bo'ladi?",
    },
    '9.2-p-l2-q6': {
      title: 'Mashq: 2-daraja (6-savol)',
      practiceQuestionText: "Naqshda 5, 9, 13 ta gugurt cho'pi ishlatilgan.\n\nZara 10-shaklda 40 ta cho'p bor deb hisobladi.\nQoidadan foydalanib uning javobini tekshiring va tushuntiring.",
    },
    '9.2-p-l3-q7': {
      title: 'Mashq: 3-daraja (7-savol)',
      practiceQuestionText: "Kvadratlar qatorida 4, 7, 10 ta gugurt cho'pi ishlatilgan.\n\n8-shakl uchun nechta gugurt cho'pi kerak bo'ladi?",
    },
    '9.2-p-l3-q8': {
      title: 'Mashq: 3-daraja (8-savol)',
      practiceQuestionText: "Kvadratlar qatori: 4, 7, 10, ...\n\nBir shaklda 31 ta gugurt cho'pi ishlatilgan.\nBu nechanchi shakl (pattern number)?",
    },
    '9.2-p-l3-q9': {
      title: 'Mashq: 3-daraja (9-savol)',
      practiceQuestionText: "Birinchi hadi 6 va qoidasi 5 qo'shish bo'lgan naqsh loyihalashtiring.\n\nDastlabki uchta shaklni chizing va ulardagi elementlar sonini ko'rsating.",
    },
  },
};
