import React, { useState } from 'react';
import { Step, Subtopic } from '../../types';
import { MathText } from '../common/MathText';
import { SequenceStrip } from '../visuals/SequenceStrip';
import { PatternBuilder } from '../visuals/PatternBuilder';
import { PositionTermTable } from '../visuals/PositionTermTable';
import { FunctionMachine } from '../visuals/FunctionMachine';
import { MappingTable } from '../visuals/MappingTable';
import { NumberLine } from '../visuals/NumberLine';
import { WorkingSpace } from '../practice/WorkingSpace';
import { ChevronRight, RotateCcw, Columns2 } from 'lucide-react';

interface SlideViewProps {
  step: Step;
  subtopic: Subtopic;
  onNavigateToStep?: (stepId: string) => void;
}

export type SplitRatio = '50-50' | '40-60' | '60-40';

export const SlideView: React.FC<SlideViewProps> = ({
  step,
  subtopic,
  onNavigateToStep,
}) => {
  const [revealedStepIdx, setRevealedStepIdx] = useState<number>(0);
  const [splitRatio, setSplitRatio] = useState<SplitRatio>('50-50');

  const renderVisualComponent = () => {
    if (!step.componentType || step.componentType === 'None') return null;

    switch (step.componentType) {
      case 'SequenceStrip':
        return <SequenceStrip {...step.componentProps} themeColor={subtopic.themeColor.primary} />;
      case 'PatternBuilder':
        return <PatternBuilder {...step.componentProps} themeColor={subtopic.themeColor.primary} />;
      case 'PositionTermTable':
        return <PositionTermTable {...step.componentProps} themeColor={subtopic.themeColor.primary} />;
      case 'FunctionMachine':
        return <FunctionMachine {...step.componentProps} themeColor={subtopic.themeColor.primary} />;
      case 'MappingTable':
        return <MappingTable {...step.componentProps} themeColor={subtopic.themeColor.primary} />;
      case 'NumberLine':
        return <NumberLine {...step.componentProps} themeColor={subtopic.themeColor.primary} />;
      default:
        return null;
    }
  };

  const getColClasses = () => {
    switch (splitRatio) {
      case '40-60':
        return {
          left: 'w-full lg:w-[42%]',
          right: 'w-full lg:w-[58%]',
        };
      case '60-40':
        return {
          left: 'w-full lg:w-[58%]',
          right: 'w-full lg:w-[42%]',
        };
      case '50-50':
      default:
        return {
          left: 'w-full lg:w-1/2',
          right: 'w-full lg:w-1/2',
        };
    }
  };

  const colClasses = getColClasses();

  // LEFT COLUMN: LESSON MATERIAL
  const renderLeftMaterial = () => {
    // 1. PRACTICE QUESTION
    if (step.type === 'practice' && step.practiceQuestion) {
      const practiceSteps = subtopic.steps.filter((s) => s.type === 'practice');

      return (
        <div className="flex flex-col h-full justify-between">
          <div>
            {/* Practice Level Tabs at top */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#CBD5E1]">
              <div className="flex flex-wrap items-center gap-1">
                {(['L1', 'L2', 'L3'] as const).map((lvl) => {
                  const label =
                    lvl === 'L1' ? 'L1' : lvl === 'L2' ? 'L2' : 'L3';
                  const isCurrentLevel = step.practiceLevel === lvl;

                  return (
                    <div key={lvl} className="flex items-center gap-1">
                      <span
                        className={`px-2 py-0.5 rounded-lg text-xs font-black ${
                          isCurrentLevel
                            ? 'bg-[#0F2042] text-white'
                            : 'bg-[#F1F5F9] text-[#64748B]'
                        }`}
                      >
                        {label}
                      </span>
                      <div className="flex items-center gap-0.5 mr-1.5">
                        {practiceSteps
                          .filter((s) => s.practiceLevel === lvl)
                          .map((ps) => {
                            const isThisStep = ps.id === step.id;
                            return (
                              <button
                                key={ps.id}
                                onClick={() => onNavigateToStep && onNavigateToStep(ps.id)}
                                className={`w-6 h-6 rounded-md font-black text-xs transition-all cursor-pointer ${
                                  isThisStep
                                    ? 'bg-white text-[#0F2042] border-2 shadow-xs'
                                    : 'bg-white/70 text-[#64748B] hover:bg-white border border-[#CBD5E1]'
                                }`}
                                style={{
                                  borderColor: isThisStep ? subtopic.themeColor.primary : undefined,
                                }}
                              >
                                {ps.practiceQuestion?.questionNumber}
                              </button>
                            );
                          })}
                      </div>
                    </div>
                  );
                })}
              </div>

              <span className="text-xs font-bold text-[#64748B]">
                Q{step.practiceQuestion.questionNumber} of 9
              </span>
            </div>

            {/* Question Label */}
            <div className="flex items-center gap-2 mb-2">
              <span
                className="px-2.5 py-0.5 rounded-lg font-black text-sm text-white shadow-xs"
                style={{ backgroundColor: subtopic.themeColor.primary }}
              >
                Question {step.practiceQuestion.questionNumber}
              </span>
              <span className="text-sm font-bold text-[#64748B]">
                {step.practiceLevel === 'L1'
                  ? 'Basic'
                  : step.practiceLevel === 'L2'
                  ? 'Medium'
                  : 'Challenge'}
              </span>
            </div>

            {/* Question Text */}
            <div className="text-xl sm:text-2xl font-black text-[#0F2042] leading-snug whitespace-pre-line mb-3">
              <MathText>{step.practiceQuestion.text}</MathText>
            </div>

            {/* Inline visuals for question */}
            {step.practiceQuestion.visualType === 'sequence' && (
              <div className="mt-2 p-1.5 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                <SequenceStrip
                  {...step.practiceQuestion.visualData}
                  themeColor={subtopic.themeColor.primary}
                />
              </div>
            )}

            {step.practiceQuestion.visualType === 'pattern' && (
              <div className="mt-2 p-1.5 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                <PatternBuilder
                  {...step.practiceQuestion.visualData}
                  themeColor={subtopic.themeColor.primary}
                />
              </div>
            )}

            {step.practiceQuestion.visualType === 'table' && (
              <div className="mt-2 p-1.5 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                <MappingTable
                  {...step.practiceQuestion.visualData}
                  themeColor={subtopic.themeColor.primary}
                />
              </div>
            )}

            {step.practiceQuestion.visualType === 'machine' && (
              <div className="mt-2 p-1.5 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                <FunctionMachine
                  {...step.practiceQuestion.visualData}
                  themeColor={subtopic.themeColor.primary}
                />
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-[#E2E8F0] text-xs font-semibold text-[#64748B]">
            Write working in the whiteboard on the right.
          </div>
        </div>
      );
    }

    // 2. LEARNING OBJECTIVES
    if (step.type === 'objective') {
      return (
        <div className="flex flex-col justify-center h-full p-2">
          {step.cambridgeCode && (
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">
              Cambridge Lower Secondary • Stage 7 • {step.cambridgeCode}
            </span>
          )}

          <h1 className="text-2xl sm:text-3xl font-black text-[#0F2042] mb-3">
            {step.title}
          </h1>

          {step.keyTerms && step.keyTerms.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 mb-4">
              {step.keyTerms.map((term, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-xl text-lg font-black shadow-xs"
                  style={{
                    backgroundColor: subtopic.themeColor.secondary,
                    color: subtopic.themeColor.badgeText,
                  }}
                >
                  {term}
                </span>
              ))}
            </div>
          )}

          <div className="space-y-3">
            {step.sentences?.map((s, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span
                  className="w-2.5 h-2.5 rounded-full mt-2.5 shrink-0"
                  style={{ backgroundColor: subtopic.themeColor.primary }}
                />
                <p className="text-xl sm:text-2xl font-black text-[#0F2042] leading-relaxed">
                  <MathText>{s}</MathText>
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 3. WORKED EXAMPLE
    if (step.type === 'worked-example' && step.workedExample) {
      const we = step.workedExample;
      const canRevealMore = revealedStepIdx < we.steps.length;

      return (
        <div className="flex flex-col h-full gap-2">
          <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-1.5">
            <h1 className="text-xl sm:text-2xl font-black text-[#0F2042]">
              {step.title}
            </h1>
            <span
              className="px-2 py-0.5 rounded-lg font-black text-xs text-white"
              style={{ backgroundColor: subtopic.themeColor.primary }}
            >
              Worked Example
            </span>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl border border-[#CBD5E1] p-2.5 shadow-xs">
            <span className="text-xs font-bold text-[#64748B] uppercase tracking-wide block">
              Problem
            </span>
            <div className="text-lg sm:text-xl font-black text-[#0F2042] leading-snug">
              <MathText>{we.problem}</MathText>
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
            {we.steps.map((st, idx) => {
              const isVisible = idx <= revealedStepIdx;
              if (!isVisible) return null;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#CBD5E1] p-2.5 shadow-xs flex flex-col gap-1 transition-all"
                >
                  <span className="text-sm font-black" style={{ color: subtopic.themeColor.primary }}>
                    {st.label}
                  </span>

                  {st.math && (
                    <div className="text-lg font-black text-[#0F2042] my-0.5 font-mono">
                      <MathText>{st.math}</MathText>
                    </div>
                  )}

                  {st.explanation && (
                    <p className="text-sm sm:text-base font-bold text-[#334155]">
                      <MathText>{st.explanation}</MathText>
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-2 pt-1.5 border-t border-[#E2E8F0]">
            <button
              onClick={() => {
                if (canRevealMore) setRevealedStepIdx((prev) => prev + 1);
              }}
              disabled={!canRevealMore}
              className="px-4 py-1.5 rounded-xl text-white font-black text-sm flex items-center gap-1 disabled:opacity-40 shadow-xs transition-transform active:scale-95 cursor-pointer"
              style={{ backgroundColor: subtopic.themeColor.primary }}
            >
              <span>Next step</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setRevealedStepIdx(0)}
              className="px-3 py-1.5 rounded-xl bg-white border border-[#CBD5E1] text-[#475569] font-bold text-sm flex items-center gap-1 hover:bg-[#F1F5F9] transition-transform active:scale-95 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      );
    }

    // 4. COMMON MISTAKES
    if (step.type === 'common-mistake' && step.mistakeContent) {
      const mc = step.mistakeContent;

      return (
        <div className="flex flex-col h-full gap-2 justify-center">
          <div className="border-b border-[#CBD5E1] pb-1.5">
            <h1 className="text-xl sm:text-2xl font-black text-[#DC2626]">
              {step.title}
            </h1>
          </div>

          <div className="bg-[#FFF1F2] rounded-xl border border-[#FECDD3] p-3 shadow-xs">
            <span className="text-xs font-black text-[#BE123C] uppercase tracking-wide block mb-0.5">
              Common Mistake
            </span>
            <div className="text-base sm:text-lg font-extrabold text-[#9F1239] leading-snug">
              <MathText>{mc.misconception}</MathText>
            </div>
          </div>

          <div className="bg-[#F0FDF4] rounded-xl border border-[#BBF7D0] p-3 shadow-xs">
            <span className="text-xs font-black text-[#15803D] uppercase tracking-wide block mb-0.5">
              Correct Approach
            </span>
            <div className="text-base sm:text-lg font-extrabold text-[#166534] leading-snug">
              <MathText>{mc.correction}</MathText>
            </div>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl border border-[#CBD5E1] p-3 shadow-xs">
            <span className="text-xs font-black text-[#475569] uppercase tracking-wide block mb-0.5">
              Key Rule to Remember
            </span>
            <div className="text-base sm:text-lg font-black text-[#0F2042] leading-snug">
              <MathText>{mc.takeaway}</MathText>
            </div>
          </div>
        </div>
      );
    }

    // 5. VOCABULARY
    if (step.type === 'vocabulary' && step.vocabList) {
      return (
        <div className="flex flex-col h-full gap-2 overflow-y-auto">
          <div className="border-b border-[#CBD5E1] pb-1.5">
            <h1 className="text-xl sm:text-2xl font-black text-[#0F2042]">
              {step.title}
            </h1>
          </div>

          <div className="space-y-2">
            {step.vocabList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#CBD5E1] p-2.5 shadow-xs flex flex-col gap-0.5"
              >
                <span className="text-base font-black" style={{ color: subtopic.themeColor.primary }}>
                  {item.term}
                </span>
                <p className="text-sm sm:text-base font-bold text-[#0F2042] leading-snug">
                  {item.meaning}
                </p>
                {item.example && (
                  <p className="text-xs font-semibold text-[#64748B] italic">
                    Example: {item.example}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 6. STANDARD CONCEPT SLIDE
    return (
      <div className="flex flex-col h-full gap-2">
        <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-1.5">
          <h1 className="text-xl sm:text-2xl font-black text-[#0F2042]">
            {step.title}
          </h1>

          {step.keyTerms && step.keyTerms.length > 0 && (
            <div className="flex items-center gap-1">
              {step.keyTerms.map((term, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded-lg text-sm font-black"
                  style={{
                    backgroundColor: subtopic.themeColor.secondary,
                    color: subtopic.themeColor.badgeText,
                  }}
                >
                  {term}
                </span>
              ))}
            </div>
          )}
        </div>

        {step.sentences && step.sentences.length > 0 && (
          <div className="space-y-1 bg-white/70 rounded-xl p-2.5 border border-[#CBD5E1]/60">
            {step.sentences.map((sent, idx) => (
              <p
                key={idx}
                className="text-lg sm:text-xl font-black text-[#0F2042] leading-snug"
              >
                <MathText>{sent}</MathText>
              </p>
            ))}
          </div>
        )}

        <div className="w-full flex-1 overflow-y-auto mt-0.5 flex flex-col justify-center">
          {renderVisualComponent()}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full flex flex-col p-2 sm:p-3 overflow-hidden select-none">
      {/* Subtle Split Ratio Toolbar */}
      <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#CBD5E1]/60">
        <div className="flex items-center gap-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#64748B]">
            Display:
          </span>
          <span className="text-xs sm:text-sm font-black text-[#0F2042]">
            Left: Material • Right: Whiteboard
          </span>
        </div>

        <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-[#CBD5E1] shadow-xs">
          <Columns2 className="w-3.5 h-3.5 text-[#64748B] ml-1" />
          <button
            onClick={() => setSplitRatio('50-50')}
            className={`px-2 py-0.5 rounded-md text-[11px] font-black transition-all ${
              splitRatio === '50-50'
                ? 'bg-[#0F2042] text-white shadow-xs'
                : 'text-[#64748B] hover:text-[#0F2042]'
            }`}
          >
            50:50
          </button>
          <button
            onClick={() => setSplitRatio('40-60')}
            className={`px-2 py-0.5 rounded-md text-[11px] font-black transition-all ${
              splitRatio === '40-60'
                ? 'bg-[#0F2042] text-white shadow-xs'
                : 'text-[#64748B] hover:text-[#0F2042]'
            }`}
          >
            40:60
          </button>
          <button
            onClick={() => setSplitRatio('60-40')}
            className={`px-2 py-0.5 rounded-md text-[11px] font-black transition-all ${
              splitRatio === '60-40'
                ? 'bg-[#0F2042] text-white shadow-xs'
                : 'text-[#64748B] hover:text-[#0F2042]'
            }`}
          >
            60:40
          </button>
        </div>
      </div>

      {/* Main Split Grid (Left: Material, Right: Whiteboard) */}
      <div className="flex-1 flex flex-col lg:flex-row gap-2.5 min-h-0">
        {/* SISI KIRI: LESSON MATERIAL */}
        <div
          className={`${colClasses.left} h-full bg-white rounded-2xl border-2 border-[#CBD5E1] p-3 sm:p-4 shadow-xs overflow-y-auto transition-all`}
        >
          {renderLeftMaterial()}
        </div>

        {/* SISI KANAN: PAPAN TULIS */}
        <div className={`${colClasses.right} h-full transition-all`}>
          <WorkingSpace themeColor={subtopic.themeColor.primary} />
        </div>
      </div>
    </div>
  );
};
