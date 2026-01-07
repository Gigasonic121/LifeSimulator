import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ECONOMY, WEATHER_TYPES, CYCLE_PHASES } from '../data/constants';
import { BABY_COUNT_CHANCES, PREGNANCY_PROFILES, COMPLICATIONS, COMPLICATION_CHANCES } from '../data/pregnancy';
import { random, randomChoice, clamp, rollBabyCount } from '../utils/helpers';

// Initial state factory
const createInitialState = () => ({
  // Game state
  gameState: 'menu', // menu, creation, playing
  currentView: 'flat',
  currentRoom: 'bedroom',
  showModal: null,
  
  // Time
  day: 1,
  dayOfWeek: 0,
  timeSlot: 0,
  
  // Character - fixed
  name: '',
  path: 'fullTime',
  career: 'finance',
  height: 'Average',
  skinTone: 'Medium',
  eyeColor: 'Brown',
  hairColor: 'Brown',
  hairLength: 'Medium',
  hairStyle: 'Loose',
  naturalHairColor: 'Brown',
  
  // Character - dynamic
  money: ECONOMY.startingMoney,
  weightPoints: 60,
  bustIndex: 3,
  moodPoints: 50,
  lustDays: 2,
  
  // Cycle
  cycleDay: 1,
  fertilityBoost: false,
  multiplesBoost: false,
  
  // Pregnancy
  isPregnant: false,
  pregnancyWeeks: 0,
  pregnancyDays: 0,
  babyCount: 0,
  pregnancyType: 'normal',
  pregnancyKnown: false,
  babyCountKnown: false,
  complications: [],
  isLactating: false,
  onMaternityLeave: false,
  recoveryDays: 0,
  bellyBonus: 0,
  pregnancyProfile: 'smooth',
  cravings: null,
  
  // Surrogacy
  isSurrogacy: false,
  surrogacyPaid: { signing: false, firstTri: false, secondTri: false },
  
  // Ella experiments
  ellaExperiment: null,
  ellaMonthsPaid: 0,
  metElla: false,
  ellaExperimentsCompleted: [],
  
  // Inventory
  groceries: 7,
  toys: [],
  lingerie: [],
  hasMaternityClothes: false,
  hasNursingBra: false,
  hasBreastPads: false,
  hasGymMembership: false,
  gymMembershipDays: 0,
  hasCondoms: false,
  
  // Status
  rentDue: ECONOMY.rentPeriod,
  rentOverdue: false,
  sobriety: 0,
  isHungover: false,
  
  // Messages
  messages: [],
  currentDream: '',
  weather: WEATHER_TYPES[0],
  pendingDrugEffects: [],
  
  // Statistics
  totalPregnancies: 0,
  drugEncounters: 0,
  horseDildoUses: 0,
});

export const useGameStore = create(
  persist(
    (set, get) => ({
      ...createInitialState(),
      
      // === ACTIONS ===
      
      // Reset game
      resetGame: () => set(createInitialState()),
      
      // Set game state
      setGameState: (gameState) => set({ gameState }),
      setCurrentView: (currentView) => set({ currentView }),
      setCurrentRoom: (currentRoom) => set({ currentRoom }),
      setShowModal: (showModal) => set({ showModal }),
      
      // Character creation
      setCharacterField: (field, value) => set({ [field]: value }),
      
      finalizeCharacter: () => {
        const state = get();
        set({
          naturalHairColor: state.hairColor,
          gameState: 'playing',
        });
        get().generateMorningMessage();
      },
      
      // Messages
      addMessage: (text, type = 'normal') => {
        set(state => ({
          messages: [...state.messages.slice(-100), { 
            text, 
            type, 
            id: Date.now() + Math.random() 
          }]
        }));
      },
      
      clearMessages: () => set({ messages: [] }),
      
      // Time
      advanceTime: (slots = 1) => {
        set(state => {
          const newSlot = state.timeSlot + slots;
          if (newSlot >= 9) return state;
          return { timeSlot: newSlot };
        });
      },
      
      setTimeSlot: (timeSlot) => set({ timeSlot }),
      
      // Stats
      adjustMoney: (amount) => {
        set(state => ({ money: state.money + amount }));
      },
      
      adjustMood: (amount) => {
        set(state => ({ moodPoints: clamp(state.moodPoints + amount, 0, 100) }));
      },
      
      adjustWeight: (amount) => {
        set(state => ({ weightPoints: clamp(state.weightPoints + amount, 0, 150) }));
      },
      
      adjustLust: (days) => {
        set(state => ({ lustDays: Math.max(0, state.lustDays + days) }));
      },
      
      resetLust: () => set({ lustDays: 0 }),
      
      adjustBust: (amount) => {
        set(state => ({ bustIndex: clamp(state.bustIndex + amount, 0, 9) }));
      },
      
      // Cycle
      advanceCycle: () => {
        set(state => {
          if (state.isPregnant) return state;
          return { cycleDay: state.cycleDay >= 28 ? 1 : state.cycleDay + 1 };
        });
      },
      
      setFertilityBoost: (value) => set({ fertilityBoost: value }),
      setMultiplesBoost: (value) => set({ multiplesBoost: value }),
      
      // Pregnancy
      startPregnancy: (type = 'normal', babyCount = null, profile = null) => {
        const state = get();
        const count = babyCount || rollBabyCount(
          state.multiplesBoost ? BABY_COUNT_CHANCES.boosted : BABY_COUNT_CHANCES.normal
        );
        const selectedProfile = profile || randomChoice(PREGNANCY_PROFILES).id;
        
        set({
          isPregnant: true,
          pregnancyWeeks: 0,
          pregnancyDays: 0,
          babyCount: count,
          pregnancyType: type,
          pregnancyKnown: type !== 'normal', // Special pregnancies are known immediately
          babyCountKnown: type !== 'normal',
          pregnancyProfile: selectedProfile,
          multiplesBoost: false,
          complications: [],
          bellyBonus: 0,
          cravings: null,
        });
      },
      
      advancePregnancy: () => {
        set(state => {
          if (!state.isPregnant) return state;
          
          const newDays = state.pregnancyDays + 1;
          if (newDays >= 7) {
            return {
              pregnancyDays: 0,
              pregnancyWeeks: state.pregnancyWeeks + 1,
            };
          }
          return { pregnancyDays: newDays };
        });
      },
      
      setPregnancyKnown: (known) => set({ pregnancyKnown: known }),
      setBabyCountKnown: (known) => set({ babyCountKnown: known }),
      
      addComplication: (complication) => {
        const comp = COMPLICATIONS[complication];
        if (!comp) return;
        
        set(state => ({
          complications: [...state.complications, complication],
          bellyBonus: state.bellyBonus + random(comp.bellyBonus[0], comp.bellyBonus[1]),
        }));
      },
      
      endPregnancy: (ellaStabilized = false) => {
        set(state => ({
          isPregnant: false,
          pregnancyWeeks: 0,
          pregnancyDays: 0,
          babyCount: 0,
          pregnancyKnown: false,
          babyCountKnown: false,
          complications: [],
          onMaternityLeave: false,
          bellyBonus: 0,
          cravings: null,
          isSurrogacy: false,
          surrogacyPaid: { signing: false, firstTri: false, secondTri: false },
          ellaExperiment: null,
          ellaMonthsPaid: 0,
          pregnancyType: 'normal',
          pregnancyProfile: 'smooth',
          recoveryDays: ellaStabilized ? 1 : (state.pregnancyType === 'egg' ? 1 : 3),
          totalPregnancies: state.totalPregnancies + 1,
          ellaExperimentsCompleted: state.ellaExperiment 
            ? [...state.ellaExperimentsCompleted, state.ellaExperiment]
            : state.ellaExperimentsCompleted,
        }));
      },
      
      setOnMaternityLeave: (value) => set({ onMaternityLeave: value }),
      setIsLactating: (value) => set({ isLactating: value }),
      setCravings: (value) => set({ cravings: value }),
      
      // Surrogacy
      startSurrogacy: () => {
        const count = rollBabyCount(BABY_COUNT_CHANCES.surrogacy);
        set({
          isSurrogacy: true,
          surrogacyPaid: { signing: true, firstTri: false, secondTri: false },
        });
        get().startPregnancy('normal', count);
      },
      
      setSurrogacyPaid: (milestone) => {
        set(state => ({
          surrogacyPaid: { ...state.surrogacyPaid, [milestone]: true }
        }));
      },
      
      // Ella
      setMetElla: () => set({ metElla: true }),
      
      startEllaExperiment: (experimentType) => {
        set({ 
          ellaExperiment: experimentType, 
          metElla: true,
        });
        get().startPregnancy(experimentType, 1);
      },
      
      setEllaMonthsPaid: (months) => set({ ellaMonthsPaid: months }),
      
      // Inventory
      setGroceries: (value) => set({ groceries: value }),
      adjustGroceries: (amount) => set(state => ({ groceries: Math.max(0, state.groceries + amount) })),
      
      addToy: (toyId) => set(state => ({ toys: [...state.toys, toyId] })),
      addLingerie: (lingerieId) => set(state => ({ lingerie: [...state.lingerie, lingerieId] })),
      
      setHasMaternityClothes: (value) => set({ hasMaternityClothes: value }),
      setHasNursingBra: (value) => set({ hasNursingBra: value }),
      setHasBreastPads: (value) => set({ hasBreastPads: value }),
      setHasCondoms: (value) => set({ hasCondoms: value }),
      
      setGymMembership: (days) => set({ hasGymMembership: days > 0, gymMembershipDays: days }),
      decrementGymDays: () => set(state => {
        const newDays = state.gymMembershipDays - 1;
        return { 
          gymMembershipDays: newDays,
          hasGymMembership: newDays > 0,
        };
      }),
      
      // Rent
      processRent: () => {
        const state = get();
        if (state.rentDue > 1) {
          set({ rentDue: state.rentDue - 1 });
          return;
        }
        
        // Rent due today
        if (state.money >= ECONOMY.rent) {
          set({
            money: state.money - ECONOMY.rent,
            rentDue: ECONOMY.rentPeriod,
            rentOverdue: false,
          });
          get().addMessage(`Rent paid: £${ECONOMY.rent}`, 'expense');
        } else {
          set({ rentOverdue: true, rentDue: 0 });
          get().addMessage(`RENT OVERDUE! You couldn't afford the £${ECONOMY.rent} rent.`, 'warning');
        }
      },
      
      payOverdueRent: () => {
        const state = get();
        const totalDue = ECONOMY.rent + ECONOMY.lateFee;
        if (state.money >= totalDue) {
          set({
            money: state.money - totalDue,
            rentDue: ECONOMY.rentPeriod,
            rentOverdue: false,
          });
          get().addMessage(`Paid overdue rent plus £${ECONOMY.lateFee} late fee.`, 'expense');
        }
      },
      
      // Sobriety
      setSobriety: (value) => set({ sobriety: clamp(value, 0, 3) }),
      increaseSobriety: () => set(state => ({ sobriety: Math.min(3, state.sobriety + 1) })),
      setIsHungover: (value) => set({ isHungover: value }),
      
      // Recovery
      setRecoveryDays: (days) => set({ recoveryDays: days }),
      decrementRecovery: () => set(state => ({ recoveryDays: Math.max(0, state.recoveryDays - 1) })),
      
      // Weather & Dreams
      setWeather: (weather) => set({ weather }),
      setCurrentDream: (dream) => set({ currentDream: dream }),
      
      // Drug effects
      addPendingDrugEffect: (effect) => {
        set(state => ({
          pendingDrugEffects: [...state.pendingDrugEffects, effect]
        }));
      },
      
      processPendingDrugEffects: () => {
        const state = get();
        state.pendingDrugEffects.forEach(effect => {
          switch (effect.type) {
            case 'bustUp':
            case 'bustDown':
              get().adjustBust(effect.value);
              break;
            case 'weightUp':
            case 'weightDown':
              get().adjustWeight(effect.value);
              break;
            case 'hairColor':
              set({ hairColor: effect.value });
              break;
            case 'hairNatural':
              set(s => ({ hairColor: s.naturalHairColor }));
              break;
            case 'hairRandom':
              const colors = ['Pink', 'Blue', 'Purple', 'Green', 'Silver'];
              set({ hairColor: randomChoice(colors) });
              break;
          }
        });
        set({ pendingDrugEffects: [] });
      },
      
      // Statistics
      incrementDrugEncounters: () => set(state => ({ drugEncounters: state.drugEncounters + 1 })),
      incrementHorseDildoUses: () => set(state => ({ horseDildoUses: state.horseDildoUses + 1 })),
      
      // Complex actions
      generateMorningMessage: () => {
        // This will be implemented in a separate system
        // For now, just set weather
        set({ weather: randomChoice(WEATHER_TYPES) });
      },
      
      // End day (sleep)
      endDay: () => {
        const state = get();
        
        // Process pending drug effects
        get().processPendingDrugEffects();
        
        // Advance day
        set({
          day: state.day + 1,
          dayOfWeek: (state.dayOfWeek + 1) % 7,
          timeSlot: state.sobriety >= 2 ? 1 : 0,
          isHungover: state.sobriety >= 2,
          sobriety: 0,
          fertilityBoost: false,
        });
        
        // Process rent
        get().processRent();
        
        // Gym membership
        if (state.hasGymMembership) {
          get().decrementGymDays();
        }
        
        // Recovery
        if (state.recoveryDays > 0) {
          get().decrementRecovery();
        }
        
        // Cycle
        get().advanceCycle();
        
        // Pregnancy
        if (state.isPregnant) {
          get().advancePregnancy();
        }
        
        // Lust builds
        set(s => ({ lustDays: s.lustDays + 1 }));
        
        // Mood drift
        set(s => {
          let drift = 0;
          if (s.moodPoints < 40) drift = random(1, 3);
          else if (s.moodPoints < 50) drift = random(1, 2);
          else if (s.moodPoints > 60) drift = -random(1, 2);
          else if (s.moodPoints > 80) drift = -random(1, 3);
          
          if (s.rentOverdue) drift -= 3;
          if (s.money < 50) drift -= 2;
          
          return { moodPoints: clamp(s.moodPoints + drift, 5, 100) };
        });
        
        // Weight drift
        if (Math.random() < 0.3) {
          get().adjustWeight(1);
        }
        
        // Set new weather
        set({ weather: randomChoice(WEATHER_TYPES) });
        
        // Generate morning message
        get().generateMorningMessage();
      },
    }),
    {
      name: 'life-simulator-save',
      partialize: (state) => {
        // Don't persist transient state
        const { showModal, messages, ...persistedState } = state;
        return persistedState;
      },
    }
  )
);

export default useGameStore;
