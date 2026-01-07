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
  { name: 'Sunny', desc: 'Bright sunlight streams through the curtains.', mood: 2 },
  { name: 'Cloudy', desc: 'Grey clouds hang outside your window.', mood: 0 },
  { name: 'Rainy', desc: 'Rain patters against the glass.', mood: -1 },
  { name: 'Stormy', desc: 'Thunder rumbles in the distance. It\'s a stormy day.', mood: -2 },
  { name: 'Hot', desc: 'It\'s already warm. Going to be a hot one.', mood: 0 },
  { name: 'Cold', desc: 'It\'s cold this morning. You can see your breath.', mood: -1 },
  { name: 'Foggy', desc: 'Fog blankets the street outside.', mood: 0 },
  { name: 'Snowy', desc: 'Snow has fallen overnight, the world white and quiet.', mood: 1 },
];
