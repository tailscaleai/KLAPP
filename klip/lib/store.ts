import { create } from 'zustand';

export interface Highlight {
  id: string;
  start: number;
  end: number;
  title: string;
}

export interface Segment {
  startTime: number;
  endTime: number;
  text: string;
}

export interface Scene {
  timestamp: number;
  confidence: number;
  duration: number;
  thumbnail?: string;
}

interface EditorStore {
  videoFile: File | null;
  processingStage: string | null;
  progress: number;
  highlights: Highlight[];
  transcript: Segment[];
  scenes: Scene[];
  currentTime: number;
  
  setVideoFile: (file: File | null) => void;
  setProcessingStage: (stage: string | null) => void;
  setProgress: (progress: number) => void;
  addHighlight: (highlight: Highlight) => void;
  removeHighlight: (id: string) => void;
  setTranscript: (transcript: Segment[]) => void;
  setScenes: (scenes: Scene[]) => void;
  setCurrentTime: (time: number) => void;
  reset: () => void;
}

export const useEditorStore = create<EditorStore>((set) => ({
  videoFile: null,
  processingStage: null,
  progress: 0,
  highlights: [],
  transcript: [],
  scenes: [],
  currentTime: 0,

  setVideoFile: (file) => set({ videoFile: file }),
  setProcessingStage: (stage) => set({ processingStage: stage }),
  setProgress: (progress) => set({ progress }),
  addHighlight: (highlight) =>
    set((state) => ({ highlights: [...state.highlights, highlight] })),
  removeHighlight: (id) =>
    set((state) => ({
      highlights: state.highlights.filter((h) => h.id !== id),
    })),
  setTranscript: (transcript) => set({ transcript }),
  setScenes: (scenes) => set({ scenes }),
  setCurrentTime: (time) => set({ currentTime: time }),
  reset: () =>
    set({
      videoFile: null,
      processingStage: null,
      progress: 0,
      highlights: [],
      transcript: [],
      scenes: [],
      currentTime: 0,
    }),
}));
