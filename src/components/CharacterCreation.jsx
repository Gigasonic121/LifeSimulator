import { useGameStore } from '../store/gameStore';
import { HEIGHTS, SKIN_TONES, EYE_COLORS, NATURAL_HAIR_COLORS, HAIR_LENGTHS, HAIR_STYLES, WEIGHT_TIERS, BUST_SIZES, CAREERS } from '../data/constants';

export default function CharacterCreation() {
  const {
    name, path, career, height, skinTone, eyeColor, hairColor, hairLength, hairStyle,
    weightPoints, bustIndex,
    setCharacterField, finalizeCharacter
  } = useGameStore();
  
  const handleCreate = () => {
    if (!name.trim()) {
      alert('Please enter a name.');
      return;
    }
    finalizeCharacter();
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-purple-950 to-slate-950 p-6 overflow-auto">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-serif text-rose-200 mb-2 text-center" style={{ fontFamily: 'Palatino, Georgia, serif' }}>
          Create Your Character
        </h2>
        <p className="text-rose-300/50 text-center mb-8">An 18-year-old woman starting her adult life</p>
        
        <div className="space-y-6 bg-slate-900/60 p-8 rounded-lg border border-rose-500/20 backdrop-blur">
          {/* Name */}
          <div>
            <label className="block text-rose-300 mb-2 text-sm uppercase tracking-wider">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setCharacterField('name', e.target.value)}
              className="w-full bg-slate-800/80 border border-rose-500/30 rounded px-4 py-3 text-rose-100 focus:outline-none focus:border-rose-400 placeholder-slate-500"
              placeholder="Enter your name..."
            />
          </div>
          
          {/* Path & Career */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-rose-300 mb-2 text-sm uppercase tracking-wider">Starting Path</label>
              <div className="space-y-2">
                {[
                  { id: 'fullTime', name: 'Full-Time Work', desc: '£100/day, 5-day week' },
                  { id: 'university', name: 'University', desc: '£100/day grant + part-time options' },
                ].map(p => (
                  <button
                    key={p.id}
                    onClick={() => setCharacterField('path', p.id)}
                    className={`w-full p-3 rounded border text-left transition-all ${
                      path === p.id 
                        ? 'border-rose-400 bg-rose-900/30' 
                        : 'border-slate-600/50 bg-slate-800/50 hover:border-slate-500'
                    }`}
                  >
                    <div className="text-rose-200 font-medium">{p.name}</div>
                    <div className="text-rose-300/50 text-sm">{p.desc}</div>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-rose-300 mb-2 text-sm uppercase tracking-wider">Career Field</label>
              <div className="space-y-2">
                {CAREERS.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setCharacterField('career', c.id)}
                    className={`w-full p-3 rounded border text-left transition-all ${
                      career === c.id 
                        ? 'border-rose-400 bg-rose-900/30' 
                        : 'border-slate-600/50 bg-slate-800/50 hover:border-slate-500'
                    }`}
                  >
                    <div className="text-rose-200">{c.name}</div>
                    <div className="text-rose-300/50 text-xs">{c.job}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Physical Attributes */}
          <div className="grid grid-cols-3 gap-4">
            <SelectField 
              label="Height" 
              value={height} 
              onChange={(v) => setCharacterField('height', v)}
              options={HEIGHTS.map(h => ({ value: h.name, label: `${h.name} (${h.range})` }))}
            />
            <SelectField 
              label="Skin Tone" 
              value={skinTone} 
              onChange={(v) => setCharacterField('skinTone', v)}
              options={SKIN_TONES.map(s => ({ value: s, label: s }))}
            />
            <SelectField 
              label="Eye Color" 
              value={eyeColor} 
              onChange={(v) => setCharacterField('eyeColor', v)}
              options={EYE_COLORS.map(e => ({ value: e, label: e }))}
            />
            <SelectField 
              label="Hair Color" 
              value={hairColor} 
              onChange={(v) => setCharacterField('hairColor', v)}
              options={NATURAL_HAIR_COLORS.map(h => ({ value: h, label: h }))}
            />
            <SelectField 
              label="Hair Length" 
              value={hairLength} 
              onChange={(v) => setCharacterField('hairLength', v)}
              options={HAIR_LENGTHS.map(h => ({ value: h, label: h }))}
            />
            <SelectField 
              label="Hair Style" 
              value={hairStyle} 
              onChange={(v) => setCharacterField('hairStyle', v)}
              options={HAIR_STYLES.map(h => ({ value: h, label: h }))}
            />
          </div>
          
          {/* Body */}
          <div className="grid grid-cols-2 gap-4">
            <SelectField 
              label="Starting Weight" 
              value={weightPoints.toString()} 
              onChange={(v) => setCharacterField('weightPoints', parseInt(v))}
              options={WEIGHT_TIERS.map(w => ({ 
                value: (w.range[0] + Math.floor((w.range[1] - w.range[0]) / 2)).toString(), 
                label: w.name 
              }))}
            />
            <SelectField 
              label="Starting Bust Size" 
              value={bustIndex.toString()} 
              onChange={(v) => setCharacterField('bustIndex', parseInt(v))}
              options={BUST_SIZES.map((s, i) => ({ value: i.toString(), label: `${s} Cup` }))}
            />
          </div>
          
          <button
            onClick={handleCreate}
            className="w-full py-4 bg-gradient-to-r from-rose-700/50 to-purple-700/50 hover:from-rose-600/60 hover:to-purple-600/60 text-rose-100 rounded transition-all border border-rose-500/30 hover:border-rose-400/50 text-lg tracking-wider uppercase mt-4"
          >
            Start Your Life
          </button>
        </div>
      </div>
    </div>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block text-rose-300 mb-2 text-sm uppercase tracking-wider">{label}</label>
      <select 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        className="w-full bg-slate-800/80 border border-rose-500/30 rounded px-3 py-2 text-rose-100 text-sm focus:outline-none focus:border-rose-400"
      >
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}
