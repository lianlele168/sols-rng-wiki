import React from 'react';
import type { Metadata } from 'next';
import CodesClient from './CodesClient';

export const metadata: Metadata = {
  title: "Sol's RNG Codes — Active Potion Chest Codes + Expired List",
  description:
    "Working Sol's RNG codes for free Potion Chests, Rare Potion Chests and Hwachae, plus every confirmed expired code and the exact redemption path.",
  alternates: {
    canonical: '/codes',
  },
  keywords: [
    "sol's rng codes",
    "roblox sol's rng active codes",
    "sol's rng potion chest codes",
    "sol's rng expired codes",
  ],
};

const FAQS = [
  {
    q: "How do you redeem codes in Roblox Sol's RNG?",
    a: "Click the three-line Menu button on the left side of the screen, open Settings, choose the Miscellaneous tab, then click Open next to Redeem Code. Paste the code into the box and press Redeem. If you are put into a short tutorial on loading in, you can skip it first."
  },
  {
    q: "What rewards do Sol's RNG codes grant?",
    a: "Current codes grant Potion Chests and Rare Potion Chests, with the newest code also adding 3x Hwachae. Potions are the point: a Lucky Potion gives a +100% Luck bonus for 60 seconds, which is what actually shifts your odds on rare auras."
  },
  {
    q: "Why is my Sol's RNG code not working?",
    a: "Most Sol's RNG codes only last a day or two, so a code can die between updates. They are also case sensitive, so copy them exactly rather than typing them. If the spelling is right and it still fails, the code has expired."
  },
  {
    q: "Where do new Sol's RNG codes come from?",
    a: "New codes surface first in the official Sol's RNG Discord, usually tied to a new era dropping, a game update, or a player milestone. There is no separate code feed, so they are easy to miss."
  },
  {
    q: "Do Sol's RNG codes give Coins?",
    a: "Not any more. Older code waves handed out Coins and candy, but every currently active code pays out in Potion Chests and Rare Potion Chests instead."
  }
];

export default function CodesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CodesClient faqs={FAQS} />
    </>
  );
}
