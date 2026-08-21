import React from 'react';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#03060c] border-t border-purple-900/30 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 w-full mt-16 font-mono">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-black" />
            </div>
            <span className="font-bold text-white text-base">SOL'S RNG WIKI</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed max-w-md">
            The premier community database and interactive calculator tool suite for Roblox Sol's RNG. Simulate rolling 1/750M Sovereign & Impeached auras with Heavenly Potions, calculate crafting recipes, and view biome spawn multipliers.
          </p>
          <div className="inline-flex items-center space-x-2 text-[11px] text-gray-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Verified Active Codes & Heavenly Potion II Recipes</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">Interactive Tools</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/aura-simulator" className="hover:text-white transition-colors">Aura Roll Luck Simulator</Link></li>
            <li><Link href="/crafting-calculator" className="hover:text-white transition-colors">Crafting & Material Calculator</Link></li>
            <li><Link href="/tier-list" className="hover:text-white transition-colors">2026 Meta Aura Tier List</Link></li>
            <li><Link href="/codes" className="hover:text-white transition-colors">Active Redeem Codes</Link></li>
          </ul>
        </div>

        {/* Strategy Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">Biomes & Equipment</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/biomes" className="hover:text-white transition-colors">Starfall & Hell Biome Multipliers</Link></li>
            <li><Link href="/equipment" className="hover:text-white transition-colors">Galactic Gauntlet Crafting Guide</Link></li>
            <li><Link href="/biomes" className="hover:text-white transition-colors">Glitch Biome Spawn Tracker</Link></li>
            <li><Link href="/equipment" className="hover:text-white transition-colors">Gravitational Device Stats</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Sol's RNG Wiki. Community database for Roblox Aura collectors.</p>
        <p className="mt-2 sm:mt-0 flex items-center gap-1">
          <span>Crafted with</span> <Heart className="w-3 h-3 text-amber-500 fill-amber-500" /> <span>for RNG Gamers</span>
        </p>
      </div>
    </footer>
  );
}
