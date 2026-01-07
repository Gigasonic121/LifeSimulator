// Food Court Items
export const FOOD_ITEMS = [
  { id: 'saladBar', name: 'Salad Bar', cost: 12, weight: -1, mood: 2, desc: 'Fresh and healthy.', cravingSatisfies: ['fruit'] },
  { id: 'juiceBar', name: 'Juice Bar', cost: 8, weight: -1, mood: 1, desc: 'Refreshing smoothie.', cravingSatisfies: ['fruit'] },
  { id: 'noodleBar', name: 'Noodle Bar', cost: 10, weight: 0, mood: 3, desc: 'Warm and filling.', cravingSatisfies: ['spicy food'] },
  { id: 'bakeryCafe', name: 'Bakery Cafe', cost: 10, weight: 1, mood: 4, desc: 'Delicious pastries.', cravingSatisfies: ['chocolate'] },
  { id: 'coffeeShop', name: 'Coffee Shop', cost: 6, weight: 1, mood: 2, desc: 'Caffeine fix.', cravingSatisfies: ['chocolate'] },
  { id: 'pizzaPlace', name: 'Pizza Place', cost: 12, weight: 2, mood: 5, desc: 'Cheesy goodness.', cravingSatisfies: ['pizza'] },
  { id: 'burgerJoint', name: 'Burger Joint', cost: 10, weight: 2, mood: 5, desc: 'Greasy satisfaction.', cravingSatisfies: [] },
  { id: 'iceCreamStand', name: 'Ice Cream Stand', cost: 5, weight: 1, mood: 4, desc: 'Sweet treat.', cravingSatisfies: ['ice cream'] },
];

// Toys
export const TOYS = [
  { 
    id: 'basicVibrator', 
    name: 'Basic Vibrator', 
    cost: 25, 
    bonus: 0,
    desc: 'A smooth purple vibrator, perfectly sized to slide inside you and buzz against your most sensitive spots.',
    useText: 'You press the vibrator against yourself, letting the buzzing do the work.',
    successText: 'The vibrations build until you\'re trembling, waves of pleasure washing over you.',
    failText: 'The buzzing feels good but you can\'t quite get there. Frustrating.'
  },
  { 
    id: 'rabbitVibrator', 
    name: 'Rabbit Vibrator', 
    cost: 50, 
    bonus: 10,
    desc: 'A curved pink rabbit with a shaft that fills you while the ears tease your clit with relentless vibrations.',
    useText: 'You slide the rabbit inside, gasping as the ears settle against your clit.',
    successText: 'Internal and external stimulation combine—you come hard, clenching around the shaft.',
    failText: 'So close, but the angle isn\'t quite right. You\'re left wanting.'
  },
  { 
    id: 'wandMassager', 
    name: 'Wand Massager', 
    cost: 60, 
    bonus: 15,
    desc: 'A powerful wand that rumbles against your clit, sending shockwaves of pleasure through your entire body.',
    useText: 'You press the broad head of the wand between your legs.',
    successText: 'The powerful vibrations are overwhelming—you come quickly and intensely.',
    failText: 'Almost too intense. You can\'t quite focus enough to finish.'
  },
  { 
    id: 'dildo', 
    name: 'Dildo', 
    cost: 30, 
    bonus: -10,
    desc: 'A realistic silicone cock, veined and thick. You control every thrust.',
    useText: 'You work the dildo inside slowly, feeling every inch.',
    successText: 'You find the perfect rhythm, fucking yourself to a satisfying orgasm.',
    failText: 'Your arm gets tired before you can finish. Manual work is harder than it looks.'
  },
  { 
    id: 'horseDildo', 
    name: 'Horse Dildo', 
    cost: 80, 
    bonus: -20,
    desc: 'An enormous fantasy cock, flared and impossibly thick. The stretch is intense—if you can take it.',
    special: true,
    requiresHighLust: true,
    useText: 'You eye the massive toy nervously. This is going to be a challenge.',
    successText: 'You finally manage to take it—the flared head stretching you wider than you\'ve ever been. The orgasm that follows is devastating.',
    failText: 'It\'s too much. You\'re left sore and unsatisfied, clenching around nothing.',
    experienceBonus: [0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 20] // bonus at uses 6+, 11+
  },
  { 
    id: 'remoteVibrator', 
    name: 'Remote Vibrator', 
    cost: 70, 
    bonus: 5,
    desc: 'A small egg that nestles inside you, buzzing at random. Wearable in public.',
    wearable: true,
    useText: 'You slip the egg inside and pick up the remote.',
    successText: 'The random patterns keep you on edge until finally you peak.',
    failText: 'The teasing patterns are exciting but not quite enough to finish.'
  },
  { 
    id: 'luxurySet', 
    name: 'Luxury Set', 
    cost: 150, 
    bonus: 20,
    desc: 'A velvet-lined case containing vibrators, plugs, and attachments. Everything you need to explore.',
    useText: 'You open the luxury set and select tonight\'s combination.',
    successText: 'With all these options, you craft the perfect experience. Multiple waves of pleasure.',
    failText: 'Too many choices—you spend more time deciding than doing.'
  },
];

// Lingerie
export const LINGERIE = [
  { id: 'basicLingerie', name: 'Basic Lingerie', cost: 40, desc: 'Simple matching bra and knickers in black lace.' },
  { id: 'qualityLingerie', name: 'Quality Lingerie', cost: 80, desc: 'Delicate French lace, beautifully crafted.' },
  { id: 'maternityLingerie', name: 'Maternity Lingerie', cost: 50, desc: 'Supportive yet sexy, designed for your changing body.' },
];

// Shop Items
export const SHOP_ITEMS = {
  groceries: { name: 'Groceries', cost: 30, meals: 7 },
  maternityClothes: { name: 'Maternity Clothes', cost: 35 },
  nursingBra: { name: 'Nursing Bras', cost: 25 },
  breastPads: { name: 'Breast Pads', cost: 5 },
  condoms: { name: 'Condoms', cost: 5 },
  gymMonthly: { name: 'Gym Membership', cost: 80, duration: 30 },
  gymSession: { name: 'Gym Session', cost: 15 },
  pregnancyTest: { name: 'Pregnancy Test', cost: 8 },
};

// Drugs
export const DRUGS = {
  lust: [
    { id: 'aphroditeKiss', name: "Aphrodite's Kiss", effect: 'lustUp', value: 2, desc: '"Makes you feel... warm," the stranger says with a knowing smile.' },
    { id: 'slowBurn', name: 'Slow Burn', effect: 'lustUpSlow', value: 1, desc: '"Gradual warmth, builds over hours."' },
    { id: 'coldShower', name: 'Cold Shower', effect: 'lustDown', value: -5, desc: '"Kills the urge completely."' },
    { id: 'equilibrium', name: 'Equilibrium', effect: 'lustReset', value: 2, desc: '"Resets everything to baseline."' },
  ],
  bust: [
    { id: 'bustBoost', name: 'Bust Boost', effect: 'bustUp', value: 1, desc: '"Helps you fill out your top," they wink.', permanent: true },
    { id: 'megaGrowth', name: 'Mega Growth', effect: 'bustUp', value: 2, desc: '"Two sizes, guaranteed."', permanent: true },
    { id: 'reductionElixir', name: 'Reduction Elixir', effect: 'bustDown', value: -1, desc: '"Takes the weight off your chest."', permanent: true },
  ],
  weight: [
    { id: 'metabolismShot', name: 'Metabolism Shot', effect: 'weightDown', value: -15, desc: '"Melts the pounds away."' },
    { id: 'appetiteMax', name: 'Appetite Max', effect: 'weightUp', value: 15, desc: '"Puts meat on your bones."' },
    { id: 'flashSlim', name: 'Flash Slim', effect: 'weightDown', value: -30, desc: '"Instant results."' },
    { id: 'instantBulk', name: 'Instant Bulk', effect: 'weightUp', value: 30, desc: '"Quick gains."' },
  ],
  hair: [
    { id: 'rainbowDrop', name: 'Rainbow Drop', effect: 'hairRandom', desc: '"Your hair will be... different."' },
    { id: 'midnightDye', name: 'Midnight Dye', effect: 'hairColor', value: 'Black', desc: '"Jet black, permanent."' },
    { id: 'sunshineSplash', name: 'Sunshine Splash', effect: 'hairColor', value: 'Blonde', desc: '"Golden blonde."' },
    { id: 'oceanBreeze', name: 'Ocean Breeze', effect: 'hairColor', value: 'Blue', desc: '"Electric blue."' },
    { id: 'naturalReset', name: 'Natural Reset', effect: 'hairNatural', desc: '"Returns to your natural color."' },
  ],
  pregnancy: [
    { id: 'fertilitySurge', name: 'Fertility Surge', effect: 'fertilityUp', desc: '"Makes you incredibly fertile."', requireNotPregnant: true },
    { id: 'multiplesBoost', name: 'Multiples Boost', effect: 'multiplesUp', desc: '"Increases chance of twins or more."', requireNotPregnant: true },
    { id: 'growthAccelerant', name: 'Growth Accelerant', effect: 'pregSkip', value: 2, desc: '"Speeds things along."', requirePregnant: true },
    { id: 'bellyExpander', name: 'Belly Expander', effect: 'bellySize', value: 4, desc: '"Makes you look further along."', requirePregnant: true },
    { id: 'lactationStart', name: 'Lactation Start', effect: 'lactation', desc: '"Starts milk production early."', requirePregnant: true },
    { id: 'labourInducer', name: 'Labour Inducer', effect: 'labour', desc: '"Triggers labour if you\'re ready."', requirePregnant: true, requireWeeks: 37 },
    { id: 'babyAdder', name: 'Baby Adder', effect: 'addBaby', desc: '"Adds another to the mix. Max 4."', requirePregnant: true, advanced: true },
    { id: 'eggImplant', name: 'Egg Implant', effect: 'eggPregnancy', desc: '"Something... different."', requireNotPregnant: true, advanced: true },
  ],
};

// Cravings
export const CRAVING_OPTIONS = ['pizza', 'ice cream', 'pickles', 'chocolate', 'spicy food', 'fruit', 'cheese', 'salty snacks', 'sour candy'];
