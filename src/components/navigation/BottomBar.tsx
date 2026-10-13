import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Step, Subtopic } from '../../types';

interface BottomBarProps {
  currentSubtopic: Subtopic;
  currentStepIndex: number;
  totalSteps: number;
  onPrevStep: () => void;
  onNextStep: () => void;
  onSelectStepIndex: (index: number) => void;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  currentSubtopic,
  currentStepIndex,
  totalSteps,
  onPrevStep,
  onNextStep,
  onSelectStepIndex,
}) => {
  const currentStep = currentSubtopic.steps[currentStepIndex];

  return (
    <footer className="h-14 sm:h-16 bg-white border-t-2 border-[#CBD5E1] px-4 sm:px-6 flex items-center justify-between gap-3 select-none shrink-0 shadow-xs z-30">
      {/* 1. BACK BUTTON */}
      <button
        onClick={onPrevStep}
        disabled={currentStepIndex === 0}
        className="px-4 sm:px-5 py-2 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F2042] font-black text-lg sm:text-xl flex items-center gap-1.5 disabled:opacity-30 disabled:pointer-events-none hover:bg-[#E2E8F0] active:scale-95 transition-all cursor-pointer"
        title="Previous Screen"
      >
        <ChevronLeft className="w-6 h-6" />
        <span className="hidden sm:inline">Back</span>
      </button>

      {/* 2. TAPPABLE PROGRESS STRIP + COUNTER */}
      <div className="flex-1 max-w-2xl flex flex-col items-center gap-1 px-2">
        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl font-black text-[#0F2042] font-mono leading-none">
            {currentStepIndex + 1} / {totalSteps}
          </span>
          <span className="text-xs sm:text-sm font-bold text-[#64748B] truncate max-w-xs leading-none">
            {currentStep?.title}
          </span>
        </div>

        {/* Progress Dots */}
        <div className="w-full flex items-center justify-center gap-1 overflow-x-auto py-0.5">
          {currentSubtopic.steps.map((st, idx) => {
            const isCurrent = idx === currentStepIndex;
            const isPast = idx < currentStepIndex;
            const isPractice = st.type === 'practice';

            return (
              <button
                key={st.id}
                onClick={() => onSelectStepIndex(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  isCurrent
                    ? 'w-7 ring-2 ring-offset-1'
                    : isPast
                    ? 'w-2.5 hover:w-4'
                    : 'w-2.5 hover:w-4 opacity-40'
                }`}
                style={{
                  backgroundColor: isCurrent || isPast ? currentSubtopic.themeColor.primary : '#94A3B8',
                  borderRadius: isPractice ? '2px' : '9999px',
                }}
                title={`Step ${idx + 1}: ${st.title}`}
              />
            );
          })}
        </div>
      </div>

      {/* 3. NEXT BUTTON */}
      <button
        onClick={onNextStep}
        disabled={currentStepIndex === totalSteps - 1}
        className="px-5 sm:px-6 py-2 rounded-xl text-white font-black text-lg sm:text-xl flex items-center gap-1.5 disabled:opacity-30 disabled:pointer-events-none shadow-xs active:scale-95 transition-all cursor-pointer"
        style={{ backgroundColor: currentSubtopic.themeColor.primary }}
        title="Next Screen"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-6 h-6" />
      </button>
    </footer>
  );
};
