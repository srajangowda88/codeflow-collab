import { useState } from 'react';
import { X } from 'lucide-react';

interface CodeEditorProps {
  fileName: string;
}

const CodeEditor = ({ fileName }: CodeEditorProps) => {
  const [openTabs] = useState([
    'index.tsx',
    'App.tsx',
    'main.tsx',
  ]);

  // Sample code content
  const codeContent = `import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Collaborative cursor indicators will appear here
// This is a simulated Monaco-style editor`;

  return (
    <div className="flex-1 flex flex-col bg-editor">
      {/* Tabs */}
      <div className="flex items-center bg-card border-b border-border">
        {openTabs.map((tab, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2 px-4 py-2 border-r border-border cursor-pointer transition-colors ${
              tab === fileName
                ? 'bg-editor text-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent'
            }`}
          >
            <span className="text-sm font-mono">{tab}</span>
            <button className="hover:text-destructive transition-colors">
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>

      {/* Editor Area */}
      <div className="flex-1 p-4 overflow-auto">
        <div className="font-mono text-sm text-foreground space-y-1">
          {codeContent.split('\n').map((line, idx) => (
            <div key={idx} className="flex items-center">
              <span className="w-12 text-right pr-4 text-muted-foreground select-none">
                {idx + 1}
              </span>
              <div className="flex-1 relative">
                <pre className="whitespace-pre">{line || ' '}</pre>
                {/* Simulate collaborative cursors */}
                {idx === 3 && (
                  <div className="absolute left-32 top-0 w-0.5 h-5 bg-primary animate-pulse" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
