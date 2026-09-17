'use client';

import React from 'react';
import { Shield, Sparkles, Zap, ArrowRight, Check } from 'lucide-react';
import { EQUIPMENT } from '@/data/wikiData';

export default function EquipmentClient() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 font-mono">
      {/* Header */}
      <div className="border-b border-purple-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/50 text-indigo-300 text-xs font-bold mb-3">
          <Shield className="w-3.5 h-3.5 text-indigo-400" />
          <span>GAUNTLET & EQUIPMENT ROADMAP</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Gauntlet & Device Equipment Guide
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Compare Left/Right Hand Gauntlet stats, luck boost percentages, roll cooldown speed cuts, and crafting priority roadmaps.
        </p>
      </div>

      {/* Equipment Cards Stack */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {EQUIPMENT.map((eq, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-[#080d19] border border-purple-900/40 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="px-3 py-1 rounded-full bg-purple-950 text-purple-300 border border-purple-800 font-bold">
                  {eq.slot}
                </span>
                <span className="text-amber-400 font-bold">{eq.craftingDifficulty}</span>
              </div>

              <div>
                <h2 className="text-xl font-black text-white">{eq.name}</h2>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">{eq.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-gray-500 block text-[10px]">Luck Boost</span>
                  <span className="font-extrabold text-amber-400 text-sm">+{eq.luckBoostPercent}%</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-gray-500 block text-[10px]">Roll Speed Cut</span>
                  <span className="font-extrabold text-cyan-400 text-sm">-{eq.rollSpeedCutPercent}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
