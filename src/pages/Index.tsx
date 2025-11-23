import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Code2, Users, Video, Zap } from 'lucide-react';

const Index = () => {
  const [roomCode, setRoomCode] = useState('');
  const navigate = useNavigate();

  const handleJoinRoom = () => {
    if (roomCode.trim()) {
      navigate('/room');
    }
  };

  const handleCreateRoom = () => {
    navigate('/room');
  };

  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Code2 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
            Code Together, <span className="text-primary">Build Better</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time collaborative coding platform with integrated video calls. 
            Write code together, see changes instantly, and ship faster.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Real-Time Collaboration</h3>
            <p className="text-sm text-muted-foreground">
              See changes instantly with live cursors and presence indicators
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Video className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Integrated Video</h3>
            <p className="text-sm text-muted-foreground">
              Built-in video calls so you can code and communicate seamlessly
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">
              Powered by modern tech for instant sync and zero lag
            </p>
          </div>
        </div>

        {/* Action Section */}
        <div className="bg-card border border-border rounded-xl p-8 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Get Started
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">
                Join existing room
              </label>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter room code"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleJoinRoom()}
                  className="flex-1 bg-background border-border focus-visible:ring-primary"
                />
                <Button 
                  onClick={handleJoinRoom}
                  disabled={!roomCode.trim()}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary"
                >
                  Join
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            <Button 
              onClick={handleCreateRoom}
              variant="secondary"
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80"
            >
              Create New Room
            </Button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          No sign-up required · Start coding in seconds
        </p>
      </div>
    </div>
  );
};

export default Index;
