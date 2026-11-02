import React from 'react';
import { X, Pen, Hand, Eraser, Grid, Monitor, Sparkles, Globe } from 'lucide-react';
import { Language } from '../../types';

interface TeacherHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: Language;
}

export const TeacherHelpModal: React.FC<TeacherHelpModalProps> = ({
  isOpen,
  onClose,
  language = 'en',
}) => {
  if (!isOpen) return null;

  const content = {
    en: {
      title: 'Teacher Guide & IFP Board Controls',
      langTitle: 'Multilingual Classroom Support (EN / ID / UZ)',
      langDesc: 'The top bar allows you to switch between English, Indonesian, and Uzbek at any time. When Indonesian or Uzbek is chosen, all curriculum keywords are paired with their exact English terms (e.g. Barisan → Sequence, Suku → Term) so students build familiarity with Cambridge English mathematical vocabulary.',
      modesTitle: 'Draw Mode vs. Interact Mode',
      drawModeDesc: 'Draw Mode (Red Pencil): Full-screen whiteboard ink layer. Write annotations, equations, and solutions. Page elements below do not respond so ink flows smoothly without moving slides.',
      interactModeDesc: 'Interact Mode (Blue Hand): Manipulate slides, touch sequence reveal buttons, sliders, pattern step counters, and function machines.',
      toolsTitle: 'Tools, Snapping & Palm Rejection',
      toolsDesc: 'Stroke Eraser deletes entire strokes cleanly. Straight line tool snaps to exact horizontal and vertical. Stored per screen so notes remain intact.',
      practiceTitle: 'Split Screen: Material & Working Board',
      practiceDesc: 'Every slide is split into two zones: Left for structured lesson material, and Right for the teacher whiteboard with background toggles (Blank, Dots, Grid, Lined, Axes).',
      close: 'Close Guide',
    },
    id: {
      title: 'Panduan Guru & Kontrol Papan IFP',
      langTitle: 'Dukungan Bahasa Multilingual (Indonesia, Inggris, Uzbek)',
      langDesc: 'Bilah atas menyediakan dropdown pilihan 3 bahasa: Bahasa Inggris, Bahasa Indonesia, dan Bahasa Uzbek. Ketika Bahasa Indonesia atau Uzbek dipilih, kata kunci matematika Cambridge tetap ditampilkan bersama padanan Bahasa Inggrisnya (contoh: Barisan → Sequence, Suku → Term, Pola Spasial → Spatial pattern) agar siswa terbiasa dengan kosakata matematika internasional.',
      modesTitle: 'Mode Menggambar (Draw) vs Mode Interaksi (Interact)',
      drawModeDesc: 'Mode Draw (Pensil Merah): Lapisan tinta papan tulis penuh. Tuliskan penjelasan, coretan, rumus, dan solusi. Tombol di bawah tidak tertekan agar tinta mengalir lancar.',
      interactModeDesc: 'Mode Interact (Tangan Biru): Menekan tombol di layar seperti membuka suku barisan, menggeser pola, atau menjalankan mesin fungsi.',
      toolsTitle: 'Alat, Penghapus Suku & Penolakan Telapak Tangan',
      toolsDesc: 'Penghapus coretan menghapus satu garis utuh dengan cepat. Garis lurus otomatis terkunci horizontal/vertikal. Tulisan tersimpan otomatis per layar.',
      practiceTitle: 'Layar Terbagi Dua: Materi & Papan Tulis',
      practiceDesc: 'Setiap layar terbagi menjadi dua bagian: Sisi Kiri untuk materi pelajaran terstruktur dan Sisi Kanan untuk papan tulis interaktif dengan pilihan latar belakang (Polos, Titik, Kisi, Garis, Sumbu).',
      close: 'Tutup Panduan',
    },
    uz: {
      title: "O'qituvchi Qo'llanmasi & Doska Boshqaruvi",
      langTitle: "Ko'p tilli ta'lim yordamchisi (Ingliz, O'zbek, Indonez)",
      langDesc: "Yuqori panelda 3 ta til mavjud: Inglizcha, O'zbekcha va Indonezcha. O'zbekcha tanlanganda ham har bir mavzuning asosiy atamalari inglizcha tarjimasi bilan birga ko'rsatiladi (masalan: Ketma-ketlik → Sequence, Had → Term, Funksiya → Function), bu o'quvchilarga Cambridge xalqaro atamalarini o'rganishda yordam beradi.",
      modesTitle: "Chizish (Draw) va O'zaro ta'sir (Interact) rejimlari",
      drawModeDesc: "Draw rejimi (Qizil qalam): Doskaga to'liq yozish imkoniyati. Izohlar, formulalar va yechimlarni erkin yozing. Pastdagi tugmalar tasodifiy bosilmaydi.",
      interactModeDesc: "Interact rejimi (Ko'k qo'l): Slayd elementlari bilan ishlash, qadamlarni ochish, mashinani ishlatish.",
      toolsTitle: "Asboblar, O'chirg'ich va Kaftni rad etish",
      toolsDesc: "Chiziqli o'chirg'ich bitta chiziqni toza o'chiradi. To'g'ri chiziq avtomatik tekislanadi. Yozuvlar har bir slayd uchun avtomatik saqlanadi.",
      practiceTitle: "Ikki qismli ekran: Darslik va Ishchi doska",
      practiceDesc: "Har bir ekran ikki qismga bo'lingan: Chap tomon dars mazmuni, O'ng tomon esa yozish uchun maxsus doska (Bo'sh, Nuqtali, Katakli, Chiziqli, O'qlar).",
      close: "Yo'riqnomani yopish",
    },
  }[language] || {
    title: 'Teacher Guide',
    langTitle: 'Multilingual Support',
    langDesc: '',
    modesTitle: '',
    drawModeDesc: '',
    interactModeDesc: '',
    toolsTitle: '',
    toolsDesc: '',
    practiceTitle: '',
    practiceDesc: '',
    close: 'Close',
  };

  return (
    <div className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 select-none">
      <div className="bg-[#FAF7F0] rounded-3xl border-4 border-[#0F2042] max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#0F2042] text-white px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-[#F59E0B]" />
            <h2 className="text-2xl sm:text-3xl font-black tracking-wide">
              {content.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 sm:space-y-6 text-[#0F2042]">
          {/* Section 0: Multilingual & English Keywords */}
          <div className="bg-[#EFF6FF] rounded-2xl border-2 border-[#BFDBFE] p-4 sm:p-5 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-black text-[#1E40AF] mb-2 flex items-center gap-2">
              <span className="p-1 rounded-lg bg-[#DBEAFE] text-[#1D70B8]">
                <Globe className="w-5 h-5 inline" />
              </span>
              {content.langTitle}
            </h3>
            <p className="text-base sm:text-lg font-bold text-[#1E3A8A] leading-relaxed">
              {content.langDesc}
            </p>
          </div>

          {/* Section 1: Draw vs Interact Mode */}
          <div className="bg-white rounded-2xl border-2 border-[#CBD5E1] p-4 sm:p-5 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-black text-[#0F2042] mb-2 flex items-center gap-2">
              <span className="p-1 rounded-lg bg-[#DBEAFE] text-[#1D70B8]">
                <Pen className="w-5 h-5 inline" />
              </span>
              {content.modesTitle}
            </h3>
            <ul className="space-y-2 text-base sm:text-lg font-bold text-[#334155]">
              <li>
                <strong className="text-[#DC2626]">Draw:</strong> {content.drawModeDesc}
              </li>
              <li>
                <strong className="text-[#1D70B8]">Interact:</strong> {content.interactModeDesc}
              </li>
            </ul>
          </div>

          {/* Section 2: Whiteboard Tools */}
          <div className="bg-white rounded-2xl border-2 border-[#CBD5E1] p-4 sm:p-5 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-black text-[#0F2042] mb-2 flex items-center gap-2">
              <span className="p-1 rounded-lg bg-[#FEF3C7] text-[#D97706]">
                <Eraser className="w-5 h-5 inline" />
              </span>
              {content.toolsTitle}
            </h3>
            <p className="text-base sm:text-lg font-bold text-[#334155] leading-relaxed">
              {content.toolsDesc}
            </p>
          </div>

          {/* Section 3: Split Layout */}
          <div className="bg-white rounded-2xl border-2 border-[#CBD5E1] p-4 sm:p-5 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-black text-[#0F2042] mb-2 flex items-center gap-2">
              <span className="p-1 rounded-lg bg-[#EDE9FE] text-[#7C3AED]">
                <Grid className="w-5 h-5 inline" />
              </span>
              {content.practiceTitle}
            </h3>
            <p className="text-base sm:text-lg font-bold text-[#334155] leading-relaxed">
              {content.practiceDesc}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#F1F5F9] px-6 sm:px-8 py-3 sm:py-4 border-t-2 border-[#CBD5E1] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl bg-[#0F2042] text-white font-black text-lg sm:text-xl shadow hover:bg-[#1E293B] cursor-pointer"
          >
            {content.close}
          </button>
        </div>
      </div>
    </div>
  );
};
