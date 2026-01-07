import { useGameStore } from '../store/gameStore';
import { BUST_SIZES, LUST_LEVELS } from '../data/constants';

export default function StatsPanel({ derivedState }) {
  const {
    isPregnant, pregnancyKnown, pregnancyWeeks, pregnancyType, babyCount, babyCountKnown,
    isSurrogacy, ellaExperiment, onMaternityLeave, complications,
    cycleDay, isLactating, hasNursingBra, hasBreastPads, recoveryDays,
    height, skinTone, hairColor, hairLength, eyeColor
  } = useGameStore();
  
  const { weightTier, moodLevel, lustLevel, cyclePhase, effectiveBustIndex, isOverdue } = derivedState;
  
  return (
    <>
      {/* Status */}
      <div className="bg-slate-900/60 rounded border border-slate-700/50 p-4">
        <h3 className="text-rose-300/80 text-xs uppercase tracking-wider mb-3">Status</h3>
        <div className="space-y-2 text-sm">
          <StatRow label="Weight" value={weightTier.name} />
          <StatRow label="Bust" value={`${BUST_SIZES[effectiveBustIndex]} Cup`} />
          <StatRow label="Mood" value={moodLevel.name} color={moodLevel.color} />
          <StatRow 
            label="Desire" 
            value={LUST_LEVELS[lustLevel].name} 
            color={lustLevel >= 3 ? '#f472b6' : '#f9a8d4'} 
          />
        </div>
      </div>
      
      {/* Cycle / Pregnancy */}
      <div className="bg-slate-900/60 rounded border border-slate-700/50 p-4">
        <h3 className="text-rose-300/80 text-xs uppercase tracking-wider mb-3">
          {isPregnant 
            ? (pregnancyType === 'egg' ? 'Egg Pregnancy' 
              : pregnancyType === 'horse' ? 'Horse Pregnancy' 
              : pregnancyType === 'yearLong' ? 'Extended Pregnancy'
              : pregnancyType === 'rapid' ? 'Rapid Pregnancy'
              : 'Pregnancy') 
            : 'Cycle'}
        </h3>
        {isPregnant && pregnancyKnown ? (
          <div className="space-y-2 text-sm">
            <StatRow 
              label={pregnancyType === 'rapid' ? 'Day' : 'Week'} 
              value={pregnancyWeeks} 
              color="#f9a8d4" 
            />
            {babyCountKnown && pregnancyType === 'normal' && (
              <StatRow label="Babies" value={babyCount} color="#f9a8d4" />
            )}
            {babyCountKnown && pregnancyType === 'egg' && (
              <StatRow label="Eggs" value={babyCount} color="#f9a8d4" />
            )}
            {isSurrogacy && <div className="text-amber-400/70 text-xs">Surrogacy Contract</div>}
            {ellaExperiment && <div className="text-purple-400/70 text-xs">Ella Experiment</div>}
            {isOverdue && <div className="text-red-400 text-xs font-medium mt-1">OVERDUE</div>}
            {onMaternityLeave && <div className="text-blue-400/70 text-xs">On Maternity Leave</div>}
            {complications.length > 0 && (
              <div className="text-amber-400/70 text-xs">
                Complications: {complications.join(', ')}
              </div>
            )}
          </div>
        ) : isPregnant && !pregnancyKnown ? (
          <div className="text-slate-400 text-sm italic">Something feels different...</div>
        ) : (
          <div className="space-y-2 text-sm">
            <StatRow label="Phase" value={cyclePhase?.name || '-'} color={cyclePhase?.color} />
            <StatRow label="Day" value={`${cycleDay}/28`} />
          </div>
        )}
      </div>
      
      {/* Lactation */}
      {isLactating && (
        <div className="bg-slate-900/60 rounded border border-purple-500/30 p-4">
          <h3 className="text-purple-300/80 text-xs uppercase tracking-wider mb-2">Lactating</h3>
          <div className="text-sm text-slate-400">
            {hasNursingBra ? 'Nursing bra equipped' 
              : hasBreastPads ? 'Breast pads equipped' 
              : 'No protection - leaking!'}
          </div>
        </div>
      )}
      
      {/* Recovery */}
      {recoveryDays > 0 && (
        <div className="bg-slate-900/60 rounded border border-amber-500/30 p-4">
          <h3 className="text-amber-300/80 text-xs uppercase tracking-wider mb-2">Recovering</h3>
          <div className="text-sm text-slate-400">
            {recoveryDays} day{recoveryDays > 1 ? 's' : ''} remaining
          </div>
        </div>
      )}
      
      {/* Physical */}
      <div className="bg-slate-900/60 rounded border border-slate-700/50 p-4">
        <h3 className="text-rose-300/80 text-xs uppercase tracking-wider mb-3">Physical</h3>
        <div className="space-y-1 text-sm text-slate-400">
          <div>{height} • {skinTone}</div>
          <div>{hairColor} {hairLength.toLowerCase()} hair</div>
          <div>{eyeColor} eyes</div>
        </div>
      </div>
    </>
  );
}

function StatRow({ label, value, color }) {
  return (
    <div className="flex justify-between">
      <span className="text-slate-400">{label}</span>
      <span style={color ? { color } : {}} className={color ? '' : 'text-slate-200'}>
        {value}
      </span>
    </div>
  );
}
