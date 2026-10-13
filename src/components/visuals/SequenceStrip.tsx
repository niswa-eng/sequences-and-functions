import React, { useState } from 'react';
import { RotateCcw, ChevronRight, ChevronLeft } from 'lucide-react';

interface SequenceStripProps {
  start?: number;
  diff?: number;
  initialVisible?: number;
  maxTerms?: number;
  ruleLabel?: string;
  themeColor?: string;
  showMissingIndices?: number[];
  customTerms?: (number | string)[];
}

export const SequenceStrip: React.FC<SequenceStripProps> = ({
  start = 3,
  diff = 4,
  initialVisible = 4,
  maxTerms = 7,
  ruleLabel,
  themeColor = '#1D70B8',
  showMissingIndices = [],
  customTerms,
}) => {
  const baseTerms: (number | string)[] = customTerms || Array.from(
    { length: maxTerms },
    (_, i) => start + i * diff
  );

  const [visibleCount, setVisibleCount] = useState<number>(initialVisible);
  const [revealedBlanks, setRevealedBlanks] = useState<Record<number, boolean>>({});

  const handleNext = () => {
    if (visibleCount < baseTerms.length) {
      setVisibleCount((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (visibleCount > 1) {
      setVisibleCount((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setVisibleCount(initialVisible);
    setRevealedBlanks({});
  };

  const toggleBlank = (index: number) => {
    setRevealedBlanks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const sign = diff >= 0 ? `+${diff}` : `${diff}`;
  const displayRule = ruleLabel || (diff >= 0 ? `Add ${diff}` : `Subtract ${Math.abs(diff)}`);

  return (
    <div className="w-full flex flex-col items-center select-none py-1">
      {/* Visual jump strip */}
      <div className="w-full overflow-x-auto pb-2 pt-4 flex items-center justify-center">
        <div className="flex items-center gap-2 sm:gap-3 min-w-max px-2">
          {baseTerms.slice(0, visibleCount).map((term, index) => {
            const isMissing = showMissingIndices.includes(index) && !revealedBlanks[index];

            return (
              <React.Fragment key={index}>
                {/* Term Box */}
                <div className="flex flex-col items-center">
                  <span className="text-xs sm:text-sm font-bold text-[#475569] mb-0.5 font-mono">
                    T{index + 1}
                  </span>

                  <button
                    onClick={() => {
                      if (showMissingIndices.includes(index)) {
                        toggleBlank(index);
                      }
                    }}
                    className={`w-16 h-14 sm:w-20 sm:h-18 rounded-xl flex items-center justify-center text-2xl sm:text-3xl font-black transition-all shadow-xs ${
                      isMissing
                        ? 'border-2 border-dashed border-[#94A3B8] bg-white/70 text-[#64748B]'
                        : 'border-2 border-[#0F2042]/20 bg-white text-[#0F2042]'
                    }`}
                    style={{
                      borderColor: !isMissing ? themeColor : undefined,
                    }}
                  >
                    {isMissing ? '?' : term}
                  </button>
                </div>

                {/* Jump Arrow to next term */}
                {index < visibleCount - 1 && (
                  <div className="flex flex-col items-center justify-center px-0.5">
                    <div className="relative flex flex-col items-center">
                      <span
                        className="px-2 py-0.5 rounded-full text-xs sm:text-sm font-black text-white shadow-xs"
                        style={{ backgroundColor: themeColor }}
                      >
                        {sign}
                      </span>
                      <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
                        <path
                          d="M 3 14 Q 20 2 37 14"
                          stroke={themeColor}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          fill="none"
                        />
                        <polygon
                          points="34,9 38,15 31,15"
                          fill={themeColor}
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center gap-2 sm:gap-3 mt-2">
        <button
          onClick={handlePrev}
          disabled={visibleCount <= 1}
          className="px-3.5 py-1.5 rounded-xl bg-[#E2E8F0] text-[#0F2042] font-bold text-base flex items-center gap-1 disabled:opacity-40 transition-transform active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Prev</span>
        </button>

        <button
          onClick={handleNext}
          disabled={visibleCount >= baseTerms.length}
          className="px-4 py-1.5 rounded-xl text-white font-bold text-base flex items-center gap-1 disabled:opacity-40 shadow-xs transition-transform active:scale-95 cursor-pointer"
          style={{ backgroundColor: themeColor }}
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>

        <button
          onClick={handleReset}
          className="px-3 py-1.5 rounded-xl bg-white border border-[#CBD5E1] text-[#475569] font-bold text-base flex items-center gap-1 hover:bg-[#F1F5F9] transition-transform active:scale-95 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset</span>
        </button>
      </div>

      {/* Rule info */}
      <div className="mt-2 px-3 py-1 rounded-lg bg-white border border-[#CBD5E1] text-base font-bold text-[#0F2042]">
        Rule: <span style={{ color: themeColor }}>{displayRule}</span>
      </div>
    </div>
  );
};
