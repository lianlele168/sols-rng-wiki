'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Key, Copy, Check, ShieldCheck, Zap, HelpCircle } from 'lucide-react';
import { ACTIVE_CODES, EXPIRED_CODES } from '@/data/wikiData';

type Faq = { q: string; a: string };

export default function CodesClient({ faqs }: { faqs: Faq[] }) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 font-mono">
      {/* Header */}
      <div className="border-b border-purple-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-emerald-300 text-xs font-bold mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>{ACTIVE_CODES.length} ACTIVE CODES — CHECKED AGAINST MULTIPLE TRACKERS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Roblox Sol's RNG Codes
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Active codes pay out in Potion Chests and Rare Potion Chests. Redeem them fast — most
          Sol's RNG codes only survive a day or two.
        </p>
      </div>

      {/* Active Codes Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Zap className="w-5 h-5 text-emerald-400" />
          <span>Active Working Codes ({ACTIVE_CODES.length})</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACTIVE_CODES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#080d19] border border-emerald-900/40 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-xl font-black text-amber-400 block">{item.code}</span>
                <p className="text-sm font-semibold text-gray-200">{item.rewards}</p>
                {item.note && (
                  <p className="text-[11px] text-amber-300/80 leading-relaxed">{item.note}</p>
                )}
              </div>

              <button
                onClick={() => handleCopy(item.code)}
                className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-amber-950/50"
              >
                {copiedCode === item.code ? (
                  <>
                    <Check className="w-4 h-4 text-black" />
                    <span>Code Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Code ({item.code})</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* How to Redeem Guide */}
      <div className="p-8 rounded-3xl bg-[#080d19] border border-purple-900/30 space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Key className="w-5 h-5 text-amber-400" />
          <span>How to Redeem Codes in Roblox Sol's RNG</span>
        </h3>
        <ol className="space-y-3 text-xs text-gray-300 list-decimal list-inside leading-relaxed">
          <li>Launch <strong>Sol's RNG</strong> from your Roblox application and skip the tutorial if it appears.</li>
          <li>Click the <strong>three-line Menu button</strong> on the left side of the screen.</li>
          <li>Go to <strong>Settings</strong>, then open the <strong>Miscellaneous</strong> tab.</li>
          <li>Click <strong>Open</strong> next to <strong>Redeem Code</strong>.</li>
          <li>Paste an active code into the box — codes are case sensitive — and press <strong>Redeem</strong>.</li>
        </ol>
        <p className="text-xs text-gray-400 leading-relaxed">
          A Lucky Potion grants +100% Luck for 60 seconds, so spend your chests right before a long
          rolling session rather than piecemeal.
        </p>
      </div>

      {/* FAQ */}
      <div className="p-8 rounded-3xl bg-[#080d19] border border-purple-900/30 space-y-5">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-400" />
          <span>Sol's RNG Codes FAQ</span>
        </h3>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q}>
              <h4 className="text-sm font-bold text-amber-300">{f.q}</h4>
              <p className="text-xs text-gray-300 leading-relaxed mt-1">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Internal links */}
      <div className="p-8 rounded-3xl bg-[#080d19] border border-purple-900/30 space-y-3">
        <h3 className="text-lg font-bold text-white">Codes Are Only Part of the Grind</h3>
        <p className="text-xs text-gray-400 leading-relaxed">
          Chests help, but your aura odds depend on where you roll and what you craft.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <Link href="/tier-list" className="text-amber-300 hover:text-amber-200 font-semibold">
            Aura Tier List — what is actually rare
          </Link>
          <Link href="/biomes" className="text-amber-300 hover:text-amber-200 font-semibold">
            Biomes — where each aura can drop
          </Link>
          <Link href="/equipment" className="text-amber-300 hover:text-amber-200 font-semibold">
            Equipment — luck boosts that stack
          </Link>
          <Link href="/crafting-calculator" className="text-amber-300 hover:text-amber-200 font-semibold">
            Crafting Calculator — plan your gauntlet
          </Link>
        </div>
      </div>

      {/* Expired Codes Section */}
      <div className="space-y-4 pt-6 border-t border-slate-900">
        <h3 className="text-sm font-bold text-gray-500">
          Expired Codes ({EXPIRED_CODES.length}) — kept for reference
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 opacity-60">
          {EXPIRED_CODES.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 flex justify-between text-xs gap-3">
              <span className="line-through text-gray-400 shrink-0">{item.code}</span>
              <span className="text-gray-500 text-right">{item.rewards}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
