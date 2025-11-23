import { useState } from 'react';
import { Mic, MicOff, Video, VideoOff, PhoneOff, Monitor, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoCallProps {
  onClose: () => void;
}

const VideoCall = ({ onClose }: VideoCallProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-card border border-border rounded-lg shadow-2xl overflow-hidden z-50">
      {/* Video Preview */}
      <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        {isVideoOff ? (
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-2xl text-primary font-semibold">YO</span>
          </div>
        ) : (
          <div className="text-muted-foreground text-sm">Camera feed</div>
        )}
        <button className="absolute top-2 right-2 p-1 bg-background/50 backdrop-blur-sm rounded hover:bg-background/80 transition-colors">
          <Maximize2 className="w-4 h-4 text-foreground" />
        </button>
      </div>

      {/* Controls */}
      <div className="p-4 flex items-center justify-center gap-2">
        <Button
          size="sm"
          variant={isMuted ? "destructive" : "secondary"}
          onClick={() => setIsMuted(!isMuted)}
          className="rounded-full w-10 h-10 p-0"
        >
          {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
        </Button>
        <Button
          size="sm"
          variant={isVideoOff ? "destructive" : "secondary"}
          onClick={() => setIsVideoOff(!isVideoOff)}
          className="rounded-full w-10 h-10 p-0"
        >
          {isVideoOff ? <VideoOff className="w-4 h-4" /> : <Video className="w-4 h-4" />}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="rounded-full w-10 h-10 p-0"
        >
          <Monitor className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          variant="destructive"
          onClick={onClose}
          className="rounded-full w-10 h-10 p-0"
        >
          <PhoneOff className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default VideoCall;
