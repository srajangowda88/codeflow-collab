import { File, Folder, ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FileExplorerProps {
  onFileSelect: (file: string) => void;
  selectedFile: string;
}

const FileExplorer = ({ onFileSelect, selectedFile }: FileExplorerProps) => {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['src']));

  const toggleFolder = (folder: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folder)) {
      newExpanded.delete(folder);
    } else {
      newExpanded.add(folder);
    }
    setExpandedFolders(newExpanded);
  };

  const files = [
    { type: 'folder', name: 'src', children: [
      { type: 'file', name: 'index.tsx' },
      { type: 'file', name: 'App.tsx' },
      { type: 'file', name: 'main.tsx' },
    ]},
    { type: 'folder', name: 'components', children: [
      { type: 'file', name: 'Button.tsx' },
      { type: 'file', name: 'Card.tsx' },
    ]},
    { type: 'file', name: 'package.json' },
    { type: 'file', name: 'tsconfig.json' },
  ];

  return (
    <div className="w-64 bg-sidebar border-r border-border flex flex-col">
      <div className="p-3 border-b border-border">
        <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Explorer</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-2">
        {files.map((item, idx) => (
          <div key={idx}>
            {item.type === 'folder' ? (
              <div>
                <button
                  onClick={() => toggleFolder(item.name)}
                  className="w-full flex items-center gap-1 px-2 py-1 hover:bg-accent rounded text-sm text-foreground transition-colors"
                >
                  {expandedFolders.has(item.name) ? (
                    <ChevronDown className="w-3 h-3" />
                  ) : (
                    <ChevronRight className="w-3 h-3" />
                  )}
                  <Folder className="w-4 h-4 text-primary" />
                  <span>{item.name}</span>
                </button>
                {expandedFolders.has(item.name) && item.children && (
                  <div className="ml-4 mt-1">
                    {item.children.map((child, childIdx) => (
                      <button
                        key={childIdx}
                        onClick={() => onFileSelect(child.name)}
                        className={cn(
                          "w-full flex items-center gap-1 px-2 py-1 rounded text-sm transition-colors",
                          selectedFile === child.name
                            ? "bg-accent text-primary"
                            : "text-foreground hover:bg-accent"
                        )}
                      >
                        <File className="w-4 h-4" />
                        <span>{child.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => onFileSelect(item.name)}
                className={cn(
                  "w-full flex items-center gap-1 px-2 py-1 rounded text-sm transition-colors",
                  selectedFile === item.name
                    ? "bg-accent text-primary"
                    : "text-foreground hover:bg-accent"
                )}
              >
                <File className="w-4 h-4" />
                <span>{item.name}</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileExplorer;
