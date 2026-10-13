import React, { useRef, useEffect, useCallback, useState } from 'react';
import { Stroke, ToolType, WhiteboardPoint } from '../../types';

interface WhiteboardCanvasProps {
  screenKey: string;
  isDrawMode: boolean;
  currentTool: ToolType;
  currentColor: string;
  currentWidth: number;
  strokesMap: Record<string, Stroke[]>;
  onStrokesChange: (screenKey: string, strokes: Stroke[]) => void;
  undoTrigger: number;
  redoTrigger: number;
  clearTrigger: number;
}

export const WhiteboardCanvas: React.FC<WhiteboardCanvasProps> = ({
  screenKey,
  isDrawMode,
  currentTool,
  currentColor,
  currentWidth,
  strokesMap,
  onStrokesChange,
  undoTrigger,
  redoTrigger,
  clearTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const activePointerIdRef = useRef<number | null>(null);
  const isDrawingRef = useRef<boolean>(false);
  const currentStrokeRef = useRef<Stroke | null>(null);

  // Undo / Redo history per screen
  const [undoStack, setUndoStack] = useState<Stroke[][]>([]);
  const [redoStack, setRedoStack] = useState<Stroke[][]>([]);

  const currentStrokes = strokesMap[screenKey] || [];

  // Helper: check point distance to line segment
  const distToSegment = (
    px: number,
    py: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    const l2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (l2 === 0) return Math.hypot(px - x1, py - y1);
    let t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - (x1 + t * (x2 - x1)), py - (y1 + t * (y2 - y1)));
  };

  // Render a single stroke
  const drawStroke = useCallback((ctx: CanvasRenderingContext2D, stroke: Stroke) => {
    if (!stroke.points || stroke.points.length === 0) return;

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (stroke.tool === 'highlighter') {
      ctx.globalAlpha = 0.35;
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.width * 2.8;
    } else {
      ctx.globalAlpha = 1.0;
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.width;
    }

    const pts = stroke.points;

    if (stroke.tool === 'line' || stroke.tool === 'ruler') {
      const p1 = pts[0];
      const p2 = pts[pts.length - 1];
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();

      if (stroke.tool === 'ruler') {
        // Draw tick marks along the ruler
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dist = Math.hypot(dx, dy);
        const steps = Math.floor(dist / 20);
        const ux = dx / (dist || 1);
        const uy = dy / (dist || 1);
        const perpX = -uy;
        const perpY = ux;

        ctx.lineWidth = 2;
        ctx.strokeStyle = stroke.color;
        for (let i = 1; i <= steps; i++) {
          const tx = p1.x + ux * (i * 20);
          const ty = p1.y + uy * (i * 20);
          const tickLen = i % 5 === 0 ? 14 : 7;
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(tx + perpX * tickLen, ty + perpY * tickLen);
          ctx.stroke();
        }
      }
    } else if (stroke.tool === 'rect') {
      const p1 = pts[0];
      const p2 = pts[pts.length - 1];
      ctx.beginPath();
      ctx.strokeRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);
    } else if (stroke.tool === 'circle') {
      const p1 = pts[0];
      const p2 = pts[pts.length - 1];
      const rx = Math.abs(p2.x - p1.x) / 2;
      const ry = Math.abs(p2.y - p1.y) / 2;
      const cx = (p1.x + p2.x) / 2;
      const cy = (p1.y + p2.y) / 2;
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      // Smooth freehand pen / highlighter
      if (pts.length === 1) {
        ctx.fillStyle = stroke.color;
        ctx.beginPath();
        ctx.arc(pts[0].x, pts[0].y, stroke.width / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length - 1; i++) {
          const xc = (pts[i].x + pts[i + 1].x) / 2;
          const yc = (pts[i].y + pts[i + 1].y) / 2;
          ctx.quadraticCurveTo(pts[i].x, pts[i].y, xc, yc);
        }
        ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
        ctx.stroke();
      }
    }

    ctx.restore();
  }, []);

  // Redraw all strokes on canvas
  const redrawAll = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const stroke of currentStrokes) {
      drawStroke(ctx, stroke);
    }

    // Also draw live stroke if currently drawing
    if (isDrawingRef.current && currentStrokeRef.current) {
      drawStroke(ctx, currentStrokeRef.current);
    }
  }, [currentStrokes, drawStroke]);

  // Sync canvas dimensions with viewport
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      redrawAll();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [redrawAll]);

  // Redraw on strokes or screenKey changes
  useEffect(() => {
    redrawAll();
  }, [redrawAll, screenKey]);

  // Undo trigger effect
  useEffect(() => {
    if (undoTrigger > 0 && currentStrokes.length > 0) {
      const lastStroke = currentStrokes[currentStrokes.length - 1];
      const newStrokes = currentStrokes.slice(0, -1);
      setRedoStack((prev) => [...prev, [lastStroke]]);
      onStrokesChange(screenKey, newStrokes);
    }
  }, [undoTrigger]);

  // Redo trigger effect
  useEffect(() => {
    if (redoTrigger > 0 && redoStack.length > 0) {
      const toRestore = redoStack[redoStack.length - 1];
      setRedoStack((prev) => prev.slice(0, -1));
      onStrokesChange(screenKey, [...currentStrokes, ...toRestore]);
    }
  }, [redoTrigger]);

  // Clear trigger effect
  useEffect(() => {
    if (clearTrigger > 0 && currentStrokes.length > 0) {
      setUndoStack((prev) => [...prev, currentStrokes]);
      onStrokesChange(screenKey, []);
    }
  }, [clearTrigger]);

  // Pointer event handlers with palm rejection
  const getCanvasCoords = (e: React.PointerEvent<HTMLCanvasElement>): WhiteboardPoint => {
    const rect = canvasRef.current?.getBoundingClientRect();
    const x = e.clientX - (rect?.left || 0);
    const y = e.clientY - (rect?.top || 0);
    return { x, y, pressure: e.pressure || 0.5 };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawMode) return;

    // Palm rejection logic
    if (e.pointerType === 'pen') {
      // Always allow stylus pen
    } else if (e.pointerType === 'touch') {
      // If stylus is active or not primary touch, ignore
      if (!e.isPrimary) return;
      // If contact area is huge (palm), ignore
      if (e.width > 50 || e.height > 50) return;
    }

    activePointerIdRef.current = e.pointerId;
    isDrawingRef.current = true;
    const pt = getCanvasCoords(e);

    if (currentTool === 'eraser') {
      // Erase any stroke hit at start
      eraseAtPoint(pt.x, pt.y);
      return;
    }

    currentStrokeRef.current = {
      id: Math.random().toString(36).substring(2, 9),
      tool: currentTool,
      color: currentColor,
      width: currentWidth,
      points: [pt],
    };

    redrawAll();
  };

  const eraseAtPoint = (px: number, py: number) => {
    const threshold = 18;
    const remaining: Stroke[] = [];
    let erasedAny = false;

    for (const stroke of currentStrokes) {
      let isHit = false;
      const pts = stroke.points;
      for (let i = 0; i < pts.length - 1; i++) {
        const d = distToSegment(px, py, pts[i].x, pts[i].y, pts[i + 1].x, pts[i + 1].y);
        if (d <= threshold + stroke.width / 2) {
          isHit = true;
          break;
        }
      }
      if (pts.length === 1) {
        if (Math.hypot(px - pts[0].x, py - pts[0].y) <= threshold + stroke.width / 2) {
          isHit = true;
        }
      }

      if (!isHit) {
        remaining.push(stroke);
      } else {
        erasedAny = true;
      }
    }

    if (erasedAny) {
      onStrokesChange(screenKey, remaining);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawMode || !isDrawingRef.current) return;
    if (activePointerIdRef.current !== e.pointerId) return;

    const pt = getCanvasCoords(e);

    if (currentTool === 'eraser') {
      eraseAtPoint(pt.x, pt.y);
      return;
    }

    if (!currentStrokeRef.current) return;

    if (currentTool === 'line' || currentTool === 'ruler') {
      // Auto-snap to exact horizontal or vertical if close
      const startPt = currentStrokeRef.current.points[0];
      const dx = Math.abs(pt.x - startPt.x);
      const dy = Math.abs(pt.y - startPt.y);

      let adjustedPt = { ...pt };
      if (dy < 14) {
        adjustedPt.y = startPt.y; // Snap horizontal
      } else if (dx < 14) {
        adjustedPt.x = startPt.x; // Snap vertical
      }

      currentStrokeRef.current.points = [startPt, adjustedPt];
    } else if (currentTool === 'rect' || currentTool === 'circle') {
      const startPt = currentStrokeRef.current.points[0];
      currentStrokeRef.current.points = [startPt, pt];
    } else {
      // Freehand pen or highlighter
      currentStrokeRef.current.points.push(pt);
    }

    redrawAll();
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    if (activePointerIdRef.current !== e.pointerId) return;

    isDrawingRef.current = false;
    activePointerIdRef.current = null;

    if (currentTool !== 'eraser' && currentStrokeRef.current) {
      const newStroke = currentStrokeRef.current;
      if (newStroke.points.length > 0) {
        const updated = [...currentStrokes, newStroke];
        onStrokesChange(screenKey, updated);
      }
      currentStrokeRef.current = null;
    }

    redrawAll();
  };

  const handlePointerCancel = () => {
    isDrawingRef.current = false;
    activePointerIdRef.current = null;
    currentStrokeRef.current = null;
    redrawAll();
  };

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      className={`fixed inset-0 z-40 w-full h-full select-none ${
        isDrawMode ? 'pointer-events-auto cursor-crosshair' : 'pointer-events-none'
      }`}
      style={{
        touchAction: 'none',
      }}
    />
  );
};
