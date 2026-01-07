// Dreams
export const PREGNANCY_DREAMS = {
  first: [
    'You dream of a tiny heartbeat, echoing in the darkness.',
    'You dream of water—floating, warm, surrounded.',
    'You dream of something growing inside you, small but insistent.',
    'You dream of a positive pregnancy test, the lines appearing over and over.',
    'You dream of your belly swelling rapidly, bigger and bigger until you wake.',
    'You dream of nausea, even in your sleep.',
    'You dream of cells dividing, multiplying, becoming something new.',
    'You dream of secrets—a secret growing inside you that no one knows yet.',
  ],
  second: [
    'You dream of movement—flutters, kicks, a presence making itself known.',
    'You dream of your belly growing, stretching, accommodating new life.',
    'You dream of tiny hands pressing against you from the inside.',
    'You dream of ultrasound images, blurry shapes that might be faces.',
    'You dream of eating everything in sight, insatiable hunger.',
    'You dream of shopping for baby clothes, though you won\'t keep this baby.',
    'You dream of your body changing, curves appearing where there were none.',
    'You dream of strangers touching your belly without asking.',
  ],
  third: [
    'You dream of labour—intense, overwhelming, inescapable.',
    'You dream of your belly so big you can\'t move, pinned to the bed.',
    'You dream of water breaking, the rush of panic and relief.',
    'You dream of holding a baby, then handing it away.',
    'You dream of contractions, rhythmic and relentless.',
    'You dream of pushing, straining, the world narrowing to a single point.',
    'You dream of your belly as a separate entity, living its own life.',
    'You dream of the finish line, so close you can almost touch it.',
  ],
  overdue: [
    'You dream of being pregnant forever, your belly growing without end.',
    'You dream of the baby refusing to come out, stubborn and content.',
    'You dream of your belly so massive you can\'t stand.',
    'You dream of doctors shaking their heads, saying "any day now" endlessly.',
    'You dream of labour that never comes, trapped in eternal pregnancy.',
    'You dream of your belly touching the floor, impossibly huge.',
    'You dream of everyone staring at your overdue belly, whispering.',
    'You dream of the baby grown to the size of a toddler, still inside you.',
  ],
  egg: [
    'You dream of something round and smooth growing inside you.',
    'You dream of eggs—dozens of them, filling your belly.',
    'You dream of laying, the pressure intense and overwhelming.',
    'You dream of hard shells pressing against your insides.',
    'You dream of birds, of nests, of something not quite human.',
    'You dream of the eggs hatching inside you. You wake in a sweat.',
  ],
  horse: [
    'You dream of hooves kicking against your insides.',
    'You dream of your belly enormous, moving with equine life.',
    'You dream of neighing, of stables, of something impossible.',
    'You dream of giving birth to something that shouldn\'t be possible.',
    'You dream of running through fields, though you can barely walk.',
    'You dream of the foal inside you, fully formed and waiting.',
  ],
  yearLong: [
    'You dream of your pregnancy stretching on forever.',
    'You dream of the baby growing and growing, never stopping.',
    'You dream of months passing, your belly always bigger than before.',
    'You dream of calendars flipping, seasons changing, still pregnant.',
  ],
};

export const GENERAL_DREAMS = [
  'You dream of flying, weightless and free.',
  'You dream of falling, jerking awake before you land.',
  'You dream of your childhood home, familiar yet wrong.',
  'You dream of teeth falling out, one by one.',
  'You dream of being chased by something you can\'t see.',
  'You dream of nothing. Just darkness until morning.',
  'You dream of being late, running but never arriving.',
  'You dream of coins falling through your fingers.',
  'You dream of looking in a mirror and seeing someone else.',
  'You dream of an exam you didn\'t study for.',
  'You dream of rent due, pockets empty.',
  'You dream of your body changing, shifting like clay.',
  'You dream of the sea, waves crashing endlessly.',
  'You dream of a party where you know no one.',
];

export const LUST_DREAMS = [
  'You dream of tangled bodies, pleasure, release. You wake flushed and wanting.',
  'You dream of hands on your body, touching everywhere.',
  'You dream of heat and pressure and desperate need.',
  'You dream of satisfaction just out of reach.',
];

// Work Events
export const WORK_EVENTS = {
  finance: [
    { text: 'Your boss praised your work today!', mood: 5 },
    { text: 'You got criticized for a small mistake.', mood: -5 },
    { text: 'Free lunch in the break room!', mood: 3 },
    { text: 'Early finish today—the systems are down.', mood: 3, earlyFinish: true },
    { text: 'Overtime requested. You stay late.', mood: -2, bonus: 50 },
    { text: 'A productive, uneventful day.', mood: 0 },
    { text: 'You caught an error that saved the company money. Nice work.', mood: 5 },
    { text: 'Awkward elevator conversation with the CEO.', mood: -1 },
    { text: 'Someone stole your lunch from the fridge.', mood: -3 },
    { text: 'You got complimented on your outfit.', mood: 2 },
  ],
  nursing: [
    { text: 'A patient thanked you sincerely. It meant a lot.', mood: 5 },
    { text: 'Difficult patient today. Exhausting.', mood: -3 },
    { text: 'Hectic shift. You barely had time to breathe.', mood: -4 },
    { text: 'You helped deliver a baby. Emotional.', mood: 5 },
    { text: 'Short staffed again. You\'re exhausted.', mood: -3 },
    { text: 'A good day. Everyone was kind.', mood: 3 },
    { text: 'A patient\'s family brought in homemade cookies.', mood: 4 },
    { text: 'Code blue. Intense, but the patient made it.', mood: 2 },
    { text: 'Your feet are killing you after today.', mood: -2 },
    { text: 'A child drew you a picture. Adorable.', mood: 4 },
  ],
  childcare: [
    { text: 'Perfect day. The children were angels.', mood: 5 },
    { text: 'Tantrum tornado. Multiple meltdowns.', mood: -4 },
    { text: 'A child said something adorable. Your heart melted.', mood: 5 },
    { text: 'Parent complaint. Stressful.', mood: -4 },
    { text: 'You witnessed a child\'s first steps!', mood: 5 },
    { text: 'Messy but manageable day.', mood: 1 },
    { text: 'Nap time went smoothly. Blessed quiet.', mood: 3 },
    { text: 'Arts and crafts disaster. Glitter everywhere.', mood: -2 },
    { text: 'One of the kids gave you a hug goodbye.', mood: 4 },
    { text: 'A parent was rude to you. Frustrating.', mood: -3 },
  ],
};

// Pregnancy Work Events
export const PREGNANCY_WORK_EVENTS = {
  finance: {
    early: 'Your morning sickness made focusing on spreadsheets difficult.',
    mid: 'Coworkers keep glancing at your growing bump during meetings.',
    late: 'Getting up from your desk chair is becoming a production. Everyone pretends not to notice.',
    overdue: 'Your coworkers are placing bets on when you\'ll go into labour at your desk.',
  },
  nursing: {
    early: 'The smell of the cafeteria made your stomach turn.',
    mid: 'It\'s ironic, working maternity while pregnant yourself.',
    late: 'Being on your feet all day with this belly is exhausting.',
    overdue: 'Patients keep asking if you\'re sure you should be working. You\'re not sure either.',
  },
  childcare: {
    early: 'The children don\'t notice anything different yet.',
    mid: 'The kids are fascinated by your growing belly. "Is there a baby in there?"',
    late: 'Bending down to the children\'s level is getting really difficult.',
    overdue: 'The children ask every day if the baby is coming. You wish you knew.',
  },
};

// Home Events
export const HOME_EVENTS = [
  { text: 'You slept perfectly. Refreshed.', mood: 5, type: 'sleep' },
  { text: 'Restless night. Bad dreams.', mood: -3, type: 'sleep' },
  { text: 'Unexpected bill arrives.', mood: -3, money: -40, type: 'bill' },
  { text: 'You found £20 in an old coat!', mood: 3, money: 20, type: 'money' },
  { text: 'Cooking disaster. Groceries wasted.', mood: -3, groceries: -2, type: 'cooking' },
  { text: 'Perfect meal. You impressed yourself.', mood: 4, type: 'cooking' },
  { text: 'Neighbour was noisy all night.', mood: -2, type: 'sleep' },
  { text: 'Your favourite show released new episodes!', mood: 3, type: 'entertainment' },
  { text: 'The hot water cut out mid-shower.', mood: -2, type: 'annoyance' },
  { text: 'Package arrived—something you forgot you ordered.', mood: 3, type: 'surprise' },
];

// Bar Events
export const BAR_EVENTS = [
  { text: 'Great music tonight. The vibe is perfect.', mood: 3 },
  { text: 'Someone bought you a drink!', mood: 3, freeDrink: true },
  { text: 'Creepy person won\'t leave you alone.', mood: -3 },
  { text: 'You made a new friend at the bar.', mood: 4 },
  { text: 'Quiet night. Not much happening.', mood: 0 },
  { text: 'You bumped into an old acquaintance.', mood: 2 },
  { text: 'Someone spilled their drink on you.', mood: -3 },
  { text: 'The DJ is playing all your favourites.', mood: 4 },
  { text: 'Overheard interesting gossip at the next table.', mood: 1 },
  { text: 'The bartender gave you a free shot.', mood: 3, freeDrink: true },
];

// Hookup Text
export const HOOKUP_TEXT = {
  approach: [
    'Someone attractive catches your eye across the bar. They smile and walk over.',
    'A stranger slides onto the stool next to you. "Can I buy you a drink?"',
    'You feel someone\'s gaze on you. When you look up, they don\'t look away.',
    'A confident figure approaches. "I couldn\'t help but notice you."',
  ],
  pregnantApproach: {
    early: 'They don\'t seem to notice anything different about your body.',
    mid: 'Their eyes linger on your bump. They seem intrigued rather than deterred.',
    late: 'They\'re clearly fascinated by your pregnant belly. "You look incredible."',
    overdue: '"You\'re absolutely radiant," they say, eyes fixed on your massive belly.',
  },
  goingHome: [
    'You leave together, anticipation building.',
    'The taxi ride home is charged with tension.',
    'You barely make it through the door before hands are everywhere.',
  ],
  protection: {
    used: 'You use protection. Safe and sensible.',
    notUsed: 'In the heat of the moment, protection is forgotten.',
    drunkNotUsed: 'Your judgment impaired, you don\'t think about protection until after.',
  },
};

// Labour Text
export const LABOUR_TEXT = {
  normal: {
    onset: 'A sharp cramp grips your belly. Then another. This is it—labour has begun.',
    active: 'Contractions come in waves, each one more intense than the last.',
    delivery: 'With a final push, it\'s over. You collapse back, exhausted but relieved.',
  },
  twins: {
    onset: 'Double the babies means double the intensity. Labour hits you hard.',
    delivery: 'One, then two. Both babies delivered safely.',
  },
  triplets: {
    onset: 'With three babies ready to come, labour is overwhelming.',
    delivery: 'One, two, three. All delivered. You\'re exhausted beyond words.',
  },
  quads: {
    onset: 'Four babies. This is going to be intense.',
    delivery: 'All four delivered. You can\'t believe it\'s finally over.',
  },
  overdue: {
    relief: 'Finally. After {weeks} weeks, it\'s over. The relief is immense.',
  },
  egg: {
    onset: 'Pressure builds low in your belly. It\'s time to lay.',
    delivery: 'With slow, intense effort, you lay the egg. It emerges with a wet pop.',
    multiple: 'One by one, you lay each egg. The stretch is incredible.',
    aftermath: 'It\'s done. You\'re left trembling, strangely empty.',
  },
  horse: {
    onset: 'The foal is coming. You can feel its massive form shifting.',
    delivery: 'The delivery is intense—the foal stretches you impossibly. Dr. Ella guides everything.',
    aftermath: 'It\'s over. The foal is taken away. Your body begins to recover.',
  },
  yearLong: {
    onset: 'After {months} months of pregnancy, labour finally begins.',
    delivery: 'The baby is enormous—far larger than any normal newborn.',
  },
  rapid: {
    onset: 'Your week-long pregnancy ends in sudden labour.',
    delivery: 'In just seven days, you went from conception to birth.',
  },
};

// Mirror Descriptions (additional)
export const PREGNANCY_MIRROR = {
  notShowing: 'Your stomach looks the same as always. No sign of pregnancy yet.',
  barelyShowing: 'If you look closely, there\'s the faintest curve to your lower belly.',
  smallBump: 'A small but unmistakable bump. You\'re definitely showing.',
  obvious: 'Your belly is round and obviously pregnant. No hiding it now.',
  large: 'Your pregnant belly is large, stretching your clothes tight.',
  huge: 'Your belly is huge. You waddle when you walk.',
  massive: 'Your belly is massive. Moving is a constant effort.',
  enormous: 'Your belly is enormous, dominating your entire frame.',
  overdue: 'Your overdue belly is grotesquely huge, hanging low and heavy.',
  extreme: 'Your belly defies description. You\'ve never seen anything like it.',
};
