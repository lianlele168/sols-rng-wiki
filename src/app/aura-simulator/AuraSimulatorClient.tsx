'use client';

import React, { useState } from 'react';
import { Sparkles, Dices, Zap, RefreshCw, Trophy, ShieldCheck, Flame, Play } from 'lucide-react';
import { AURAS, AuraData } from '@/data/wikiData';

export default function AuraSimulatorClient() {
  const [useHeavenlyPotion, setUseHeavenlyPotion] = useState<boolean>(true);
  const [useFortunaPotion, setUseFortunaPotion] = useState<boolean>(true);
  const [useGalacticGauntlet, setUseGalacticGauntlet] = useState<boolean>(true);

  const [rolledAura, setRolledAura] = useState<AuraData | null>(null);
  const [totalRolls, setTotalRolls] = useState<number>(0);
  const [isRolling, setIsRolling] = useState<boolean>(false);

  // Aura count inventory
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    sovereign: 0,
    'abyssal-hunter': 0,
    archangel: 0,
    impeached: 0,
    genesis: 0,
    gargantua: 0,
    matrix: 0,
    celestial: 0,
    gilded: 0
  });

  const performRoll = (): AuraData => {
    // Multipliers:
    // Heavenly Potion II: 2,000x
    // Fortuna Potion: 6x
    // Galactic Gauntlet: 3.5x
    let totalMult = 1.0;
    if (useHeavenlyPotion) totalMult *= 2000;
    if (useFortunaPotion) totalMult *= 6;
    if (useGalacticGauntlet) totalMult *= 3.5;

    // Generate random roll
    // Convert base denominator into effective denominator with multiplier
    const rand = Math.random();

    // Check from rarest to common
    for (const aura of AURAS) {
      const effectiveChance = (1 / aura.rarityDenominator) * totalMult;
      if (rand < effectiveChance) {
        return aura;
      }
    }

    // Default common fallback
    return AURAS.find((a) => a.id === 'gilded')!;
  };

  const handleRollOnce = () => {
    if (isRolling) return;
    setIsRolling(true);

    setTimeout(() => {
      const aura = performRoll();
      setRolledAura(aura);
      setTotalRolls((prev) => prev + 1);
      setCounts((prev) => ({
        ...prev,
        [aura.id]: (prev[aura.id] || 0) + 1
      }));
      setIsRolling(false);
    }, 250);
  };

  const handleRoll10x = () => {
    if (isRolling) return;
    setIsRolling(true);

    setTimeout(() => {
      let lastAura = rolledAura;
      const newCounts = { ...counts };

      for (let i = 0; i < 10; i++) {
        const a = performRoll();
        lastAura = a;
        newCounts[a.id] = (newCounts[a.id] || 0) + 1;
      }

      setRolledAura(lastAura);
      setTotalRolls((prev) => prev + 10);
      setCounts(newCounts);
      setIsRolling(false);
    }, 400);
  };

  const handleReset = () => {
    setRolledAura(null);
    setTotalRolls(0);
    setCounts({
      sovereign: 0,
      'abyssal-hunter': 0,
      archangel: 0,
      impeached: 0,
      genesis: 0,
      gargantua: 0,
      matrix: 0,
      celestial: 0,
      gilded: 0
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 font-mono">
      {/* Header */}
      <div className="border-b border-purple-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/50 text-amber-300 text-xs font-bold mb-3">
          <Dices className="w-3.5 h-3.5 text-amber-400" />
          <span>ROBLOX SOL'S RNG AURA LUCK SIMULATOR</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Aura Roll & Luck Multiplier Simulator
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Test your luck rolling 1 in 750M Sovereign & Impeached auras with Heavenly Potion II (+200,000% Luck) and Fortuna Potions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 7 Cols: Stage & Roll Box */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#090e1c] to-[#040710] border border-purple-900/40 space-y-6 text-center">
            {/* Luck Toggles Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <button
                onClick={() => setUseHeavenlyPotion(!useHeavenlyPotion)}
                className={`p-3 rounded-2xl border font-bold transition-all ${
                  useHeavenlyPotion ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-slate-900 border-slate-800 text-gray-500'
                }`}
              >
                Heavenly II (+200k%)
              </button>
              <button
                onClick={() => setUseFortunaPotion(!useFortunaPotion)}
                className={`p-3 rounded-2xl border font-bold transition-all ${
                  useFortunaPotion ? 'bg-purple-500/20 border-purple-500 text-purple-300' : 'bg-slate-900 border-slate-800 text-gray-500'
                }`}
              >
                Fortuna (+500%)
              </button>
              <button
                onClick={() => setUseGalacticGauntlet(!useGalacticGauntlet)}
                className={`p-3 rounded-2xl border font-bold transition-all ${
                  useGalacticGauntlet ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300' : 'bg-slate-900 border-slate-800 text-gray-500'
                }`}
              >
                Galactic Gauntlet (+250%)
              </button>
            </div>

            {/* Display Stage Box */}
            <div className="w-full h-64 rounded-3xl bg-slate-950 border border-purple-900/50 flex flex-col items-center justify-center p-6 relative overflow-hidden shadow-2xl">
              {isRolling ? (
                <div className="space-y-3 animate-pulse">
                  <Sparkles className="w-12 h-12 text-amber-400 animate-spin mx-auto" />
                  <span className="text-sm font-bold text-amber-300 block">Summoning Celestial Aura...</span>
                </div>
              ) : rolledAura ? (
                <div className="space-y-3 animate-fadeIn">
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-800">
                    Base Rarity: {rolledAura.rarityFraction}
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-300">
                    {rolledAura.name}
                  </h2>
                  <p className="text-xs text-gray-300 max-w-md">{rolledAura.description}</p>
                  <div className="text-xs text-amber-400 font-bold pt-2">
                    ✨ {rolledAura.visualEffect}
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-gray-500">
                  <Dices className="w-10 h-10 mx-auto text-amber-500/40" />
                  <p className="text-xs">Click 'Roll 1x' or 'Roll 10x Fast' to trigger celestial aura RNG!</p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={handleRollOnce}
                disabled={isRolling}
                className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black text-sm shadow-xl shadow-amber-900/40 flex items-center space-x-2 transition-all hover:scale-105"
              >
                <Dices className="w-4 h-4" />
                <span>Roll Aura 1x</span>
              </button>
              <button
                onClick={handleRoll10x}
                disabled={isRolling}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black text-sm shadow-xl shadow-purple-900/40 flex items-center space-x-2 transition-all hover:scale-105"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Roll 10x Fast</span>
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-gray-400 text-xs font-bold"
              >
                Reset Stats
              </button>
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Roll Inventory Counter */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-[#080d19] border border-purple-900/30 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">Aura Inventory</h3>
              <span className="text-xs text-amber-400 font-bold">Total Rolls: {totalRolls}</span>
            </div>

            <div className="space-y-2 text-xs">
              {AURAS.map((a) => (
                <div key={a.id} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${a.tier === 'S+' ? 'bg-amber-400' : 'bg-purple-400'}`} />
                    <span className="text-white font-bold">{a.name}</span>
                  </div>
                  <span className="font-extrabold text-amber-300 text-sm">
                    {counts[a.id] || 0} <span className="text-[10px] text-gray-500 font-normal">obtained</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
