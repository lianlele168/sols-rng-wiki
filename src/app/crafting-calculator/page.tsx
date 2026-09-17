import React from 'react';
import type { Metadata } from 'next';
import CraftingCalculatorClient from './CraftingCalculatorClient';

export const metadata: Metadata = {
  title: "Sol's RNG Crafting Calculator: Heavenly Potions & Gauntlets (September 2026)",
  description: "Calculate exact material costs for Stella's crafting bench in Roblox Sol's RNG. Determine potion ingredients, aura breakdown costs, and coin fees.",
  alternates: {
    canonical: '/crafting-calculator',
  },
  keywords: ["sol's rng crafting calculator", "heavenly potion II recipe", "galactic gauntlet crafting", "stella crafting recipes"],
};

export default function CraftingCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: "Sol's RNG Crafting Bench Calculator",
    url: 'https://solsrng.robloxwikihub.com/crafting-calculator',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Any',
    description: "Material requirement and coin fee calculator for potions and gauntlets in Sol's RNG.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CraftingCalculatorClient />
    </>
  );
}
