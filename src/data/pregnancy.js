// Pregnancy Types
export const PREGNANCY_TYPES = {
  normal: { 
    name: 'Normal', 
    durationWeeks: 40, 
    maxOverdueWeeks: 45,
    lactationStart: 32,
    recoveryDays: 3 
  },
  egg: { 
    name: 'Egg', 
    durationWeeks: 20, 
    maxOverdueWeeks: 22,
    lactationStart: 16,
    recoveryDays: 1 
  },
  rapid: { 
    name: 'Rapid', 
    durationDays: 7, 
    lactationStart: 5,
    recoveryDays: 1 
  },
  yearLong: { 
    name: 'Year-Long', 
    durationMonths: 12, 
    maxOverdueMonths: 18,
    lactationStart: 32,
    recoveryDays: 1 
  },
  horse: { 
    name: 'Horse', 
    durationMonths: 11, 
    maxOverdueMonths: 13,
    lactationStart: 32,
    recoveryDays: 1 
  },
};

// Dr. Ella Experiments
export const ELLA_EXPERIMENTS = {
  rapid: {
    id: 'rapid',
    name: 'Rapid Pregnancy',
    duration: 7, // days
    pay: 500,
    desc: 'A full pregnancy compressed into just one week. Each day equals roughly six weeks of development.',
    introText: '"Seven days," Dr. Ella explains. "That\'s all it takes. Your body will experience an entire pregnancy in one week. £500 when you deliver."',
    canOverdue: false,
  },
  yearLong: {
    id: 'yearLong',
    name: 'Year-Long Pregnancy',
    baseMonths: 12,
    maxMonths: 18,
    basePay: 250, // per month
    overdueBonus: { 13: 100, 14: 150, 15: 200, 16: 250, 17: 300, 18: 350 },
    desc: 'A pregnancy that lasts a full year—or longer if you choose. The baby grows far larger than normal.',
    introText: '"Twelve months minimum," Dr. Ella says. "The baby will continue growing the entire time. You can extend up to eighteen months for additional compensation. £250 per month, with bonuses for going overdue."',
  },
  horse: {
    id: 'horse',
    name: 'Horse Pregnancy',
    baseMonths: 11,
    maxMonths: 13,
    basePay: 455, // per month
    overdueBonus: { 12: 200, 13: 400 },
    desc: 'Carry an unmodified horse foal. It will grow to full size—100 to 150 pounds at birth.',
    introText: '"This is my most... ambitious experiment," Dr. Ella says carefully. "An equine pregnancy. The foal will be unmodified—full size. £455 per month, with significant bonuses if you go overdue."',
    warning: 'Extreme size. Not for the faint of heart.',
  },
};

// Surrogacy Payment Structure
export const SURROGACY_PAY = {
  1: { signing: 200, firstTri: 400, secondTri: 600, delivery: 800, total: 2000 },
  2: { signing: 300, firstTri: 600, secondTri: 900, delivery: 1200, total: 3000 },
  3: { signing: 450, firstTri: 900, secondTri: 1350, delivery: 1800, total: 4500 },
  4: { signing: 600, firstTri: 1200, secondTri: 1800, delivery: 2400, total: 6000 },
};

// Baby Count Probabilities
export const BABY_COUNT_CHANCES = {
  normal: { 1: 0.97, 2: 0.025, 3: 0.004, 4: 0.001 },
  boosted: { 1: 0.70, 2: 0.20, 3: 0.08, 4: 0.02 },
  surrogacy: { 1: 0.85, 2: 0.10, 3: 0.04, 4: 0.01 },
};

// Pregnancy Profiles
export const PREGNANCY_PROFILES = [
  { id: 'smooth', name: 'Smooth', morningSicknessChance: 0.1, moodSwingChance: 0.1, fatigueChance: 0.2 },
  { id: 'nauseous', name: 'Nauseous', morningSicknessChance: 0.6, moodSwingChance: 0.2, fatigueChance: 0.3 },
  { id: 'exhausting', name: 'Exhausting', morningSicknessChance: 0.2, moodSwingChance: 0.3, fatigueChance: 0.6 },
  { id: 'emotional', name: 'Emotional', morningSicknessChance: 0.2, moodSwingChance: 0.6, fatigueChance: 0.2 },
  { id: 'complicated', name: 'Complicated', morningSicknessChance: 0.4, moodSwingChance: 0.4, fatigueChance: 0.4, complicationChance: 0.5 },
];

// Complications
export const COMPLICATIONS = {
  polyhydramnios: {
    name: 'Polyhydramnios',
    desc: 'Excess amniotic fluid',
    effect: 'Your belly is larger than expected due to excess fluid.',
    bellyBonus: [3, 8], // random range
  },
  macrosomia: {
    name: 'Macrosomia',
    desc: 'Large baby',
    effect: 'The baby is measuring large for dates.',
    bellyBonus: [2, 5],
  },
  gestationalDiabetes: {
    name: 'Gestational Diabetes',
    desc: 'Blood sugar issues',
    effect: 'Diet changes are recommended.',
    bellyBonus: [0, 2],
  },
};

// Complication chances by baby count
export const COMPLICATION_CHANCES = {
  1: 0.15,
  2: 0.35,
  3: 0.55,
  4: 0.75,
};

// Labour Induction Methods
export const INDUCTION_METHODS = {
  walking: { chance: 0.05, text: 'You walk around, hoping to trigger something.' },
  stairs: { chance: 0.05, text: 'You climb up and down the stairs repeatedly.' },
  spicyFood: { chance: 0.03, text: 'You eat the spiciest food you can find.' },
  nippleStim: { chance: 0.05, text: 'You try nipple stimulation.' },
  yogaBall: { chance: 0.03, text: 'You bounce on a yoga ball.' },
  sex: { chance: 0.08, text: 'The activity triggers something...' },
  sweep: { chance: 0.15, text: 'The doctor performs a membrane sweep.' },
};

// Spontaneous Labour Chances by Week
export const SPONTANEOUS_LABOUR_CHANCES = {
  37: 0.02,
  38: 0.04,
  39: 0.08,
  40: 0.15,
  41: 0.25,
  42: 0.35,
  43: 0.45,
  44: 0.60,
  45: 1.0, // Forced
};

// Multiple Orgasm Chances During Pregnancy
export const PREGNANCY_ORGASM_BONUS = {
  13: 0.10,
  21: 0.20,
  27: 0.30,
  33: 0.40,
  37: 0.50,
  41: 0.60, // Overdue
};

// Overdue Restrictions
export const OVERDUE_RESTRICTIONS = {
  41: { canRun: false, canGym: true, canWork: true },
  43: { canRun: false, canGym: false, canWork: true, desc: 'You\'re mostly housebound now.' },
  44: { canRun: false, canGym: false, canWork: false, desc: 'You can barely leave the flat.' },
  45: { canRun: false, canGym: false, canWork: false, bedridden: true, desc: 'You\'re essentially bedridden.' },
};

// Baby Weight by Week (singleton, in lbs)
export const BABY_WEIGHTS = {
  37: 6.0,
  38: 6.5,
  39: 7.0,
  40: 7.5,
  41: 8.0,
  42: 8.5,
  43: 9.0,
  44: 9.5,
  45: 10.0,
};

// Maternity clothes limits
export const MATERNITY_CLOTHES_LIMITS = {
  1: 44, // Singleton - fit until week 44
  2: 38, // Twins - strain by week 38
  3: 34, // Triplets - strain by week 34
  4: 30, // Quads - strain by week 30
};
