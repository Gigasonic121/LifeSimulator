import { useGameStore } from '../store/gameStore';

export default function MessageLog() {
  const { messages, currentView, currentRoom, advanceTime, setCurrentView } = useGameStore();
  
  const locationName = currentView === 'flat' 
    ? `Your Flat — ${currentRoom.charAt(0).toUpperCase() + currentRoom.slice(1).replace(/([A-Z])/g, ' $1')}`
    : currentView === 'bar' ? 'The Bar'
    : currentView === 'shopping' ? 'Shopping Center'
    : currentView === 'doctor' ? "Doctor's Office"
    : 'Unknown';
  
  return (
    <>
      {/* Location Header */}
      <div className="bg-slate-900/60 rounded-t border border-slate-700/50 border-b-0 px-4 py-2 flex justify-between items-center flex-shrink-0">
        <span className="text-rose-200 font-medium">{locationName}</span>
        {currentView !== 'flat' && (
          <button 
            onClick={() => { setCurrentView('flat'); advanceTime(1); }} 
            className="text-slate-400 hover:text-rose-300 text-sm transition-colors"
          >
            ← Return Home
          </button>
        )}
      </div>
      
      {/* Messages */}
      <div className="bg-slate-950/60 border-x border-slate-700/50 flex-1 overflow-y-auto p-4 space-y-2 min-h-0">
        {messages.slice(-20).map(msg => (
          <div 
            key={msg.id} 
            className={`text-sm leading-relaxed ${getMessageStyle(msg.type)}`}
          >
            {msg.text}
          </div>
        ))}
        {messages.length === 0 && (
          <div className="text-slate-500 italic">A new day begins...</div>
        )}
      </div>
    </>
  );
}

function getMessageStyle(type) {
  switch (type) {
    case 'morning': return 'text-amber-200/90 italic border-l-2 border-amber-500/30 pl-3';
    case 'warning': return 'text-red-400';
    case 'income': return 'text-emerald-400';
    case 'expense': return 'text-orange-400';
    case 'adult': return 'text-pink-300';
    case 'labour':
    case 'birth': return 'text-fuchsia-300 font-medium';
    case 'mirror': return 'text-sky-300/90 italic';
    case 'body': return 'text-purple-300';
    case 'work': return 'text-blue-300/80';
    case 'system': return 'text-slate-400 italic';
    default: return 'text-slate-300';
  }
}
