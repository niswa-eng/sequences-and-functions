import React from 'react';
import { Maximize2, Minimize2, HelpCircle, Gauge, Globe } from 'lucide-react';
import { Language, Subtopic, SubtopicId } from '../../types';
import { allSubtopics } from '../../content';
import { subtopicTranslations, uiTranslations } from '../../content/translations';

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
  language: Language;
  onChangeLanguage: (lang: Language) => void;
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
  language,
  onChangeLanguage,
}) => {
  const t = uiTranslations[language] || uiTranslations.en;
  const currentSubtopicMeta = subtopicTranslations[language]?.[currentSubtopic.id] || subtopicTranslations.en[currentSubtopic.id];

  return (
    <header className="h-14 sm:h-16 bg-white border-b-2 border-[#CBD5E1] px-2.5 sm:px-4 flex items-center justify-between gap-2 sm:gap-3 select-none shrink-0 shadow-xs z-30">
      {/* Zone 1: Title, Language Selector & Subtopic Dropdown */}
      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
        <div className="hidden lg:flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-wider text-[#64748B]">
            {t.stageTitle}
          </span>
          <span className="text-base font-black text-[#0F2042] whitespace-nowrap leading-tight">
            {t.unitTitle}
          </span>
        </div>

        <div className="hidden lg:block h-7 w-0.5 bg-[#CBD5E1]" />

        {/* 3-LANGUAGE DROPDOWN (English, Indonesia, Uzbek) */}
        <div className="relative">
          <div className="flex items-center gap-1 bg-[#F1F5F9] pl-2 pr-7 py-1.5 rounded-xl border border-[#CBD5E1]">
            <Globe className="w-4 h-4 text-[#1D70B8] shrink-0" />
            <select
              value={language}
              onChange={(e) => onChangeLanguage(e.target.value as Language)}
              className="bg-transparent font-black text-xs sm:text-sm text-[#0F2042] cursor-pointer appearance-none focus:outline-none"
              title="Select Language / Pilih Bahasa / Tilni tanlash"
            >
              <option value="en">English (EN)</option>
              <option value="id">Indonesia (ID)</option>
              <option value="uz">Oʻzbekcha (UZ)</option>
            </select>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 text-[#0F2042]">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>

        {/* ONE Large Dropdown for Subtopics */}
        <div className="relative">
          <select
            value={currentSubtopic.id}
            onChange={(e) => onSelectSubtopic(e.target.value as SubtopicId)}
            className="pl-3 pr-8 py-1.5 rounded-xl bg-[#F8FAFC] border-2 font-black text-xs sm:text-sm md:text-base text-[#0F2042] cursor-pointer shadow-xs hover:bg-white transition-all appearance-none max-w-[200px] sm:max-w-xs md:max-w-md truncate"
            style={{ borderColor: currentSubtopic.themeColor.primary }}
          >
            {allSubtopics.map((s) => {
              const meta = subtopicTranslations[language]?.[s.id] || subtopicTranslations.en[s.id];
              return (
                <option key={s.id} value={s.id}>
                  {meta.fullTitle}
                </option>
              );
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#0F2042]">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Zone 2: Step Title Badge & Quick English Keywords Strip */}
      <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1] min-w-0">
        <span
          className="w-2.5 h-2.5 rounded-full shrink-0"
          style={{ backgroundColor: currentSubtopic.themeColor.primary }}
        />
        <span className="text-xs font-black text-[#0F2042] truncate max-w-[150px]">
          {currentStepTitle}
        </span>
        {/* English Keywords Badge if in ID or UZ */}
        {language !== 'en' && currentSubtopicMeta.keywords.length > 0 && (
          <div className="flex items-center gap-1 pl-2 border-l border-[#CBD5E1] text-[11px] font-bold text-[#64748B] truncate">
            <span className="font-semibold text-[#0F2042]">EN:</span>
            {currentSubtopicMeta.keywords.slice(0, 3).map((kw, i) => (
              <span key={i} className="px-1.5 py-0.5 bg-white rounded border border-[#CBD5E1] text-[#0F2042] font-mono">
                {kw.en}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Zone 3: Actions (Scale / Zoom, Motion, Help, Fullscreen) */}
      <div className="flex items-center gap-1 sm:gap-2 shrink-0">
        {/* Scale Preset Selector */}
        <div className="flex items-center gap-0.5 bg-[#F1F5F9] p-0.5 rounded-xl border border-[#CBD5E1]">
          <span className="text-[11px] font-bold text-[#64748B] px-1 hidden md:inline">
            {t.zoom}
          </span>
          {(['75', '85', '90', '100'] as const).map((sc) => (
            <button
              key={sc}
              onClick={() => onChangeScale(sc)}
              className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg text-xs font-black transition-all ${
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
          className={`p-1.5 sm:p-2 rounded-xl border text-sm font-bold flex items-center gap-1 cursor-pointer transition-all ${
            isMotionReduced
              ? 'bg-[#FEF3C7] border-[#D97706] text-[#92400E]'
              : 'bg-white border-[#CBD5E1] text-[#475569] hover:bg-[#F8FAFC]'
          }`}
          title="Toggle animation motion"
        >
          <Gauge className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Hidden Help button */}
        <button
          onClick={onOpenHelp}
          className="p-1.5 sm:p-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F2042] transition-all cursor-pointer"
          title={t.teacherGuide}
        >
          <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Always-visible Fullscreen button */}
        <button
          onClick={onToggleFullscreen}
          className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-[#0F2042] text-white font-black text-xs sm:text-sm flex items-center gap-1 shadow-xs hover:bg-[#1E293B] active:scale-95 transition-all cursor-pointer"
          title={isFullscreen ? t.exitFullscreen : t.fullscreen}
        >
          {isFullscreen ? (
            <>
              <Minimize2 className="w-4 h-4" />
              <span className="hidden sm:inline">{t.exitFullscreen}</span>
            </>
          ) : (
            <>
              <Maximize2 className="w-4 h-4" />
              <span className="hidden sm:inline">{t.fullscreen}</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
