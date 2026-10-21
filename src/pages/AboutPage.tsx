import React from 'react';
import { Heart, Sparkles, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { AHAROGYAM_FSSAI } from '../lib/whatsapp';

interface AboutPageProps {
  onGoToMenu: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onGoToMenu }) => {
  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCE7D6] text-[#234B38] text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#C58A51]" />
          <span>Our Story & Craft</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#234B38] tracking-tight leading-tight">
          Nourishing Food, Crafted with Natural Care.
        </h1>
        <p className="text-base sm:text-lg text-[#302F29]/80 leading-relaxed">
          Aharogyam was created to provide Bengaluru with an authentic, wholesome alternative to overly
          processed café beverages and fast snacks.
        </p>
      </div>

      {/* Two Column Visual Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-[#DCE7D6] shadow-lg aspect-[4/3] bg-[#FAF7EF]">
          <img
            src="/src/assets/images/cafe_natural_ambience_1792587028531.jpg"
            alt="Warm inviting corner at Aharogyam café in Rajajinagar"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-[#302F29]/85 leading-relaxed">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#234B38]">
            An Honest Neighborhood Kitchen
          </h2>
          <p>
            Located at 3rd Cross in Rajajinagar 2nd Stage, Aharogyam serves as a warm neighbourhood spot
            where guests can enjoy healthy food without any guilt. Our menu is intentionally vegetarian,
            grounded in nutritious staples: rolled oats, whole Medjool dates, fresh fruits, sprouted pulses,
            and roasted peanuts.
          </p>
          <p>
            We take pride in preparing our signature date-based drinks without relying on refined white sugars.
            By blending premium dates with milk, avocado, anjura (figs), or cocoa, we create naturally sweet,
            satisfying beverages that nourish the body cleanly.
          </p>
          <div className="p-4 rounded-2xl bg-white border border-[#DCE7D6] text-xs text-[#234B38] flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C58A51] shrink-0" />
            <span>
              Certified and operating under <strong>FSSAI Licence No. {AHAROGYAM_FSSAI}</strong> with strict
              hygiene and daily ingredient handling standards.
            </span>
          </div>
        </div>
      </div>

      {/* Core Kitchen Principles */}
      <div className="bg-white rounded-3xl border border-[#DCE7D6] p-8 sm:p-12 shadow-xs space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#234B38]">
            What We Stand For
          </h2>
          <p className="text-xs sm:text-sm text-[#302F29]/70">
            Careful daily preparation centered on wholesome living and honest taste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#FAF7EF] border border-[#DCE7D6] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#DCE7D6] flex items-center justify-center text-[#234B38]">
              <Heart className="w-5 h-5 text-[#C58A51]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#234B38]">Natural Sweetness</h3>
            <p className="text-xs sm:text-sm text-[#302F29]/75 leading-relaxed">
              Our signature dates milk and fruit drinks draw their richness and sweetness directly from whole
              dates and ripe fruits, eliminating unnecessary artificial sweeteners.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7EF] border border-[#DCE7D6] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#DCE7D6] flex items-center justify-center text-[#234B38]">
              <Sparkles className="w-5 h-5 text-[#234B38]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#234B38]">Cold-Pressed & Fresh</h3>
            <p className="text-xs sm:text-sm text-[#302F29]/75 leading-relaxed">
              Every juice—from vibrant ABC (apple, beetroot, carrot) to traditional amla and soothing
              cucumber—is prepared fresh upon order to protect natural freshness.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7EF] border border-[#DCE7D6] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#DCE7D6] flex items-center justify-center text-[#234B38]">
              <CheckCircle2 className="w-5 h-5 text-[#234B38]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#234B38]">Balanced Indian Roots</h3>
            <p className="text-xs sm:text-sm text-[#302F29]/75 leading-relaxed">
              We celebrate comforting regional flavours like spiced roasted peanut chaat, live sprouted
              moong, and Malnad-inspired kokum beverages with jaggery and cardamom.
            </p>
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            onClick={onGoToMenu}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#234B38] text-white hover:bg-[#193628] font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <span>Explore Aharogyam Menu</span>
            <ArrowRight className="w-4 h-4 text-[#DCE7D6]" />
          </button>
        </div>
      </div>

    </div>
  );
};
