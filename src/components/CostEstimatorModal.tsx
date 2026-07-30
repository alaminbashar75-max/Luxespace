import React, { useState } from 'react';
import { X, Calculator, Check, ArrowRight, DollarSign, Sparkles } from 'lucide-react';
import { EstimateParams } from '../types';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToBook: (summary: string) => void;
}

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({
  isOpen,
  onClose,
  onProceedToBook,
}) => {
  const [params, setParams] = useState<EstimateParams>({
    roomType: 'Living Room',
    sqFt: 800,
    finishLevel: 'Premium',
    includeFurniture: true,
    includeLighting: true,
    includeStructuralChanges: false,
  });

  if (!isOpen) return null;

  // Base rate per sq ft based on finish level
  const baseRatePerSqFt = {
    Essential: 25,
    Premium: 50,
    'Bespoke Luxury': 95,
  }[params.finishLevel];

  // Room type multiplier
  const roomMultiplier = {
    'Living Room': 1.0,
    'Kitchen & Dining': 1.4,
    'Master Bedroom': 1.1,
    'Entire House': 1.3,
    'Commercial Office': 1.2,
  }[params.roomType];

  const baseEstimate = params.sqFt * baseRatePerSqFt * roomMultiplier;

  // Add-on calculations
  const furnitureCost = params.includeFurniture ? baseEstimate * 0.35 : 0;
  const lightingCost = params.includeLighting ? baseEstimate * 0.15 : 0;
  const structuralCost = params.includeStructuralChanges ? baseEstimate * 0.25 : 0;

  const totalEstimate = Math.round(baseEstimate + furnitureCost + lightingCost + structuralCost);
  const minEstimate = Math.round(totalEstimate * 0.9);
  const maxEstimate = Math.round(totalEstimate * 1.15);

  const handleBook = () => {
    const summary = `${params.roomType} (${params.sqFt} sq. ft., ${params.finishLevel} Finish) - Est. $${minEstimate.toLocaleString()} - $${maxEstimate.toLocaleString()}`;
    onProceedToBook(summary);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-stone-900 text-stone-100 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-stone-800 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-100 rounded-full hover:bg-stone-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">
          <Calculator className="w-4 h-4 text-amber-400" />
          <span>Interactive Estimator</span>
        </div>
        <h3 className="serif-display text-2xl sm:text-3xl font-bold text-white mb-2">
          Interior Cost Calculator
        </h3>
        <p className="text-xs sm:text-sm text-stone-400 mb-6">
          Get an instant budget benchmark for your interior design, remodeling, or furniture project.
        </p>

        <div className="space-y-6">
          {/* Room Type Selector */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-300 mb-2">
              1. Space / Room Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {(['Living Room', 'Kitchen & Dining', 'Master Bedroom', 'Entire House', 'Commercial Office'] as const).map(
                (room) => (
                  <button
                    key={room}
                    type="button"
                    onClick={() => setParams({ ...params, roomType: room })}
                    className={`px-3 py-2 rounded-xl text-xs font-medium border text-left transition-all ${
                      params.roomType === room
                        ? 'bg-amber-900/40 border-amber-500 text-amber-200'
                        : 'bg-stone-800/80 border-stone-700 text-stone-300 hover:border-stone-600'
                    }`}
                  >
                    {room}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Square Footage Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-300">
                2. Approximate Area Size
              </label>
              <span className="text-xs font-bold text-amber-400 bg-stone-800 px-3 py-1 rounded-full border border-stone-700">
                {params.sqFt.toLocaleString()} sq. ft.
              </span>
            </div>
            <input
              type="range"
              min={200}
              max={6000}
              step={100}
              value={params.sqFt}
              onChange={(e) => setParams({ ...params, sqFt: Number(e.target.value) })}
              className="w-full accent-amber-500 h-2 bg-stone-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-stone-500 mt-1">
              <span>200 sq ft</span>
              <span>3,000 sq ft</span>
              <span>6,000+ sq ft</span>
            </div>
          </div>

          {/* Finish Tier */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-300 mb-2">
              3. Specification &amp; Finish Quality
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['Essential', 'Premium', 'Bespoke Luxury'] as const).map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setParams({ ...params, finishLevel: tier })}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    params.finishLevel === tier
                      ? 'bg-amber-900/50 border-amber-400 text-white shadow-lg'
                      : 'bg-stone-800/60 border-stone-700 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <div className="font-semibold text-xs">{tier}</div>
                  <div className="text-[10px] text-stone-400 mt-0.5">
                    {tier === 'Essential' && 'Clean & Elegant'}
                    {tier === 'Premium' && 'High-End Artisanal'}
                    {tier === 'Bespoke Luxury' && 'Architectural Masterpiece'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Scope Add-ons Checkboxes */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-300 mb-2">
              4. Additional Scope Inclusions
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-2.5 rounded-xl bg-stone-800/40 border border-stone-700/80 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={params.includeFurniture}
                  onChange={(e) => setParams({ ...params, includeFurniture: e.target.checked })}
                  className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400"
                />
                <div>
                  <span className="font-semibold text-stone-200">Bespoke Furniture Curation &amp; Assembly</span>
                  <p className="text-[10px] text-stone-400">Custom sofas, dining tables, artisan millwork</p>
                </div>
              </label>

              <label className="flex items-center gap-3 p-2.5 rounded-xl bg-stone-800/40 border border-stone-700/80 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={params.includeLighting}
                  onChange={(e) => setParams({ ...params, includeLighting: e.target.checked })}
                  className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400"
                />
                <div>
                  <span className="font-semibold text-stone-200">Architectural &amp; Ambient Lighting Plan</span>
                  <p className="text-[10px] text-stone-400">Recessed LED coves, chandeliers &amp; smart dimming</p>
                </div>
              </label>

              <label className="flex items-center gap-3 p-2.5 rounded-xl bg-stone-800/40 border border-stone-700/80 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={params.includeStructuralChanges}
                  onChange={(e) => setParams({ ...params, includeStructuralChanges: e.target.checked })}
                  className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400"
                />
                <div>
                  <span className="font-semibold text-stone-200">Structural &amp; Wall Modifications</span>
                  <p className="text-[10px] text-stone-400">Archway partitions, demolition, flooring overhaul</p>
                </div>
              </label>
            </div>
          </div>

          {/* Estimated Result Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-stone-800 to-amber-950/60 border border-amber-500/40 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-300 block mb-1">
              Estimated Investment Range
            </span>
            <div className="serif-display text-3xl sm:text-4xl font-bold text-white my-1">
              ${minEstimate.toLocaleString()} &mdash; ${maxEstimate.toLocaleString()}
            </div>
            <p className="text-[11px] text-stone-300 font-light max-w-sm mx-auto">
              Includes spatial design, material sourcing, project management &amp; installation.
            </p>

            <button
              onClick={handleBook}
              className="mt-4 w-full py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Book Call With This Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
