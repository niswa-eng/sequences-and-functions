import React, { useState } from 'react';
import {
  Pen,
  Hand,
  Highlighter,
  Eraser,
  Undo2,
  Redo2,
  Trash2,
  Minus,
  Square,
  Circle,
  Ruler,
  ChevronLeft,
  ChevronRight,
  Layers,
  AlertTriangle,
  Palette,
} from 'lucide-react';
import { ToolType } from '../../types';

export type DockPosition = 'left' | 'right' | 'bottom';

interface WhiteboardToolbarProps {
  isDrawMode: boolean;
  onToggleDrawMode: () => void;
  currentTool: ToolType;
  onChangeTool: (tool: ToolType) => void;
  currentColor: string;
  onChangeColor: (color: string) => void;
  currentWidth: number;
  onChangeWidth: (width: number) => void;
  onUndo: () => void;
  onRedo: () => void;
  onClear: () => void;
}

const PALETTE = [
  { name: 'Navy', hex: '#0F2042' },
  { name: 'Blue', hex: '#2563EB' },
  { name: 'Crimson', hex: '#DC2626' },
  { name: 'Forest', hex: '#16A34A' },
  { name: 'Purple', hex: '#7C3AED' },
  { name: 'Amber', hex: '#D97706' },
];

const THICKNESSES = [
  { label: 'Thin', px: 4, indicator: 3 },
  { label: 'Med', px: 8, indicator: 6 },
  { label: 'Thick', px: 16, indicator: 10 },
];

export const WhiteboardToolbar: React.FC<WhiteboardToolbarProps> = ({
  isDrawMode,
  onToggleDrawMode,
  currentTool,
  onChangeTool,
  currentColor,
  onChangeColor,
  currentWidth,
  onChangeWidth,
  onUndo,
  onRedo,
  onClear,
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  const [showShapes, setShowShapes] = useState<boolean>(false);
  const [dock, setDock] = useState<DockPosition>(() => {
    return (localStorage.getItem('whiteboard_dock') as DockPosition) || 'left';
  });
  const [showClearConfirm, setShowClearConfirm] = useState<boolean>(false);

  const handleDockChange = (newDock: DockPosition) => {
    setDock(newDock);
    try {
      localStorage.setItem('whiteboard_dock', newDock);
    } catch {}
  };

  const cycleDock = () => {
    if (dock === 'left') handleDockChange('right');
    else if (dock === 'right') handleDockChange('bottom');
    else handleDockChange('left');
  };

  // Positional styling
  const getDockClasses = () => {
    if (dock === 'left') {
      return 'left-2.5 top-1/2 -translate-y-1/2 flex-col';
    } else if (dock === 'right') {
      return 'right-2.5 top-1/2 -translate-y-1/2 flex-col';
    } else {
      return 'bottom-16 left-1/2 -translate-x-1/2 flex-row';
    }
  };

  return (
    <>
      <div
        className={`fixed z-50 flex items-center select-none transition-all duration-150 pointer-events-auto ${getDockClasses()}`}
      >
        {/* Compact Floating Capsule */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl border-2 border-[#CBD5E1] shadow-xl p-1.5 flex flex-col items-center gap-1.5">
          {/* 1. MASTER DRAW / INTERACT BUTTON (Compact 42x42) */}
          <button
            onClick={onToggleDrawMode}
            className={`w-11 h-11 rounded-xl font-black flex items-center justify-center transition-transform active:scale-90 shadow-xs cursor-pointer ${
              isDrawMode
                ? 'bg-[#DC2626] text-white ring-2 ring-[#FECACA]'
                : 'bg-[#1D70B8] text-white ring-2 ring-[#BAE6FD]'
            }`}
            title={isDrawMode ? 'Draw Mode (Click to switch to Interact)' : 'Interact Mode (Click to switch to Draw)'}
          >
            {isDrawMode ? (
              <Pen className="w-5 h-5 fill-white" />
            ) : (
              <Hand className="w-5 h-5" />
            )}
          </button>

          {/* Minimize / Expand Toggle */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsCollapsed((prev) => !prev)}
              className="w-6 h-6 rounded-md bg-[#F1F5F9] text-[#64748B] hover:text-[#0F2042] flex items-center justify-center text-xs"
              title={isCollapsed ? 'Expand Tools' : 'Collapse Tools'}
            >
              {isCollapsed ? (
                <ChevronRight className="w-3.5 h-3.5" />
              ) : (
                <ChevronLeft className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Detailed Tools (Hidden when collapsed) */}
          {!isCollapsed && (
            <div className="flex flex-col items-center gap-1.5 pt-0.5 border-t border-[#E2E8F0]">
              {/* PRIMARY DRAWING TOOLS */}
              <button
                onClick={() => onChangeTool('pen')}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                  currentTool === 'pen'
                    ? 'bg-[#0F2042] text-white shadow-xs'
                    : 'text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F2042]'
                }`}
                title="Pen"
              >
                <Pen className="w-4 h-4" />
              </button>

              <button
                onClick={() => onChangeTool('highlighter')}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                  currentTool === 'highlighter'
                    ? 'bg-[#D97706] text-white shadow-xs'
                    : 'text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F2042]'
                }`}
                title="Highlighter"
              >
                <Highlighter className="w-4 h-4" />
              </button>

              <button
                onClick={() => onChangeTool('eraser')}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                  currentTool === 'eraser'
                    ? 'bg-[#DC2626] text-white shadow-xs'
                    : 'text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F2042]'
                }`}
                title="Stroke Eraser"
              >
                <Eraser className="w-4 h-4" />
              </button>

              {/* CURRENT COLOR & PALETTE POPOUT */}
              <div className="relative">
                <button
                  onClick={() => setShowColorPicker((prev) => !prev)}
                  className="w-7 h-7 rounded-full border-2 border-white shadow-xs flex items-center justify-center transition-transform active:scale-90"
                  style={{ backgroundColor: currentColor }}
                  title="Choose Color"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
                </button>

                {/* Popout mini color palette */}
                {showColorPicker && (
                  <div
                    className={`absolute z-60 bg-white rounded-xl border border-[#CBD5E1] shadow-xl p-1.5 grid grid-cols-3 gap-1 ${
                      dock === 'right' ? 'right-9 top-0' : 'left-9 top-0'
                    }`}
                  >
                    {PALETTE.map((c) => (
                      <button
                        key={c.hex}
                        onClick={() => {
                          onChangeColor(c.hex);
                          setShowColorPicker(false);
                        }}
                        className={`w-6 h-6 rounded-lg transition-transform active:scale-90 flex items-center justify-center ${
                          currentColor === c.hex ? 'ring-2 ring-[#0F2042]' : ''
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* THICKNESS MINI SELECTOR */}
              <div className="flex flex-col gap-1 p-0.5 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                {THICKNESSES.map((t) => (
                  <button
                    key={t.px}
                    onClick={() => onChangeWidth(t.px)}
                    className={`w-6 h-5 rounded flex items-center justify-center ${
                      currentWidth === t.px ? 'bg-white shadow-xs' : 'opacity-60'
                    }`}
                    title={t.label}
                  >
                    <span
                      className="rounded-full bg-[#0F2042]"
                      style={{ width: t.indicator, height: t.indicator }}
                    />
                  </button>
                ))}
              </div>

              {/* SHAPES POPOUT BUTTON */}
              <div className="relative">
                <button
                  onClick={() => setShowShapes((prev) => !prev)}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                    ['line', 'ruler', 'rect', 'circle'].includes(currentTool)
                      ? 'bg-[#0F2042] text-white'
                      : 'text-[#64748B] hover:bg-[#F1F5F9]'
                  }`}
                  title="Shapes & Ruler"
                >
                  <Square className="w-4 h-4" />
                </button>

                {showShapes && (
                  <div
                    className={`absolute z-60 bg-white rounded-xl border border-[#CBD5E1] shadow-xl p-1 flex flex-col gap-1 ${
                      dock === 'right' ? 'right-9 top-0' : 'left-9 top-0'
                    }`}
                  >
                    <button
                      onClick={() => {
                        onChangeTool('line');
                        setShowShapes(false);
                      }}
                      className="p-1.5 rounded hover:bg-[#F1F5F9] text-[#0F2042]"
                      title="Straight Line"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        onChangeTool('ruler');
                        setShowShapes(false);
                      }}
                      className="p-1.5 rounded hover:bg-[#F1F5F9] text-[#0F2042]"
                      title="Ruler"
                    >
                      <Ruler className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        onChangeTool('rect');
                        setShowShapes(false);
                      }}
                      className="p-1.5 rounded hover:bg-[#F1F5F9] text-[#0F2042]"
                      title="Rectangle"
                    >
                      <Square className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        onChangeTool('circle');
                        setShowShapes(false);
                      }}
                      className="p-1.5 rounded hover:bg-[#F1F5F9] text-[#0F2042]"
                      title="Circle"
                    >
                      <Circle className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* UNDO / REDO / CLEAR */}
              <div className="flex flex-col gap-1 pt-1 border-t border-[#E2E8F0]">
                <button
                  onClick={onUndo}
                  className="w-8 h-8 rounded-lg text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F2042] flex items-center justify-center"
                  title="Undo"
                >
                  <Undo2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onRedo}
                  className="w-8 h-8 rounded-lg text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F2042] flex items-center justify-center"
                  title="Redo"
                >
                  <Redo2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setShowClearConfirm(true)}
                  className="w-8 h-8 rounded-lg text-[#DC2626] hover:bg-[#FEE2E2] flex items-center justify-center"
                  title="Clear Ink"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* DOCK CYCLE */}
              <button
                onClick={cycleDock}
                className="w-7 h-7 rounded-md text-[#94A3B8] hover:text-[#475569] flex items-center justify-center mt-0.5"
                title="Reposition Toolbar (Left / Right / Bottom)"
              >
                <Layers className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Clear Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-5 max-w-xs w-full border-2 border-[#DC2626] shadow-xl flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#FEE2E2] flex items-center justify-center mb-2">
              <AlertTriangle className="w-6 h-6 text-[#DC2626]" />
            </div>
            <h3 className="text-xl font-black text-[#0F2042] mb-1">
              Clear Writing?
            </h3>
            <p className="text-sm text-[#475569] mb-4">
              Erase all ink on this screen?
            </p>
            <div className="flex items-center gap-2 w-full">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 py-2 rounded-xl bg-[#E2E8F0] text-[#0F2042] font-bold text-sm hover:bg-[#CBD5E1] cursor-pointer"
              >
                Keep
              </button>
              <button
                onClick={() => {
                  onClear();
                  setShowClearConfirm(false);
                }}
                className="flex-1 py-2 rounded-xl bg-[#DC2626] text-white font-black text-sm shadow hover:bg-[#B91C1C] cursor-pointer"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
