import React from 'react';
import { ArrowRight, Star, ShieldCheck, Sparkles, MessageCircle, Heart } from 'lucide-react';
import { BUSINESS_RATING_INFO } from '../../data/reviews';
import { AHAROGYAM_FSSAI, AHAROGYAM_WHATSAPP_NUMBER } from '../../lib/whatsapp';

interface HeroSectionProps {
  onExploreMenu: () => void;
  onOurStory: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMenu,
  onOurStory,
}) => {
  const whatsappUrl = `https://wa.me/${AHAROGYAM_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Aharogyam, I would like to order fresh juices and food.'
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF9ED] via-[#FFF4E0] to-[#FFE9CC] pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#FF8A24]/20">
      
      {/* Decorative bright citrus ambient glows */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#FF8A24]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#C9ED56]/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Hero: Desktop 2-column, Mobile stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Confident, Oversized Brand Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Bright Category Tag Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9ED56] text-[#173F32] text-xs font-black tracking-wider uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#173F32]" />
              <span>COLOURFUL · COLD-PRESSED · 100% NATURAL</span>
            </div>

            {/* Oversized Confident Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#173F32] tracking-tight leading-[1.05] text-balance">
              Bursting with Life. <br />
              <span className="text-[#FF8A24] italic font-normal">Taste the Freshness.</span>
            </h1>

            {/* Short Supporting Prose */}
            <p className="text-base sm:text-lg text-[#252420]/85 font-medium leading-relaxed max-w-xl">
              From sun-ripened cold-pressed juices to creamy date milkshakes and fruit-packed oats bowls.
              Pure ingredients, zero refined sugar, crafted fresh daily in Rajajinagar.
            </p>

            {/* High-Intent Vibrant CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FF8A24] hover:bg-[#E67210] text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#FF8A24]/25 active:scale-95 cursor-pointer"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 text-[#FFF9ED]" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#173F32] hover:bg-[#0f2b22] text-[#FFF9ED] font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#C9ED56]" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Social Proof & Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-[#252420]/80 border-t border-[#FF8A24]/20">
              <div className="flex items-center gap-1.5 font-bold">
                <div className="flex text-[#FF8A24]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF8A24]" />
                  ))}
                </div>
                <span className="text-[#173F32] text-sm">{BUSINESS_RATING_INFO.score}</span>
                <span>({BUSINESS_RATING_INFO.totalReviews} Google Reviews)</span>
              </div>

              <span className="hidden sm:inline text-[#FF8A24]/40">|</span>

              <div className="flex items-center gap-1.5 font-semibold text-[#173F32]">
                <ShieldCheck className="w-4 h-4 text-[#438B49]" />
                <span>FSSAI Lic: {AHAROGYAM_FSSAI}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Colorful Beverage & Food Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#FFD45C] shadow-2xl aspect-[16/11] sm:aspect-[4/3] bg-gradient-to-tr from-[#FF8A24]/20 to-[#C9ED56]/20">
              <img
                src="/src/assets/images/cinematic_juices_spread_1792588718918.jpg"
                alt="Vibrant colourful juices and refreshing beverages at Aharogyam"
                referrerPolicy="no-referrer"
                loading="eager"
                className="w-full h-full object-cover"
              />

              {/* Citrus floating badge */}
              <div className="absolute top-4 right-4 bg-[#FF8A24] text-white font-extrabold text-xs px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD45C]" />
                <span>Cold-Pressed Fresh</span>
              </div>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md border border-[#FFD45C] rounded-2xl p-4 shadow-xl max-w-xs">
                <div className="flex items-center gap-2 text-[11px] font-black text-[#FF8A24] uppercase tracking-wider">
                  <Heart className="w-3.5 h-3.5 fill-[#FF8A24]" />
                  <span>Fresh Juice Trio</span>
                </div>
                <p className="font-serif text-base font-bold text-[#173F32] mt-0.5">
                  Orange · ABC Red · Green Detox
                </p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#FF8A24]/20 text-xs">
                  <span className="text-[#252420]/70 font-medium">No added sugar</span>
                  <span className="font-black text-[#FF8A24] text-sm tabular-nums">From ₹50</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Item Bright Proof Strip below hero */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-white rounded-3xl border-2 border-[#FFD45C] shadow-md">
          <div className="p-2 space-y-1">
            <span className="text-[11px] font-black text-[#FF8A24] uppercase tracking-wider block">
              100% PURE
            </span>
            <h4 className="font-serif text-lg font-bold text-[#173F32]">Vegetarian Kitchen</h4>
            <p className="text-xs text-[#252420]/75">Wholesome plant and pure dairy goodness without artificial shortcuts.</p>
          </div>
          
          <div className="p-2 space-y-1 border-l-0 sm:border-l sm:border-[#FFD45C] sm:pl-4">
            <span className="text-[11px] font-black text-[#438B49] uppercase tracking-wider block">
              NATURAL SWEETNESS
            </span>
            <h4 className="font-serif text-lg font-bold text-[#173F32]">Date-Based Shakes</h4>
            <p className="text-xs text-[#252420]/75">Sweetened naturally with premium whole dates, never refined white sugar.</p>
          </div>
          
          <div className="p-2 space-y-1 border-t sm:border-t-0 sm:border-l sm:border-[#FFD45C] pt-3 sm:pt-2 sm:pl-4">
            <span className="text-[11px] font-black text-[#FF8A24] uppercase tracking-wider block">
              PRESSED DAILY
            </span>
            <h4 className="font-serif text-lg font-bold text-[#173F32]">Fresh To Order</h4>
            <p className="text-xs text-[#252420]/75">Every glass pressed live upon order to capture maximum vitality and flavour.</p>
          </div>
          
          <div className="p-2 space-y-1 border-t sm:border-t-0 sm:border-l sm:border-[#FFD45C] pt-3 sm:pt-2 sm:pl-4">
            <span className="text-[11px] font-black text-[#173F32] uppercase tracking-wider block">
              POCKET FRIENDLY
            </span>
            <h4 className="font-serif text-lg font-bold text-[#173F32]">Affordable Everyday</h4>
            <p className="text-xs text-[#252420]/75">Nutrient-dense items comfortably priced between ₹50 and ₹200.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
