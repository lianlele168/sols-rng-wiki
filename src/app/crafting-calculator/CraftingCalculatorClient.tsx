'use client';

import React, { useState } from 'react';
import { Calculator, Hammer, Sparkles, Gem, Coins, ArrowRight, Shield } from 'lucide-react';
import { CRAFTING_RECIPES, CraftingRecipe } from '@/data/wikiData';

export default function CraftingCalculatorClient() {
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>(CRAFTING_RECIPES[0].id);
  const [quantity, setQuantity] = useState<number>(1);

  const recipe = CRAFTING_RECIPES.find((r) => r.id === selectedRecipeId) || CRAFTING_RECIPES[0];

  const totalCoinFee = recipe.coinFee * quantity;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 font-mono">
      {/* Header */}
      <div className="border-b border-purple-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 text-xs font-bold mb-3">
          <Calculator className="w-3.5 h-3.5 text-cyan-400" />
          <span>STELLA'S CRAFTING CAVE CALCULATOR</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Potion & Gauntlet Crafting Calculator
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Calculate raw material requirements (Lucky Potions, Speed Potions, Coins, Gilded & Celestial Auras) for Heavenly Potion II and Galactic Gauntlet.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 5 Cols: Config */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#080d19] border border-purple-900/30 space-y-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <Hammer className="w-5 h-5 text-cyan-400" />
            <span>Select Item to Craft</span>
          </h2>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-300">Target Item</label>
            <select
              value={selectedRecipeId}
              onChange={(e) => setSelectedRecipeId(e.target.value)}
              className="w-full bg-slate-950 border border-purple-900/50 rounded-2xl px-4 py-3 text-sm text-white font-bold focus:outline-none focus:border-cyan-500"
            >
              {CRAFTING_RECIPES.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name} ({r.category})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-300 font-bold">
              <span>Crafting Quantity</span>
              <span className="text-cyan-400 text-sm">{quantity} Units</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full accent-cyan-500 bg-slate-900 h-2.5 rounded-lg cursor-pointer"
            />
          </div>

          <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-gray-300 space-y-1">
            <span className="font-bold text-cyan-300 block">Item Summary:</span>
            <p className="leading-relaxed">{recipe.description}</p>
          </div>
        </div>

        {/* Right 7 Cols: Material Breakdown */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#090e1c] to-[#040710] border border-purple-900/40 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-purple-900/30 pb-4">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">CALCULATED MATERIALS</span>
                <h3 className="text-2xl font-black text-white">{recipe.name} x{quantity}</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-bold">
                {recipe.category}
              </span>
            </div>

            {/* Total Fee Banner */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-amber-400" />
                <span>Total Coin Crafting Fee</span>
              </span>
              <span className="text-xl font-black text-amber-400">{totalCoinFee.toLocaleString()} Coins</span>
            </div>

            {/* Required Raw Material List */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Required Crafting Ingredients</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {recipe.materials.map((mat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-white block">{mat.name}</span>
                      <span className="text-[10px] text-gray-500 uppercase">{mat.category}</span>
                    </div>
                    <span className="text-base font-black text-cyan-400">
                      x{(mat.count * quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Boost Summary Note */}
            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/40 text-xs text-purple-300 font-bold">
              ✨ <strong>Effect:</strong> {recipe.luckBoostSummary}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
