import React, { useState } from 'react';
import { RotateCcw, ChevronRight } from 'lucide-react';
import { MathText } from '../common/MathText';

interface PositionTermTableProps {
  ruleName: string;
  positions?: number[];
  computeFn?: (n: number) => number;
  calculationLabel?: (n: number) => string;
  themeColor?: string;
  initialColumns?: number;
}

export const PositionTermTable: React.FC<PositionTermTableProps> = ({
  ruleName,
  positions = [1, 2, 3, 4, 5],
  computeFn = (n: number) => n + 3,
  calculationLabel,
  themeColor = '#EA580C',
  initialColumns = 2,
}) => {
  const [revealedCount, setRevealedCount] = useState<number>(initialColumns);

  const handleNextCol = () => {
    if (revealedCount < positions.length) {
      setRevealedCount((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setRevealedCount(initialColumns);
  };

  return (
    <div className="w-full flex flex-col items-center select-none py-1">
      {/* Rule Banner */}
      <div className="mb-2 px-4 py-1 rounded-xl bg-white border border-[#CBD5E1] shadow-xs flex items-center gap-2">
        <span className="text-base sm:text-lg font-bold text-[#475569]">Rule:</span>
        <span className="text-xl sm:text-2xl font-black" style={{ color: themeColor }}>
          <MathText>{`$\\text{Term} = ${ruleName}$`}</MathText>
        </span>
      </div>

      {/* Main Table */}
      <div className="w-full max-w-lg bg-white rounded-2xl border-2 border-[#CBD5E1] overflow-hidden shadow-xs">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC] border-b border-[#CBD5E1]">
              <th className="py-2 px-3 text-base sm:text-lg font-black text-[#0F2042] text-left border-r border-[#CBD5E1] w-36">
                Position (<MathText>$n$</MathText>)
              </th>
              {positions.map((n, idx) => (
                <th
                  key={idx}
                  className={`py-2 px-2 text-lg sm:text-xl font-black border-r border-[#E2E8F0] ${
                    idx < revealedCount ? 'text-[#0F2042]' : 'text-[#94A3B8]'
                  }`}
                >
                  {n}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {calculationLabel && (
              <tr className="bg-[#FAF5FF] border-b border-[#CBD5E1]">
                <td className="py-1.5 px-3 text-xs sm:text-sm font-bold text-[#6B21A8] text-left border-r border-[#CBD5E1]">
                  Working
                </td>
                {positions.map((n, idx) => (
                  <td
                    key={idx}
                    className="py-1.5 px-1 text-xs sm:text-sm font-mono font-bold text-[#6B21A8] border-r border-[#E2E8F0]"
                  >
                    {idx < revealedCount ? calculationLabel(n) : '—'}
                  </td>
                ))}
              </tr>
            )}

            <tr className="bg-white">
              <td className="py-2.5 px-3 text-lg sm:text-xl font-black text-[#0F2042] text-left border-r border-[#CBD5E1]">
                Term
              </td>
              {positions.map((n, idx) => {
                const termVal = computeFn(n);
                const isRevealed = idx < revealedCount;
                return (
                  <td
                    key={idx}
                    className={`py-2.5 px-2 text-xl sm:text-2xl font-black border-r border-[#E2E8F0] ${
                      isRevealed ? '' : 'text-[#CBD5E1]'
                    }`}
                    style={{ color: isRevealed ? themeColor : undefined }}
                  >
                    {isRevealed ? termVal : '—'}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Control Actions */}
      <div className="flex items-center gap-3 mt-2">
        <button
          onClick={handleNextCol}
          disabled={revealedCount >= positions.length}
          className="px-4 py-1.5 rounded-xl text-white font-black text-base flex items-center gap-1 disabled:opacity-40 shadow-xs transition-transform active:scale-95 cursor-pointer"
          style={{ backgroundColor: themeColor }}
        >
          <span>Next column</span>
          <ChevronRight className="w-5 h-5" />
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
