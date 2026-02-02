'use client';

import EditorContainer from '@/components/EditorContainer';
import ProgressBar from '@/components/ProcessingStatus';
import { useEditorStore } from '@/lib/store';
import { useEffect } from 'react';

export default function EditorPage() {
  const { videoFile, processingStage, progress } = useEditorStore();

  useEffect(() => {
    const saved = localStorage.getItem('editorState');
    if (saved) {
      try {
        const state = JSON.parse(saved);
        useEditorStore.setState(state);
      } catch (e) {
        console.error('Failed to restore editor state');
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <EditorContainer videoFile={videoFile} processingStage={processingStage} progress={progress} />
      {processingStage && <ProgressBar stage={processingStage} progress={progress} />}
    </div>
  );
}
