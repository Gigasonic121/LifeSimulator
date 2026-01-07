import { useGameStore } from '../store/gameStore';

export default function MenuScreen() {
  const setGameState = useGameStore(state => state.setGameState);
  const resetGame = useGameStore(state => state.resetGame);
  
  const handleNewGame = () => {
    resetGame();
    setGameState('creation');
  };
  
  const hasSave = localStorage.getItem('life-simulator-save') !== null;
  
  const handleContinue = () => {
    setGameState('playing');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-purple-950 to-slate-950 flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <h1 
            className="text-7xl font-serif text-rose-200 mb-2 tracking-tight"
            style={{ fontFamily: 'Palatino, Georgia, serif', textShadow: '0 0 40px rgba(225,29,72,0.3)' }}
          >
            Life Simulator
          </h1>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-rose-400/50 to-transparent mx-auto mb-4" />
          <p className="text-rose-300/60 text-lg italic tracking-wide">
            An adult life simulation experience
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={handleNewGame}
            className="w-full px-16 py-5 bg-gradient-to-r from-rose-800/40 to-purple-800/40 hover:from-rose-700/50 hover:to-purple-700/50 text-rose-100 rounded text-xl tracking-widest uppercase transition-all border border-rose-500/30 hover:border-rose-400/50 hover:shadow-lg hover:shadow-rose-500/20"
          >
            New Game
          </button>
          
          {hasSave && (
            <button
              onClick={handleContinue}
              className="w-full px-16 py-4 bg-gradient-to-r from-slate-800/40 to-slate-700/40 hover:from-slate-700/50 hover:to-slate-600/50 text-slate-200 rounded text-lg tracking-wider uppercase transition-all border border-slate-500/30 hover:border-slate-400/50"
            >
              Continue
            </button>
          )}
        </div>
        
        <div className="mt-20 text-rose-400/30 text-xs tracking-wider">
          <p>Contains mature themes including pregnancy, sexuality, and adult content.</p>
          <p className="mt-1">Intended for adults 18+ only.</p>
        </div>
      </div>
    </div>
  );
}
