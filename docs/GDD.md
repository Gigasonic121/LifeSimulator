# Life Simulator - Game Design Document

**Version:** 1.0.0
**Last Updated:** 2026-01-08
**Genre:** Life Simulation / Management
**Platform:** Web (React)

---

## Table of Contents

1. [Game Overview](#1-game-overview)
2. [Core Systems](#2-core-systems)
   - [2.1 Time & Calendar System](#21-time--calendar-system)
   - [2.2 Economy System](#22-economy-system)
   - [2.3 Character System](#23-character-system)
   - [2.4 Mood & Mental Health System](#24-mood--mental-health-system)
   - [2.5 Physical Stats System](#25-physical-stats-system)
   - [2.6 Relationship System](#26-relationship-system)
   - [2.7 Skills & Progression System](#27-skills--progression-system)
3. [Gameplay Systems](#3-gameplay-systems)
   - [3.1 Career System](#31-career-system)
   - [3.2 Pregnancy System](#32-pregnancy-system)
   - [3.3 Menstrual Cycle System](#33-menstrual-cycle-system)
   - [3.4 Health System](#34-health-system)
4. [World Systems](#4-world-systems)
   - [4.1 Locations](#41-locations)
   - [4.2 Weather System](#42-weather-system)
   - [4.3 Seasons & Holidays](#43-seasons--holidays)
   - [4.4 Events System](#44-events-system)
5. [Items & Economy](#5-items--economy)
   - [5.1 Consumables](#51-consumables)
   - [5.2 Equipment](#52-equipment)
   - [5.3 Special Items](#53-special-items)
6. [NPCs & Social](#6-npcs--social)
7. [Narrative Systems](#7-narrative-systems)
8. [Technical Specifications](#8-technical-specifications)

---

## 1. Game Overview

### Concept
Life Simulator is a narrative-driven life simulation game focusing on personal management, career development, relationships, and life choices. Players navigate daily life, manage finances, maintain health and mood, and make decisions that shape their character's journey.

### Core Loop
```
Wake Up → Morning Routine → Daily Activities → Evening Activities → Sleep
                ↑                                                      ↓
                ←←←←←←←←←←←←←← Day Advancement ←←←←←←←←←←←←←←←←←←←←←←←
```

### Key Features
- Detailed time management with 9 time slots per day
- Dynamic economy with rent, employment, and expenses
- Deep character customization and progression
- Pregnancy and surrogacy mechanics
- Career paths with progression
- Relationship building
- Random events and narrative moments

---

## 2. Core Systems

### 2.1 Time & Calendar System

#### Time Slots (9 per day)
| ID | Name | Hours | Work | Sleep | Bar | Activities |
|----|------|-------|------|-------|-----|------------|
| 0 | Early Morning | 5:00-7:00 | No | No | No | Exercise, Hygiene |
| 1 | Morning | 7:00-9:00 | Yes | No | No | Work, Errands |
| 2 | Late Morning | 9:00-11:00 | Yes | No | No | Work, Shopping |
| 3 | Noon | 11:00-13:00 | Yes | No | No | Work, Lunch |
| 4 | Afternoon | 13:00-15:00 | Yes | No | No | Work, Activities |
| 5 | Late Afternoon | 15:00-17:00 | Yes | No | No | Work, Gym |
| 6 | Evening | 17:00-20:00 | No | Yes | Yes | Social, Dining |
| 7 | Night | 20:00-23:00 | No | Yes | Yes | Bar, Social |
| 8 | Late Night | 23:00-5:00 | No | Yes | No | Sleep, Rest |

#### Days of Week
- **Monday-Friday**: Workdays (full work slot availability)
- **Saturday-Sunday**: Weekends (leisure, reduced responsibilities)

#### Seasons
| Season | Months | Duration (Days) | Weather Bias | Events |
|--------|--------|-----------------|--------------|--------|
| Spring | Mar-May | 91 | Rainy, Mild | Easter, May Day |
| Summer | Jun-Aug | 92 | Hot, Sunny | Summer Festivals |
| Autumn | Sep-Nov | 91 | Cloudy, Cool | Halloween, Bonfire Night |
| Winter | Dec-Feb | 90 | Cold, Snowy | Christmas, New Year |

#### Holidays & Special Days
| Holiday | Date | Effects |
|---------|------|---------|
| New Year's Day | Jan 1 | No work, mood +5 |
| Valentine's Day | Feb 14 | Relationship bonuses |
| Easter | Variable | No work, mood +3 |
| May Day | May 1 | No work |
| Summer Solstice | Jun 21 | Mood +2, longer daylight |
| Halloween | Oct 31 | Special bar events |
| Bonfire Night | Nov 5 | Special events |
| Christmas Eve | Dec 24 | Half day work |
| Christmas Day | Dec 25 | No work, mood +5 |
| Boxing Day | Dec 26 | No work, mood +3 |
| New Year's Eve | Dec 31 | Special bar events |

---

### 2.2 Economy System

#### Base Values
| Parameter | Value | Notes |
|-----------|-------|-------|
| Starting Money | £2,000 | Initial capital |
| Rent | £800 | Due every 14 days |
| Late Fee | £50 | Per day overdue |
| Work Pay (Base) | £100 | Per time slot worked |
| Maternity Pay | 50% | Of normal wages |

#### Income Sources
| Source | Amount | Frequency | Requirements |
|--------|--------|-----------|--------------|
| Employment | £100/slot | Per shift | Active employment |
| Surveys | £10-15 | Per completion | None |
| Surrogacy | £2,000-6,000 | Per pregnancy | Contract |
| Dr. Ella Experiments | £250-500/month | Monthly | Signed up |
| Odd Jobs | £20-50 | Per job | Available randomly |

#### Expenses
| Expense | Cost | Frequency |
|---------|------|-----------|
| Rent | £800 | Every 14 days |
| Groceries | £30 | Per shop (7 meals) |
| Gym Membership | £80 | Monthly |
| Gym Session | £15 | Per visit |
| Food Court Meals | £5-12 | Per meal |
| Maternity Clothes | £35 | One-time |
| Medical (Doctor) | £20-50 | Per visit |

#### Financial States
| State | Condition | Effects |
|-------|-----------|---------|
| Wealthy | >£5,000 | Mood +2 |
| Comfortable | £2,000-5,000 | No modifier |
| Tight | £500-2,000 | Mood -1 |
| Struggling | £100-500 | Mood -3 |
| Broke | <£100 | Mood -5, restricted options |
| In Debt | <£0 | Severe restrictions |

---

### 2.3 Character System

#### Appearance Attributes

**Height**
| Tier | Range (Imperial) | Range (Metric) |
|------|-----------------|----------------|
| Petite | 5'0" - 5'2" | 152-157 cm |
| Short | 5'3" - 5'4" | 160-163 cm |
| Average | 5'5" - 5'6" | 165-168 cm |
| Tall | 5'7" - 5'9" | 170-175 cm |
| Very Tall | 5'10"+ | 178+ cm |

**Skin Tones**: Pale, Fair, Light, Medium, Olive, Tan, Brown, Dark Brown, Dark

**Eye Colors**: Blue, Green, Hazel, Light Brown, Brown, Dark Brown, Grey

**Hair Colors (Natural)**: Black, Dark Brown, Brown, Light Brown, Auburn, Red, Strawberry Blonde, Blonde, Platinum Blonde

**Hair Colors (Unnatural)**: Pink, Blue, Purple, Green, Silver, Rainbow, White

**Hair Lengths**: Pixie, Short, Medium, Long, Very Long

**Hair Styles**: Loose, Ponytail, Bun, Braids, Pigtails, Half-up, Messy, Slicked Back, Curled, Straightened

---

### 2.4 Mood & Mental Health System

#### Mood Levels
| Level | Name | Range | Color | Morning Message | Daily Effect |
|-------|------|-------|-------|-----------------|--------------|
| 1 | Miserable | 0-20 | #8b0000 | "You drag yourself out of bed..." | -2 productivity |
| 2 | Low | 21-40 | #cd853f | "You wake up feeling flat..." | -1 productivity |
| 3 | Neutral | 41-60 | #daa520 | "Another day..." | No modifier |
| 4 | Good | 61-80 | #6b8e23 | "You feel refreshed..." | +1 productivity |
| 5 | Great | 81-100 | #228b22 | "Today is going to be great!" | +2 productivity |

#### Mood Modifiers
| Source | Effect | Duration |
|--------|--------|----------|
| Good Sleep | +5-10 | Daily |
| Bad Sleep | -5-10 | Daily |
| Weather | -2 to +2 | Daily |
| Good Meal | +2-5 | Immediate |
| Exercise | +3-5 | Immediate |
| Social Success | +3-5 | Immediate |
| Work Events | -5 to +5 | Immediate |
| Financial Stress | -3-5 | Ongoing |

#### Stress System
| Level | Name | Range | Effects |
|-------|------|-------|---------|
| 1 | Relaxed | 0-20 | Mood +5, Sleep quality +10% |
| 2 | Calm | 21-40 | No modifier |
| 3 | Normal | 41-60 | No modifier |
| 4 | Stressed | 61-80 | Mood -5, Sleep quality -10% |
| 5 | Overwhelmed | 81-100 | Mood -10, Health risk |

#### Energy System
| Level | Name | Range | Effects |
|-------|------|-------|---------|
| 1 | Exhausted | 0-20 | Cannot work, limited activities |
| 2 | Tired | 21-40 | Productivity -20% |
| 3 | Normal | 41-60 | No modifier |
| 4 | Rested | 61-80 | Productivity +10% |
| 5 | Energized | 81-100 | Productivity +20%, mood +3 |

---

### 2.5 Physical Stats System

#### Weight System
| Tier | Name | Point Range | Clothing Size | Description |
|------|------|-------------|---------------|-------------|
| 1 | Very Thin | 0-20 | Small | Underweight, visible bones |
| 2 | Thin | 21-40 | Small | Slim, lean silhouette |
| 3 | Athletic | 41-55 | Medium | Toned, muscle definition |
| 4 | Average | 56-70 | Medium | Healthy, normal figure |
| 5 | Curvy | 71-85 | Large | Soft, full-figured |
| 6 | Fat | 86-100 | Large | Overweight, round belly |
| 7 | Obese | 101+ | Plus | Significantly overweight |

#### Weight Modifiers
| Action | Effect | Notes |
|--------|--------|-------|
| Exercise | -2-3 | Per session |
| Healthy Meal | -1 | Per meal |
| Unhealthy Meal | +1-2 | Per meal |
| Pregnancy | +variable | Progressive |
| Drugs | ±15-30 | Instant |

#### Bust System
| Index | Size | Description |
|-------|------|-------------|
| 0 | AA | Nearly flat |
| 1 | A | Small, barely filling |
| 2 | B | Small but present |
| 3 | C | Average, comfortable |
| 4 | D | Full, fills out tops |
| 5 | DD | Large, draws attention |
| 6 | E | Very large, straining clothes |
| 7 | F | Huge, heavy |
| 8 | G | Massive, causing back strain |
| 9 | H | Enormous |

#### Bust Modifiers
| Source | Effect | Duration |
|--------|--------|----------|
| Pregnancy | +1-2 sizes | During pregnancy |
| Lactation | +1 size | While lactating |
| Drugs (Boost) | +1-2 sizes | Permanent |
| Drugs (Reduce) | -1 size | Permanent |

#### Lust System
| Level | Name | Days Since | Focus Penalty | Description |
|-------|------|------------|---------------|-------------|
| 0 | None | 0-1 | 0 | No particular desire |
| 1 | Low | 2-3 | 0 | Occasional passing thoughts |
| 2 | Medium | 4-5 | 0 | Simmering want |
| 3 | High | 6-8 | -2 | Distracted by desire |
| 4 | Overwhelming | 9+ | -5 | Can't focus, body aches |

---

### 2.6 Relationship System

#### Relationship Types
| Type | Description | Max Affection |
|------|-------------|---------------|
| Acquaintance | Casual knowledge | 20 |
| Friend | Social connection | 50 |
| Close Friend | Strong bond | 80 |
| Best Friend | Intimate friendship | 100 |
| Romantic Interest | Dating potential | 50 |
| Partner | Committed relationship | 100 |
| Colleague | Work relationship | 40 |
| Family | Blood/chosen family | 100 |

#### NPC Categories
| Category | Examples | Interaction Type |
|----------|----------|------------------|
| Work | Boss, Colleagues | Professional |
| Medical | Dr. Ella, GP | Transactional |
| Social | Bar regulars, Friends | Social |
| Service | Bartender, Shop staff | Transactional |
| Random | Strangers, Hookups | Variable |

#### Affection Mechanics
| Action | Affection Change |
|--------|-----------------|
| Positive Interaction | +3-5 |
| Gift Giving | +5-10 |
| Shared Activity | +2-5 |
| Negative Interaction | -3-10 |
| Neglect | -1/week |
| Betrayal | -20-50 |

---

### 2.7 Skills & Progression System

#### Skill Categories

**Professional Skills**
| Skill | Career Relevance | Max Level | Effects |
|-------|-----------------|-----------|---------|
| Finance | Finance career | 10 | +10% pay per level |
| Healthcare | Nursing career | 10 | +10% pay per level |
| Childcare | Childcare career | 10 | +10% pay per level |
| Communication | All careers | 10 | Better work events |
| Organization | All careers | 10 | Time efficiency |

**Life Skills**
| Skill | Application | Max Level | Effects |
|-------|-------------|-----------|---------|
| Cooking | Home meals | 10 | Better meals, savings |
| Fitness | Exercise | 10 | More effective workouts |
| Charm | Social | 10 | Better interactions |
| Negotiation | Money | 10 | Better prices |
| Self-Care | Health | 10 | Better mood recovery |

#### Skill Progression
| Level | XP Required | Bonus |
|-------|-------------|-------|
| 1 | 0 | Base |
| 2 | 100 | +5% |
| 3 | 250 | +10% |
| 4 | 500 | +15% |
| 5 | 1,000 | +20% |
| 6 | 2,000 | +25% |
| 7 | 4,000 | +30% |
| 8 | 7,000 | +35% |
| 9 | 11,000 | +40% |
| 10 | 16,000 | +50% |

---

## 3. Gameplay Systems

### 3.1 Career System

#### Available Careers
| Career | Entry Job | Part-Time | Dress Code | Base Pay |
|--------|-----------|-----------|------------|----------|
| Finance | Financial Assistant | Bank Teller | Professional | £100/slot |
| Nursing | Healthcare Assistant | Care Home | Scrubs | £100/slot |
| Childcare | Nursery Assistant | Babysitter | Casual | £100/slot |

#### Career Progression
| Level | Title Modifier | Pay Modifier | Requirements |
|-------|----------------|--------------|--------------|
| 1 | Junior | Base | Entry |
| 2 | Standard | +10% | 30 days, Skill 3 |
| 3 | Senior | +25% | 90 days, Skill 5 |
| 4 | Lead | +50% | 180 days, Skill 7 |
| 5 | Manager | +100% | 365 days, Skill 10 |

#### Work Schedule
- **Full-Time**: 5 slots per day, Monday-Friday
- **Part-Time**: 3 slots per day, flexible schedule
- **Maternity Leave**: 50% pay, no work requirements

---

### 3.2 Pregnancy System

#### Pregnancy Types
| Type | Duration | Max Overdue | Lactation Start | Recovery |
|------|----------|-------------|-----------------|----------|
| Normal | 40 weeks | 45 weeks | Week 32 | 3 days |
| Egg | 20 weeks | 22 weeks | Week 16 | 1 day |
| Rapid | 7 days | N/A | Day 5 | 1 day |
| Year-Long | 12 months | 18 months | Month 8 | 1 day |
| Horse | 11 months | 13 months | Month 8 | 1 day |

#### Baby Count Probabilities
| Type | Singles | Twins | Triplets | Quads |
|------|---------|-------|----------|-------|
| Normal | 97% | 2.5% | 0.4% | 0.1% |
| Boosted | 70% | 20% | 8% | 2% |
| Surrogacy | 85% | 10% | 4% | 1% |

#### Pregnancy Profiles
| Profile | Morning Sickness | Mood Swings | Fatigue | Complications |
|---------|-----------------|-------------|---------|---------------|
| Smooth | 10% | 10% | 20% | Base |
| Nauseous | 60% | 20% | 30% | Base |
| Exhausting | 20% | 30% | 60% | Base |
| Emotional | 20% | 60% | 20% | Base |
| Complicated | 40% | 40% | 40% | +50% |

#### Complications
| Complication | Effect | Belly Bonus |
|--------------|--------|-------------|
| Polyhydramnios | Excess fluid | +3-8 |
| Macrosomia | Large baby | +2-5 |
| Gestational Diabetes | Diet restrictions | +0-2 |

#### Complication Chances by Baby Count
| Babies | Chance |
|--------|--------|
| 1 | 15% |
| 2 | 35% |
| 3 | 55% |
| 4 | 75% |

#### Spontaneous Labour Chances
| Week | Chance |
|------|--------|
| 37 | 2% |
| 38 | 4% |
| 39 | 8% |
| 40 | 15% |
| 41 | 25% |
| 42 | 35% |
| 43 | 45% |
| 44 | 60% |
| 45 | 100% |

#### Labour Induction Methods
| Method | Success Rate | Notes |
|--------|--------------|-------|
| Walking | 5% | Available anytime |
| Stairs | 5% | Available anytime |
| Spicy Food | 3% | Requires food |
| Nipple Stimulation | 5% | Private |
| Yoga Ball | 3% | Requires equipment |
| Sex | 8% | Requires partner |
| Doctor Sweep | 15% | Requires appointment |

#### Overdue Restrictions
| Week | Can Run | Can Gym | Can Work | Notes |
|------|---------|---------|----------|-------|
| 41 | No | Yes | Yes | Minor restrictions |
| 43 | No | No | Yes | Mostly housebound |
| 44 | No | No | No | Barely leave flat |
| 45 | No | No | No | Bedridden |

#### Surrogacy Payment Structure
| Babies | Signing | 1st Tri | 2nd Tri | Delivery | Total |
|--------|---------|---------|---------|----------|-------|
| 1 | £200 | £400 | £600 | £800 | £2,000 |
| 2 | £300 | £600 | £900 | £1,200 | £3,000 |
| 3 | £450 | £900 | £1,350 | £1,800 | £4,500 |
| 4 | £600 | £1,200 | £1,800 | £2,400 | £6,000 |

---

### 3.3 Menstrual Cycle System

#### Cycle Phases (28-day cycle)
| Phase | Duration | Fertility | Color | Effects |
|-------|----------|-----------|-------|---------|
| Period | 5 days | 0% | #8b0000 | Cramps, mood swings |
| Follicular | 7 days | 10% | #daa520 | Normal |
| Fertile | 4 days | 40% | #ff69b4 | Increased libido |
| Luteal | 12 days | 10% | #4682b4 | PMS symptoms |

---

### 3.4 Health System

#### Health Stats
| Stat | Range | Effects |
|------|-------|---------|
| Overall Health | 0-100 | Activity capacity |
| Immunity | 0-100 | Illness resistance |
| Stamina | 0-100 | Exercise capacity |
| Recovery | 0-100 | Healing speed |

#### Conditions
| Condition | Cause | Duration | Effects |
|-----------|-------|----------|---------|
| Cold | Low immunity + exposure | 3-5 days | Energy -20, Mood -5 |
| Flu | Low immunity + exposure | 5-7 days | Energy -40, Mood -10 |
| Hangover | Alcohol | 1 day | Energy -30, Mood -10 |
| Fatigue | Overwork | Until rest | Energy cap -30 |
| Back Pain | Pregnancy/Bust | Variable | Mood -5, Activity limits |

---

## 4. World Systems

### 4.1 Locations

#### Home (Flat)
| Room | Activities | Time Cost |
|------|------------|-----------|
| Bedroom | Sleep, Rest, Intimacy | Variable |
| Bathroom | Hygiene, Mirror | 1 slot |
| Kitchen | Cooking, Eating | 1 slot |
| Living Room | Relax, TV, Reading | 1 slot |

#### Work Locations
| Location | Career | Hours | Accessibility |
|----------|--------|-------|---------------|
| Office | Finance | 9-5 | Weekdays |
| Hospital | Nursing | Shifts | All days |
| Nursery | Childcare | 8-4 | Weekdays |

#### Shopping District
| Location | Type | Items | Hours |
|----------|------|-------|-------|
| Supermarket | Groceries | Food, basics | 7am-10pm |
| Pharmacy | Medical | Medicine, tests | 9am-6pm |
| Clothing Store | Apparel | Clothes, maternity | 9am-8pm |
| Adult Store | Private | Toys, lingerie | 10am-10pm |

#### Social Venues
| Location | Type | Hours | Activities |
|----------|------|-------|------------|
| The Crown (Bar) | Pub | 6pm-12am | Drinks, Social, Hookups |
| Food Court | Dining | 11am-9pm | Eating, Social |
| Park | Public | 6am-9pm | Walking, Exercise |
| Gym | Fitness | 6am-10pm | Exercise |

#### Medical
| Location | Type | Hours | Services |
|----------|------|-------|----------|
| GP Surgery | General | 9am-5pm | Check-ups, referrals |
| Hospital | Emergency | 24/7 | Major issues |
| Dr. Ella's Clinic | Research | By appointment | Experiments |

---

### 4.2 Weather System

#### Weather Types
| Weather | Mood Effect | Activity Effects |
|---------|-------------|------------------|
| Sunny | +2 | Outdoor +20% |
| Cloudy | 0 | None |
| Rainy | -1 | Outdoor -10% |
| Stormy | -2 | Outdoor -30% |
| Hot | 0 | Energy drain +10% |
| Cold | -1 | Energy drain +5% |
| Foggy | 0 | Travel time +10% |
| Snowy | +1 | Outdoor -20%, Mood +1 |

#### Seasonal Weather Probabilities
| Weather | Spring | Summer | Autumn | Winter |
|---------|--------|--------|--------|--------|
| Sunny | 25% | 40% | 20% | 15% |
| Cloudy | 30% | 20% | 30% | 25% |
| Rainy | 25% | 15% | 25% | 15% |
| Stormy | 10% | 10% | 15% | 10% |
| Hot | 5% | 15% | 0% | 0% |
| Cold | 5% | 0% | 10% | 20% |
| Foggy | 0% | 0% | 0% | 10% |
| Snowy | 0% | 0% | 0% | 5% |

---

### 4.3 Seasons & Holidays

#### Season Effects
| Season | Day Length | Mood Modifier | Special |
|--------|------------|---------------|---------|
| Spring | Medium | +1 | Allergies possible |
| Summer | Long | +2 | Heat fatigue |
| Autumn | Medium | 0 | Cozy vibes |
| Winter | Short | -1 | SAD risk, holiday mood |

---

### 4.4 Events System

#### Event Categories
| Category | Frequency | Impact |
|----------|-----------|--------|
| Work Events | Daily (50%) | Mood ±5, Money ±50 |
| Home Events | Random | Variable |
| Bar Events | Per visit | Social, Mood |
| Random Events | Weekly | Variable |
| Story Events | Milestone | Major changes |

#### Work Events by Career
See `src/data/text.js` for complete event lists.

#### Random Event Examples
| Event | Probability | Effect |
|-------|-------------|--------|
| Found Money | 5% | +£20-50 |
| Unexpected Bill | 10% | -£40-100 |
| Illness | 5% | 3-day debuff |
| Lucky Day | 3% | Mood +10 |
| Bad Luck | 3% | Mood -10 |

---

## 5. Items & Economy

### 5.1 Consumables

#### Food Items
| Item | Cost | Weight | Mood | Cravings |
|------|------|--------|------|----------|
| Salad Bar | £12 | -1 | +2 | Fruit |
| Juice Bar | £8 | -1 | +1 | Fruit |
| Noodle Bar | £10 | 0 | +3 | Spicy |
| Bakery Cafe | £10 | +1 | +4 | Chocolate |
| Coffee Shop | £6 | +1 | +2 | Chocolate |
| Pizza Place | £12 | +2 | +5 | Pizza |
| Burger Joint | £10 | +2 | +5 | None |
| Ice Cream Stand | £5 | +1 | +4 | Ice Cream |

#### Cravings
Options: Pizza, Ice Cream, Pickles, Chocolate, Spicy Food, Fruit, Cheese, Salty Snacks, Sour Candy

---

### 5.2 Equipment

#### Toys
| Item | Cost | Bonus | Special |
|------|------|-------|---------|
| Basic Vibrator | £25 | 0 | Standard |
| Rabbit Vibrator | £50 | +10 | Dual stimulation |
| Wand Massager | £60 | +15 | Powerful |
| Dildo | £30 | -10 | Manual |
| Horse Dildo | £80 | -20 | High lust req. |
| Remote Vibrator | £70 | +5 | Wearable |
| Luxury Set | £150 | +20 | Complete kit |

#### Lingerie
| Item | Cost | Description |
|------|------|-------------|
| Basic Lingerie | £40 | Simple black lace |
| Quality Lingerie | £80 | French lace |
| Maternity Lingerie | £50 | Supportive, sexy |

---

### 5.3 Special Items

#### Drugs (Bar Only)
**Lust Modifiers**
| Drug | Effect | Value |
|------|--------|-------|
| Aphrodite's Kiss | Lust +2 levels | Immediate |
| Slow Burn | Lust +1/day | 24 hours |
| Cold Shower | Lust -5 levels | Immediate |
| Equilibrium | Lust → 2 | Reset |

**Bust Modifiers** (Permanent)
| Drug | Effect | Value |
|------|--------|-------|
| Bust Boost | +1 size | Permanent |
| Mega Growth | +2 sizes | Permanent |
| Reduction Elixir | -1 size | Permanent |

**Weight Modifiers**
| Drug | Effect | Value |
|------|--------|-------|
| Metabolism Shot | -15 points | Immediate |
| Appetite Max | +15 points | Immediate |
| Flash Slim | -30 points | Immediate |
| Instant Bulk | +30 points | Immediate |

**Pregnancy Modifiers**
| Drug | Effect | Requirement |
|------|--------|-------------|
| Fertility Surge | Max fertility | Not pregnant |
| Multiples Boost | Twin+ chance up | Not pregnant |
| Growth Accelerant | Skip 2 weeks | Pregnant |
| Belly Expander | +4 belly size | Pregnant |
| Lactation Start | Begin lactation | Pregnant |
| Labour Inducer | Trigger labour | 37+ weeks |
| Baby Adder | +1 baby (max 4) | Pregnant |
| Egg Implant | Start egg pregnancy | Not pregnant |

---

## 6. NPCs & Social

### Key NPCs

#### Dr. Ella Morrison
- **Role**: Research Scientist
- **Location**: Private Clinic
- **Interactions**: Experimental pregnancies, special drugs
- **Personality**: Professional, curious, ethically grey

#### Bar Regulars
- Dynamic NPCs that appear at the bar
- Can develop relationships
- Potential hookup partners

#### Work Colleagues
- Career-specific NPCs
- Influence work events
- Potential friends

---

## 7. Narrative Systems

### Dream System
- Dreams vary based on:
  - Pregnancy status and trimester
  - Lust levels
  - Mood
  - Recent events

### Mirror Descriptions
- Dynamic descriptions based on:
  - Weight
  - Bust size
  - Pregnancy stage
  - Mood

### Event Narratives
- Context-aware text
- Career-specific events
- Pregnancy-specific variations

---

## 8. Technical Specifications

### State Management
- **Library**: Zustand with persistence
- **Storage**: LocalStorage
- **Properties**: 97 state properties

### Technology Stack
- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.18
- **State**: Zustand 5.0.9

### Save System
- Automatic save on state change
- LocalStorage persistence
- Manual save/load options

---

## Appendix: Future Considerations

### Planned Features
- [ ] Extended NPC relationships
- [ ] Property ownership
- [ ] Pet system
- [ ] Achievement system
- [ ] Multiple save slots
- [ ] Difficulty modes
- [ ] Extended career paths
- [ ] Education system
- [ ] Travel/vacation system
- [ ] Expanded social activities

---

*This document is maintained as the authoritative source for all game mechanics and systems.*
