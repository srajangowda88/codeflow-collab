import { Users } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const ParticipantsList = () => {
  const participants = [
    { id: 1, name: 'You', color: 'bg-primary', initials: 'YO', status: 'online' },
    { id: 2, name: 'Alice', color: 'bg-emerald-500', initials: 'AL', status: 'online' },
    { id: 3, name: 'Bob', color: 'bg-amber-500', initials: 'BO', status: 'typing' },
  ];

  return (
    <div className="w-56 bg-sidebar border-l border-border flex flex-col">
      <div className="p-3 border-b border-border flex items-center gap-2">
        <Users className="w-4 h-4 text-muted-foreground" />
        <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Participants ({participants.length})
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        {participants.map((participant) => (
          <div
            key={participant.id}
            className="flex items-center gap-3 p-2 rounded hover:bg-accent transition-colors cursor-pointer"
          >
            <div className="relative">
              <Avatar className="w-8 h-8">
                <AvatarFallback className={`${participant.color} text-white text-xs`}>
                  {participant.initials}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-success border-2 border-sidebar" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground truncate">{participant.name}</p>
              {participant.status === 'typing' && (
                <p className="text-xs text-muted-foreground italic">typing...</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParticipantsList;
