import React, { useState } from 'react';
import { RotateCcw, ChevronDown } from 'lucide-react';
import { MathText } from '../common/MathText';

interface MappingTableProps {
  ruleLabel: string; // e.g. "y = x + 7" or "y = 3x"
  rows: Array<{ x: number; y: number }>;
  themeColor?: string;
  initialRows?: number;
}

export const MappingTable: React.FC<MappingTableProps> = ({
  ruleLabel,
  rows,
  themeColor = '#7C3AED',
  initialRows = 1,
}) => {
  const [revealedRows, setRevealedRows] = useState<number>(initialRows);

  const handleNextRow = () => {
    if (revealedRows < rows.length) {
      setRevealedRows((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setRevealedRows(initialRows);
  };

  return (
    <div className="w-full flex flex-col items-center select-none py-3">
      {/* Rule Title */}
      <div className="mb-4 px-6 py-2 rounded-2xl bg-white border-2 border-[#CBD5E1] shadow-sm flex items-center gap-3">
        <span className="text-2xl font-bold text-[#475569]">Rule:</span>
        <span className="text-3xl font-black" style={{ color: themeColor }}>
          <MathText>{`$${ruleLabel}$`}</MathText>
        </span>
      </div>

      {/* Table Structure */}
      <div className="w-full max-w-lg bg-white rounded-3xl border-3 border-[#CBD5E1] overflow-hidden shadow-md">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC] border-b-2 border-[#CBD5E1]">
              <th className="py-4 px-6 text-3xl font-black text-[#0F2042] border-r-2 border-[#CBD5E1] w-1/2">
                Input (<MathText>$x$</MathText>)
              </th>
              <th className="py-4 px-6 text-3xl font-black border-[#CBD5E1] w-1/2" style={{ color: themeColor }}>
                Output (<MathText>$y$</MathText>)
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => {
              const isRevealed = index < revealedRows;
              return (
                <tr
                  key={index}
                  className={`border-b border-[#E2E8F0] ${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'
                  }`}
                >
                  <td className="py-4 px-6 text-3xl font-black text-[#0F2042] border-r-2 border-[#CBD5E1]">
                    {row.x}
                  </td>
                  <td
                    className="py-4 px-6 text-3xl font-black"
                    style={{ color: isRevealed ? themeColor : '#CBD5E1' }}
                  >
                    {isRevealed ? row.y : '—'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-5 mt-5">
        <button
          onClick={handleNextRow}
          disabled={revealedRows >= rows.length}
          className="touch-target-lg px-8 py-3 rounded-2xl text-white font-black text-2xl flex items-center gap-2 disabled:opacity-40 shadow-md transition-transform active:scale-95 cursor-pointer"
          style={{ backgroundColor: themeColor }}
        >
          <span>Next row</span>
          <ChevronDown className="w-7 h-7" />
        </button>

        <button
          onClick={handleReset}
          className="touch-target-lg px-6 py-3 rounded-2xl bg-white border-2 border-[#CBD5E1] text-[#475569] font-bold text-2xl flex items-center gap-2 hover:bg-[#F1F5F9] transition-transform active:scale-95 cursor-pointer"
        >
          <RotateCcw className="w-6 h-6" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};
