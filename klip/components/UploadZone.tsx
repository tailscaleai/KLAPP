'use client';
interface Props {
  onVideoSelect: (file: File) => void;
  disabled: boolean;
}

export default function UploadZone({ onVideoSelect, disabled }: Props) {
  return (
    <div className="border-2 border-dashed rounded-lg p-12 bg-blue-50 dark:bg-gray-900 text-center">
      <p className="text-lg">Drag video here or click to browse</p>
    </div>
  );
}
