// Relationships & NPC System

// Relationship Types
export const RELATIONSHIP_TYPES = {
  acquaintance: {
    id: 'acquaintance',
    name: 'Acquaintance',
    maxAffection: 20,
    desc: 'Someone you know casually.'
  },
  friend: {
    id: 'friend',
    name: 'Friend',
    maxAffection: 50,
    desc: 'A social connection you enjoy.'
  },
  closeFriend: {
    id: 'closeFriend',
    name: 'Close Friend',
    maxAffection: 80,
    desc: 'A trusted companion.'
  },
  bestFriend: {
    id: 'bestFriend',
    name: 'Best Friend',
    maxAffection: 100,
    desc: 'Your closest confidant.'
  },
  romanticInterest: {
    id: 'romanticInterest',
    name: 'Romantic Interest',
    maxAffection: 50,
    desc: 'Someone you\'re interested in.'
  },
  partner: {
    id: 'partner',
    name: 'Partner',
    maxAffection: 100,
    desc: 'Your significant other.'
  },
  colleague: {
    id: 'colleague',
    name: 'Colleague',
    maxAffection: 40,
    desc: 'Someone you work with.'
  },
  fling: {
    id: 'fling',
    name: 'Fling',
    maxAffection: 30,
    desc: 'A casual physical connection.'
  },
};

// Affection thresholds for relationship upgrades
export const AFFECTION_THRESHOLDS = {
  acquaintanceToFriend: 15,
  friendToCloseFriend: 40,
  closeFriendToBestFriend: 70,
  romanticInterestToPartner: 40,
  colleagueToFriend: 25,
};

// Affection modifiers
export const AFFECTION_ACTIONS = {
  greeting: { change: 1, desc: 'Say hello' },
  smallTalk: { change: 2, desc: 'Chat casually' },
  deepConversation: { change: 5, desc: 'Have a meaningful talk' },
  giveGift: { change: 5, minChange: 3, maxChange: 10, desc: 'Give a gift' },
  sharedActivity: { change: 3, desc: 'Do something together' },
  compliment: { change: 2, desc: 'Give a compliment' },
  help: { change: 4, desc: 'Help them with something' },
  insult: { change: -5, desc: 'Say something hurtful' },
  ignore: { change: -2, desc: 'Ignore them' },
  betrayal: { change: -30, desc: 'Betray their trust' },
  neglectWeekly: { change: -1, desc: 'A week without contact' },
};

// Named NPCs
export const NAMED_NPCS = {
  drElla: {
    id: 'drElla',
    name: 'Dr. Ella Morrison',
    title: 'Research Scientist',
    location: 'ellaClinic',
    personality: ['professional', 'curious', 'ambitious'],
    defaultRelationship: 'acquaintance',
    canRomance: false,
    desc: 'A brilliant but ethically flexible researcher specializing in experimental pregnancies.',
    dialogue: {
      greeting: '"Ah, good to see you. Have you considered my latest proposal?"',
      curious: '"Science requires... willing participants. You fit the profile."',
      experiment: '"The compensation is generous, I assure you."',
    }
  },
  bartenderMike: {
    id: 'bartenderMike',
    name: 'Mike',
    title: 'Bartender',
    location: 'bar',
    personality: ['friendly', 'observant', 'discreet'],
    defaultRelationship: 'acquaintance',
    canRomance: true,
    desc: 'The affable bartender at The Crown who knows everyone\'s business.',
    dialogue: {
      greeting: '"The usual?"',
      friendly: '"You look like you could use a drink."',
      gossip: '"You didn\'t hear this from me, but..."',
    }
  },
  gymInstructor: {
    id: 'gymInstructor',
    name: 'Sarah Chen',
    title: 'Fitness Instructor',
    location: 'gym',
    personality: ['energetic', 'supportive', 'health-conscious'],
    defaultRelationship: 'acquaintance',
    canRomance: true,
    desc: 'An enthusiastic fitness instructor who pushes you to be your best.',
    dialogue: {
      greeting: '"Ready to work up a sweat?"',
      encouragement: '"You\'ve got this! One more rep!"',
      concern: '"Maybe take it easy today—listen to your body."',
    }
  },
  doctorJames: {
    id: 'doctorJames',
    name: 'Dr. James Wright',
    title: 'General Practitioner',
    location: 'doctor',
    personality: ['caring', 'professional', 'calm'],
    defaultRelationship: 'acquaintance',
    canRomance: false,
    desc: 'Your dependable GP who\'s seen it all.',
    dialogue: {
      greeting: '"What brings you in today?"',
      concern: '"Let\'s run some tests, just to be safe."',
      advice: '"Get plenty of rest and fluids."',
    }
  },
};

// Random NPC Templates
export const NPC_TEMPLATES = {
  barPatron: {
    type: 'barPatron',
    location: 'bar',
    personalities: ['flirty', 'drunk', 'lonely', 'friendly', 'mysterious'],
    canHookup: true,
    canBefriend: true,
  },
  colleague: {
    type: 'colleague',
    location: 'work',
    personalities: ['ambitious', 'lazy', 'gossip', 'helpful', 'competitive'],
    canHookup: true,
    canBefriend: true,
  },
  gymGoer: {
    type: 'gymGoer',
    location: 'gym',
    personalities: ['dedicated', 'social', 'intimidating', 'encouraging'],
    canHookup: true,
    canBefriend: true,
  },
  stranger: {
    type: 'stranger',
    location: 'any',
    personalities: ['friendly', 'rude', 'interesting', 'boring', 'charming'],
    canHookup: false,
    canBefriend: true,
  },
};

// Random names for generated NPCs
export const NPC_NAMES = {
  female: [
    'Emma', 'Olivia', 'Ava', 'Sophia', 'Isabella', 'Mia', 'Charlotte', 'Amelia',
    'Harper', 'Evelyn', 'Abigail', 'Emily', 'Ella', 'Elizabeth', 'Camila',
    'Luna', 'Sofia', 'Grace', 'Chloe', 'Victoria', 'Riley', 'Aria', 'Lily',
    'Aubrey', 'Zoey', 'Penelope', 'Hannah', 'Layla', 'Addison', 'Natalie',
  ],
  male: [
    'Liam', 'Noah', 'Oliver', 'Elijah', 'William', 'James', 'Benjamin', 'Lucas',
    'Henry', 'Alexander', 'Mason', 'Michael', 'Ethan', 'Daniel', 'Jacob',
    'Logan', 'Jackson', 'Levi', 'Sebastian', 'Mateo', 'Jack', 'Owen', 'Theodore',
    'Aiden', 'Samuel', 'Joseph', 'John', 'David', 'Wyatt', 'Matthew',
  ],
  surnames: [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
    'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson',
    'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson',
    'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson',
  ],
};

// Hookup descriptors
export const HOOKUP_DESCRIPTORS = {
  appearance: [
    'attractive', 'stunning', 'handsome', 'cute', 'gorgeous', 'beautiful',
    'charming', 'striking', 'alluring', 'captivating', 'mysterious',
  ],
  build: [
    'athletic', 'slim', 'muscular', 'curvy', 'tall', 'petite', 'lean', 'stocky',
  ],
  features: [
    'dark eyes', 'bright eyes', 'a warm smile', 'sharp features', 'soft features',
    'a confident stance', 'tattoos', 'a shy demeanor', 'an intense gaze',
  ],
};

// Social activities
export const SOCIAL_ACTIVITIES = [
  { id: 'drink', name: 'Have a drink', location: 'bar', affectionGain: 2, moodGain: 2 },
  { id: 'chat', name: 'Chat', location: 'any', affectionGain: 2, moodGain: 1 },
  { id: 'workout', name: 'Work out together', location: 'gym', affectionGain: 3, moodGain: 2 },
  { id: 'lunch', name: 'Have lunch', location: 'foodCourt', affectionGain: 3, moodGain: 3 },
  { id: 'walk', name: 'Take a walk', location: 'park', affectionGain: 2, moodGain: 2 },
  { id: 'movie', name: 'Watch a movie', location: 'home', affectionGain: 4, moodGain: 3 },
  { id: 'deepTalk', name: 'Have a heart-to-heart', location: 'any', affectionGain: 6, moodGain: 4 },
];

// Relationship events
export const RELATIONSHIP_EVENTS = {
  positive: [
    { text: '{name} sent you a thoughtful message.', affection: 2 },
    { text: '{name} remembered your birthday!', affection: 5, mood: 5 },
    { text: '{name} defended you in a conversation.', affection: 4 },
    { text: '{name} shared something personal with you.', affection: 3 },
    { text: 'You and {name} had a great time together.', affection: 3, mood: 3 },
  ],
  negative: [
    { text: '{name} cancelled plans on you.', affection: -2, mood: -2 },
    { text: 'You had a misunderstanding with {name}.', affection: -3 },
    { text: '{name} said something hurtful.', affection: -4, mood: -3 },
    { text: '{name} forgot something important to you.', affection: -2, mood: -2 },
    { text: 'You haven\'t heard from {name} in a while.', affection: -1 },
  ],
};
