import React from 'react';
import type { Metadata } from 'next';
import EquipmentClient from './EquipmentClient';
import { EQUIPMENT } from '@/data/wikiData';

export const metadata: Metadata = {
  title: "Sol's RNG Equipment & Gauntlet Stats Guide ",
  description: "Full stats breakdown for all gauntlets and devices in Sol's RNG: Luck multipliers, roll speed reductions, and tier requirements from Solar to Galactic Gauntlet.",
  alternates: {
    canonical: '/equipment',
  },
  keywords: ["sol's rng equipment", "best gauntlet sol's rng", "galactic gauntlet luck bonus", "subzero device stats"],
};

export default function EquipmentPage() {
  return <EquipmentClient />;
}
