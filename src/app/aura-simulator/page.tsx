import React from 'react';
import type { Metadata } from 'next';
import AuraSimulatorClient from './AuraSimulatorClient';

export const metadata: Metadata = {
  title: "Roblox Sol's RNG Aura Roll Simulator | Heavenly Potion Odds",
  description: "Simulate rolling ultra-rare auras like Sovereign, Abyssal Hunter, and Impeached in Roblox Sol's RNG. Test Heavenly Potion II, Fortuna, and Galactic Gauntlet multiplier stacks.",
  alternates: {
    canonical: '/aura-simulator',
  },
  keywords: ["sol's rng simulator", "sol's rng aura roll", "heavenly potion simulator", "sovereign aura roll odds"],
};

export default function AuraSimulatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: "Roblox Sol's RNG Aura Roll Simulator",
    url: 'https://solsrng.robloxwikihub.com/aura-simulator',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Any',
    description: "Interactive gacha roll simulator testing multi-thousand lucky potion multipliers in Roblox Sol's RNG.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AuraSimulatorClient />
    </>
  );
}
