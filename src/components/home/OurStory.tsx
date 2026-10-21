import React from 'react';
import { Heart, Leaf, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { AHAROGYAM_FSSAI } from '../../lib/whatsapp';

interface OurStoryProps {
  onExploreMenu: () => void;
}

export const OurStory: React.FC<OurStoryProps> = ({ onExploreMenu }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FFF9ED] border-b border-[#FF8A24]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Image of café ambience with bright accent overlay */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-[#FFD45C] shadow-2xl aspect-[16/11] bg-white relative">
              <img
                src="/src/assets/images/cafe_natural_ambience_1792587028531.jpg"
                alt="Aharogyam café interior in Rajajinagar, Bengaluru with warm wooden tables and natural greenery"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover"
              />

              {/* Bright Accent Corner Pill */}
              <div className="absolute top-4 left-4 bg-[#173F32] text-[#FFD45C] font-black text-xs px-3.5 py-1.5 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1.5 border border-[#FFD45C]/40">
                <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
                <span>Rajajinagar Neighbourhood Spot</span>
              </div>
            </div>

            {/* Bright Feature Card below photo */}
            <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-[#FFF2D6] to-[#FFE8B3] border-2 border-[#FFD45C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#173F32] shadow-sm">
              <div className="flex items-center gap-2.5 font-bold">
                <div className="w-8 h-8 rounded-full bg-[#173F32] text-[#FFD45C] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-black">Licensed under FSSAI #{AHAROGYAM_FSSAI}</span>
                  <span className="text-[11px] text-[#252420]/70 font-medium">Daily fresh prep & strict hygiene protocol</span>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-[#173F32] text-[#FFF9ED] font-extrabold text-[10px] uppercase tracking-wider shrink-0">
                Vegetarian
              </span>
            </div>
          </div>

          {/* Right: Editorial Story Copy & Bright Accent Panel */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9ED56] text-[#173F32] text-xs font-black tracking-wider uppercase shadow-xs">
              <Leaf className="w-3.5 h-3.5 text-[#173F32]" />
              <span>ROOTED IN GOODNESS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#173F32] tracking-tight leading-[1.1]">
              Natural Food, <br />
              <span className="text-[#FF8A24] italic font-normal">Made with Pure Joy.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#252420]/85 font-medium leading-relaxed">
              <p>
                Aharogyam was born from a simple belief: healthy, nutritious food should feel comforting,
                colourful, and genuinely delicious every single day.
              </p>
              <p>
                Tucked into 3rd Cross in Rajajinagar 2nd Stage, our café is a cheerful neighbourhood
                haven for wholesome vegetarian dining. Rather than relying on processed sugar syrups or artificial
                flavourings, our signature milkshakes and bowls are naturally sweetened with whole dates,
                pairing luscious whole fruits with rolled oats and crisp roasted nuts.
              </p>
            </div>

            {/* 3 Bright Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-[#FF8A24]/30 shadow-xs space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#FF8A24]">
                  <Heart className="w-3.5 h-3.5 fill-[#FF8A24]" />
                  <span>Honest Dates</span>
                </div>
                <p className="text-[11px] text-[#252420]/75 font-medium leading-snug">
                  Naturally date-sweetened shakes with zero refined white sugar.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#C9ED56] shadow-xs space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#438B49]">
                  <Leaf className="w-3.5 h-3.5" />
                  <span>Pressed Live</span>
                </div>
                <p className="text-[11px] text-[#252420]/75 font-medium leading-snug">
                  Fruit and vegetables pressed to order for peak vitality.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#FFD45C] shadow-xs space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#173F32]">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
                  <span>Local Spirit</span>
                </div>
                <p className="text-[11px] text-[#252420]/75 font-medium leading-snug">
                  Courteous service, welcoming ambience, and fair pricing.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#173F32] hover:bg-[#0f2b22] text-[#FFF9ED] font-extrabold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Browse What We Make</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C9ED56]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
