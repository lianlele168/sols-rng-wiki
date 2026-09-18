import React from 'react';
import type { Metadata } from 'next';
import BiomesClient from './BiomesClient';
import { BIOMES } from '@/data/wikiData';

export const metadata: Metadata = {
  title: "Sol's RNG Biomes Guide: Weather Timers & Spawn Odds ",
  description: "Complete guide to Sol's RNG weather events and biomes: Starfall, Glitch, Null, Hell, and Corruption. Check active duration timers and exclusive aura spawners.",
  alternates: {
    canonical: '/biomes',
  },
  keywords: ["sol's rng biomes", "glitch biome odds", "starfall biome multiplier", "null biome timer"],
};

export default function BiomesPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: "Sol's RNG Biome Directory",
    description: "List of all special weather biomes and exclusive roll bonuses.",
    numberOfItems: BIOMES.length,
    itemListElement: BIOMES.map((b, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: b.name,
      description: `${b.durationSec}s duration biome (${b.luckMultiplierNote}). Spawn rate: ${b.spawnChance}.`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <BiomesClient />
    </>
  );
}
