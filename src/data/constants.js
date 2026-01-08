// Time & Calendar
export const TIME_SLOTS = [
  { id: 0, name: 'Early Morning', work: false, sleep: false, bar: false },
  { id: 1, name: 'Morning', work: true, sleep: false, bar: false },
  { id: 2, name: 'Late Morning', work: true, sleep: false, bar: false },
  { id: 3, name: 'Noon', work: true, sleep: false, bar: false },
  { id: 4, name: 'Afternoon', work: true, sleep: false, bar: false },
  { id: 5, name: 'Late Afternoon', work: true, sleep: false, bar: false },
  { id: 6, name: 'Evening', work: false, sleep: true, bar: true },
  { id: 7, name: 'Night', work: false, sleep: true, bar: true },
  { id: 8, name: 'Late Night', work: false, sleep: true, bar: false },
];

export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Economy
export const ECONOMY = {
  startingMoney: 2000,
  rent: 800,
  rentPeriod: 14,
  lateFee: 50,
  workPay: 100,
  matLeavePercent: 0.5,
  surveyPayMin: 10,
  surveyPayMax: 15,
};

// Character Options
export const HEIGHTS = [
  { name: 'Petite', range: '5\'0" - 5\'2"', cm: '152-157' },
  { name: 'Short', range: '5\'3" - 5\'4"', cm: '160-163' },
  { name: 'Average', range: '5\'5" - 5\'6"', cm: '165-168' },
  { name: 'Tall', range: '5\'7" - 5\'9"', cm: '170-175' },
  { name: 'Very Tall', range: '5\'10"+', cm: '178+' },
];

export const SKIN_TONES = ['Pale', 'Fair', 'Light', 'Medium', 'Olive', 'Tan', 'Brown', 'Dark Brown', 'Dark'];
export const EYE_COLORS = ['Blue', 'Green', 'Hazel', 'Light Brown', 'Brown', 'Dark Brown', 'Grey'];
export const NATURAL_HAIR_COLORS = ['Black', 'Dark Brown', 'Brown', 'Light Brown', 'Auburn', 'Red', 'Strawberry Blonde', 'Blonde', 'Platinum Blonde'];
export const UNNATURAL_HAIR_COLORS = ['Pink', 'Blue', 'Purple', 'Green', 'Silver', 'Rainbow', 'White'];
export const HAIR_LENGTHS = ['Pixie', 'Short', 'Medium', 'Long', 'Very Long'];
export const HAIR_STYLES = ['Loose', 'Ponytail', 'Bun', 'Braids', 'Pigtails', 'Half-up', 'Messy', 'Slicked Back', 'Curled', 'Straightened'];

// Weight System
export const WEIGHT_TIERS = [
  { 
    id: 'veryThin', 
    name: 'Very Thin', 
    range: [0, 20], 
    clothingSize: 'Small',
    desc: 'Your stomach is flat, almost concave. Your hip bones jut out prominently.',
    mirror: "You're very thin—underweight, really. Your collarbones are sharp, your ribs visible. You look fragile."
  },
  { 
    id: 'thin', 
    name: 'Thin', 
    range: [21, 40], 
    clothingSize: 'Small',
    desc: 'Your belly is flat and taut. You\'re slim, with a lean silhouette.',
    mirror: "You're slim and slender. Your body is lean, with no excess anywhere. Clothes hang nicely on your frame."
  },
  { 
    id: 'athletic', 
    name: 'Athletic', 
    range: [41, 55], 
    clothingSize: 'Medium',
    desc: 'Your stomach is flat and firm, with visible muscle definition.',
    mirror: "You're toned and fit. Your muscles are defined, your stomach flat and firm. You look healthy and strong."
  },
  { 
    id: 'average', 
    name: 'Average', 
    range: [56, 70], 
    clothingSize: 'Medium',
    desc: 'Your belly is soft but flat. A healthy, normal figure.',
    mirror: "You have a normal, healthy figure. Neither thin nor heavy—just average. Comfortable in your own skin."
  },
  { 
    id: 'curvy', 
    name: 'Curvy', 
    range: [71, 85], 
    clothingSize: 'Large',
    desc: 'Your belly has a gentle curve to it. You\'re soft and full-figured.',
    mirror: "You're curvy and soft. Your hips are wide, your belly has a gentle roundness, your thighs touch. Lush."
  },
  { 
    id: 'fat', 
    name: 'Fat', 
    range: [86, 100], 
    clothingSize: 'Large',
    desc: 'Your belly is round and soft, a noticeable paunch.',
    mirror: "You're overweight. Your belly is round and soft, spilling over your waistband. Your arms and thighs are thick."
  },
  { 
    id: 'obese', 
    name: 'Obese', 
    range: [101, 999], 
    clothingSize: 'Plus',
    desc: 'Your belly is large and heavy, hanging over your waistband.',
    mirror: "You're significantly overweight. Your belly hangs heavy, your body soft everywhere. Moving takes effort."
  },
];

// Bust System
export const BUST_SIZES = ['AA', 'A', 'B', 'C', 'D', 'DD', 'E', 'F', 'G', 'H'];
export const BUST_DESCRIPTIONS = [
  'Your chest is nearly flat.',
  'Your breasts are small, barely filling an A-cup.',
  'Your breasts are small but present.',
  'Your breasts are average-sized, a comfortable C-cup.',
  'Your breasts are full, a D-cup that fills out your tops nicely.',
  'Your breasts are large, a DD-cup that draws the eye.',
  'Your breasts are very large, straining against your clothes.',
  'Your breasts are huge, heavy and impossible to ignore.',
  'Your breasts are massive, causing back strain and constant attention.',
  'Your breasts are enormous, each one bigger than your head.',
];

// Mood System
export const MOOD_LEVELS = [
  { 
    id: 'miserable', 
    name: 'Miserable', 
    range: [0, 20], 
    color: '#8b0000',
    morning: 'You drag yourself out of bed, dreading the day ahead.',
    mirror: "You look exhausted, dark circles under your eyes. Life is hard right now."
  },
  { 
    id: 'low', 
    name: 'Low', 
    range: [21, 40], 
    color: '#cd853f',
    morning: 'You wake up feeling a bit flat. Hopefully the day improves.',
    mirror: "You look a bit tired, not quite yourself. Something feels off."
  },
  { 
    id: 'neutral', 
    name: 'Neutral', 
    range: [41, 60], 
    color: '#daa520',
    morning: 'You wake up and stretch. Another day.',
    mirror: "You look fine. Nothing special, nothing wrong."
  },
  { 
    id: 'good', 
    name: 'Good', 
    range: [61, 80], 
    color: '#6b8e23',
    morning: 'You wake up feeling refreshed and ready for the day.',
    mirror: "There's a brightness to your face today. You look well."
  },
  { 
    id: 'great', 
    name: 'Great', 
    range: [81, 100], 
    color: '#228b22',
    morning: 'You practically bounce out of bed. Today is going to be great!',
    mirror: "You're practically glowing. Life is good and it shows."
  },
];

// Lust System
export const LUST_LEVELS = [
  { name: 'None', desc: 'You feel no particular desire.', penalty: 0 },
  { name: 'Low', desc: 'Occasional passing thoughts cross your mind.', penalty: 0 },
  { name: 'Medium', desc: 'You\'re aware of a simmering want.', penalty: 0 },
  { name: 'High', desc: 'You\'re distracted by desire, thoughts wandering.', penalty: 2 },
  { name: 'Overwhelming', desc: 'You can\'t focus. Your body aches with need.', penalty: 5 },
];

// Menstrual Cycle
export const CYCLE_PHASES = [
  { name: 'Period', duration: 5, fertility: 0, color: '#8b0000' },
  { name: 'Follicular', duration: 7, fertility: 0.1, color: '#daa520' },
  { name: 'Fertile', duration: 4, fertility: 0.4, color: '#ff69b4' },
  { name: 'Luteal', duration: 12, fertility: 0.1, color: '#4682b4' },
];

// Careers
export const CAREERS = [
  { 
    id: 'finance', 
    name: 'Finance', 
    job: 'Financial Assistant', 
    partTime: 'Bank Teller', 
    dress: 'Professional',
    pregText: 'Desk work is manageable but uncomfortable. Your coworkers seem nervous you\'ll go into labour at work.'
  },
  { 
    id: 'nursing', 
    name: 'Nursing', 
    job: 'Healthcare Assistant', 
    partTime: 'Care Home Assistant', 
    dress: 'Scrubs',
    pregText: 'Being on your feet all day is difficult with your belly. It\'s ironic working the maternity ward while pregnant yourself.'
  },
  { 
    id: 'childcare', 
    name: 'Childcare', 
    job: 'Nursery Assistant', 
    partTime: 'Babysitter', 
    dress: 'Casual',
    pregText: 'The children are fascinated by your growing belly. Bending and lifting has become a real challenge.'
  },
];

// Weather
export const WEATHER_TYPES = [
  { name: 'Sunny', desc: 'Bright sunlight streams through the curtains.', mood: 2, outdoorBonus: 20 },
  { name: 'Cloudy', desc: 'Grey clouds hang outside your window.', mood: 0, outdoorBonus: 0 },
  { name: 'Rainy', desc: 'Rain patters against the glass.', mood: -1, outdoorBonus: -10 },
  { name: 'Stormy', desc: 'Thunder rumbles in the distance. It\'s a stormy day.', mood: -2, outdoorBonus: -30 },
  { name: 'Hot', desc: 'It\'s already warm. Going to be a hot one.', mood: 0, energyDrain: 10 },
  { name: 'Cold', desc: 'It\'s cold this morning. You can see your breath.', mood: -1, energyDrain: 5 },
  { name: 'Foggy', desc: 'Fog blankets the street outside.', mood: 0, travelPenalty: 10 },
  { name: 'Snowy', desc: 'Snow has fallen overnight, the world white and quiet.', mood: 1, outdoorBonus: -20 },
];

// Seasons
export const SEASONS = [
  {
    id: 'spring',
    name: 'Spring',
    months: [2, 3, 4], // March, April, May (0-indexed)
    durationDays: 91,
    moodModifier: 1,
    weatherWeights: { Sunny: 25, Cloudy: 30, Rainy: 25, Stormy: 10, Hot: 5, Cold: 5, Foggy: 0, Snowy: 0 },
    desc: 'Flowers bloom and days grow longer.'
  },
  {
    id: 'summer',
    name: 'Summer',
    months: [5, 6, 7], // June, July, August
    durationDays: 92,
    moodModifier: 2,
    weatherWeights: { Sunny: 40, Cloudy: 20, Rainy: 15, Stormy: 10, Hot: 15, Cold: 0, Foggy: 0, Snowy: 0 },
    desc: 'Long, warm days perfect for outdoor activities.'
  },
  {
    id: 'autumn',
    name: 'Autumn',
    months: [8, 9, 10], // September, October, November
    durationDays: 91,
    moodModifier: 0,
    weatherWeights: { Sunny: 20, Cloudy: 30, Rainy: 25, Stormy: 15, Hot: 0, Cold: 10, Foggy: 0, Snowy: 0 },
    desc: 'Leaves turn golden and the air grows crisp.'
  },
  {
    id: 'winter',
    name: 'Winter',
    months: [11, 0, 1], // December, January, February
    durationDays: 90,
    moodModifier: -1,
    weatherWeights: { Sunny: 15, Cloudy: 25, Rainy: 15, Stormy: 10, Hot: 0, Cold: 20, Foggy: 10, Snowy: 5 },
    desc: 'Short, cold days. Best spent indoors.'
  },
];

// Holidays
export const HOLIDAYS = [
  { name: 'New Year\'s Day', month: 0, day: 1, noWork: true, moodBonus: 5, desc: 'Happy New Year! A fresh start.' },
  { name: 'Valentine\'s Day', month: 1, day: 14, noWork: false, moodBonus: 2, relationshipBonus: true, desc: 'Love is in the air.' },
  { name: 'Easter', month: 3, day: 20, noWork: true, moodBonus: 3, desc: 'Easter Sunday. Time for chocolate.' }, // Approximate
  { name: 'May Day', month: 4, day: 1, noWork: true, moodBonus: 2, desc: 'A day to celebrate spring.' },
  { name: 'Summer Solstice', month: 5, day: 21, noWork: false, moodBonus: 2, desc: 'The longest day of the year.' },
  { name: 'Halloween', month: 9, day: 31, noWork: false, moodBonus: 3, barEvent: true, desc: 'Spooky season at its peak.' },
  { name: 'Bonfire Night', month: 10, day: 5, noWork: false, moodBonus: 2, desc: 'Remember, remember...' },
  { name: 'Christmas Eve', month: 11, day: 24, halfDay: true, moodBonus: 3, desc: 'Anticipation builds.' },
  { name: 'Christmas Day', month: 11, day: 25, noWork: true, moodBonus: 5, desc: 'Merry Christmas!' },
  { name: 'Boxing Day', month: 11, day: 26, noWork: true, moodBonus: 3, desc: 'Leftover turkey and sales.' },
  { name: 'New Year\'s Eve', month: 11, day: 31, noWork: false, barEvent: true, moodBonus: 4, desc: 'Ring in the new year!' },
];

// Stress System
export const STRESS_LEVELS = [
  { id: 'relaxed', name: 'Relaxed', range: [0, 20], moodBonus: 5, sleepBonus: 10, desc: 'Completely at ease.' },
  { id: 'calm', name: 'Calm', range: [21, 40], moodBonus: 0, sleepBonus: 0, desc: 'Peaceful and collected.' },
  { id: 'normal', name: 'Normal', range: [41, 60], moodBonus: 0, sleepBonus: 0, desc: 'Everyday stress levels.' },
  { id: 'stressed', name: 'Stressed', range: [61, 80], moodBonus: -5, sleepBonus: -10, desc: 'Tension is building.' },
  { id: 'overwhelmed', name: 'Overwhelmed', range: [81, 100], moodBonus: -10, sleepBonus: -20, healthRisk: true, desc: 'Everything feels like too much.' },
];

// Energy System
export const ENERGY_LEVELS = [
  { id: 'exhausted', name: 'Exhausted', range: [0, 20], productivityMod: -50, canWork: false, desc: 'You can barely keep your eyes open.' },
  { id: 'tired', name: 'Tired', range: [21, 40], productivityMod: -20, canWork: true, desc: 'Running on empty.' },
  { id: 'normal', name: 'Normal', range: [41, 60], productivityMod: 0, canWork: true, desc: 'Feeling okay.' },
  { id: 'rested', name: 'Rested', range: [61, 80], productivityMod: 10, canWork: true, desc: 'Well-rested and ready.' },
  { id: 'energized', name: 'Energized', range: [81, 100], productivityMod: 20, moodBonus: 3, canWork: true, desc: 'Full of energy!' },
];

// Financial States
export const FINANCIAL_STATES = [
  { id: 'wealthy', name: 'Wealthy', minMoney: 5000, moodBonus: 2, desc: 'Money is no object.' },
  { id: 'comfortable', name: 'Comfortable', minMoney: 2000, moodBonus: 0, desc: 'Financially secure.' },
  { id: 'tight', name: 'Tight', minMoney: 500, moodBonus: -1, desc: 'Watching every penny.' },
  { id: 'struggling', name: 'Struggling', minMoney: 100, moodBonus: -3, desc: 'Making ends meet is hard.' },
  { id: 'broke', name: 'Broke', minMoney: 0, moodBonus: -5, restricted: true, desc: 'Barely scraping by.' },
  { id: 'inDebt', name: 'In Debt', minMoney: -9999, moodBonus: -8, severeRestrictions: true, desc: 'Drowning in debt.' },
];

// Locations
export const LOCATIONS = {
  home: {
    id: 'home',
    name: 'Home',
    type: 'residence',
    rooms: [
      { id: 'bedroom', name: 'Bedroom', activities: ['sleep', 'rest', 'intimacy'] },
      { id: 'bathroom', name: 'Bathroom', activities: ['hygiene', 'mirror'] },
      { id: 'kitchen', name: 'Kitchen', activities: ['cook', 'eat'] },
      { id: 'livingRoom', name: 'Living Room', activities: ['relax', 'tv', 'read'] },
    ]
  },
  work: {
    id: 'work',
    name: 'Workplace',
    type: 'employment',
    hours: { open: 1, close: 5 }, // Time slot indices
    activities: ['work', 'socialize']
  },
  bar: {
    id: 'bar',
    name: 'The Crown',
    type: 'social',
    hours: { open: 6, close: 7 }, // Evening and Night
    activities: ['drink', 'socialize', 'hookup', 'drugs']
  },
  mall: {
    id: 'mall',
    name: 'Shopping Centre',
    type: 'shopping',
    hours: { open: 1, close: 6 },
    shops: [
      { id: 'supermarket', name: 'Supermarket', items: ['groceries'] },
      { id: 'pharmacy', name: 'Pharmacy', items: ['medicine', 'tests'] },
      { id: 'clothing', name: 'Clothing Store', items: ['clothes', 'maternity'] },
      { id: 'adult', name: 'Adult Store', items: ['toys', 'lingerie'] },
    ]
  },
  foodCourt: {
    id: 'foodCourt',
    name: 'Food Court',
    type: 'dining',
    hours: { open: 3, close: 6 }, // Noon to Evening
    activities: ['eat']
  },
  gym: {
    id: 'gym',
    name: 'Fitness Centre',
    type: 'fitness',
    hours: { open: 0, close: 7 }, // Early Morning to Night
    activities: ['exercise', 'yoga', 'swim']
  },
  park: {
    id: 'park',
    name: 'City Park',
    type: 'outdoor',
    hours: { open: 0, close: 6 },
    activities: ['walk', 'jog', 'relax', 'socialize']
  },
  doctor: {
    id: 'doctor',
    name: 'GP Surgery',
    type: 'medical',
    hours: { open: 1, close: 5 },
    activities: ['checkup', 'treatment']
  },
  ellaClinic: {
    id: 'ellaClinic',
    name: 'Dr. Ella\'s Clinic',
    type: 'medical',
    hours: { open: 2, close: 5 },
    activities: ['experiments', 'checkup']
  },
};

// Health Conditions
export const HEALTH_CONDITIONS = [
  { id: 'cold', name: 'Cold', duration: [3, 5], energyPenalty: 20, moodPenalty: 5, cause: 'immunity' },
  { id: 'flu', name: 'Flu', duration: [5, 7], energyPenalty: 40, moodPenalty: 10, cause: 'immunity' },
  { id: 'hangover', name: 'Hangover', duration: [1, 1], energyPenalty: 30, moodPenalty: 10, cause: 'alcohol' },
  { id: 'fatigue', name: 'Fatigue', duration: [1, 3], energyPenalty: 30, moodPenalty: 5, cause: 'overwork' },
  { id: 'backPain', name: 'Back Pain', duration: [2, 7], moodPenalty: 5, activityRestrictions: ['gym', 'jog'], cause: 'physical' },
  { id: 'cramps', name: 'Cramps', duration: [1, 3], moodPenalty: 8, cause: 'period' },
];

// Random Events
export const RANDOM_EVENTS = {
  positive: [
    { id: 'foundMoney', text: 'You found £{amount} on the ground!', moneyRange: [10, 30], chance: 0.03 },
    { id: 'taxRefund', text: 'Surprise tax refund! £{amount} deposited.', moneyRange: [50, 150], chance: 0.01 },
    { id: 'compliment', text: 'A stranger complimented your outfit today.', moodBonus: 5, chance: 0.05 },
    { id: 'luckyDay', text: 'Everything just seems to go right today!', moodBonus: 10, chance: 0.02 },
    { id: 'freeFood', text: 'A friend treated you to lunch!', moodBonus: 5, mealsBonus: 1, chance: 0.03 },
    { id: 'goodNews', text: 'You received some unexpected good news.', moodBonus: 8, chance: 0.03 },
  ],
  negative: [
    { id: 'unexpectedBill', text: 'An unexpected bill arrived: -£{amount}', moneyRange: [30, 80], chance: 0.05 },
    { id: 'lostWallet', text: 'You lost some money from your wallet.', moneyRange: [10, 30], chance: 0.02 },
    { id: 'badNews', text: 'You received some disappointing news.', moodPenalty: 8, chance: 0.03 },
    { id: 'ruinedClothes', text: 'You ruined your favourite outfit.', moodPenalty: 5, chance: 0.02 },
    { id: 'stubToe', text: 'You stubbed your toe. Ouch!', moodPenalty: 3, chance: 0.05 },
    { id: 'badSleep', text: 'You had terrible nightmares last night.', moodPenalty: 5, energyPenalty: 10, chance: 0.05 },
  ],
  neutral: [
    { id: 'oldFriend', text: 'You ran into an old acquaintance.', moodBonus: 3, chance: 0.04 },
    { id: 'weather', text: 'The weather changed unexpectedly.', chance: 0.10 },
    { id: 'deja_vu', text: 'You experienced an odd sense of déjà vu.', chance: 0.03 },
    { id: 'phoneCall', text: 'You had a long phone call with family.', moodBonus: 2, chance: 0.05 },
  ],
};
