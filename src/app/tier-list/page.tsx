'use client';

import React from 'react';
import Image from 'next/image';
import { Trophy, Sparkles, Flame, Shield, Dices, Info, HelpCircle } from 'lucide-react';
import { AURAS } from '@/data/wikiData';
import AuthorCard from '@/components/AuthorCard';

const TIER_LIST_FAQS = [
  {
    question: 'What is the absolute rarest aura in Sol\'s RNG Era 8.5?',
    answer: 'Sovereign and Archangel stand at the peak of S+ tier with base drop rates exceeding 1 in 750,000,000 without luck multipliers. When rolling inside Starfall or Glitched biomes with Heavenly Potion II, effective odds drop into rolling territory.',
  },
  {
    question: 'How does Heavenly Potion II alter the Aura Tier rankings?',
    answer: 'Heavenly Potion II injects +200,000% luck for exactly one single roll. It transforms sub-1M auras into guaranteed common fodder, pushing player odds directly into 1 in 10,000,000+ S and S+ cosmic brackets.',
  },
  {
    question: 'Are biome-exclusive auras better than standard mythics?',
    answer: 'Yes. Auras like Glitch (1 in 12,210,110 in Glitched biome) and Hades (1 in 6,666,666 in Hell biome) possess exclusive cutscene animations, custom sound design, and special idle animation rigs unavailable from regular rolls.',
  },
  {
    question: 'What gauntlet equipment best boosts aura roll chances?',
    answer: 'The Galactic Gauntlet combined with the Gravitational Device provides the highest sustained baseline luck (+250%) and 6x bonus rolls every 10th activation.',
  },
];

export default function TierListPage() {
  const tiers: ('S+' | 'S' | 'A' | 'B')[] = ['S+', 'S', 'A', 'B'];

  const tierColors = {
    'S+': 'from-amber-400 via-purple-500 to-cyan-400 border-amber-500 text-amber-400',
    'S': 'from-purple-500 to-indigo-600 border-purple-500 text-purple-400',
    'A': 'from-blue-500 to-cyan-600 border-blue-500 text-cyan-400',
    'B': 'from-slate-600 to-gray-700 border-gray-600 text-gray-400'
  };

  const tierDescriptions = {
    'S+': 'The pinnacle of Sol\'s RNG mathematics. Auras in this bracket possess drop fractions between 1 in 100,000,000 and 1 in 1,000,000,000. Equipping these displays monumental server-wide chat broadcasts, multi-screen celestial shaders, and custom domain expansion auras.',
    'S': 'Endgame cosmetic mastery with odds from 1 in 5,000,000 to 1 in 99,000,000. These auras frequently require specific biome weather events (such as Starfall, Hell, or Corruption) combined with fortune rune stacking to acquire.',
    'A': 'Mid-to-late game powerhouses ranging between 1 in 100,000 and 1 in 4,999,999. Essential for intermediate player loadouts and critical as catalyst sacrifices when crafting high-tier gear at Stella\'s Cauldron.',
    'B': 'Core utility and early progression auras ranging from 1 in 1,000 to 1 in 99,999. While common for veteran rollers, keeping multiple copies in inventory is mandatory for glove blueprint recipes.'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 font-mono">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            dateModified: '2026-09-15',
            author: {
              '@type': 'Person',
              name: 'Kaelen "Chrono" Void',
              jobTitle: 'Lead RNG Statistician & Heavenly Potion Analyst',
            },
            mainEntity: TIER_LIST_FAQS.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Header */}
      <div className="border-b border-purple-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/50 text-amber-300 text-xs font-bold mb-3">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>2026 OFFICIAL SOL'S RNG AURA RANKINGS • ERA 8.5 VERIFIED</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Sol's RNG Aura Tier List & Rarity Matrix
        </h1>
        <p className="text-gray-400 text-sm mt-2 max-w-3xl leading-relaxed">
          Comprehensive competitive tier rankings evaluated across four scientific dimensions: base fractional probability, Biome weather synergy, particle shader complexity, and crafting catalyst value at Stella's Cauldron.
        </p>
      </div>

      <AuthorCard />

      {/* Gameplay Screenshots Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 font-sans">
        <div className="rounded-2xl overflow-hidden border border-purple-900/50 bg-[#080d19] p-4 flex flex-col items-center">
          <Image
            src="/images/sols-rng-hero.webp"
            alt="Sol's RNG Official Roblox Gameplay Showcase and Aura Effects"
            width={640}
            height={360}
            className="rounded-xl object-cover w-full h-56 border border-purple-950"
            priority
          />
          <p className="text-xs text-gray-400 mt-3 text-center">
            Figure 1: Sol's RNG Official Era 8.5 Live Server Environment and Biome Spawns.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-purple-900/50 bg-[#080d19] p-4 flex flex-col items-center">
          <Image
            src="/images/sols-rng-icon.webp"
            alt="Sol's RNG Game Icon and Cosmic Aura Visual Emblem"
            width={640}
            height={360}
            className="rounded-xl object-contain w-full h-56 bg-black/60 border border-purple-950"
          />
          <p className="text-xs text-gray-400 mt-3 text-center">
            Figure 2: Official Sol's RNG Emblem — Cosmic particle dispersion and celestial rarity indicators.
          </p>
        </div>
      </div>

      {/* Strategic Overview & Mathematical Breakdown */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#090f20] border border-purple-900/40 space-y-4 font-sans text-gray-300 text-sm leading-relaxed">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Info className="w-5 h-5 text-purple-400" />
          The Science of Sol's RNG: How Rarity Tiers Function
        </h2>
        <p>
          In Roblox Sol's RNG, every roll triggers a pseudo-random floating point calculation across a multi-tiered loot table. The base probability of any given aura is expressed as a 1/N fraction. However, your effective roll chance is drastically shaped by four overlapping multipliers: Gauntlet equipment bonuses, consumed Potion concoctions, server-wide luck weather events, and your innate VIP / achievement bonuses.
        </p>
        <p>
          To reach the coveted S+ bracket without spending tens of thousands of real-time hours, seasoned rollers never deploy Heavenly Potion II randomly. They synchronize their 200,000% luck burst with high-tier weather phenomena like Starfall (which grants a 5x multiplier on celestial auras) or Glitched Realms (which unlock completely unobtainable matrix auras).
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

              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                {tierDescriptions[tier]}
              </p>

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

                    <p className="text-xs text-gray-300 leading-relaxed font-sans">{item.description}</p>

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

      {/* FAQ Section */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#080d19] border border-purple-900/40 space-y-6 font-sans">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-400" />
          Aura Tier List Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TIER_LIST_FAQS.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-purple-950/20 border border-purple-900/40 space-y-2">
              <h3 className="font-bold text-white text-sm">{faq.question}</h3>
              <p className="text-xs text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
