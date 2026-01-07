// Pregnancy belly description generators

export const getSingletonBellyDesc = (weeks, complications = [], bellyBonus = 0) => {
  const effectiveWeeks = Math.min(50, weeks + bellyBonus);
  
  if (effectiveWeeks < 6) return 'Your stomach looks the same as always.';
  if (effectiveWeeks < 10) return 'There\'s a slight firmness to your lower belly, barely noticeable.';
  if (effectiveWeeks < 14) return 'You have a small but noticeable bump. The start of something.';
  if (effectiveWeeks < 18) return 'Your belly is round and growing. You\'re definitely showing now.';
  if (effectiveWeeks < 22) return 'Your bump is clearly visible. There\'s no hiding it anymore.';
  if (effectiveWeeks < 26) return 'Your belly is large, stretching your clothes. You feel the baby move regularly.';
  if (effectiveWeeks < 30) return 'Your belly is big and round. People offer you their seats on public transport.';
  if (effectiveWeeks < 34) return 'Your belly is very big. Walking has become a waddle.';
  if (effectiveWeeks < 38) return 'Your belly is huge, tight and stretched. You\'re getting ready.';
  if (effectiveWeeks < 41) return 'Your belly is enormous. Due any day now. Every movement takes effort.';
  if (effectiveWeeks < 43) return 'Overdue. Your massive belly hangs low and heavy. When will this end?';
  if (effectiveWeeks < 45) return 'Severely overdue. Your belly is grotesquely huge, stretched past every limit you thought possible.';
  return 'Five weeks overdue. Your belly is beyond description—a monument to pregnancy, stretched nearly to your knees. Moving is agony.';
};

export const getTwinsBellyDesc = (weeks, complications = [], bellyBonus = 0) => {
  const effectiveWeeks = Math.min(50, weeks + bellyBonus);
  
  if (effectiveWeeks < 5) return 'Your stomach looks the same as always.';
  if (effectiveWeeks < 8) return 'Already there\'s a firmness to your belly. Twins show early.';
  if (effectiveWeeks < 12) return 'You\'re showing sooner than expected. The bump is undeniable.';
  if (effectiveWeeks < 16) return 'Your belly is round and growing fast with two babies inside.';
  if (effectiveWeeks < 20) return 'Your bump is large for your dates. People assume you\'re further along.';
  if (effectiveWeeks < 24) return 'Your belly is very big. You look like you\'re full term, but you\'re not even close.';
  if (effectiveWeeks < 28) return 'You\'re huge. Your twin belly draws stares wherever you go.';
  if (effectiveWeeks < 32) return 'Your belly is enormous. You can barely see your feet anymore.';
  if (effectiveWeeks < 36) return 'You\'re massive. Simple tasks like putting on shoes are exhausting with this twin belly.';
  if (effectiveWeeks < 39) return 'Your twin belly is colossal. Moving is a constant struggle.';
  if (effectiveWeeks < 42) return 'Overdue with twins. Your belly is beyond what seems possible. You feel like you might burst.';
  if (effectiveWeeks < 45) return 'Severely overdue with twins. Your belly is grotesquely massive, stretching beyond anything natural.';
  return 'You\'re a medical marvel. Overdue with twins, your belly defies comprehension.';
};

export const getTripletsBellyDesc = (weeks, complications = [], bellyBonus = 0) => {
  const effectiveWeeks = Math.min(50, weeks + bellyBonus);
  
  if (effectiveWeeks < 4) return 'Your stomach looks the same as always.';
  if (effectiveWeeks < 7) return 'Already there\'s a noticeable firmness to your belly.';
  if (effectiveWeeks < 10) return 'You\'re showing very early with triplets. The bump is already prominent.';
  if (effectiveWeeks < 14) return 'Your belly is round and large with three babies growing inside.';
  if (effectiveWeeks < 18) return 'Your bump is large—you waddle when you walk already.';
  if (effectiveWeeks < 22) return 'Your belly is very big. You draw stares wherever you go.';
  if (effectiveWeeks < 26) return 'You\'re huge. Simple tasks are exhausting.';
  if (effectiveWeeks < 30) return 'Your belly is enormous with three. You can barely see your feet.';
  if (effectiveWeeks < 34) return 'You\'re massive. Moving is a struggle with three babies.';
  if (effectiveWeeks < 37) return 'Your triplet belly is colossal. Everything aches constantly.';
  if (effectiveWeeks < 40) return 'Overdue with triplets. You feel impossibly stretched.';
  if (effectiveWeeks < 43) return 'Severely overdue with triplets. Your belly is beyond massive.';
  return 'Overdue with triplets. Your belly is a grotesque monument to fertility.';
};

export const getQuadsBellyDesc = (weeks, complications = [], bellyBonus = 0) => {
  const effectiveWeeks = Math.min(50, weeks + bellyBonus);
  
  if (effectiveWeeks < 3) return 'Your stomach looks the same as always.';
  if (effectiveWeeks < 6) return 'There\'s already a noticeable firmness to your belly with four inside.';
  if (effectiveWeeks < 9) return 'You\'re showing very early. Something feels different.';
  if (effectiveWeeks < 12) return 'Your bump is already prominent with four babies growing inside.';
  if (effectiveWeeks < 16) return 'Your belly is large. You look further along than you are.';
  if (effectiveWeeks < 20) return 'You\'re very big. Clothes are a constant struggle.';
  if (effectiveWeeks < 24) return 'Your belly is huge. People ask if you\'re due any day.';
  if (effectiveWeeks < 28) return 'You\'re enormous. Every day is exhausting.';
  if (effectiveWeeks < 32) return 'Your belly is massive. You can barely move.';
  if (effectiveWeeks < 35) return 'Your quad belly is beyond huge. Everything is a struggle.';
  if (effectiveWeeks < 38) return 'Overdue with quadruplets. You\'ve never felt so big.';
  if (effectiveWeeks < 42) return 'Severely overdue with quads. Your belly is beyond any natural pregnancy.';
  return 'You\'re impossibly overdue with quadruplets. Your belly is monstrous, inhuman.';
};

export const getEggBellyDesc = (weeks, count) => {
  const multiplier = count === 1 ? 1 : count === 2 ? 1.3 : count === 3 ? 1.5 : 1.7;
  const effectiveWeeks = weeks * multiplier;
  
  const countText = count > 1 ? `, ${count} eggs` : '';
  
  if (effectiveWeeks < 5) return 'Your stomach looks the same as always.';
  if (effectiveWeeks < 8) return `There's a firm roundness to your belly${countText}. Different from a normal pregnancy—harder, rounder.`;
  if (effectiveWeeks < 11) return `Your belly is round and hard${count > 1 ? `, the shapes of ${count} eggs visible beneath your skin` : ', the shape of the egg visible beneath your skin'}.`;
  if (effectiveWeeks < 15) return `You're very round, your belly firm like ${count > 1 ? 'balls' : 'a ball'} packed inside you${countText}.`;
  if (effectiveWeeks < 18) return `Your belly is large and solid${count > 1 ? `, ${count} distinct bulges pressing against your skin` : ', the egg clearly defined'}.`;
  return `Your belly is huge and solid${count > 1 ? `, ${count} eggs ready to emerge` : ', the egg ready to come out'}. The hardness is unmistakable.`;
};

export const getHorseBellyDesc = (months) => {
  if (months < 2) return 'Your belly looks normal, but something larger than human grows within.';
  if (months < 3) return 'There\'s an unusual firmness deep in your belly. The foal is growing.';
  if (months < 4) return 'Your belly is noticeably round. You\'re already bigger than a full-term human pregnancy.';
  if (months < 5) return 'Your belly is large, the foal\'s shape becoming apparent. People stare openly.';
  if (months < 6) return 'You\'re very big. The foal is growing rapidly now. Your skin stretches to accommodate.';
  if (months < 7) return 'Your belly is huge. You can feel the foal moving—powerful kicks that take your breath away.';
  if (months < 8) return 'You\'re enormous. Your belly is bigger than any human pregnancy could be.';
  if (months < 9) return 'Your belly is massive, the foal\'s movements visible through your stretched skin.';
  if (months < 10) return 'You\'re colossal. The foal weighs as much as a large dog now.';
  if (months < 11) return 'Due date approaching. Your belly is beyond description—monstrously huge, veined and stretched.';
  if (months < 12) return 'Overdue with a horse foal. Your belly is grotesque, stretching past your knees when you sit.';
  return 'Two months overdue. Your belly is incomprehensible. The foal must weigh 150 pounds or more.';
};

export const getYearLongBellyDesc = (months) => {
  if (months < 2) return 'Early days. Your belly shows the first signs of pregnancy.';
  if (months < 4) return 'Your belly is growing, a normal-looking pregnant bump so far.';
  if (months < 6) return 'Your belly is round and full. You look about halfway through a normal pregnancy.';
  if (months < 8) return 'Your belly is large. The baby is growing steadily inside you.';
  if (months < 10) return 'Your belly is very big. You look full-term, but you still have months to go.';
  if (months < 12) return 'Your belly is huge. The baby has been growing for nearly a year.';
  if (months < 13) return 'Due date. Your belly is enormous—the baby is far larger than normal.';
  if (months < 15) return 'Overdue. Your belly is massive, the baby still growing inside you.';
  if (months < 17) return 'Four months overdue. Your belly is grotesque—you\'re carrying a toddler-sized baby.';
  return 'Six months overdue. Your belly is beyond imagination. The baby weighs nearly 30 pounds.';
};

// Main getter function
export const getBellyDescription = (weeks, babyCount, pregnancyType, complications = [], bellyBonus = 0) => {
  switch (pregnancyType) {
    case 'egg':
      return getEggBellyDesc(weeks, babyCount);
    case 'horse':
      return getHorseBellyDesc(Math.floor(weeks / 4));
    case 'yearLong':
      return getYearLongBellyDesc(Math.floor(weeks / 4));
    case 'rapid':
      // Map 7 days to 40 weeks
      const effectiveWeeks = Math.floor((weeks / 7) * 40);
      return getSingletonBellyDesc(effectiveWeeks, complications, bellyBonus);
    default:
      // Normal pregnancy
      switch (babyCount) {
        case 1: return getSingletonBellyDesc(weeks, complications, bellyBonus);
        case 2: return getTwinsBellyDesc(weeks, complications, bellyBonus);
        case 3: return getTripletsBellyDesc(weeks, complications, bellyBonus);
        case 4: return getQuadsBellyDesc(weeks, complications, bellyBonus);
        default: return getSingletonBellyDesc(weeks, complications, bellyBonus);
      }
  }
};

// Movement descriptions
export const getMovementDescription = (pregnancyType, weeks, babyCount) => {
  if (pregnancyType === 'egg') {
    if (weeks < 12) return null;
    return 'Something shifts inside you—hard shapes moving against each other.';
  }
  
  if (pregnancyType === 'horse') {
    if (weeks < 24) return null;
    const options = [
      'The foal kicks powerfully, making your whole belly shake.',
      'You can see the foal moving through your stretched skin—a hoof, a head.',
      'The foal shifts position, your massive belly deforming visibly.',
    ];
    return options[Math.floor(Math.random() * options.length)];
  }
  
  if (pregnancyType === 'yearLong') {
    const months = Math.floor(weeks / 4);
    if (months < 5) return 'The baby moves gently inside you.';
    if (months < 9) return 'The baby kicks strongly, reminding you of its growing size.';
    if (months < 12) return 'The baby moves constantly, so large now that every shift is visible.';
    return 'The baby barely fits anymore—every movement stretches you to your limits.';
  }
  
  // Normal pregnancy
  if (weeks < 18) return null;
  if (weeks < 24) {
    return babyCount === 1 ? 'You feel gentle flutters—the baby moving.' 
      : `You feel flutters from multiple directions—all ${babyCount} babies moving.`;
  }
  if (weeks < 30) {
    return babyCount === 1 ? 'The baby kicks, making your belly jump.'
      : `You feel kicks from multiple babies, your belly constantly in motion.`;
  }
  if (weeks < 37) {
    return babyCount === 1 ? 'The baby moves strongly, running out of room.'
      : `${babyCount} babies jostle for space inside you. The movement is constant.`;
  }
  // Late pregnancy
  return babyCount === 1 ? 'The baby barely has room to move anymore, but you feel every shift.'
    : `${babyCount} babies packed tight inside you, every movement felt intensely.`;
};
