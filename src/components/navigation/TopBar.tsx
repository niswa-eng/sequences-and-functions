import React from 'react';
import { Maximize2, Minimize2, HelpCircle, Gauge, ZoomIn, ZoomOut } from 'lucide-react';
import { Subtopic, SubtopicId } from '../../types';
import { allSubtopics } from '../../content';

export type UiScaleOption = '75' | '85' | '90' | '100';

interface TopBarProps {
  currentSubtopic: Subtopic;
  onSelectSubtopic: (id: SubtopicId) => void;
  currentStepTitle: string;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onOpenHelp: () => void;
  isMotionReduced: boolean;
  onToggleMotion: () => void;
  uiScale: UiScaleOption;
  onChangeScale: (scale: UiScaleOption) => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentSubtopic,
  onSelectSubtopic,
  currentStepTitle,
  isFullscreen,
  onToggleFullscreen,
  onOpenHelp,
  isMotionReduced,
  onToggleMotion,
  uiScale,
  onChangeScale,
}) => {
  return (
    <header className="h-14 sm:h-16 bg-white border-b-2 border-[#CBD5E1] px-3 sm:px-5 flex items-center justify-between gap-2 sm:gap-4 select-none shrink-0 shadow-xs z-30">
      {/* Zone 1: Title & Subtopic Dropdown */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <div className="hidden md:flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-wider text-[#64748B]">
            Stage 7 • Unit 9
          </span>
          <span className="text-lg font-black text-[#0F2042] whitespace-nowrap leading-tight">
            Sequences & Functions
          </span>
        </div>

        <div className="hidden md:block h-7 w-0.5 bg-[#CBD5E1]" />

        {/* ONE Large Dropdown for Subtopics */}
        <div className="relative">
          <select
            value={currentSubtopic.id}
            onChange={(e) => onSelectSubtopic(e.target.value as SubtopicId)}
            className="pl-3 pr-8 py-1.5 sm:py-2 rounded-xl bg-[#F8FAFC] border-2 font-black text-base sm:text-lg text-[#0F2042] cursor-pointer shadow-xs hover:bg-white transition-all appearance-none"
            style={{ borderColor: currentSubtopic.themeColor.primary }}
          >
            {allSubtopics.map((s) => (
              <option key={s.id} value={s.id}>
                {s.fullTitle}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#0F2042]">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Zone 2: Step Title Badge */}
      <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1]">
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: currentSubtopic.themeColor.primary }}
        />
        <span className="text-sm font-black text-[#0F2042] truncate max-w-xs">
          {currentStepTitle}
        </span>
      </div>

      {/* Zone 3: Actions (Scale / Zoom, Motion, Help, Fullscreen) */}
      <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
        {/* Scale Preset Selector to fit exactly to screen */}
        <div className="flex items-center gap-0.5 bg-[#F1F5F9] p-0.5 rounded-xl border border-[#CBD5E1]">
          <span className="text-[11px] font-bold text-[#64748B] px-1.5 hidden sm:inline">
            Zoom
          </span>
          {(['75', '85', '90', '100'] as const).map((sc) => (
            <button
              key={sc}
              onClick={() => onChangeScale(sc)}
              className={`px-2 py-1 rounded-lg text-xs font-black transition-all ${
                uiScale === sc
                  ? 'bg-[#0F2042] text-white shadow-xs'
                  : 'text-[#64748B] hover:text-[#0F2042]'
              }`}
              title={`Set screen scale to ${sc}%`}
            >
              {sc}%
            </button>
          ))}
        </div>

        {/* Motion toggle */}
        <button
          onClick={onToggleMotion}
          className={`p-2 rounded-xl border text-sm font-bold flex items-center gap-1 cursor-pointer transition-all ${
            isMotionReduced
              ? 'bg-[#FEF3C7] border-[#D97706] text-[#92400E]'
              : 'bg-white border-[#CBD5E1] text-[#475569] hover:bg-[#F8FAFC]'
          }`}
          title="Toggle animation motion"
        >
          <Gauge className="w-5 h-5" />
        </button>

        {/* Hidden Help button */}
        <button
          onClick={onOpenHelp}
          className="p-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F2042] transition-all cursor-pointer"
          title="Teacher Guide"
        >
          <HelpCircle className="w-5 h-5" />
        </button>

        {/* Always-visible Fullscreen button */}
        <button
          onClick={onToggleFullscreen}
          className="px-3 sm:px-4 py-2 rounded-xl bg-[#0F2042] text-white font-black text-sm sm:text-base flex items-center gap-1.5 shadow-xs hover:bg-[#1E293B] active:scale-95 transition-all cursor-pointer"
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullscreen ? (
            <>
              <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Exit</span>
            </>
          ) : (
            <>
              <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Fullscreen</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
