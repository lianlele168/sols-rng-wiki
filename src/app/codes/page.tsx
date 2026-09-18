import React from 'react';
import type { Metadata } from 'next';
import CodesClient from './CodesClient';

export const metadata: Metadata = {
  title: "Roblox Sol's RNG Codes - Free Potions & Lucky Coins",
  description: "Full working list of active Roblox Sol's RNG codes for . Redeem free Lucky Potions, Speed Potions, and Stella crafting materials.",
  alternates: {
    canonical: '/codes',
  },
  keywords: ["sol's rng codes", "roblox sol's rng active codes", "sol's rng free potions", "sol's rng codes "],
};

export default function CodesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "How do you redeem codes in Roblox Sol's RNG?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Spawn into the game world, click the Settings Gear icon on the left side of the screen, scroll down to the Codes input box, paste your active code, and click Redeem.',
        },
      },
      {
        '@type': 'Question',
        name: "What rewards do Sol's RNG codes grant?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Codes grant Lucky Potions, Fortune Potions, Speed Potions, and raw coins to accelerate gauntlet crafting.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CodesClient />
    </>
  );
}
