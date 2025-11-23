import { Button } from '@/components/ui/button';
import { Video, Share2, Settings, Activity } from 'lucide-react';

interface TopBarProps {
  onVideoToggle: () => void;
}

const TopBar = ({ onVideoToggle }: TopBarProps) => {
  return (
    <div className="h-12 bg-card border-b border-border flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <h1 className="text-sm font-semibold text-foreground">CodeCollab</h1>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Room:</span>
          <code className="px-2 py-0.5 bg-muted rounded text-primary font-mono">room-abc123</code>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-success shadow-glow-success animate-pulse" />
          <span className="text-xs text-success">Connected</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="sm"
          className="text-muted-foreground hover:text-foreground hover:bg-accent"
        >
          <Activity className="w-4 h-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={onVideoToggle}
          className="text-muted-foreground hover:text-foreground hover:bg-accent"
        >
          <Video className="w-4 h-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm"
          className="text-muted-foreground hover:text-foreground hover:bg-accent"
        >
          <Share2 className="w-4 h-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm"
          className="text-muted-foreground hover:text-foreground hover:bg-accent"
        >
          <Settings className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
