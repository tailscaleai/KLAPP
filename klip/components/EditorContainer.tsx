'use client';
import UploadZone from './UploadZone';

interface Props {
  videoFile: File | null;
  processingStage: string | null;
  progress: number;
}

export default function EditorContainer({ videoFile, processingStage, progress }: Props) {
  return (
    <div className="flex md:flex-row gap-4 p-4">
      <div className="flex-1">
        <UploadZone onVideoSelect={() => {}} disabled={false} />
      </div>
    </div>
  );
}
