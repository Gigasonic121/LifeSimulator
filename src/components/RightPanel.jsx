import { useGameStore } from '../store/gameStore';
import { TOYS } from '../data/items';

export default function RightPanel({ derivedState }) {
  const {
    weather, cravings, groceries, toys, 
    hasMaternityClothes, hasNursingBra, hasBreastPads, hasCondoms, hasGymMembership, gymMembershipDays,
    totalPregnancies, day, metElla, ellaExperimentsCompleted
  } = useGameStore();
  
  return (
    <>
      {/* Weather */}
      <div className="bg-slate-900/60 rounded border border-slate-700/50 p-4">
        <h3 className="text-rose-300/80 text-xs uppercase tracking-wider mb-2">Weather</h3>
        <div className="text-slate-300">{weather.name}</div>
      </div>
      
      {/* Cravings */}
      {cravings && (
        <div className="bg-slate-900/60 rounded border border-amber-500/30 p-4">
          <h3 className="text-amber-300/80 text-xs uppercase tracking-wider mb-2">Craving</h3>
          <div className="text-amber-200">{cravings}</div>
          <div className="text-slate-500 text-xs mt-1">Satisfy it to boost mood!</div>
        </div>
      )}
      
      {/* Inventory */}
      <div className="bg-slate-900/60 rounded border border-slate-700/50 p-4">
        <h3 className="text-rose-300/80 text-xs uppercase tracking-wider mb-3">Inventory</h3>
        <div className="space-y-1 text-sm text-slate-400">
          <div>Groceries: {groceries} meals</div>
          {hasMaternityClothes && <div className="text-green-400/70">✓ Maternity Clothes</div>}
          {hasNursingBra && <div className="text-green-400/70">✓ Nursing Bras</div>}
          {hasBreastPads && <div className="text-green-400/70">✓ Breast Pads</div>}
          {hasCondoms && <div className="text-green-400/70">✓ Condoms</div>}
          {hasGymMembership && <div className="text-green-400/70">✓ Gym ({gymMembershipDays}d)</div>}
          {toys.length > 0 && (
            <div className="mt-2 pt-2 border-t border-slate-700/30">
              <div className="text-rose-300/60 mb-1 text-xs uppercase">Toys</div>
              {toys.map(t => (
                <div key={t} className="text-pink-300/70 text-xs">
                  {TOYS.find(x => x.id === t)?.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Stats */}
      <div className="bg-slate-900/60 rounded border border-slate-700/50 p-4">
        <h3 className="text-rose-300/80 text-xs uppercase tracking-wider mb-3">Statistics</h3>
        <div className="space-y-1 text-sm text-slate-400">
          <div>Total Pregnancies: {totalPregnancies}</div>
          <div>Days Played: {day}</div>
          {metElla && <div className="text-purple-400/70">Met Dr. Ella</div>}
          {ellaExperimentsCompleted.length > 0 && (
            <div className="text-purple-400/70">
              Ella Experiments: {ellaExperimentsCompleted.length}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
