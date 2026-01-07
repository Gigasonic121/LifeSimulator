// Random number between min and max (inclusive)
export const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Random element from array
export const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Clamp value between min and max
export const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

// Format money with pound sign
export const formatMoney = (amount) => `£${amount.toLocaleString()}`;

// Roll for baby count based on probability object
export const rollBabyCount = (chances) => {
  const roll = Math.random();
  let cumulative = 0;
  for (const [count, chance] of Object.entries(chances)) {
    cumulative += chance;
    if (roll < cumulative) return parseInt(count);
  }
  return 1;
};

// Get weight tier from points
import { WEIGHT_TIERS } from '../data/constants';
export const getWeightTier = (points) => {
  return WEIGHT_TIERS.find(t => points >= t.range[0] && points <= t.range[1]) || WEIGHT_TIERS[3];
};

// Get mood level from points
import { MOOD_LEVELS } from '../data/constants';
export const getMoodLevel = (points) => {
  return MOOD_LEVELS.find(m => points >= m.range[0] && points <= m.range[1]) || MOOD_LEVELS[2];
};

// Get lust level from days
export const getLustLevel = (days) => {
  if (days <= 1) return 0;
  if (days <= 3) return 1;
  if (days <= 5) return 2;
  if (days <= 8) return 3;
  return 4;
};

// Get cycle phase from day
import { CYCLE_PHASES } from '../data/constants';
export const getCyclePhase = (cycleDay, isPregnant) => {
  if (isPregnant) return null;
  let dayCount = 0;
  for (const phase of CYCLE_PHASES) {
    dayCount += phase.duration;
    if (cycleDay <= dayCount) return phase;
  }
  return CYCLE_PHASES[0];
};

// Check if time slot allows activity
import { TIME_SLOTS } from '../data/constants';
export const canDoActivity = (timeSlot, activity) => {
  const slot = TIME_SLOTS[timeSlot];
  if (!slot) return false;
  
  switch (activity) {
    case 'work': return slot.work;
    case 'sleep': return slot.sleep;
    case 'bar': return slot.bar;
    default: return true;
  }
};

// Calculate effective bust size (with pregnancy/lactation bonuses)
export const getEffectiveBustIndex = (baseBust, isPregnant, pregnancyWeeks, isLactating) => {
  let idx = baseBust;
  if (isPregnant && pregnancyWeeks >= 12) idx += 1;
  if (isPregnant && pregnancyWeeks >= 24) idx += 1;
  if (isLactating) idx += 1;
  return Math.min(9, idx);
};

// Check if overdue
export const isOverdue = (pregnancyType, pregnancyWeeks) => {
  switch (pregnancyType) {
    case 'normal': return pregnancyWeeks >= 41;
    case 'egg': return pregnancyWeeks >= 21;
    case 'yearLong': return pregnancyWeeks >= 52;
    case 'horse': return pregnancyWeeks >= 48;
    default: return false;
  }
};

// Format time ago
export const formatDaysAgo = (days) => {
  if (days === 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 7) return `${days} days ago`;
  if (days < 14) return 'last week';
  return `${Math.floor(days / 7)} weeks ago`;
};
