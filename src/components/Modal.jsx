import { useGameStore } from '../store/gameStore';
import { DRUGS } from '../data/items';
import { ELLA_EXPERIMENTS, SURROGACY_PAY } from '../data/pregnancy';
import { formatMoney, randomChoice } from '../utils/helpers';

export default function Modal({ modalType, derivedState }) {
  const { setShowModal } = useGameStore();
  
  const closeModal = () => setShowModal(null);
  
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50" onClick={closeModal}>
      <div className="bg-slate-900 border border-rose-500/30 rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        {modalType === 'drugEncounter' && <DrugEncounterModal onClose={closeModal} />}
        {modalType === 'ella' && <EllaModal onClose={closeModal} />}
        {modalType === 'surrogacy' && <SurrogacyModal onClose={closeModal} />}
      </div>
    </div>
  );
}

function DrugEncounterModal({ onClose }) {
  const { isPregnant, pregnancyWeeks, drugEncounters, addMessage, incrementDrugEncounters,
    setFertilityBoost, setMultiplesBoost, adjustLust, resetLust, addPendingDrugEffect,
    setIsLactating, adjustBust, adjustWeight, startPregnancy
  } = useGameStore();
  
  const availableDrugs = [
    ...DRUGS.lust,
    ...DRUGS.bust,
    ...DRUGS.weight,
    ...DRUGS.hair,
    ...DRUGS.pregnancy.filter(d => {
      if (d.requirePregnant && !isPregnant) return false;
      if (d.requireNotPregnant && isPregnant) return false;
      if (d.requireWeeks && pregnancyWeeks < d.requireWeeks) return false;
      if (d.advanced && drugEncounters < 3) return false;
      return true;
    })
  ].slice(0, 8);
  
  const handleAccept = (drug) => {
    incrementDrugEncounters();
    addMessage(`You accept the ${drug.name}. ${drug.desc}`, 'action');
    
    switch (drug.effect) {
      case 'lustUp':
        adjustLust(drug.value);
        addMessage('Warmth spreads through your body.', 'body');
        break;
      case 'lustDown':
        resetLust();
        addMessage('The desire fades completely.', 'body');
        break;
      case 'fertilityUp':
        setFertilityBoost(true);
        addMessage('You feel incredibly fertile.', 'body');
        break;
      case 'multiplesUp':
        setMultiplesBoost(true);
        addMessage('Something shifts inside you...', 'body');
        break;
      case 'bustUp':
      case 'bustDown':
      case 'weightUp':
      case 'weightDown':
      case 'hairColor':
      case 'hairNatural':
      case 'hairRandom':
        addPendingDrugEffect({ type: drug.effect, value: drug.value });
        addMessage("You'll notice the effects tomorrow.", 'action');
        break;
      case 'lactation':
        if (isPregnant) {
          setIsLactating(true);
          addMessage('Your breasts begin producing milk early.', 'body');
        }
        break;
      case 'eggPregnancy':
        if (!isPregnant) {
          startPregnancy('egg');
          addMessage('Something strange takes root inside you...', 'body');
        }
        break;
    }
    onClose();
  };
  
  const handleDecline = () => {
    addMessage('You politely decline and walk away.', 'action');
    onClose();
  };
  
  return (
    <>
      <h3 className="text-xl text-rose-200 mb-4">A Stranger Approaches</h3>
      <p className="text-slate-300 mb-4">"Hey. You look like you might be interested in something... special."</p>
      <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto mb-4">
        {availableDrugs.map(drug => (
          <button
            key={drug.id}
            onClick={() => handleAccept(drug)}
            className="p-2 bg-slate-800 hover:bg-slate-700 border border-slate-600/50 rounded text-left text-sm"
          >
            <div className="text-rose-200">{drug.name}</div>
            <div className="text-slate-500 text-xs truncate">{drug.desc?.slice(0, 40)}...</div>
          </button>
        ))}
      </div>
      <button onClick={handleDecline} className="w-full py-2 bg-slate-700 hover:bg-slate-600 rounded">
        Decline and Leave
      </button>
    </>
  );
}

function EllaModal({ onClose }) {
  const { ellaExperimentsCompleted, addMessage, startEllaExperiment, setMetElla } = useGameStore();
  
  const handleAccept = (type) => {
    const exp = ELLA_EXPERIMENTS[type];
    setMetElla();
    startEllaExperiment(type);
    addMessage(`You accept Dr. Ella's ${exp.name} experiment.`, 'action');
    addMessage(exp.introText, 'body');
    onClose();
  };
  
  const handleDecline = () => {
    addMessage("You politely decline Dr. Ella's offer.", 'action');
    onClose();
  };
  
  return (
    <>
      <h3 className="text-xl text-purple-200 mb-4">Dr. Ella Voss</h3>
      <p className="text-slate-300 mb-4">
        A striking woman approaches. "I'm Dr. Ella Voss. I have research opportunities that might interest you. Compensated, of course."
      </p>
      <div className="space-y-2 mb-4">
        {!ellaExperimentsCompleted.includes('rapid') && (
          <button onClick={() => handleAccept('rapid')} className="w-full p-3 bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 rounded text-left">
            <div className="text-purple-200">Rapid Pregnancy (7 days)</div>
            <div className="text-slate-400 text-sm">Payment: £500 at delivery</div>
          </button>
        )}
        {ellaExperimentsCompleted.includes('rapid') && !ellaExperimentsCompleted.includes('yearLong') && (
          <button onClick={() => handleAccept('yearLong')} className="w-full p-3 bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 rounded text-left">
            <div className="text-purple-200">Year-Long Pregnancy (12-18 months)</div>
            <div className="text-slate-400 text-sm">Payment: £250/month + overdue bonuses</div>
          </button>
        )}
        {ellaExperimentsCompleted.includes('yearLong') && !ellaExperimentsCompleted.includes('horse') && (
          <button onClick={() => handleAccept('horse')} className="w-full p-3 bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 rounded text-left">
            <div className="text-purple-200">Horse Pregnancy (11-13 months)</div>
            <div className="text-slate-400 text-sm">Payment: £455/month + bonuses</div>
            <div className="text-amber-400/70 text-xs">Warning: Extreme size</div>
          </button>
        )}
      </div>
      <button onClick={handleDecline} className="w-full py-2 bg-slate-700 hover:bg-slate-600 rounded">
        Decline
      </button>
    </>
  );
}

function SurrogacyModal({ onClose }) {
  const { addMessage, adjustMoney, startSurrogacy } = useGameStore.getState();
  
  const handleAccept = () => {
    startSurrogacy();
    const pay = SURROGACY_PAY[1]; // Initial signing bonus
    adjustMoney(pay.signing);
    addMessage(`Surrogacy approved! Signing bonus: ${formatMoney(pay.signing)}`, 'income');
    addMessage("You've been artificially inseminated. The pregnancy has begun.", 'body');
    onClose();
  };
  
  const handleDecline = () => {
    addMessage('You decide not to apply for surrogacy.', 'action');
    onClose();
  };
  
  return (
    <>
      <h3 className="text-xl text-amber-200 mb-4">Surrogacy Application</h3>
      <p className="text-slate-300 mb-2">The surrogacy clinic reviews your application.</p>
      <p className="text-slate-400 text-sm mb-4">
        Payment: £2,000-£6,000 depending on baby count.<br/>
        Contract includes mandatory appointments and diet guidelines.
      </p>
      <div className="space-y-2">
        <button onClick={handleAccept} className="w-full py-2 bg-amber-700/50 hover:bg-amber-600/50 border border-amber-500/30 rounded">
          Accept and Begin Surrogacy
        </button>
        <button onClick={handleDecline} className="w-full py-2 bg-slate-700 hover:bg-slate-600 rounded">
          Decline
        </button>
      </div>
    </>
  );
}
