import { useGameStore } from '../store/gameStore';
import { FOOD_ITEMS, TOYS, SHOP_ITEMS } from '../data/items';
import { formatMoney, random, randomChoice, clamp } from '../utils/helpers';
import { WORK_EVENTS } from '../data/text';
import { getBellyDescription } from '../systems/pregnancyDescriptions';

export default function ActionPanel({ derivedState }) {
  const state = useGameStore();
  const { currentView, currentRoom, setCurrentRoom, setCurrentView, addMessage, advanceTime } = state;
  const { currentTimeSlot, isOverdue } = derivedState;
  
  return (
    <div className="bg-slate-900/60 rounded-b border border-slate-700/50 border-t-0 p-4 flex-shrink-0">
      {currentView === 'flat' && <FlatActions state={state} derivedState={derivedState} />}
      {currentView === 'bar' && <BarActions state={state} derivedState={derivedState} />}
      {currentView === 'shopping' && <ShoppingActions state={state} derivedState={derivedState} />}
      {currentView === 'doctor' && <DoctorActions state={state} derivedState={derivedState} />}
    </div>
  );
}

function FlatActions({ state, derivedState }) {
  const { 
    currentRoom, setCurrentRoom, timeSlot, addMessage, advanceTime, endDay,
    adjustMood, adjustWeight, resetLust, adjustMoney, setCurrentView,
    groceries, adjustGroceries, toys, isPregnant, pregnancyWeeks, pregnancyKnown,
    isLactating, recoveryDays, dayOfWeek, onMaternityLeave, path, career,
    hasGymMembership, money, cravings, setCravings
  } = state;
  const { currentTimeSlot, isOverdue, lustLevel } = derivedState;
  
  const rooms = ['bedroom', 'kitchen', 'livingRoom', 'study', 'bathroom', 'frontDoor'];
  const roomLabels = {
    bedroom: 'Bedroom',
    kitchen: 'Kitchen',
    livingRoom: 'Living Room',
    study: 'Study',
    bathroom: 'Bathroom',
    frontDoor: 'Front Door'
  };
  
  // Sleep action
  const sleep = () => {
    if (!currentTimeSlot.sleep && timeSlot < 6) {
      addMessage("It's too early to sleep.", 'action');
      return;
    }
    addMessage('You drift off to sleep...', 'action');
    endDay();
  };
  
  // Nap action
  const nap = () => {
    addMessage('You take a quick nap.', 'action');
    adjustMood(3);
    advanceTime(1);
  };
  
  // Masturbate
  const masturbate = (toyId = null) => {
    if (lustLevel < 2 && !toyId) {
      addMessage("You're not in the mood right now.", 'action');
      return;
    }
    
    const toy = toyId ? TOYS.find(t => t.id === toyId) : null;
    let baseChance = lustLevel === 0 ? 0 : lustLevel === 1 ? 0.1 : lustLevel === 2 ? 0.85 : 1;
    
    if (toy) {
      baseChance = clamp(0.4 + (toy.bonus / 100) + (lustLevel * 0.15), 0, 1);
    }
    
    if (Math.random() < baseChance) {
      const moodBoost = random(6, 10);
      adjustMood(moodBoost);
      resetLust();
      addMessage(toy ? toy.successText : 'The release is satisfying.', 'adult');
    } else {
      adjustMood(-2);
      addMessage(toy ? toy.failText : "You try, but can't quite finish. Frustrating.", 'adult');
    }
    advanceTime(1);
  };
  
  // Work
  const goToWork = () => {
    if (dayOfWeek >= 5) {
      addMessage("It's the weekend—no work today.", 'action');
      return;
    }
    if (onMaternityLeave) {
      adjustMoney(50);
      addMessage('You receive £50 maternity leave pay.', 'income');
      useGameStore.getState().setTimeSlot(6);
      return;
    }
    if (recoveryDays > 0) {
      addMessage("You're still recovering. Rest is essential.", 'action');
      return;
    }
    
    adjustMoney(100);
    const events = WORK_EVENTS[career] || WORK_EVENTS.finance;
    const event = randomChoice(events);
    addMessage(`You spend the day at work. ${event.text}`, 'work');
    addMessage('Earned £100', 'income');
    adjustMood(event.mood);
    if (event.bonus) adjustMoney(event.bonus);
    useGameStore.getState().setTimeSlot(event.earlyFinish ? 5 : 6);
  };
  
  // Exercise
  const exercise = (type) => {
    if (isPregnant && pregnancyWeeks >= 37 && type !== 'walk') {
      addMessage("You're too heavily pregnant for that.", 'action');
      return;
    }
    
    const exercises = {
      walk: { weight: -1, mood: 3, text: 'You go for a walk.', time: 1 },
      run: { weight: -2, mood: 5, text: 'You go for a run.', time: 1 },
      yoga: { weight: -1, mood: 4, text: 'You do some yoga.', time: 1 },
      gym: { weight: -2, mood: 5, text: 'You work out at the gym.', time: 2, cost: hasGymMembership ? 0 : 15 },
      weights: { weight: -1, mood: 3, text: 'You lift weights.', time: 1 },
    };
    
    const ex = exercises[type];
    if (ex.cost && money < ex.cost) {
      addMessage(`Can't afford gym session (${formatMoney(ex.cost)}).`, 'action');
      return;
    }
    if (ex.cost) adjustMoney(-ex.cost);
    
    adjustWeight(ex.weight);
    adjustMood(ex.mood);
    addMessage(ex.text, 'action');
    advanceTime(ex.time);
  };
  
  // Eat at home
  const eatHome = () => {
    if (groceries <= 0) {
      addMessage("You're out of groceries. You need to buy more.", 'action');
      return;
    }
    adjustGroceries(-1);
    adjustWeight(random(-1, 1));
    adjustMood(2);
    addMessage('You make yourself a meal.', 'action');
    advanceTime(1);
  };
  
  // Mirror
  const lookInMirror = () => {
    const desc = [];
    desc.push(derivedState.moodLevel.mirror);
    desc.push(derivedState.weightTier.mirror);
    
    if (isPregnant && pregnancyKnown) {
      desc.push(getBellyDescription(
        pregnancyWeeks, 
        state.babyCount, 
        state.pregnancyType, 
        state.complications, 
        state.bellyBonus
      ));
    }
    
    addMessage('You look at yourself in the mirror. ' + desc.join(' '), 'mirror');
  };
  
  // Surveys
  const doSurveys = () => {
    const pay = random(10, 15);
    adjustMoney(pay);
    addMessage(`You complete some online surveys and earn ${formatMoney(pay)}.`, 'income');
    advanceTime(1);
  };
  
  return (
    <div className="space-y-4">
      {/* Room Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-slate-700/30 pb-3">
        {rooms.map(room => (
          <button
            key={room}
            onClick={() => setCurrentRoom(room)}
            className={`px-3 py-1.5 rounded text-sm transition-all ${
              currentRoom === room 
                ? 'bg-rose-700/50 text-rose-100 border border-rose-500/50' 
                : 'bg-slate-800/50 text-slate-400 hover:text-slate-200 border border-transparent hover:border-slate-600/50'
            }`}
          >
            {roomLabels[room]}
          </button>
        ))}
      </div>
      
      {/* Room Actions */}
      <div className="flex flex-wrap gap-2">
        {currentRoom === 'bedroom' && (
          <>
            {(currentTimeSlot.sleep || timeSlot >= 6) && <ActionBtn onClick={sleep}>Sleep</ActionBtn>}
            <ActionBtn onClick={nap}>Nap</ActionBtn>
            <ActionBtn onClick={() => masturbate()}>Masturbate</ActionBtn>
            {toys.map(t => {
              const toy = TOYS.find(x => x.id === t);
              return <ActionBtn key={t} onClick={() => masturbate(t)} className="bg-pink-900/30">Use {toy?.name}</ActionBtn>;
            })}
          </>
        )}
        
        {currentRoom === 'kitchen' && (
          <>
            <ActionBtn onClick={eatHome} disabled={groceries <= 0}>
              Make Food {groceries > 0 ? `(${groceries} meals)` : '(no groceries)'}
            </ActionBtn>
            {isPregnant && pregnancyWeeks >= 37 && (
              <ActionBtn className="text-pink-300">Eat Spicy Food</ActionBtn>
            )}
          </>
        )}
        
        {currentRoom === 'livingRoom' && (
          <>
            <ActionBtn onClick={() => { addMessage('You watch some TV.', 'action'); adjustMood(3); advanceTime(1); }}>Watch TV</ActionBtn>
            <ActionBtn onClick={() => exercise('yoga')}>Yoga</ActionBtn>
            <ActionBtn onClick={() => { addMessage('You play video games.', 'action'); adjustMood(4); advanceTime(1); }}>Play Games</ActionBtn>
          </>
        )}
        
        {currentRoom === 'study' && (
          <>
            <ActionBtn onClick={() => { addMessage('You browse the internet.', 'action'); advanceTime(1); }}>Browse Internet</ActionBtn>
            <ActionBtn onClick={() => exercise('weights')}>Lift Weights</ActionBtn>
            <ActionBtn onClick={doSurveys}>Do Surveys (£10-15)</ActionBtn>
          </>
        )}
        
        {currentRoom === 'bathroom' && (
          <>
            <ActionBtn onClick={() => { addMessage('You take a refreshing shower.', 'action'); adjustMood(2); advanceTime(1); }}>Shower</ActionBtn>
            <ActionBtn onClick={lookInMirror}>Look in Mirror</ActionBtn>
            {isLactating && (
              <ActionBtn onClick={() => { addMessage('You express milk, relieving the pressure.', 'action'); adjustMood(1); }}>Express Milk</ActionBtn>
            )}
          </>
        )}
        
        {currentRoom === 'frontDoor' && (
          <>
            <ActionBtn onClick={() => exercise('walk')}>Walk</ActionBtn>
            {(!isPregnant || pregnancyWeeks < 30) && <ActionBtn onClick={() => exercise('run')}>Run</ActionBtn>}
            <ActionBtn onClick={() => { setCurrentView('shopping'); addMessage('You head to the shopping center.', 'action'); }}>Shopping Center</ActionBtn>
            <ActionBtn onClick={() => { setCurrentView('doctor'); addMessage("You arrive at the doctor's office.", 'action'); }}>Doctor</ActionBtn>
            {currentTimeSlot.work && timeSlot <= 1 && dayOfWeek < 5 && (
              <ActionBtn onClick={goToWork} className="bg-blue-900/40">
                {onMaternityLeave ? 'Collect Mat Pay' : `Go to ${path === 'fullTime' ? 'Work' : 'Uni'}`}
              </ActionBtn>
            )}
            {currentTimeSlot.bar && (
              <ActionBtn onClick={() => { setCurrentView('bar'); addMessage('You head to the bar.', 'action'); }} className="bg-purple-900/40">
                Go to Bar
              </ActionBtn>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function BarActions({ state, derivedState }) {
  const { sobriety, money, adjustMoney, addMessage, advanceTime, setCurrentView, isPregnant, isSurrogacy } = state;
  const { increaseSobriety, resetLust, adjustMood } = useGameStore.getState();
  
  const drink = () => {
    if (money < 5) {
      addMessage("You can't afford a drink.", 'action');
      return;
    }
    if (isPregnant && isSurrogacy) {
      addMessage("You can't drink while on a surrogacy contract!", 'action');
      return;
    }
    adjustMoney(-5);
    increaseSobriety();
    addMessage('You have a drink. £5', 'action');
    advanceTime(1);
  };
  
  const lookForHookup = () => {
    const approachChance = sobriety === 0 ? 0.2 : sobriety === 1 ? 0.4 : sobriety === 2 ? 0.6 : 0.8;
    if (Math.random() > approachChance) {
      addMessage('Nobody catches your eye tonight.', 'action');
      advanceTime(1);
      return;
    }
    
    addMessage('Someone attractive approaches with obvious interest...', 'adult');
    resetLust();
    adjustMood(random(5, 10));
    advanceTime(2);
    setCurrentView('flat');
  };
  
  return (
    <div className="space-y-3">
      <div className="text-slate-400 text-sm">
        Sobriety: <span className={sobriety >= 2 ? 'text-amber-400' : 'text-slate-300'}>
          {['Sober', 'Tipsy', 'Drunk', 'Wasted'][sobriety]}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        <ActionBtn onClick={drink}>Have a Drink (£5)</ActionBtn>
        <ActionBtn onClick={lookForHookup} className="bg-pink-900/40">Look for Company</ActionBtn>
        <ActionBtn onClick={() => { setCurrentView('flat'); advanceTime(1); }}>Go Home</ActionBtn>
      </div>
    </div>
  );
}

function ShoppingActions({ state, derivedState }) {
  const { money, adjustMoney, addMessage, advanceTime, setCurrentView, groceries, toys } = state;
  const { setGroceries, addToy, setHasMaternityClothes, setHasNursingBra, setHasBreastPads, setHasCondoms, setGymMembership, setPregnancyKnown, isPregnant, hasMaternityClothes, hasNursingBra, hasBreastPads, hasCondoms, hasGymMembership } = useGameStore.getState();
  
  const buyGroceries = () => {
    if (money < 30) { addMessage("Can't afford groceries.", 'action'); return; }
    adjustMoney(-30);
    setGroceries(7);
    addMessage('You buy groceries. £30', 'expense');
  };
  
  const buyItem = (item, setter, cost, name) => {
    if (money < cost) { addMessage(`Can't afford ${name}.`, 'action'); return; }
    adjustMoney(-cost);
    setter(true);
    addMessage(`You buy ${name}. ${formatMoney(cost)}`, 'expense');
  };
  
  const buyToy = (toy) => {
    if (toys.includes(toy.id)) { addMessage('You already own that.', 'action'); return; }
    if (money < toy.cost) { addMessage(`Can't afford ${toy.name}.`, 'action'); return; }
    adjustMoney(-toy.cost);
    addToy(toy.id);
    addMessage(`You purchase a ${toy.name}. ${formatMoney(toy.cost)}`, 'expense');
  };
  
  const buyPregnancyTest = () => {
    if (money < 8) { addMessage("Can't afford a pregnancy test.", 'action'); return; }
    adjustMoney(-8);
    if (isPregnant) {
      setPregnancyKnown(true);
      addMessage("The test is positive. You're pregnant. £8", 'expense');
    } else {
      addMessage('The test is negative. £8', 'expense');
    }
  };
  
  const eatOut = (item) => {
    if (money < item.cost) { addMessage(`Can't afford ${item.name}.`, 'action'); return; }
    adjustMoney(-item.cost);
    useGameStore.getState().adjustWeight(item.weight);
    useGameStore.getState().adjustMood(item.mood);
    addMessage(`You enjoy a meal at ${item.name}. ${formatMoney(item.cost)}`, 'expense');
    advanceTime(1);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <ActionBtn onClick={buyGroceries}>Groceries (£30)</ActionBtn>
        {!hasMaternityClothes && <ActionBtn onClick={() => buyItem(null, setHasMaternityClothes, 35, 'Maternity Clothes')}>Maternity Clothes (£35)</ActionBtn>}
        {!hasNursingBra && <ActionBtn onClick={() => buyItem(null, setHasNursingBra, 25, 'Nursing Bras')}>Nursing Bras (£25)</ActionBtn>}
        {!hasBreastPads && <ActionBtn onClick={() => buyItem(null, setHasBreastPads, 5, 'Breast Pads')}>Breast Pads (£5)</ActionBtn>}
        {!hasCondoms && <ActionBtn onClick={() => buyItem(null, setHasCondoms, 5, 'Condoms')}>Condoms (£5)</ActionBtn>}
        {!hasGymMembership && <ActionBtn onClick={() => { if (money >= 80) { adjustMoney(-80); setGymMembership(30); addMessage('Gym membership purchased. £80', 'expense'); } }}>Gym Membership (£80)</ActionBtn>}
        <ActionBtn onClick={buyPregnancyTest}>Pregnancy Test (£8)</ActionBtn>
      </div>
      
      <div className="border-t border-slate-700/30 pt-3">
        <div className="text-slate-400 text-xs uppercase tracking-wider mb-2">Food Court</div>
        <div className="flex flex-wrap gap-2">
          {FOOD_ITEMS.map(item => (
            <ActionBtn key={item.id} onClick={() => eatOut(item)} disabled={money < item.cost} className="text-xs">
              {item.name} (£{item.cost})
            </ActionBtn>
          ))}
        </div>
      </div>
      
      <div className="border-t border-slate-700/30 pt-3">
        <div className="text-slate-400 text-xs uppercase tracking-wider mb-2">Adult Store</div>
        <div className="flex flex-wrap gap-2">
          {TOYS.filter(t => !toys.includes(t.id)).map(toy => (
            <ActionBtn key={toy.id} onClick={() => buyToy(toy)} disabled={money < toy.cost} className="text-xs bg-pink-900/20">
              {toy.name} (£{toy.cost})
            </ActionBtn>
          ))}
        </div>
      </div>
      
      <ActionBtn onClick={() => { setCurrentView('flat'); advanceTime(1); }}>Leave</ActionBtn>
    </div>
  );
}

function DoctorActions({ state, derivedState }) {
  const { addMessage, advanceTime, setCurrentView, isPregnant, pregnancyKnown, pregnancyWeeks, babyCountKnown, money, adjustMoney } = state;
  const { setPregnancyKnown, setBabyCountKnown, setOnMaternityLeave, setShowModal } = useGameStore.getState();
  
  const visitOBGYN = () => {
    if (!isPregnant) {
      addMessage("The OBGYN confirms you're not pregnant.", 'action');
    } else if (!pregnancyKnown) {
      setPregnancyKnown(true);
      addMessage("The OBGYN confirms you're pregnant! They schedule your 12-week scan.", 'action');
    } else if (pregnancyWeeks >= 12 && !babyCountKnown) {
      setBabyCountKnown(true);
      const countText = state.babyCount === 1 ? 'one baby' : state.babyCount === 2 ? 'twins!' : state.babyCount === 3 ? 'triplets!' : 'quadruplets!';
      addMessage(`The 12-week scan reveals you're carrying ${countText}`, 'action');
    } else {
      addMessage(`Your checkup at week ${pregnancyWeeks} goes well.`, 'action');
    }
    advanceTime(1);
  };
  
  const requestMaternityLeave = () => {
    if (!isPregnant || pregnancyWeeks < 30) {
      addMessage('Maternity leave is available from week 30 onwards.', 'action');
      return;
    }
    setOnMaternityLeave(true);
    addMessage("You begin your maternity leave. You'll receive 50% pay while on leave.", 'system');
  };
  
  const applySurrogacy = () => {
    if (isPregnant) {
      addMessage("Can't apply for surrogacy while pregnant.", 'action');
      return;
    }
    setShowModal('surrogacy');
  };
  
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <ActionBtn onClick={() => { addMessage('General checkup complete. Everything is fine.', 'action'); advanceTime(1); }}>General Checkup (Free)</ActionBtn>
        <ActionBtn onClick={visitOBGYN}>OBGYN (Free)</ActionBtn>
        {!isPregnant && <ActionBtn onClick={applySurrogacy} className="bg-amber-900/30">Apply for Surrogacy</ActionBtn>}
        {isPregnant && pregnancyWeeks >= 30 && !state.onMaternityLeave && (
          <ActionBtn onClick={requestMaternityLeave} className="bg-blue-900/30">Request Maternity Leave</ActionBtn>
        )}
      </div>
      <ActionBtn onClick={() => setCurrentView('flat')}>Leave</ActionBtn>
    </div>
  );
}

function ActionBtn({ children, onClick, disabled, className = '' }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 rounded text-sm transition-all border border-slate-600/50 hover:border-slate-500/50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-slate-800/80 ${className}`}
    >
      {children}
    </button>
  );
}
