import { useState } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';

const Terminal = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-terminal border-t border-border flex flex-col transition-all ${
        isExpanded ? 'h-96' : 'h-48'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <div className="flex items-center gap-2 text-sm text-foreground">
          <TerminalIcon className="w-4 h-4" />
          <span>Terminal</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-accent rounded transition-colors"
          >
            {isExpanded ? (
              <Minimize2 className="w-4 h-4 text-muted-foreground" />
            ) : (
              <Maximize2 className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
          <button className="p-1 hover:bg-accent rounded transition-colors">
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-auto font-mono text-sm">
        <div className="space-y-1">
          <div className="text-success">$ npm run dev</div>
          <div className="text-muted-foreground">
            <span className="text-primary">{'>'}</span> vite
          </div>
          <div className="text-muted-foreground">
            <span className="text-success">VITE</span> v5.0.0 ready in 243 ms
          </div>
          <div className="text-muted-foreground">
            <span className="text-primary">➜</span> Local: 
            <span className="text-primary ml-2">http://localhost:5173/</span>
          </div>
          <div className="text-muted-foreground">
            <span className="text-primary">➜</span> Network: use --host to expose
          </div>
          <div className="flex items-center mt-2">
            <span className="text-primary mr-2">$</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
