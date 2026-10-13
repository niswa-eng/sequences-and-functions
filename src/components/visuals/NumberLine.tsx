import React, { useState } from 'react';
import { RotateCcw, ChevronLeft } from 'lucide-react';

interface NumberLineProps {
  terms?: number[];
  diff?: number;
  initialRevealed?: number;
  themeColor?: string;
}

export const NumberLine: React.FC<NumberLineProps> = ({
  terms = [12, 8, 4, 0, -4, -8],
  diff = -4,
  initialRevealed = 3,
  themeColor = '#1D70B8',
}) => {
  const [revealedCount, setRevealedCount] = useState<number>(initialRevealed);

  const minVal = -10;
  const maxVal = 14;
  const range = maxVal - minVal;

  const handleNext = () => {
    if (revealedCount < terms.length) {
      setRevealedCount((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setRevealedCount(initialRevealed);
  };

  const svgWidth = 640;
  const svgHeight = 130;
  const lineY = 85;
  const startX = 40;
  const endX = svgWidth - 40;
  const widthPerUnit = (endX - startX) / range;

  const getX = (val: number) => startX + (val - minVal) * widthPerUnit;

  return (
    <div className="w-full flex flex-col items-center select-none py-1">
      <div className="w-full bg-white rounded-2xl border-2 border-[#CBD5E1] p-2 shadow-xs overflow-x-auto flex flex-col items-center">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full max-w-[640px] h-auto overflow-visible"
        >
          {/* Main Axis Line */}
          <line
            x1={startX - 15}
            y1={lineY}
            x2={endX + 15}
            y2={lineY}
            stroke="#0F2042"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <polygon
            points={`${startX - 22},${lineY} ${startX - 12},${lineY - 5} ${startX - 12},${lineY + 5}`}
            fill="#0F2042"
          />
          <polygon
            points={`${endX + 22},${lineY} ${endX + 12},${lineY - 5} ${endX + 12},${lineY + 5}`}
            fill="#0F2042"
          />

          {/* Integer Ticks */}
          {Array.from({ length: range + 1 }, (_, i) => minVal + i).map((n) => {
            const x = getX(n);
            const isZero = n === 0;
            const isMajor = n % 2 === 0;
            const tickHeight = isZero ? 18 : isMajor ? 12 : 8;

            return (
              <g key={n}>
                <line
                  x1={x}
                  y1={lineY - tickHeight / 2}
                  x2={x}
                  y2={lineY + tickHeight / 2}
                  stroke={isZero ? '#DC2626' : '#64748B'}
                  strokeWidth={isZero ? '3' : isMajor ? '2' : '1'}
                />
                {isMajor && (
                  <text
                    x={x}
                    y={lineY + 22}
                    textAnchor="middle"
                    className={`font-mono ${
                      isZero
                        ? 'fill-[#DC2626] font-black text-sm'
                        : n < 0
                        ? 'fill-[#DC2626] font-bold text-xs'
                        : 'fill-[#0F2042] font-bold text-xs'
                    }`}
                  >
                    {n}
                  </text>
                )}
              </g>
            );
          })}

          {/* Jump Arcs */}
          {terms.slice(0, revealedCount).map((term, idx) => {
            if (idx === terms.length - 1 || idx >= revealedCount - 1) return null;
            const nextTerm = terms[idx + 1];
            const x1 = getX(term);
            const x2 = getX(nextTerm);
            const midX = (x1 + x2) / 2;
            const arcHeight = 36;

            return (
              <g key={`arc-${idx}`}>
                <path
                  d={`M ${x1} ${lineY - 4} Q ${midX} ${lineY - arcHeight} ${x2} ${lineY - 4}`}
                  stroke={themeColor}
                  strokeWidth="2.5"
                  strokeDasharray="4,3"
                  fill="none"
                />
                <polygon
                  points={`${x2},${lineY - 4} ${x2 + 5},${lineY - 11} ${x2},${lineY - 13}`}
                  fill={themeColor}
                />
                <rect
                  x={midX - 16}
                  y={lineY - arcHeight - 12}
                  width="32"
                  height="18"
                  rx="6"
                  fill={themeColor}
                />
                <text
                  x={midX}
                  y={lineY - arcHeight}
                  textAnchor="middle"
                  className="fill-white font-bold text-xs"
                >
                  {diff}
                </text>
              </g>
            );
          })}

          {/* Term Markers */}
          {terms.slice(0, revealedCount).map((term, idx) => {
            const x = getX(term);
            const isNegative = term < 0;

            return (
              <g key={`term-${idx}`}>
                <circle
                  cx={x}
                  cy={lineY}
                  r="6"
                  fill={isNegative ? '#DC2626' : themeColor}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
                <rect
                  x={x - 18}
                  y={lineY - 34}
                  width="36"
                  height="22"
                  rx="5"
                  fill="#0F2042"
                />
                <text
                  x={x}
                  y={lineY - 19}
                  textAnchor="middle"
                  className="fill-white font-black text-xs font-mono"
                >
                  {term}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Summary */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs sm:text-sm font-bold text-[#475569]">Sequence:</span>
          <div className="flex items-center gap-1">
            {terms.slice(0, revealedCount).map((t, idx) => (
              <span
                key={idx}
                className={`px-2 py-0.5 rounded-lg text-sm font-black ${
                  t < 0 ? 'bg-[#FEE2E2] text-[#DC2626]' : 'bg-[#E0F2FE] text-[#0369A1]'
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 mt-2">
        <button
          onClick={handleNext}
          disabled={revealedCount >= terms.length}
          className="px-4 py-1.5 rounded-xl text-white font-black text-base flex items-center gap-1 disabled:opacity-40 shadow-xs transition-transform active:scale-95 cursor-pointer"
          style={{ backgroundColor: themeColor }}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Next negative term</span>
        </button>

        <button
          onClick={handleReset}
          className="px-3.5 py-1.5 rounded-xl bg-white border border-[#CBD5E1] text-[#475569] font-bold text-base flex items-center gap-1 hover:bg-[#F1F5F9] transition-transform active:scale-95 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};
