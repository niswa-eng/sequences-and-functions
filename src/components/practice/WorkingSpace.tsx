import React, { useState } from 'react';
import { AlignJustify, Square, Crosshair } from 'lucide-react';
import { Language, WorkingGridType } from '../../types';
import { uiTranslations } from '../../content/translations';

interface WorkingSpaceProps {
  className?: string;
  themeColor?: string;
  language?: Language;
}

export const WorkingSpace: React.FC<WorkingSpaceProps> = ({
  className = '',
  themeColor = '#1D70B8',
  language = 'en',
}) => {
  const [gridType, setGridType] = useState<WorkingGridType>('square');
  const t = uiTranslations[language] || uiTranslations.en;

  return (
    <div className={`relative flex flex-col h-full rounded-3xl border-3 border-[#CBD5E1] bg-white overflow-hidden shadow-sm ${className}`}>
      {/* Top Bar for Whiteboard Board with Background Selector */}
      <div className="flex items-center justify-between px-3 sm:px-5 py-2 sm:py-3 border-b-2 border-[#CBD5E1] bg-[#F8FAFC]">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-xl sm:text-2xl font-black text-[#0F2042] truncate">
            {t.workingSpace}
          </span>
          <span className="text-xs sm:text-sm font-bold text-[#64748B] hidden md:inline truncate">
            {t.whiteboardNotes}
          </span>
        </div>

        {/* Background grid toggle */}
        <div className="flex items-center gap-1 p-0.5 sm:p-1 bg-white rounded-xl border border-[#CBD5E1]">
          <button
            onClick={() => setGridType('blank')}
            className={`px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1 transition-all ${
              gridType === 'blank'
                ? 'bg-[#0F2042] text-white shadow-xs'
                : 'text-[#64748B] hover:text-[#0F2042]'
            }`}
            title={t.blank}
          >
            <span>{t.blank}</span>
          </button>

          <button
            onClick={() => setGridType('dot')}
            className={`px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1 transition-all ${
              gridType === 'dot'
                ? 'bg-[#0F2042] text-white shadow-xs'
                : 'text-[#64748B] hover:text-[#0F2042]'
            }`}
            title={t.dots}
          >
            <span>{t.dots}</span>
          </button>

          <button
            onClick={() => setGridType('square')}
            className={`px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1 transition-all ${
              gridType === 'square'
                ? 'bg-[#0F2042] text-white shadow-xs'
                : 'text-[#64748B] hover:text-[#0F2042]'
            }`}
            title={t.grid}
          >
            <Square className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.grid}</span>
          </button>

          <button
            onClick={() => setGridType('lined')}
            className={`px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1 transition-all ${
              gridType === 'lined'
                ? 'bg-[#0F2042] text-white shadow-xs'
                : 'text-[#64748B] hover:text-[#0F2042]'
            }`}
            title={t.lined}
          >
            <AlignJustify className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.lined}</span>
          </button>

          <button
            onClick={() => setGridType('axes')}
            className={`px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1 transition-all ${
              gridType === 'axes'
                ? 'bg-[#0F2042] text-white shadow-xs'
                : 'text-[#64748B] hover:text-[#0F2042]'
            }`}
            title={t.axes}
          >
            <Crosshair className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.axes}</span>
          </button>
        </div>
      </div>

      {/* Surface Area with selected background grid pattern */}
      <div className="flex-1 w-full h-full relative">
        <svg className="w-full h-full absolute inset-0 pointer-events-none">
          <defs>
            {/* Dot grid pattern */}
            <pattern
              id="dot-pattern"
              x="0"
              y="0"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="12" cy="12" r="1.5" fill="#94A3B8" opacity="0.6" />
            </pattern>

            {/* Square grid pattern */}
            <pattern
              id="square-grid"
              x="0"
              y="0"
              width="26"
              height="26"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 26 0 L 0 0 0 26"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="1"
                opacity="0.8"
              />
            </pattern>

            {/* Lined pattern */}
            <pattern
              id="lined-pattern"
              x="0"
              y="0"
              width="100"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="31"
                x2="100"
                y2="31"
                stroke="#CBD5E1"
                strokeWidth="1.2"
                opacity="0.85"
              />
            </pattern>
          </defs>

          {/* Render chosen background */}
          {gridType === 'dot' && <rect width="100%" height="100%" fill="url(#dot-pattern)" />}
          {gridType === 'square' && <rect width="100%" height="100%" fill="url(#square-grid)" />}
          {gridType === 'lined' && <rect width="100%" height="100%" fill="url(#lined-pattern)" />}

          {/* Axes Grid */}
          {gridType === 'axes' && (
            <g>
              <rect width="100%" height="100%" fill="url(#square-grid)" opacity="0.4" />
              {/* Vertical Y axis */}
              <line
                x1="25%"
                y1="20"
                x2="25%"
                y2="95%"
                stroke="#0F2042"
                strokeWidth="2.5"
              />
              <polygon points="calc(25% - 5px),24 calc(25% + 5px),24 25%,12" fill="#0F2042" />
              <text x="calc(25% + 12px)" y="34" className="font-bold font-mono fill-[#0F2042] text-xl">
                y
              </text>

              {/* Horizontal X axis */}
              <line
                x1="15"
                y1="75%"
                x2="95%"
                y2="75%"
                stroke="#0F2042"
                strokeWidth="2.5"
              />
              <polygon points="calc(95% - 4px),calc(75% - 5px) calc(95% - 4px),calc(75% + 5px) 95%,75%" fill="#0F2042" />
              <text x="calc(95% - 10px)" y="calc(75% + 28px)" className="font-bold font-mono fill-[#0F2042] text-xl">
                x
              </text>
              <text x="calc(25% - 18px)" y="calc(75% + 24px)" className="font-bold font-mono fill-[#64748B] text-lg">
                0
              </text>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};
