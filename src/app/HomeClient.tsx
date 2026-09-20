'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Dices, Calculator, Trophy, Key, CloudSun, Shield, Copy, Check, ArrowRight, Zap, Flame, Crown } from 'lucide-react';
import AuthorCard from '@/components/AuthorCard';
import { GAME_INFO, ACTIVE_CODES, AURAS, FAQ_ITEMS } from '@/data/wikiData';

export default function HomeClient() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const featureCards = [
    {
      title: "Aura Roll & Luck Multiplier Simulator",
      desc: "Simulate rolling ultra-rare 1/750M Sovereign & Impeached auras with Heavenly Potion II (+200,000% Luck) and Fortuna Potions.",
      href: "/aura-simulator",
      icon: Dices,
      color: "from-amber-500 to-purple-600",
      badge: "SIMULATOR"
    },
    {
      title: "Potion & Gauntlet Crafting Calculator",
      desc: "Calculate required raw materials (Lucky Potions, Speed Potions, Coins, Gilded Auras) for Heavenly Potion II and Galactic Gauntlet.",
      href: "/crafting-calculator",
      icon: Calculator,
      color: "from-cyan-500 to-blue-600",
      badge: "CALCULATOR"
    },
    {
      title: "2026 Meta Aura Tier List",
      desc: "Complete rarity rankings from S+ Mythic Cosmic Auras (Sovereign, Abyssal Hunter, Archangel) to S and A Tier.",
      href: "/tier-list",
      icon: Trophy,
      color: "from-purple-600 to-pink-600",
      badge: "S+ RANK"
    },
    {
      title: "Biome & Weather Spawn Guide",
      desc: "Starfall, Hell, Rain, and Glitch biome spawn rates, durations, and exclusive aura luck multipliers.",
      href: "/biomes",
      icon: CloudSun,
      color: "from-emerald-500 to-teal-600",
      badge: "BIOMES"
    },
    {
      title: "Gauntlet Equipment Roadmap",
      desc: "Stats, luck boost percentages, and roll speed cut comparisons for Galactic Gauntlet and Gravitational Device.",
      href: "/equipment",
      icon: Shield,
      color: "from-indigo-600 to-purple-600",
      badge: "EQUIPMENT"
    },
    {
      title: "Active Redeem Codes",
      desc: "100% working Roblox Sol's RNG free Heavenly Potions, Fortuna Potions, Lucky Potions, and Coins.",
      href: "/codes",
      icon: Key,
      color: "from-rose-600 to-red-600",
      badge: "FREE POTIONS"
    }
  ];

  return (
    <div className="space-y-16 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* FAQPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',

            author: {
              '@type': 'Person',
              name: 'Hlele',
              jobTitle: 'Editor',
            },
            mainEntity: FAQ_ITEMS.map((faq) => ({
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

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 text-center space-y-8">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full" />
        </div>

        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-800/50 text-amber-300 text-xs font-bold shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>2026 EON 1.26 OFFICIAL SOL'S RNG DATABASE</span>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-white leading-tight">
            SIMULATE & CRAFT WITH <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-300">
              PRO AURA ROLL SIMULATOR & CRAFTING TOOL
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Test your luck rolling 1 in 750M Sovereign auras with Heavenly Potion II, calculate exact crafting recipe costs, and check biome spawn multipliers.
          </p>
        </div>

        {/* Hero Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/aura-simulator"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-purple-600 hover:from-amber-400 hover:to-purple-500 text-black font-black text-sm shadow-xl shadow-amber-900/40 flex items-center space-x-2 transition-all hover:scale-105"
          >
            <Dices className="w-5 h-5" />
            <span>Launch Aura Roll Simulator</span>
          </Link>
          <Link
            href="/crafting-calculator"
            className="px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-purple-900/50 text-gray-200 font-bold text-sm flex items-center space-x-2 transition-all hover:scale-105"
          >
            <Calculator className="w-5 h-5 text-amber-400" />
            <span>Crafting Calculator</span>
          </Link>
        </div>

        {/* Game Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 text-left">
          {GAME_INFO.stats.slice(0, 4).map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#090f1d] border border-purple-900/30">
              <span className="text-[10px] text-gray-500 block uppercase font-bold">{stat.label}</span>
              <span className="text-sm font-extrabold text-white">{stat.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* AuthorCard Section */}
      <AuthorCard />

      {/* Visual Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="rounded-2xl overflow-hidden border border-purple-900/40 bg-[#080d19] p-4 flex flex-col items-center">
          <Image
            src="/images/sols-rng-hero.webp"
            alt="Sol's RNG Roblox Live Game Arena"
            width={640}
            height={360}
            className="rounded-xl object-cover w-full h-52 border border-purple-950"
            priority
          />
          <p className="text-xs text-gray-400 mt-2 text-center font-sans">
            Figure 1: Official Sol's RNG Live Realm — Biome atmospheric events & Stella's Cauldron.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-purple-900/40 bg-[#080d19] p-4 flex flex-col items-center">
          <Image
            src="/images/sols-rng-icon.webp"
            alt="Sol's RNG Cosmic Particle Icon"
            width={640}
            height={360}
            className="rounded-xl object-contain w-full h-52 bg-black/50 border border-purple-950"
          />
          <p className="text-xs text-gray-400 mt-2 text-center font-sans">
            Figure 2: Official Sol's RNG Visual Emblem — Particle aura shaders and drop icons.
          </p>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-purple-900/30 pb-4">
          <div>
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-amber-400" />
              <span>Interactive Toolkit & Strategy Guides</span>
            </h2>
            <p className="text-xs text-gray-400 mt-1">Select a tool or database guide below to optimize your Sol's RNG journey</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                href={card.href}
                className="group p-6 rounded-2xl bg-[#080d19] border border-purple-950 hover:border-amber-500/60 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-amber-950/40 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${card.color} p-0.5 shadow-lg`}>
                      <div className="w-full h-full bg-[#080d19] rounded-[10px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-800/40">
                      {card.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 flex items-center text-xs font-bold text-amber-400 group-hover:text-amber-300">
                  <span>Open Tool</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Active Codes Spotlight */}
      <section className="p-8 rounded-3xl bg-gradient-to-br from-[#090f1d] to-[#040710] border border-purple-900/40 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-purple-900/30 pb-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-[10px] font-bold mb-2">
              <Zap className="w-3 h-3" />
              <span>TESTED & WORKING CODES</span>
            </div>
            <h2 className="text-2xl font-black text-white">Roblox Sol's RNG Redeem Codes</h2>
          </div>
          <Link
            href="/codes"
            className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
          >
            <span>View All Codes ({ACTIVE_CODES.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACTIVE_CODES.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between"
            >
              <div>
                <span className="text-base font-black text-amber-400 block">{item.code}</span>
                <span className="text-xs text-gray-300 mt-1 block">{item.rewards}</span>
              </div>
              <button
                onClick={() => handleCopyCode(item.code)}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center space-x-1.5 transition-colors"
              >
                {copiedCode === item.code ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-black" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Top Secret Auras Spotlight */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-purple-900/30 pb-4">
          <div>
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Crown className="w-6 h-6 text-amber-400" />
              <span>Rarest Cosmic Auras (1 in 100M+)</span>
            </h2>
            <p className="text-xs text-gray-400 mt-1">Highest tier auras in Sol's RNG Eon 1.26</p>
          </div>
          <Link href="/tier-list" className="text-xs font-bold text-amber-400 hover:text-amber-300">
            View Complete Aura Tier List →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {AURAS.slice(0, 3).map((a, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#080d19] border border-purple-900/30 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                  {a.rarityFraction}
                </span>
                <span className="text-xs font-black text-amber-400">{a.tier} Tier</span>
              </div>

              <div>
                <h3 className="font-extrabold text-lg text-white">{a.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{a.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px]">
                <span className="text-gray-500 block">Visual Effect</span>
                <span className="font-bold text-amber-300">{a.visualEffect}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="p-8 rounded-3xl bg-[#080d19] border border-purple-900/30 space-y-6">
        <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="font-bold text-sm text-amber-300">{faq.question}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
