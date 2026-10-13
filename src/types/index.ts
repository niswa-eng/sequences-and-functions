export type SubtopicId = '9.1' | '9.2' | '9.3' | '9.4';

export type StepType =
  | 'objective'
  | 'concept'
  | 'worked-example'
  | 'common-mistake'
  | 'vocabulary'
  | 'practice';

export type PracticeLevel = 'L1' | 'L2' | 'L3';

export type WorkingGridType = 'blank' | 'dot' | 'square' | 'lined' | 'axes';

export interface WorkedStep {
  label: string;
  math?: string;
  explanation?: string;
}

export interface VocabItem {
  term: string;
  meaning: string;
  example?: string;
}

export interface MistakeDetail {
  misconception: string;
  correction: string;
  takeaway: string;
}

export interface PracticeQuestion {
  questionNumber: number;
  text: string;
  visualType?: 'sequence' | 'pattern' | 'table' | 'machine' | 'numberline' | 'none';
  visualData?: any;
}

export interface Step {
  id: string;
  stepNumber: number;
  type: StepType;
  title: string;
  cambridgeCode?: string;
  
  // Concise student-facing content (max 2 short sentences + key terms)
  keyTerms?: string[];
  sentences?: string[];
  
  // Interactive component config
  componentType?:
    | 'SequenceStrip'
    | 'PatternBuilder'
    | 'PositionTermTable'
    | 'FunctionMachine'
    | 'MappingTable'
    | 'NumberLine'
    | 'None';
  componentProps?: any;
  
  // Specialized payloads
  workedExample?: {
    problem: string;
    steps: WorkedStep[];
  };
  mistakeContent?: MistakeDetail;
  vocabList?: VocabItem[];
  practiceLevel?: PracticeLevel;
  practiceQuestion?: PracticeQuestion;
}

export interface Subtopic {
  id: SubtopicId;
  code: string;
  number: string;
  title: string;
  fullTitle: string;
  themeColor: {
    primary: string; // Tailwind hex or class
    secondary: string;
    border: string;
    badgeBg: string;
    badgeText: string;
  };
  steps: Step[];
}

export interface WhiteboardPoint {
  x: number;
  y: number;
  pressure?: number;
}

export type ToolType = 'pen' | 'highlighter' | 'eraser' | 'line' | 'rect' | 'circle' | 'ruler';

export interface Stroke {
  id: string;
  tool: ToolType;
  color: string;
  width: number;
  points: WhiteboardPoint[];
  // Bounding box for fast eraser collision
  bbox?: {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
  };
}
