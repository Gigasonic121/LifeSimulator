import { useMemo } from 'react';
import { useGameStore } from '../store/gameStore';
import { TIME_SLOTS, DAYS, BUST_SIZES, LUST_LEVELS } from '../data/constants';
import { getWeightTier, getMoodLevel, getLustLevel, getCyclePhase, getEffectiveBustIndex, isOverdue, formatMoney } from '../utils/helpers';
import { getBellyDescription } from '../systems/pregnancyDescriptions';
import TopBar from './TopBar';
import StatsPanel from './StatsPanel';
import MessageLog from './MessageLog';
import ActionPanel from './ActionPanel';
import RightPanel from './RightPanel';
import Modal from './Modal';

export default function GameScreen() {
  const state = useGameStore();
  
  // Derived values
  const weightTier = useMemo(() => getWeightTier(state.weightPoints), [state.weightPoints]);
  const moodLevel = useMemo(() => getMoodLevel(state.moodPoints), [state.moodPoints]);
  const lustLevel = useMemo(() => getLustLevel(state.lustDays), [state.lustDays]);
  const cyclePhase = useMemo(() => getCyclePhase(state.cycleDay, state.isPregnant), [state.cycleDay, state.isPregnant]);
  const effectiveBustIndex = useMemo(() => 
    getEffectiveBustIndex(state.bustIndex, state.isPregnant, state.pregnancyWeeks, state.isLactating),
    [state.bustIndex, state.isPregnant, state.pregnancyWeeks, state.isLactating]
  );
  const pregnant_isOverdue = useMemo(() => 
    isOverdue(state.pregnancyType, state.pregnancyWeeks),
    [state.pregnancyType, state.pregnancyWeeks]
  );
  const currentTimeSlot = TIME_SLOTS[state.timeSlot];
  
  const derivedState = {
    weightTier,
    moodLevel,
    lustLevel,
    cyclePhase,
    effectiveBustIndex,
    isOverdue: pregnant_isOverdue,
    currentTimeSlot,
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col">
      <TopBar derivedState={derivedState} />
      
      <div className="flex-1 overflow-hidden">
        <div className="max-w-7xl mx-auto p-4 h-full grid grid-cols-12 gap-4">
          {/* Left Panel - Stats */}
          <div className="col-span-3 space-y-3 overflow-y-auto">
            <StatsPanel derivedState={derivedState} />
          </div>
          
          {/* Center Panel - Main View */}
          <div className="col-span-6 flex flex-col">
            <MessageLog />
            <ActionPanel derivedState={derivedState} />
          </div>
          
          {/* Right Panel - Info */}
          <div className="col-span-3 space-y-3 overflow-y-auto">
            <RightPanel derivedState={derivedState} />
          </div>
        </div>
      </div>
      
      {/* Modal */}
      {state.showModal && <Modal modalType={state.showModal} derivedState={derivedState} />}
    </div>
  );
}
