import { useState } from 'react';
import FileExplorer from '@/components/ide/FileExplorer';
import CodeEditor from '@/components/ide/CodeEditor';
import Terminal from '@/components/ide/Terminal';
import TopBar from '@/components/ide/TopBar';
import ParticipantsList from '@/components/ide/ParticipantsList';
import VideoCall from '@/components/ide/VideoCall';

const Room = () => {
  const [selectedFile, setSelectedFile] = useState<string>('index.tsx');
  const [isVideoCallOpen, setIsVideoCallOpen] = useState(false);

  return (
    <div className="h-screen w-full flex flex-col bg-background overflow-hidden">
      <TopBar onVideoToggle={() => setIsVideoCallOpen(!isVideoCallOpen)} />
      
      <div className="flex-1 flex overflow-hidden">
        <FileExplorer onFileSelect={setSelectedFile} selectedFile={selectedFile} />
        
        <div className="flex-1 flex flex-col">
          <CodeEditor fileName={selectedFile} />
          <Terminal />
        </div>
        
        <ParticipantsList />
      </div>

      {isVideoCallOpen && <VideoCall onClose={() => setIsVideoCallOpen(false)} />}
    </div>
  );
};

export default Room;
