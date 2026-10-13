import React, { useState, useEffect, useCallback } from 'react';
import { SubtopicId, ToolType, Stroke } from './types';
import { allSubtopics, getSubtopicById } from './content';
import { TopBar, UiScaleOption } from './components/navigation/TopBar';
import { BottomBar } from './components/navigation/BottomBar';
import { SlideView } from './components/slide/SlideView';
import { WhiteboardCanvas } from './components/whiteboard/WhiteboardCanvas';
import { WhiteboardToolbar } from './components/whiteboard/WhiteboardToolbar';
import { TeacherHelpModal } from './components/common/TeacherHelpModal';

export default function App() {
  // Current active subtopic
  const [currentSubtopicId, setCurrentSubtopicId] = useState<SubtopicId>(() => {
    return (localStorage.getItem('maths_board_subtopic') as SubtopicId) || '9.1';
  });

  // Remember last visited step per subtopic
  const [visitedSteps, setVisitedSteps] = useState<Record<SubtopicId, number>>(() => {
    try {
      const saved = localStorage.getItem('maths_board_visited_steps');
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      '9.1': 0,
      '9.2': 0,
      '9.3': 0,
      '9.4': 0,
    };
  });

  // Screen zoom / scale state (default 90% for comfortable fit on all IFPs, tablets and laptops)
  const [uiScale, setUiScale] = useState<UiScaleOption>(() => {
    return (localStorage.getItem('maths_board_scale') as UiScaleOption) || '90';
  });

  const currentSubtopic = getSubtopicById(currentSubtopicId);
  const currentStepIndex = Math.min(
    visitedSteps[currentSubtopicId] || 0,
    currentSubtopic.steps.length - 1
  );
  const currentStep = currentSubtopic.steps[currentStepIndex];

  // Screen key for whiteboard strokes
  const currentScreenKey = `${currentSubtopicId}_${currentStep.id}`;

  // Whiteboard strokes per screen
  const [strokesMap, setStrokesMap] = useState<Record<string, Stroke[]>>(() => {
    try {
      const saved = localStorage.getItem('maths_board_strokes_v1');
      if (saved) return JSON.parse(saved);
    } catch {}
    return {};
  });

  // Whiteboard tool settings
  const [isDrawMode, setIsDrawMode] = useState<boolean>(false);
  const [currentTool, setCurrentTool] = useState<ToolType>('pen');
  const [currentColor, setCurrentColor] = useState<string>('#0F2042');
  const [currentWidth, setCurrentWidth] = useState<number>(8);
  const [undoTrigger, setUndoTrigger] = useState<number>(0);
  const [redoTrigger, setRedoTrigger] = useState<number>(0);
  const [clearTrigger, setClearTrigger] = useState<number>(0);

  // Fullscreen, Motion, and Help modal state
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isMotionReduced, setIsMotionReduced] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);

  // Handle strokes change and persist to localStorage
  const handleStrokesChange = useCallback((screenKey: string, strokes: Stroke[]) => {
    setStrokesMap((prev) => {
      const updated = {
        ...prev,
        [screenKey]: strokes,
      };
      try {
        localStorage.setItem('maths_board_strokes_v1', JSON.stringify(updated));
      } catch (err) {
        console.warn('LocalStorage stroke storage quota exceeded or unavailable', err);
      }
      return updated;
    });
  }, []);

  // Update current subtopic
  const handleSelectSubtopic = (id: SubtopicId) => {
    setCurrentSubtopicId(id);
    try {
      localStorage.setItem('maths_board_subtopic', id);
    } catch {}
  };

  // Update scale
  const handleChangeScale = (scale: UiScaleOption) => {
    setUiScale(scale);
    try {
      localStorage.setItem('maths_board_scale', scale);
    } catch {}
  };

  // Update step index within subtopic
  const handleSelectStepIndex = (newIndex: number) => {
    const clamped = Math.max(0, Math.min(newIndex, currentSubtopic.steps.length - 1));
    setVisitedSteps((prev) => {
      const updated = {
        ...prev,
        [currentSubtopicId]: clamped,
      };
      try {
        localStorage.setItem('maths_board_visited_steps', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      handleSelectStepIndex(currentStepIndex - 1);
    }
  };

  const handleNextStep = () => {
    if (currentStepIndex < currentSubtopic.steps.length - 1) {
      handleSelectStepIndex(currentStepIndex + 1);
    }
  };

  const handleNavigateToStep = (stepId: string) => {
    const idx = currentSubtopic.steps.findIndex((s) => s.id === stepId);
    if (idx !== -1) {
      handleSelectStepIndex(idx);
    }
  };

  // Fullscreen toggle
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isHelpOpen) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        handleNextStep();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrevStep();
      } else if (e.key === 'd' || e.key === 'D') {
        setIsDrawMode((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStepIndex, isHelpOpen]);

  return (
    <div
      className={`fixed inset-0 w-full h-[100dvh] flex flex-col bg-[#FAF7F0] text-[#0F2042] overflow-hidden select-none font-sans ${
        isMotionReduced ? 'motion-reduce' : ''
      }`}
      onContextMenu={(e) => e.preventDefault()}
      style={{
        touchAction: 'none',
        overscrollBehavior: 'none',
      }}
    >
      {/* 1. TOP BAR */}
      <TopBar
        currentSubtopic={currentSubtopic}
        onSelectSubtopic={handleSelectSubtopic}
        currentStepTitle={currentStep.title}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        onOpenHelp={() => setIsHelpOpen(true)}
        isMotionReduced={isMotionReduced}
        onToggleMotion={() => setIsMotionReduced((prev) => !prev)}
        uiScale={uiScale}
        onChangeScale={handleChangeScale}
      />

      {/* 2. MAIN STAGE (Scaled cleanly to fit single screen) */}
      <main
        className="flex-1 w-full relative overflow-hidden bg-[#FAF7F0] min-h-0"
        style={{
          zoom: `${uiScale}%`,
        }}
      >
        <SlideView
          key={currentScreenKey}
          step={currentStep}
          subtopic={currentSubtopic}
          onNavigateToStep={handleNavigateToStep}
        />
      </main>

      {/* 3. WHITEBOARD FULL-STAGE CANVAS */}
      <WhiteboardCanvas
        screenKey={currentScreenKey}
        isDrawMode={isDrawMode}
        currentTool={currentTool}
        currentColor={currentColor}
        currentWidth={currentWidth}
        strokesMap={strokesMap}
        onStrokesChange={handleStrokesChange}
        undoTrigger={undoTrigger}
        redoTrigger={redoTrigger}
        clearTrigger={clearTrigger}
      />

      {/* 4. FLOATING WHITEBOARD TOOLBAR */}
      <WhiteboardToolbar
        isDrawMode={isDrawMode}
        onToggleDrawMode={() => setIsDrawMode((prev) => !prev)}
        currentTool={currentTool}
        onChangeTool={(tool) => {
          setCurrentTool(tool);
          if (!isDrawMode) setIsDrawMode(true);
        }}
        currentColor={currentColor}
        onChangeColor={setCurrentColor}
        currentWidth={currentWidth}
        onChangeWidth={setCurrentWidth}
        onUndo={() => setUndoTrigger((prev) => prev + 1)}
        onRedo={() => setRedoTrigger((prev) => prev + 1)}
        onClear={() => setClearTrigger((prev) => prev + 1)}
      />

      {/* 5. BOTTOM BAR */}
      <BottomBar
        currentSubtopic={currentSubtopic}
        currentStepIndex={currentStepIndex}
        totalSteps={currentSubtopic.steps.length}
        onPrevStep={handlePrevStep}
        onNextStep={handleNextStep}
        onSelectStepIndex={handleSelectStepIndex}
      />

      {/* 6. TEACHER HELP MODAL */}
      <TeacherHelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />
    </div>
  );
}
