import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Roblox Sol's RNG Wiki 2026 | Aura Roll Simulator, Crafting Calculator & Codes",
  description: "The official community database for Roblox Sol's RNG. Simulate rolling 1/750M Sovereign & Impeached auras with Heavenly Potions, calculate crafting recipes, view biome spawn multipliers, and redeem active codes.",
  keywords: [
    "Sol's RNG",
    "Sol's RNG codes",
    "Sol's RNG aura simulator",
    "Sol's RNG crafting calculator",
    "Sol's RNG tier list",
    "Heavenly Potion II recipe",
    "Sovereign aura",
    "Galactic Gauntlet craft"
  ],
  authors: [{ name: 'Hlele' }],
  metadataBase: new URL('https://solsrng.robloxwikihub.com'),
  openGraph: {
    title: "Roblox Sol's RNG Wiki & Database 2026",
    description: "Simulate rolling ultra-rare 1/750M auras with Heavenly Potions, calculate crafting materials, and check biome spawn multipliers for Roblox Sol's RNG.",
    url: 'https://solsrng.robloxwikihub.com',
    siteName: "Sol's RNG Wiki",
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Roblox Sol's RNG Wiki & Database",
    description: "Roblox Sol's RNG Aura Simulator & Crafting Calculator"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#060a12] text-slate-100 min-h-screen flex flex-col justify-between antialiased selection:bg-amber-500 selection:text-black`}>
        <StructuredData />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
