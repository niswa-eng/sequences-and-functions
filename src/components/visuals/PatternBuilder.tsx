import React, { useState } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';

export type PatternType = 'squares' | 'triangles' | 'tiles' | 'counters';

interface PatternBuilderProps {
  patternType?: PatternType;
  initialPattern?: number;
  maxPattern?: number;
  themeColor?: string;
  addedColor?: string;
}

export const PatternBuilder: React.FC<PatternBuilderProps> = ({
  patternType = 'squares',
  initialPattern = 1,
  maxPattern = 5,
  themeColor = '#0D9488',
  addedColor = '#F59E0B',
}) => {
  const [currentPattern, setCurrentPattern] = useState<number>(initialPattern);

  const handleNext = () => {
    if (currentPattern < maxPattern) {
      setCurrentPattern((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPattern > 1) {
      setCurrentPattern((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentPattern(initialPattern);
  };

  const getCount = (n: number) => {
    switch (patternType) {
      case 'squares':
        return 3 * n + 1;
      case 'triangles':
        return 2 * n + 1;
      case 'tiles':
        return 3 * n + 2;
      case 'counters':
        return 20 - 3 * (n - 1);
      default:
        return 3 * n + 1;
    }
  };

  const currentCount = getCount(currentPattern);

  const renderSquares = () => {
    const sqSize = 46;
    const startX = 20;
    const startY = 25;

    const sticks: { x1: number; y1: number; x2: number; y2: number; isAdded: boolean }[] = [];

    sticks.push({
      x1: startX,
      y1: startY,
      x2: startX,
      y2: startY + sqSize,
      isAdded: currentPattern === 1,
    });

    for (let i = 0; i < currentPattern; i++) {
      const x = startX + i * sqSize;
      const isNewSquare = i === currentPattern - 1 && currentPattern > 1;

      sticks.push({
        x1: x,
        y1: startY,
        x2: x + sqSize,
        y2: startY,
        isAdded: isNewSquare,
      });
      sticks.push({
        x1: x,
        y1: startY + sqSize,
        x2: x + sqSize,
        y2: startY + sqSize,
        isAdded: isNewSquare,
      });
      sticks.push({
        x1: x + sqSize,
        y1: startY,
        x2: x + sqSize,
        y2: startY + sqSize,
        isAdded: isNewSquare,
      });
    }

    const totalWidth = startX * 2 + currentPattern * sqSize;

    return (
      <svg
        viewBox={`0 0 ${Math.max(340, totalWidth)} 100`}
        className="w-full h-24 sm:h-28 overflow-visible"
      >
        {sticks.map((st, idx) => (
          <g key={idx}>
            <line
              x1={st.x1}
              y1={st.y1}
              x2={st.x2}
              y2={st.y2}
              stroke={st.isAdded && currentPattern > 1 ? addedColor : '#D97706'}
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle
              cx={st.x1}
              cy={st.y1}
              r="3.5"
              fill={st.isAdded && currentPattern > 1 ? '#EF4444' : '#DC2626'}
            />
          </g>
        ))}
      </svg>
    );
  };

  const renderTriangles = () => {
    const b = 44;
    const h = 46;
    const startX = 25;
    const baseY = 80;

    const sticks: { x1: number; y1: number; x2: number; y2: number; isAdded: boolean }[] = [];

    for (let i = 0; i < currentPattern; i++) {
      const isNew = i === currentPattern - 1 && currentPattern > 1;
      const leftX = startX + i * (b / 2);
      const rightX = leftX + b;
      const apexX = leftX + b / 2;

      sticks.push({
        x1: leftX,
        y1: baseY,
        x2: rightX,
        y2: baseY,
        isAdded: isNew,
      });

      if (i === 0) {
        sticks.push({
          x1: leftX,
          y1: baseY,
          x2: apexX,
          y2: baseY - h,
          isAdded: false,
        });
      }
      sticks.push({
        x1: rightX,
        y1: baseY,
        x2: apexX,
        y2: baseY - h,
        isAdded: isNew,
      });
    }

    return (
      <svg viewBox="0 0 340 100" className="w-full h-24 sm:h-28 overflow-visible">
        {sticks.map((st, idx) => (
          <g key={idx}>
            <line
              x1={st.x1}
              y1={st.y1}
              x2={st.x2}
              y2={st.y2}
              stroke={st.isAdded ? addedColor : '#D97706'}
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx={st.x1} cy={st.y1} r="3.5" fill="#DC2626" />
          </g>
        ))}
      </svg>
    );
  };

  const renderTiles = () => {
    const tileSize = 20;
    const gap = 3;
    const stepOffset = tileSize + gap;

    const tiles: { col: number; row: number; isAdded: boolean }[] = [];
    tiles.push({ col: 0, row: 0, isAdded: false });
    tiles.push({ col: 0, row: 1, isAdded: false });

    for (let i = 1; i <= currentPattern; i++) {
      tiles.push({ col: 0, row: -i, isAdded: i === currentPattern && currentPattern > 1 });
      tiles.push({ col: -i, row: 0, isAdded: i === currentPattern && currentPattern > 1 });
      tiles.push({ col: i, row: 0, isAdded: i === currentPattern && currentPattern > 1 });
    }

    const cx = 170;
    const cy = 50;

    return (
      <svg viewBox="0 0 340 110" className="w-full h-24 sm:h-28 overflow-visible">
        {tiles.map((t, idx) => (
          <rect
            key={idx}
            x={cx + t.col * stepOffset - tileSize / 2}
            y={cy + t.row * stepOffset - tileSize / 2}
            width={tileSize}
            height={tileSize}
            rx="4"
            fill={t.isAdded ? addedColor : themeColor}
            stroke="#0F2042"
            strokeWidth="2"
          />
        ))}
      </svg>
    );
  };

  const renderCounters = () => {
    const count = getCount(currentPattern);
    const radius = 10;
    const cols = 5;

    return (
      <svg viewBox="0 0 300 110" className="w-full h-24 sm:h-28 overflow-visible">
        {Array.from({ length: 20 }, (_, idx) => {
          const col = idx % cols;
          const row = Math.floor(idx / cols);
          const cx = 50 + col * 40;
          const cy = 20 + row * 26;
          const isActive = idx < count;

          return (
            <circle
              key={idx}
              cx={cx}
              cy={cy}
              r={radius}
              fill={isActive ? themeColor : '#E2E8F0'}
              stroke={isActive ? '#0F2042' : '#CBD5E1'}
              strokeWidth="2"
              opacity={isActive ? 1 : 0.3}
            />
          );
        })}
      </svg>
    );
  };

  const unitLabel = patternType === 'counters' ? 'Counters' : patternType === 'tiles' ? 'Tiles' : 'Matchsticks';

  return (
    <div className="w-full flex flex-col items-center select-none py-1">
      {/* Pattern Visual Display */}
      <div className="w-full bg-white rounded-2xl border-2 border-[#CBD5E1] p-3 flex flex-col items-center justify-center shadow-xs">
        <div className="flex items-center justify-between w-full px-2 mb-1">
          <span className="text-lg sm:text-xl font-black text-[#0F2042]">
            Pattern {currentPattern}
          </span>
          <span className="text-lg sm:text-xl font-black" style={{ color: themeColor }}>
            {currentCount} {unitLabel}
          </span>
        </div>

        {patternType === 'squares' && renderSquares()}
        {patternType === 'triangles' && renderTriangles()}
        {patternType === 'tiles' && renderTiles()}
        {patternType === 'counters' && renderCounters()}

        {currentPattern > 1 && (
          <div className="flex items-center gap-2 mt-1 text-xs sm:text-sm font-bold text-[#475569]">
            <span
              className="w-3.5 h-3.5 rounded-sm inline-block"
              style={{ backgroundColor: addedColor }}
            />
            <span>Newly added in Pattern {currentPattern}</span>
          </div>
        )}
      </div>

      {/* Stepper Controls */}
      <div className="flex items-center gap-3 mt-2">
        <button
          onClick={handlePrev}
          disabled={currentPattern <= 1}
          className="px-3.5 py-1.5 rounded-xl bg-[#E2E8F0] text-[#0F2042] font-black text-base flex items-center gap-1 disabled:opacity-40 transition-transform active:scale-95 cursor-pointer"
        >
          <Minus className="w-5 h-5" />
          <span>P{currentPattern - 1}</span>
        </button>

        <button
          onClick={handleNext}
          disabled={currentPattern >= maxPattern}
          className="px-4 py-1.5 rounded-xl text-white font-black text-base flex items-center gap-1 disabled:opacity-40 shadow-xs transition-transform active:scale-95 cursor-pointer"
          style={{ backgroundColor: themeColor }}
        >
          <span>P{currentPattern + 1}</span>
          <Plus className="w-5 h-5" />
        </button>

        <button
          onClick={handleReset}
          className="px-3 py-1.5 rounded-xl bg-white border border-[#CBD5E1] text-[#475569] font-bold text-base flex items-center gap-1 hover:bg-[#F1F5F9] transition-transform active:scale-95 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset</span>
        </button>
      </div>

      {/* Progressive Table below */}
      <div className="w-full max-w-lg mt-2 bg-white rounded-xl border border-[#CBD5E1] overflow-hidden shadow-xs">
        <table className="w-full text-center border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-[#F1F5F9] border-b border-[#CBD5E1]">
              <th className="py-1.5 px-2 font-bold text-[#475569] text-left">
                Pattern (n)
              </th>
              {Array.from({ length: maxPattern }, (_, i) => i + 1).map((n) => (
                <th
                  key={n}
                  className={`py-1.5 px-2 font-black ${
                    n === currentPattern ? 'bg-[#E0F2FE] text-[#0369A1]' : 'text-[#0F2042]'
                  }`}
                >
                  {n}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-1.5 px-2 font-bold text-[#475569] text-left">
                {unitLabel}
              </td>
              {Array.from({ length: maxPattern }, (_, i) => i + 1).map((n) => {
                const count = getCount(n);
                const isRevealed = n <= currentPattern;
                return (
                  <td
                    key={n}
                    className={`py-1.5 px-2 font-black text-sm sm:text-base ${
                      n === currentPattern
                        ? 'bg-[#E0F2FE] text-[#0369A1]'
                        : isRevealed
                        ? 'text-[#0F2042]'
                        : 'text-[#94A3B8]'
                    }`}
                  >
                    {isRevealed ? count : '—'}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
