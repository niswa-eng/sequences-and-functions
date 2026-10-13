import React from 'react';
import { X, Pen, Hand, Eraser, Grid, Monitor, Sparkles } from 'lucide-react';

interface TeacherHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeacherHelpModal: React.FC<TeacherHelpModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 select-none">
      <div className="bg-[#FAF7F0] rounded-3xl border-4 border-[#0F2042] max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#0F2042] text-white px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-[#F59E0B]" />
            <h2 className="text-3xl font-black tracking-wide">
              Teacher Guide & IFP Board Controls
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-8 overflow-y-auto space-y-6 text-[#0F2042]">
          {/* Section 1: Draw vs Interact Mode */}
          <div className="bg-white rounded-2xl border-2 border-[#CBD5E1] p-5 shadow-sm">
            <h3 className="text-2xl font-black text-[#0F2042] mb-3 flex items-center gap-2">
              <span className="p-1 rounded-lg bg-[#DBEAFE] text-[#1D70B8]">
                <Pen className="w-6 h-6 inline" />
              </span>
              Draw Mode vs. Interact Mode
            </h3>
            <ul className="space-y-2 text-xl font-bold text-[#334155]">
              <li>
                <strong className="text-[#DC2626]">Draw Mode (Red Pencil):</strong> Full-screen whiteboard ink layer. Write annotations, equations, and solutions. Page elements below do not respond so ink flows smoothly without moving slides.
              </li>
              <li>
                <strong className="text-[#1D70B8]">Interact Mode (Blue Hand):</strong> Manipulate slides, touch sequence reveal buttons, sliders, pattern step counters, and function machines.
              </li>
            </ul>
          </div>

          {/* Section 2: Whiteboard Tools & Palm Rejection */}
          <div className="bg-white rounded-2xl border-2 border-[#CBD5E1] p-5 shadow-sm">
            <h3 className="text-2xl font-black text-[#0F2042] mb-3 flex items-center gap-2">
              <span className="p-1 rounded-lg bg-[#FEF3C7] text-[#D97706]">
                <Eraser className="w-6 h-6 inline" />
              </span>
              Tools, Snapping & Palm Rejection
            </h3>
            <ul className="space-y-2 text-xl font-bold text-[#334155]">
              <li>
                <strong>Stroke Eraser:</strong> Swipe across any stroke to delete the entire stroke cleanly.
              </li>
              <li>
                <strong>Shape Helpers:</strong> Straight line snaps to exact horizontal and vertical. Ruler tool draws measured tick marks.
              </li>
              <li>
                <strong>Palm Rejection:</strong> Active stylus input is prioritized over palm contact. Stored per screen so your notes remain intact when navigating between steps!
              </li>
            </ul>
          </div>

          {/* Section 3: Practice Screens & Working Space */}
          <div className="bg-white rounded-2xl border-2 border-[#CBD5E1] p-5 shadow-sm">
            <h3 className="text-2xl font-black text-[#0F2042] mb-3 flex items-center gap-2">
              <span className="p-1 rounded-lg bg-[#EDE9FE] text-[#7C3AED]">
                <Grid className="w-6 h-6 inline" />
              </span>
              Practice Screens & Background Grid
            </h3>
            <p className="text-xl font-bold text-[#334155] leading-relaxed">
              Every subtopic contains 9 practice questions across 3 levels (Level 1 Basic, Level 2 Medium, Level 3 Challenge). The right side is a generous 60% Working Space with a background switcher for <strong>Blank, Dot grid, Square grid, Lined, and Coordinate Axes</strong>.
            </p>
          </div>

          {/* Section 4: Display & Projection Guidelines */}
          <div className="bg-white rounded-2xl border-2 border-[#CBD5E1] p-5 shadow-sm">
            <h3 className="text-2xl font-black text-[#0F2042] mb-3 flex items-center gap-2">
              <span className="p-1 rounded-lg bg-[#DCFCE7] text-[#16A34A]">
                <Monitor className="w-6 h-6 inline" />
              </span>
              Interactive Flat Panel (IFP) Display
            </h3>
            <p className="text-xl font-bold text-[#334155] leading-relaxed">
              Designed for 1080p and 4K interactive flat panels (Promethean, SMART Board, BenQ, ViewSonic) and classroom tablets. Press the <strong>Fullscreen</strong> button in the top right corner to eliminate browser borders.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#F1F5F9] px-8 py-4 border-t-2 border-[#CBD5E1] flex justify-end">
          <button
            onClick={onClose}
            className="touch-target-lg px-8 py-3 rounded-2xl bg-[#0F2042] text-white font-black text-2xl shadow hover:bg-[#1E293B] cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
