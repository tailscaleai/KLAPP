'use client';
interface Props {
  stage: string;
  progress: number;
}

export default function ProcessingStatus({ stage, progress }: Props) {
  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <p>{stage}</p>
      <div className="w-48 h-2 bg-gray-200 rounded mt-2">
        <div
          className="h-full bg-blue-600 rounded transition-all"
          style={{ width: \`\${progress}%\` }}
        />
      </div>
      <p className="text-sm mt-2">{progress}%</p>
    </div>
  );
}
