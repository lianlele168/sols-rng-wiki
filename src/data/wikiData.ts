export interface CodeItem {
  code: string;
  rewards: string;
  status: 'active' | 'expired';
  note?: string;
}

export interface AuraData {
  id: string;
  name: string;
  rarityFraction: string; // e.g. "1 in 750,000,000"
  rarityDenominator: number; // 750000000
  biomeExclusive?: string; // e.g. "Starfall" or "Rain"
  biomeRarityFraction?: string; // e.g. "1 in 100,000,000"
  tier: 'S+' | 'S' | 'A' | 'B';
  description: string;
  visualEffect: string;
}

export interface CraftingRecipe {
  id: string;
  name: string;
  category: 'Potion' | 'Gauntlet' | 'Device';
  luckBoostSummary: string;
  coinFee: number;
  materials: { name: string; count: number; category: 'potion' | 'aura' | 'material' }[];
  description: string;
}

export interface BiomeData {
  id: string;
  name: string;
  spawnChance: string; // e.g. "1 in 7,500 rolls"
  durationSec: number;
  icon: string;
  exclusiveAuras: string[];
  luckMultiplierNote: string;
}

export interface EquipmentData {
  id: string;
  name: string;
  slot: 'Left Hand' | 'Right Hand';
  luckBoostPercent: number;
  rollSpeedCutPercent: number;
  craftingDifficulty: 'Easy' | 'Medium' | 'Hard' | 'Endgame';
  description: string;
}

export const GAME_INFO = {
  title: "Roblox Sol's RNG Wiki & Database",
  subtitle: "Interactive Aura Roll Simulator, Potion & Gauntlet Crafting Calculator & 2026 Codes",
  description: "The premier community database for Roblox Sol's RNG (Eon 1.26 Summer Update). Simulate rolling 1/750M Sovereign & Impeached auras with Heavenly Potions, calculate crafting recipes, and view biome spawn multipliers.",
  url: "https://solsrng.robloxwikihub.com",
  stats: [
    { label: "Developer", value: "Sol Studio / AV Team" },
    { label: "Platform", value: "Roblox (PC, Mobile, Console)" },
    { label: "Genre", value: "RNG Aura & Crafting" },
    { label: "Rare Aura Top Rarity", value: "1 in 750,000,000" },
    { label: "Current Version", value: "Eon 1.26 Summer Event" },
    { label: "Active Players", value: "150,000+ Concurrent" }
  ]
};

export const ACTIVE_CODES: CodeItem[] = [
  {
    code: "SRY4DEALY",
    rewards: "20x Potion Chests, 5x Rare Potion Chests, 3x Hwachae",
    status: "active",
    note: "Some trackers list the third item as 3x Rainbow Ices instead of Hwachae."
  },
  {
    code: "UPD20260905",
    rewards: "20x Potion Chests, 5x Rare Potion Chests",
    status: "active"
  },
  {
    code: "WEARESORRY",
    rewards: "20x Potion Chests, 5x Rare Potion Chests",
    status: "active",
    note: "Reported as still working by most trackers, but one source lists it as expired."
  },
  {
    code: "20260815UPD",
    rewards: "20x Potion Chests, 5x Rare Potion Chests",
    status: "active",
    note: "Reported as still working by most trackers, but one source lists it as expired."
  }
];

const NOT_DOCUMENTED = "Expired — reward not documented by the publisher";

export const EXPIRED_CODES: CodeItem[] = [
  { code: "SUMMER2026", rewards: "Free Potion Chests", status: "expired" },
  { code: "BLAZINGSUN", rewards: "Free Potion Chests", status: "expired" },
  { code: "20260711UPD", rewards: "Freebies", status: "expired" },
  { code: "20260627UPD", rewards: "Free Potion Chests", status: "expired" },
  { code: "2026013UPD", rewards: "Free Potion Chests", status: "expired" },
  { code: "AmalgamationHELL", rewards: "Free Potion Chests", status: "expired" },
  { code: "LastEasterEventWeek", rewards: "Free Potion Chests", status: "expired" },
  { code: "AbsolutelyClassicUpd", rewards: "20x Potion Chests, 5x Rare Potion Chests", status: "expired" },
  { code: "GargantuaBiome", rewards: "20x Potion Chests, 5x Rare Potion Chests", status: "expired" },
  { code: "AnotherRealmCH2", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "DorceyDorcey", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "AAAAAAAA", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "NOODLELUCKISREAL", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "THISISNOTREAL", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "RaidCH2", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "UPD20260228", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "word9999aura", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "word999aura", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "2026ValentineDay", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "transform", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "UPDATE20260117", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "50kSUB", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "ChristmasPart1!", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "HoHoHo", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "UPDATE DELAYED", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "2026GETRAREAURA", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "2026HAPPYNEWYEAR", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "XMASPART2", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "Patch20251224", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "BlackFriday!!!", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "PIXELSKILL", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "profilespace", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "Crawler", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "Adventurer", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "NEWFISH", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "Manta2025", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "bubble700", rewards: NOT_DOCUMENTED, status: "expired" },
  { code: "TH3L1MB0", rewards: NOT_DOCUMENTED, status: "expired" }
];

export const AURAS: AuraData[] = [
  {
    id: "sovereign",
    name: "Sovereign",
    rarityFraction: "1 in 750,000,000",
    rarityDenominator: 750000000,
    tier: "S+",
    description: "The rarest aura in Sol's RNG. Summons a golden celestial dragon with rotating orbital rings and orchestral soundtrack.",
    visualEffect: "Golden Cosmic Dragon + Celestial Orbit Rings"
  },
  {
    id: "abyssal-hunter",
    name: "Abyssal Hunter",
    rarityFraction: "1 in 400,000,000",
    rarityDenominator: 400000000,
    biomeExclusive: "Rain",
    biomeRarityFraction: "1 in 100,000,000",
    tier: "S+",
    description: "Deep sea leviathan aura that surges with dark abyssal water tendrils and ocean storm sound effects.",
    visualEffect: "Water Vortex + Leviathan Shadow"
  },
  {
    id: "archangel",
    name: "Archangel",
    rarityFraction: "1 in 250,000,000",
    rarityDenominator: 250000000,
    tier: "S+",
    description: "Divine 6-winged angel glowing with blinding white light and floating halo.",
    visualEffect: "6 Seraphic Wings + Holy Light Pillar"
  },
  {
    id: "impeached",
    name: "Impeached",
    rarityFraction: "1 in 200,000,000",
    rarityDenominator: 200000000,
    biomeExclusive: "Hell",
    biomeRarityFraction: "1 in 40,000,000",
    tier: "S+",
    description: "Fiery demonic throne surrounded by infernal chains and crimson lava bursts.",
    visualEffect: "Hellfire Throne + Demonic Chains"
  },
  {
    id: "genesis",
    name: "Genesis",
    rarityFraction: "1 in 100,000,000",
    rarityDenominator: 100000000,
    tier: "S+",
    description: "Pure white galaxy orb shooting out rainbow nebulae particles across the map.",
    visualEffect: "Rainbow Galaxy Sphere"
  },
  {
    id: "gargantua",
    name: "Gargantua",
    rarityFraction: "1 in 43,000,000",
    rarityDenominator: 43000000,
    biomeExclusive: "Starfall",
    biomeRarityFraction: "1 in 10,000,000",
    tier: "S",
    description: "Massive black hole gravitational singularity pulling nearby light and dust into its event horizon.",
    visualEffect: "Black Hole Singularity + Gravitational Lens"
  },
  {
    id: "matrix",
    name: "Matrix",
    rarityFraction: "1 in 50,000,000",
    rarityDenominator: 50000000,
    biomeExclusive: "Glitch",
    biomeRarityFraction: "1 in 5,000,000",
    tier: "S",
    description: "Cyberpunk green binary rain code cascading down in holographic pillars.",
    visualEffect: "Green Holographic Binary Rain"
  },
  {
    id: "celestial",
    name: "Celestial",
    rarityFraction: "1 in 350,000",
    rarityDenominator: 350000,
    tier: "A",
    description: "Glowing cyan starlight aura. Crucial material required for Galactic Gauntlet crafting.",
    visualEffect: "Cyan Starlight Aura"
  },
  {
    id: "gilded",
    name: "Gilded",
    rarityFraction: "1 in 512",
    rarityDenominator: 512,
    tier: "B",
    description: "Gold coin sparkle aura. Essential crafting material for Heavenly Potions.",
    visualEffect: "Gold Sparkle Aura"
  }
];

export const CRAFTING_RECIPES: CraftingRecipe[] = [
  {
    id: "heavenly-2",
    name: "Heavenly Potion II",
    category: "Potion",
    luckBoostSummary: "+200,000% Luck for 1 single roll (Instant 1/2000x multiplier)",
    coinFee: 25000,
    materials: [
      { name: "Heavenly Potion I", count: 2, category: "potion" },
      { name: "Lucky Potion", count: 50, category: "potion" },
      { name: "Speed Potion", count: 50, category: "potion" },
      { name: "Gilded Aura", count: 1, category: "aura" },
      { name: "Exotic Aura", count: 1, category: "aura" }
    ],
    description: "The most powerful potion in Sol's RNG. Gives +200,000% Luck to guarantee high-tier Mythic/Secret auras."
  },
  {
    id: "galactic-gauntlet",
    name: "Galactic Gauntlet",
    category: "Gauntlet",
    luckBoostSummary: "+250% Permanent Luck Boost & -30% Roll Cooldown Speed",
    coinFee: 150000,
    materials: [
      { name: "Gravitational Device", count: 1, category: "material" },
      { name: "Subzero Device", count: 1, category: "material" },
      { name: "Gilded Aura", count: 10, category: "aura" },
      { name: "Celestial Aura", count: 5, category: "aura" }
    ],
    description: "Best-in-slot endgame gauntlet for your left hand."
  },
  {
    id: "gravitational-device",
    name: "Gravitational Device",
    category: "Device",
    luckBoostSummary: "+150% Permanent Luck Boost & -20% Roll Cooldown Speed",
    coinFee: 50000,
    materials: [
      { name: "Lucky Potion", count: 100, category: "potion" },
      { name: "Speed Potion", count: 100, category: "potion" },
      { name: "Gilded Aura", count: 5, category: "aura" }
    ],
    description: "Mid-game gauntlet essential before upgrading to Galactic Gauntlet."
  }
];

export const BIOMES: BiomeData[] = [
  {
    id: "starfall",
    name: "Starfall Biome",
    spawnChance: "1 in 7,500 rolls",
    durationSec: 120,
    icon: "⭐",
    exclusiveAuras: ["Gargantua (1/10M in Starfall vs 1/43M normal)", "Comet (1/12k)"],
    luckMultiplierNote: "Night sky fills with shooting stars. Gives 4.3x multiplier for Gargantua."
  },
  {
    id: "hell",
    name: "Hell Biome",
    spawnChance: "1 in 6,666 rolls",
    durationSec: 120,
    icon: "🔥",
    exclusiveAuras: ["Impeached (1/40M in Hell vs 1/200M normal)", "Bloodlust (1/30M)"],
    luckMultiplierNote: "Environment turns infernal red. Gives 5x multiplier for Impeached aura."
  },
  {
    id: "rain",
    name: "Rain Biome",
    spawnChance: "1 in 750 rolls",
    durationSec: 120,
    icon: "🌧️",
    exclusiveAuras: ["Abyssal Hunter (1/100M in Rain vs 1/400M normal)", "Poseidon (1/4M)"],
    luckMultiplierNote: "Frequent weather event giving 4x boost for Abyssal Hunter aura."
  },
  {
    id: "glitch",
    name: "Glitch Biome",
    spawnChance: "1 in 30,000 rolls",
    durationSec: 60,
    icon: "👾",
    exclusiveAuras: ["Matrix (1/5M in Glitch vs 1/50M normal)", "Glitch Aura (1/30k)"],
    luckMultiplierNote: "The rarest biome in the game! Massive 10x luck multiplier for Matrix."
  }
];

export const EQUIPMENT: EquipmentData[] = [
  {
    id: "galactic-gauntlet",
    name: "Galactic Gauntlet",
    slot: "Left Hand",
    luckBoostPercent: 250,
    rollSpeedCutPercent: 30,
    craftingDifficulty: "Endgame",
    description: "Top-tier left hand gauntlet giving +250% luck and 30% faster roll speed."
  },
  {
    id: "gravitational-device",
    name: "Gravitational Device",
    slot: "Left Hand",
    luckBoostPercent: 150,
    rollSpeedCutPercent: 20,
    craftingDifficulty: "Hard",
    description: "Excellent mid-to-late game gauntlet with +150% luck boost."
  },
  {
    id: "flesh-device",
    name: "Flesh Device",
    slot: "Right Hand",
    luckBoostPercent: 80,
    rollSpeedCutPercent: 35,
    craftingDifficulty: "Medium",
    description: "Best right hand gauntlet for maximum roll speed cutting."
  }
];

export const FAQ_ITEMS = [
  {
    question: "How do I get Heavenly Potion II in Sol's RNG?",
    answer: "Craft it at Stella's Crafting Cave in the main hub map using 2x Heavenly Potion I, 50x Lucky Potions, 50x Speed Potions, 1x Gilded Aura, and 1x Exotic Aura."
  },
  {
    question: "What does Heavenly Potion II do?",
    answer: "It multiplies your luck by +200,000% (+2,000x multiplier) on your very next single roll, giving you a massive chance at 1/100M+ Sovereign or Archangel."
  },
  {
    question: "How do biomes work in Sol's RNG?",
    answer: "Biomes randomly spawn while rolling (e.g. Starfall 1/7500, Hell 1/6666, Glitch 1/30000). During biomes, specific rare auras get up to 10x higher drop rates."
  }
];
