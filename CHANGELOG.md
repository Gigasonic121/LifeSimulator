# Changelog

All notable changes to Life Simulator will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- Nothing yet

### Changed
- Nothing yet

### Fixed
- Nothing yet

---

## [1.1.0] - 2026-01-08

### Added

#### Documentation
- **GDD.md** - Comprehensive Game Design Document covering all systems
  - Complete game overview and core loop documentation
  - Detailed core systems specifications
  - Gameplay mechanics documentation
  - World systems reference
  - Technical specifications

#### Time & Calendar System
- **Seasons System** - Four seasons (Spring, Summer, Autumn, Winter) with:
  - Unique weather weight distributions
  - Mood modifiers per season
  - Duration tracking (90-92 days)
  - Month assignments

- **Holidays System** - 11 holidays including:
  - New Year's Day, Valentine's Day, Easter, May Day
  - Summer Solstice, Halloween, Bonfire Night
  - Christmas Eve, Christmas Day, Boxing Day, New Year's Eve
  - Each with mood bonuses and work day modifications
  - Special bar events on select holidays

#### Enhanced Weather System
- Added `outdoorBonus` modifier to weather types
- Added `energyDrain` for hot/cold weather
- Added `travelPenalty` for foggy conditions

#### Mental Health & Wellness
- **Stress System** - 5 stress levels:
  - Relaxed, Calm, Normal, Stressed, Overwhelmed
  - Mood and sleep quality modifiers
  - Health risk at extreme levels

- **Energy System** - 5 energy levels:
  - Exhausted, Tired, Normal, Rested, Energized
  - Productivity modifiers (-50% to +20%)
  - Work availability restrictions

#### Economy Expansion
- **Financial States System** - 6 financial states:
  - Wealthy, Comfortable, Tight, Struggling, Broke, In Debt
  - Mood modifiers based on financial health
  - Activity restrictions when broke/in debt

#### Locations System
- Comprehensive location definitions including:
  - Home (Bedroom, Bathroom, Kitchen, Living Room)
  - Workplace with career-specific settings
  - The Crown (Bar) with operating hours
  - Shopping Centre with multiple shops
  - Food Court, Gym, Park
  - Medical facilities (GP Surgery, Dr. Ella's Clinic)
- Operating hours for each location
- Activity lists per location

#### Health System
- **Health Conditions** - 6 condition types:
  - Cold, Flu, Hangover, Fatigue, Back Pain, Cramps
  - Duration ranges
  - Energy and mood penalties
  - Cause categorization

#### Random Events System
- **Positive Events** (6 types):
  - Found money, tax refund, compliments
  - Lucky days, free food, good news

- **Negative Events** (6 types):
  - Unexpected bills, lost money, bad news
  - Ruined clothes, stubbed toe, bad sleep

- **Neutral Events** (4 types):
  - Running into old friends, weather changes
  - Déjà vu, family phone calls

#### Skills & Progression System (`src/data/skills.js`)
- **Professional Skills** (5 skills):
  - Finance, Healthcare, Childcare, Communication, Organization
  - Career-specific XP gains
  - Level-based benefits unlocks

- **Life Skills** (5 skills):
  - Cooking, Fitness, Charm, Negotiation, Self-Care
  - Activity-based XP sources
  - Progressive benefit unlocks

- **Skill XP Requirements**:
  - 10-level progression system
  - Exponential XP curve (0 to 16,000 XP)
  - Bonus percentages per level (5% to 50%)

- **Career Progression**:
  - 5 career levels (Junior to Manager)
  - Pay modifiers (1.0x to 2.0x)
  - Day and skill requirements for advancement

#### Relationships & NPC System (`src/data/relationships.js`)
- **Relationship Types** (8 types):
  - Acquaintance, Friend, Close Friend, Best Friend
  - Romantic Interest, Partner, Colleague, Fling
  - Max affection caps per type

- **Affection Mechanics**:
  - 11 affection-modifying actions
  - Relationship upgrade thresholds
  - Weekly neglect penalties

- **Named NPCs** (4 characters):
  - Dr. Ella Morrison (Research Scientist)
  - Mike (Bartender at The Crown)
  - Sarah Chen (Fitness Instructor)
  - Dr. James Wright (General Practitioner)
  - Full dialogue trees
  - Personality traits
  - Romance availability

- **NPC Generation**:
  - 4 NPC templates (Bar Patron, Colleague, Gym Goer, Stranger)
  - 30+ female names, 30+ male names, 30+ surnames
  - Hookup descriptors (appearance, build, features)

- **Social Activities** (7 activities):
  - Drink, Chat, Work out, Lunch, Walk, Movie, Deep talk
  - Location requirements
  - Affection and mood gains

- **Relationship Events**:
  - Positive and negative random events
  - Dynamic text with NPC name insertion

### Changed
- Enhanced `WEATHER_TYPES` with gameplay modifiers
- Restructured constants.js for better organization

### Fixed
- Nothing in this release

---

## [1.0.0] - 2026-01-08

### Added
- Initial game implementation
- Core time and calendar system (9 time slots, 7-day week)
- Economy system (rent, work pay, expenses)
- Character creation system
  - Height, skin tone, eye color options
  - Hair color, length, and style options
- Weight system (7 tiers from Very Thin to Obese)
- Bust system (10 sizes from AA to H)
- Mood system (5 levels from Miserable to Great)
- Lust system (5 levels with focus penalties)
- Menstrual cycle system (4 phases, 28-day cycle)
- Pregnancy system
  - 5 pregnancy types (Normal, Egg, Rapid, Year-Long, Horse)
  - Surrogacy mechanics
  - Dr. Ella experiments
  - Complications system
  - Labour mechanics
- Career system (Finance, Nursing, Childcare)
- Weather system (8 weather types)
- Items system
  - Food items with weight/mood effects
  - Toys with various bonuses
  - Lingerie options
  - Drugs (lust, bust, weight, hair, pregnancy modifiers)
- Dream system (pregnancy-specific and general dreams)
- Work events per career
- Bar events and hookup mechanics
- Mirror description system

---

## Version History Summary

| Version | Date | Summary |
|---------|------|---------|
| 1.1.0 | 2026-01-08 | Systems expansion: Seasons, holidays, skills, relationships, NPCs |
| 1.0.0 | 2026-01-08 | Initial release with core gameplay systems |

---

## Legend

- **Added**: New features
- **Changed**: Changes to existing functionality
- **Deprecated**: Features to be removed in future releases
- **Removed**: Removed features
- **Fixed**: Bug fixes
- **Security**: Security-related changes
