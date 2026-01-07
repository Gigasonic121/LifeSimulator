import { useGameStore } from './store/gameStore';
import MenuScreen from './components/MenuScreen';
import CharacterCreation from './components/CharacterCreation';
import GameScreen from './components/GameScreen';
import './index.css';

function App() {
  const gameState = useGameStore(state => state.gameState);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {gameState === 'menu' && <MenuScreen />}
      {gameState === 'creation' && <CharacterCreation />}
      {gameState === 'playing' && <GameScreen />}
    </div>
  );
}

export default App;
