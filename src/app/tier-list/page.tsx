'use client';

import React from 'react';
import { Trophy, Sparkles, Flame, Shield } from 'lucide-react';
import { AURAS } from '@/data/wikiData';

export default function TierListPage() {
  const tiers: ('S+' | 'S' | 'A' | 'B')[] = ['S+', 'S', 'A', 'B'];

  const tierColors = {
    'S+': 'from-amber-400 via-purple-500 to-cyan-400 border-amber-500 text-amber-400',
    'S': 'from-purple-500 to-indigo-600 border-purple-500 text-purple-400',
    'A': 'from-blue-500 to-cyan-600 border-blue-500 text-cyan-400',
    'B': 'from-slate-600 to-gray-700 border-gray-600 text-gray-400'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 font-mono">
      {/* Header */}
      <div className="border-b border-purple-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/50 text-amber-300 text-xs font-bold mb-3">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>2026 OFFICIAL SOL'S RNG AURA RANKINGS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Sol's RNG Aura Tier List
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Evaluated based on base drop fraction, Biome exclusive multipliers, visual particle complexity, and craft material utility.
        </p>
      </div>

      {/* Tier List Stack */}
      <div className="space-y-8">
        {tiers.map((tier) => {
          const itemsInTier = AURAS.filter((a) => a.tier === tier);
          if (itemsInTier.length === 0) return null;

          return (
            <div key={tier} className="p-6 rounded-3xl bg-[#080d19] border border-purple-950 space-y-4">
              {/* Tier Header Badge */}
              <div className="flex items-center space-x-3">
                <div className={`w-14 h-12 rounded-2xl bg-gradient-to-r ${tierColors[tier]} p-0.5 shadow-lg`}>
                  <div className="w-full h-full bg-[#080d19] rounded-[14px] flex items-center justify-center font-black text-xl text-white">
                    {tier}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-white">
                    {tier === 'S+' ? '1 in 100,000,000+ Mythic Cosmic Auras' : tier === 'S' ? '1 in 10,000,000+ Rare Biome Auras' : tier === 'A' ? 'Mid-Game Auras' : 'Essential Crafting Auras'}
                  </h2>
                  <span className="text-xs text-gray-400">{itemsInTier.length} Auras in this Tier</span>
                </div>
              </div>

              {/* Aura Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {itemsInTier.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-extrabold text-white text-base">{item.name}</span>
                      <span className="text-[10px] px-2 py-0.5 bg-amber-950 text-amber-300 rounded border border-amber-800">
                        {item.rarityFraction}
                      </span>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed">{item.description}</p>

                    <div className="pt-2 border-t border-slate-800 text-[10px] text-amber-400 font-bold">
                      ✨ {item.visualEffect}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
