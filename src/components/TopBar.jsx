import { useGameStore } from '../store/gameStore';
import { DAYS, TIME_SLOTS } from '../data/constants';
import { formatMoney } from '../utils/helpers';

export default function TopBar({ derivedState }) {
  const { name, day, dayOfWeek, timeSlot, money, rentDue, rentOverdue } = useGameStore();
  const currentTimeSlot = TIME_SLOTS[timeSlot];
  
  return (
    <div className="bg-slate-900/90 border-b border-rose-500/20 px-4 py-3 flex-shrink-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="text-rose-200 font-serif text-xl">{name}</span>
          <span className="text-slate-500">Day {day}</span>
          <span className="text-slate-400">{DAYS[dayOfWeek]}</span>
          <span className="text-rose-300 font-medium">{currentTimeSlot.name}</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-emerald-400 font-mono text-lg">{formatMoney(money)}</span>
          <span className={`text-sm ${
            rentOverdue ? 'text-red-400' : rentDue <= 3 ? 'text-amber-400' : 'text-slate-500'
          }`}>
            {rentOverdue ? 'RENT OVERDUE' : `Rent in ${rentDue} days`}
          </span>
        </div>
      </div>
    </div>
  );
}
