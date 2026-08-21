'use client';

import React from 'react';
import { CloudSun, Sparkles, Zap, ShieldCheck, Flame, Compass } from 'lucide-react';
import { BIOMES } from '@/data/wikiData';

export default function BiomesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 font-mono">
      {/* Header */}
      <div className="border-b border-purple-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-emerald-300 text-xs font-bold mb-3">
          <CloudSun className="w-3.5 h-3.5 text-emerald-400" />
          <span>BIOME WEATHER & LUCK MULTIPLIERS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Sol's RNG Biome & Weather Guide
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Complete guide to Starfall, Hell, Rain, and Glitch biome spawn chances, duration timers, and exclusive aura luck multipliers.
        </p>
      </div>

      {/* Biomes List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BIOMES.map((b, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-[#080d19] border border-purple-900/40 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-2xl">{b.icon}</span>
                <span className="px-3 py-1 rounded-full bg-purple-950 text-purple-300 border border-purple-800 font-bold">
                  Duration: {b.durationSec}s
                </span>
              </div>

              <h2 className="text-2xl font-black text-white">{b.name}</h2>
              <p className="text-xs text-amber-400 font-bold">Spawn Rate: {b.spawnChance}</p>

              <div className="space-y-2 pt-3 border-t border-slate-800 text-xs">
                <span className="text-[10px] text-gray-500 uppercase font-bold block">Exclusive Aura Boosts:</span>
                {b.exclusiveAuras.map((aura, aIdx) => (
                  <div key={aIdx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-gray-200 font-bold">
                    ✨ {aura}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-gray-400 leading-relaxed">
              💡 <strong>Multiplier Note:</strong> {b.luckMultiplierNote}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
