// Skills & Progression System

// XP required for each level
export const SKILL_XP_REQUIREMENTS = [
  0,      // Level 1 (base)
  100,    // Level 2
  250,    // Level 3
  500,    // Level 4
  1000,   // Level 5
  2000,   // Level 6
  4000,   // Level 7
  7000,   // Level 8
  11000,  // Level 9
  16000,  // Level 10 (max)
];

// Bonus percentage per level
export const SKILL_LEVEL_BONUSES = [0, 5, 10, 15, 20, 25, 30, 35, 40, 50];

// Professional Skills
export const PROFESSIONAL_SKILLS = [
  {
    id: 'finance',
    name: 'Finance',
    desc: 'Financial knowledge and number-crunching ability.',
    career: 'finance',
    xpPerWork: 5,
    benefits: [
      { level: 2, desc: 'Better at budgeting' },
      { level: 5, desc: 'Unlock investment options' },
      { level: 8, desc: 'Bonus negotiation opportunities' },
      { level: 10, desc: 'Side consulting income' },
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    desc: 'Medical knowledge and patient care skills.',
    career: 'nursing',
    xpPerWork: 5,
    benefits: [
      { level: 2, desc: 'Better at self-care' },
      { level: 5, desc: 'Recognize symptoms early' },
      { level: 8, desc: 'Reduced doctor visit costs' },
      { level: 10, desc: 'Emergency medical ability' },
    ]
  },
  {
    id: 'childcare',
    name: 'Childcare',
    desc: 'Understanding and caring for children.',
    career: 'childcare',
    xpPerWork: 5,
    benefits: [
      { level: 2, desc: 'Better patience' },
      { level: 5, desc: 'Higher surrogacy pay' },
      { level: 8, desc: 'Premium babysitting rates' },
      { level: 10, desc: 'Run your own daycare' },
    ]
  },
  {
    id: 'communication',
    name: 'Communication',
    desc: 'Ability to express yourself and understand others.',
    career: null, // Applies to all
    xpPerWork: 2,
    benefits: [
      { level: 3, desc: 'Better work events' },
      { level: 5, desc: 'Improved social interactions' },
      { level: 7, desc: 'Conflict resolution' },
      { level: 10, desc: 'Leadership opportunities' },
    ]
  },
  {
    id: 'organization',
    name: 'Organization',
    desc: 'Time management and planning skills.',
    career: null,
    xpPerWork: 2,
    benefits: [
      { level: 3, desc: 'Time efficiency +5%' },
      { level: 5, desc: 'Never forget appointments' },
      { level: 7, desc: 'Multitasking ability' },
      { level: 10, desc: 'Maximum productivity' },
    ]
  },
];

// Life Skills
export const LIFE_SKILLS = [
  {
    id: 'cooking',
    name: 'Cooking',
    desc: 'Ability to prepare meals at home.',
    xpPerAction: 3,
    benefits: [
      { level: 2, desc: 'Better home meals (+1 mood)' },
      { level: 4, desc: 'Cheaper groceries (10% off)' },
      { level: 6, desc: 'Advanced recipes' },
      { level: 8, desc: 'Catering side income' },
      { level: 10, desc: 'Master chef status' },
    ]
  },
  {
    id: 'fitness',
    name: 'Fitness',
    desc: 'Physical conditioning and exercise knowledge.',
    xpPerAction: 4,
    benefits: [
      { level: 2, desc: 'Workouts more effective (+10%)' },
      { level: 4, desc: 'Faster recovery' },
      { level: 6, desc: 'Unlock advanced exercises' },
      { level: 8, desc: 'Personal trainer option' },
      { level: 10, desc: 'Peak physical condition' },
    ]
  },
  {
    id: 'charm',
    name: 'Charm',
    desc: 'Social grace and attractiveness.',
    xpPerAction: 2,
    benefits: [
      { level: 2, desc: 'Better first impressions' },
      { level: 4, desc: 'Free drinks at bar' },
      { level: 6, desc: 'Higher hookup success' },
      { level: 8, desc: 'VIP access' },
      { level: 10, desc: 'Irresistible' },
    ]
  },
  {
    id: 'negotiation',
    name: 'Negotiation',
    desc: 'Ability to get better deals.',
    xpPerAction: 3,
    benefits: [
      { level: 2, desc: '5% shop discounts' },
      { level: 4, desc: 'Better salary negotiations' },
      { level: 6, desc: '10% shop discounts' },
      { level: 8, desc: 'Premium contract terms' },
      { level: 10, desc: '15% shop discounts' },
    ]
  },
  {
    id: 'selfCare',
    name: 'Self-Care',
    desc: 'Taking care of your mental and physical health.',
    xpPerAction: 2,
    benefits: [
      { level: 2, desc: 'Better mood recovery (+5%)' },
      { level: 4, desc: 'Stress reduction' },
      { level: 6, desc: 'Improved sleep quality' },
      { level: 8, desc: 'Resilience to negative events' },
      { level: 10, desc: 'Inner peace' },
    ]
  },
];

// Skill XP sources
export const SKILL_XP_SOURCES = {
  work: { skills: ['communication', 'organization'], xp: 2 },
  financeWork: { skills: ['finance'], xp: 5 },
  nursingWork: { skills: ['healthcare'], xp: 5 },
  childcareWork: { skills: ['childcare'], xp: 5 },
  cooking: { skills: ['cooking'], xp: 3 },
  exercise: { skills: ['fitness'], xp: 4 },
  socializing: { skills: ['charm', 'communication'], xp: 2 },
  shopping: { skills: ['negotiation'], xp: 1 },
  relaxing: { skills: ['selfCare'], xp: 2 },
  reading: { skills: ['organization'], xp: 1 },
  hookup: { skills: ['charm'], xp: 3 },
};

// Career Progression
export const CAREER_LEVELS = [
  { level: 1, title: 'Junior', payModifier: 1.0, daysRequired: 0, skillRequired: 0 },
  { level: 2, title: 'Standard', payModifier: 1.1, daysRequired: 30, skillRequired: 3 },
  { level: 3, title: 'Senior', payModifier: 1.25, daysRequired: 90, skillRequired: 5 },
  { level: 4, title: 'Lead', payModifier: 1.5, daysRequired: 180, skillRequired: 7 },
  { level: 5, title: 'Manager', payModifier: 2.0, daysRequired: 365, skillRequired: 10 },
];

// Skill descriptions by level
export const SKILL_LEVEL_DESCRIPTIONS = [
  'Novice',      // 1
  'Beginner',    // 2
  'Apprentice',  // 3
  'Competent',   // 4
  'Skilled',     // 5
  'Proficient',  // 6
  'Advanced',    // 7
  'Expert',      // 8
  'Master',      // 9
  'Grandmaster', // 10
];
