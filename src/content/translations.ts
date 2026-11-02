import { Language, SubtopicId } from '../types';

export interface UiTranslations {
  stageTitle: string;
  unitTitle: string;
  displayLabel: string;
  leftMaterial: string;
  rightWhiteboard: string;
  zoom: string;
  fullscreen: string;
  exitFullscreen: string;
  teacherGuide: string;
  back: string;
  next: string;
  previousTerm: string;
  nextTerm: string;
  reset: string;
  rule: string;
  pattern: string;
  patternNumber: string;
  workingSpace: string;
  whiteboardNotes: string;
  blank: string;
  dots: string;
  grid: string;
  lined: string;
  axes: string;
  level1: string;
  level2: string;
  level3: string;
  basic: string;
  medium: string;
  challenge: string;
  question: string;
  questionOf: string;
  writeWorkingPrompt: string;
  workedExample: string;
  problem: string;
  nextStep: string;
  commonMistake: string;
  correctApproach: string;
  keyRuleToRemember: string;
  unitVocabulary: string;
  input: string;
  output: string;
  run: string;
  test: string;
  nextRow: string;
  nextColumn: string;
  inverseMode: string;
  forwardMode: string;
  nextNegativeTerm: string;
  sequenceSoFar: string;
  term: string;
  position: string;
  working: string;
  newlyAdded: string;
  subtopicKeywords: string;
}

export interface SubtopicMetadata {
  title: string;
  fullTitle: string;
  // Keywords specifically highlighted with English equivalents
  keywords: { local: string; en: string }[];
}

export const subtopicTranslations: Record<Language, Record<SubtopicId, SubtopicMetadata>> = {
  en: {
    '9.1': {
      title: 'Generating sequences (1)',
      fullTitle: '9.1 Generating sequences (1)',
      keywords: [
        { local: 'Sequence', en: 'Sequence' },
        { local: 'Term', en: 'Term' },
        { local: 'Term-to-term rule', en: 'Term-to-term rule' },
        { local: 'Increasing', en: 'Increasing' },
        { local: 'Decreasing', en: 'Decreasing' },
      ],
    },
    '9.2': {
      title: 'Generating sequences (2)',
      fullTitle: '9.2 Generating sequences (2)',
      keywords: [
        { local: 'Spatial pattern', en: 'Spatial pattern' },
        { local: 'Pattern number', en: 'Pattern number' },
        { local: 'Matchstick', en: 'Matchstick' },
        { local: 'Shared edge', en: 'Shared edge' },
      ],
    },
    '9.3': {
      title: 'Using the nth term',
      fullTitle: '9.3 Using the nth term',
      keywords: [
        { local: 'nth term', en: 'nth term' },
        { local: 'Position (n)', en: 'Position (n)' },
        { local: 'Position-to-term rule', en: 'Position-to-term rule' },
        { local: 'Formula', en: 'Formula' },
      ],
    },
    '9.4': {
      title: 'Representing simple functions',
      fullTitle: '9.4 Representing simple functions',
      keywords: [
        { local: 'Function', en: 'Function' },
        { local: 'Input (x)', en: 'Input (x)' },
        { local: 'Output (y)', en: 'Output (y)' },
        { local: 'Inverse operation', en: 'Inverse operation' },
      ],
    },
  },
  id: {
    '9.1': {
      title: 'Menghasilkan barisan (1)',
      fullTitle: '9.1 Menghasilkan barisan (1)',
      keywords: [
        { local: 'Barisan', en: 'Sequence' },
        { local: 'Suku', en: 'Term' },
        { local: 'Aturan antar-suku', en: 'Term-to-term rule' },
        { local: 'Meningkat / Naik', en: 'Increasing' },
        { local: 'Menurun / Turun', en: 'Decreasing' },
      ],
    },
    '9.2': {
      title: 'Menghasilkan barisan (2)',
      fullTitle: '9.2 Menghasilkan barisan (2)',
      keywords: [
        { local: 'Pola spasial', en: 'Spatial pattern' },
        { local: 'Nomor pola', en: 'Pattern number' },
        { local: 'Korek api', en: 'Matchstick' },
        { local: 'Sisi bersama', en: 'Shared edge' },
      ],
    },
    '9.3': {
      title: 'Menggunakan suku ke-n',
      fullTitle: '9.3 Menggunakan suku ke-n',
      keywords: [
        { local: 'Suku ke-n', en: 'nth term' },
        { local: 'Posisi (n)', en: 'Position (n)' },
        { local: 'Aturan posisi-ke-suku', en: 'Position-to-term rule' },
        { local: 'Rumus', en: 'Formula' },
      ],
    },
    '9.4': {
      title: 'Merepresentasikan fungsi sederhana',
      fullTitle: '9.4 Merepresentasikan fungsi sederhana',
      keywords: [
        { local: 'Fungsi', en: 'Function' },
        { local: 'Masukan (x)', en: 'Input (x)' },
        { local: 'Keluaran (y)', en: 'Output (y)' },
        { local: 'Operasi invers', en: 'Inverse operation' },
      ],
    },
  },
  uz: {
    '9.1': {
      title: 'Ketma-ketliklarni hosil qilish (1)',
      fullTitle: '9.1 Ketma-ketliklarni hosil qilish (1)',
      keywords: [
        { local: 'Ketma-ketlik', en: 'Sequence' },
        { local: 'Had', en: 'Term' },
        { local: 'Haddan-hadga qoida', en: 'Term-to-term rule' },
        { local: "O'suvchi", en: 'Increasing' },
        { local: 'Kamayuvchi', en: 'Decreasing' },
      ],
    },
    '9.2': {
      title: 'Ketma-ketliklarni hosil qilish (2)',
      fullTitle: '9.2 Ketma-ketliklarni hosil qilish (2)',
      keywords: [
        { local: 'Fazoviy naqsh / Shakl', en: 'Spatial pattern' },
        { local: 'Shakl raqami', en: 'Pattern number' },
        { local: "Gugurt cho'pi", en: 'Matchstick' },
        { local: "Umumiy qovurg'a", en: 'Shared edge' },
      ],
    },
    '9.3': {
      title: 'n-had qoidasidan foydalanish',
      fullTitle: '9.3 n-had qoidasidan foydalanish',
      keywords: [
        { local: 'n-had', en: 'nth term' },
        { local: "O'rin / Pozitsiya (n)", en: 'Position (n)' },
        { local: "O'rindan-hadga qoida", en: 'Position-to-term rule' },
        { local: 'Formula', en: 'Formula' },
      ],
    },
    '9.4': {
      title: 'Oddiy funksiyalarni ifodalash',
      fullTitle: '9.4 Oddiy funksiyalarni ifodalash',
      keywords: [
        { local: 'Funksiya', en: 'Function' },
        { local: 'Kirish (x)', en: 'Input (x)' },
        { local: 'Chiqish (y)', en: 'Output (y)' },
        { local: 'Teskari amal', en: 'Inverse operation' },
      ],
    },
  },
};

export const uiTranslations: Record<Language, UiTranslations> = {
  en: {
    stageTitle: 'Stage 7 • Unit 9',
    unitTitle: 'Sequences & Functions',
    displayLabel: 'Display:',
    leftMaterial: 'Left: Material',
    rightWhiteboard: 'Right: Whiteboard',
    zoom: 'Zoom',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit',
    teacherGuide: 'Teacher Guide',
    back: 'Back',
    next: 'Next',
    previousTerm: 'Prev',
    nextTerm: 'Next',
    reset: 'Reset',
    rule: 'Rule',
    pattern: 'Pattern',
    patternNumber: 'Pattern (n)',
    workingSpace: 'Whiteboard Board',
    whiteboardNotes: '(Papan Tulis / Notes)',
    blank: 'Blank',
    dots: 'Dots',
    grid: 'Grid',
    lined: 'Lined',
    axes: 'Axes',
    level1: 'Level 1: Basic',
    level2: 'Level 2: Medium',
    level3: 'Level 3: Challenge',
    basic: 'Basic',
    medium: 'Medium',
    challenge: 'Challenge',
    question: 'Question',
    questionOf: 'of 9',
    writeWorkingPrompt: 'Write working in the whiteboard on the right.',
    workedExample: 'Worked Example',
    problem: 'Problem',
    nextStep: 'Next step',
    commonMistake: 'Common Mistake',
    correctApproach: 'Correct Approach',
    keyRuleToRemember: 'Key Rule to Remember',
    unitVocabulary: 'Unit Vocabulary',
    input: 'Input',
    output: 'Output',
    run: 'Run',
    test: 'Test:',
    nextRow: 'Next row',
    nextColumn: 'Next column',
    inverseMode: 'Inverse Mode',
    forwardMode: 'Forward Mode',
    nextNegativeTerm: 'Next negative term',
    sequenceSoFar: 'Sequence:',
    term: 'Term',
    position: 'Position (n)',
    working: 'Working',
    newlyAdded: 'Newly added in Pattern',
    subtopicKeywords: 'Key Vocabulary (English):',
  },
  id: {
    stageTitle: 'Tingkat 7 • Unit 9',
    unitTitle: 'Barisan & Fungsi (Sequences & Functions)',
    displayLabel: 'Tampilan:',
    leftMaterial: 'Kiri: Materi',
    rightWhiteboard: 'Kanan: Papan Tulis',
    zoom: 'Skala',
    fullscreen: 'Layar Penuh',
    exitFullscreen: 'Keluar',
    teacherGuide: 'Panduan Guru',
    back: 'Kembali',
    next: 'Lanjut',
    previousTerm: 'Suku Sblm',
    nextTerm: 'Suku Lanjut',
    reset: 'Atur Ulang',
    rule: 'Aturan (Rule)',
    pattern: 'Pola (Pattern)',
    patternNumber: 'Pola (n)',
    workingSpace: 'Papan Tulis (Whiteboard)',
    whiteboardNotes: '(Papan Tulis / Catatan)',
    blank: 'Polos',
    dots: 'Titik',
    grid: 'Kisi',
    lined: 'Garis',
    axes: 'Sumbu (Axes)',
    level1: 'Level 1: Dasar (Basic)',
    level2: 'Level 2: Menengah (Medium)',
    level3: 'Level 3: Tantangan (Challenge)',
    basic: 'Dasar (Basic)',
    medium: 'Menengah (Medium)',
    challenge: 'Tantangan (Challenge)',
    question: 'Soal (Question)',
    questionOf: 'dari 9',
    writeWorkingPrompt: 'Tuliskan cara kerja di papan tulis sebelah kanan.',
    workedExample: 'Contoh Soal (Worked Example)',
    problem: 'Masalah (Problem)',
    nextStep: 'Langkah berikutnya',
    commonMistake: 'Kesalahan Umum (Common Mistake)',
    correctApproach: 'Pendekatan Benar (Correct Approach)',
    keyRuleToRemember: 'Aturan Penting yang Harus Diingat',
    unitVocabulary: 'Kosakata Unit (Unit Vocabulary)',
    input: 'Masukan (Input)',
    output: 'Keluaran (Output)',
    run: 'Jalankan',
    test: 'Uji (Test):',
    nextRow: 'Baris berikutnya',
    nextColumn: 'Kolom berikutnya',
    inverseMode: 'Mode Invers (Inverse Mode)',
    forwardMode: 'Mode Normal (Forward Mode)',
    nextNegativeTerm: 'Suku negatif berikutnya',
    sequenceSoFar: 'Barisan (Sequence):',
    term: 'Suku (Term)',
    position: 'Posisi / n (Position)',
    working: 'Perhitungan (Working)',
    newlyAdded: 'Baru ditambahkan pada Pola',
    subtopicKeywords: 'Kosakata Kunci (English Keywords):',
  },
  uz: {
    stageTitle: '7-bosqich • 9-mavzu',
    unitTitle: 'Ketma-ketliklar va Funksiyalar (Sequences & Functions)',
    displayLabel: 'Koʻrinish:',
    leftMaterial: 'Chap: Darslik',
    rightWhiteboard: 'Oʻng: Doska',
    zoom: 'Masshtab',
    fullscreen: "To'liq ekran",
    exitFullscreen: 'Chiqish',
    teacherGuide: "O'qituvchi yo'riqnomasi",
    back: 'Orqaga',
    next: 'Oldinga',
    previousTerm: 'Oldingi had',
    nextTerm: 'Keyingi had',
    reset: 'Qaytarish',
    rule: 'Qoida (Rule)',
    pattern: 'Shakl (Pattern)',
    patternNumber: 'Shakl (n)',
    workingSpace: 'Ishchi Doska (Whiteboard)',
    whiteboardNotes: '(Doska / Qoralamalar)',
    blank: 'Boʻsh',
    dots: 'Nuqtali',
    grid: 'Katakli',
    lined: 'Chiziqli',
    axes: "O'qlar (Axes)",
    level1: '1-daraja: Oddiy (Basic)',
    level2: "2-daraja: O'rtacha (Medium)",
    level3: '3-daraja: Murakkab (Challenge)',
    basic: 'Oddiy (Basic)',
    medium: "O'rtacha (Medium)",
    challenge: 'Murakkab (Challenge)',
    question: 'Savol (Question)',
    questionOf: 'dan 9',
    writeWorkingPrompt: "Yechimni o'ng tarafdagi ishchi doskaga yozing.",
    workedExample: 'Namunaviy Misol (Worked Example)',
    problem: 'Masala (Problem)',
    nextStep: 'Keyingi qadam',
    commonMistake: 'Keng tarqalgan xato (Common Mistake)',
    correctApproach: "To'g'ri yondashuv (Correct Approach)",
    keyRuleToRemember: 'Eslab qolish kerak boʻlgan asosiy qoida',
    unitVocabulary: "Mavzu atamalari (Unit Vocabulary)",
    input: 'Kirish (Input)',
    output: 'Chiqish (Output)',
    run: 'Bajarish',
    test: 'Sinash (Test):',
    nextRow: 'Keyingi qator',
    nextColumn: 'Keyingi ustun',
    inverseMode: 'Teskari rejim (Inverse Mode)',
    forwardMode: "To'g'ri rejim (Forward Mode)",
    nextNegativeTerm: 'Keyingi manfiy had',
    sequenceSoFar: 'Ketma-ketlik (Sequence):',
    term: 'Had (Term)',
    position: "O'rin / n (Position)",
    working: 'Yechish (Working)',
    newlyAdded: 'Shaklga yangi qoʻshilgan qismlar',
    subtopicKeywords: 'Asosiy atamalar (English Keywords):',
  },
};
