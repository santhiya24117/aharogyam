import React from 'react';
import { MenuCategoryId } from '../../types/menu';
import { ArrowUpRight, Sparkles } from 'lucide-react';

import juiceImage from '../../assets/images/cinematic_juices_spread_1792588718918.jpg';
import datesMilkImage from '../../assets/images/dates_milk_shake_1792587026685.jpg';
import healthyBowlImage from '../../assets/images/hero_healthy_bowl_1792587025479.jpg';
import peanutChaatImage from '../../assets/images/peanut_chaat_bowl_1792588718374.jpg';

interface CategorySectionProps {
  onSelectCategory: (category: MenuCategoryId) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  onSelectCategory,
}) => {
  const categories = [
    {
      id: 'fruit-juices' as MenuCategoryId,
      title: 'Fruit Juices',
      tagline: 'COLD-PRESSED DAILY',
      description:
        'Refreshing watermelon, tangy kokum, and pure seasonal citrus pressed live upon order.',
      image: juiceImage,
      priceFrom: 'From ₹50',
      badgeBg: 'bg-[#FF8A24] text-white',
      cardBg: 'bg-gradient-to-b from-[#FFF2E5] to-[#FFE4CC]',
      borderColor: 'border-[#FF8A24]/40 hover:border-[#FF8A24]',
      accentColor: 'text-[#FF8A24]',
      arrowBg: 'group-hover:bg-[#FF8A24] group-hover:text-white',
    },
    {
      id: 'dates-milk' as MenuCategoryId,
      title: 'Dates Milk & Shakes',
      tagline: 'NATURAL SWEETNESS',
      description:
        'Rich Medjool dates blended with cold milk, banana, avocado, dark chocolate, and roasted nuts.',
      image: datesMilkImage,
      priceFrom: 'From ₹120',
      badgeBg: 'bg-[#C58A51] text-white',
      cardBg: 'bg-gradient-to-b from-[#FAF0E6] to-[#F2DEC9]',
      borderColor: 'border-[#C58A51]/40 hover:border-[#C58A51]',
      accentColor: 'text-[#8C5326]',
      arrowBg: 'group-hover:bg-[#C58A51] group-hover:text-white',
    },
    {
      id: 'specials' as MenuCategoryId,
      title: 'Aharogyam Bowls',
      tagline: 'WHOLESOME MORNINGS',
      description:
        'Creamy date milk paired with rolled oats, fresh sliced figs, and pomegranate seeds.',
      image: healthyBowlImage,
      priceFrom: 'From ₹160',
      badgeBg: 'bg-[#FFD45C] text-[#173F32]',
      cardBg: 'bg-gradient-to-b from-[#FFF9E6] to-[#FFF0B8]',
      borderColor: 'border-[#FFD45C] hover:border-[#E5B65C]',
      accentColor: 'text-[#173F32]',
      arrowBg: 'group-hover:bg-[#173F32] group-hover:text-white',
    },
    {
      id: 'snacks-chaat' as MenuCategoryId,
      title: 'Chaat & Sprouts',
      tagline: 'CRUNCHY & SPICED',
      description:
        'Roasted peanut chaat, steamed sprouted pulses, and crunchy vegetables with fresh herbs.',
      image: peanutChaatImage,
      priceFrom: 'From ₹90',
      badgeBg: 'bg-[#F47C8B] text-white',
      cardBg: 'bg-gradient-to-b from-[#FFF0F2] to-[#FFE0E4]',
      borderColor: 'border-[#F47C8B]/40 hover:border-[#F47C8B]',
      accentColor: 'text-[#C9384E]',
      arrowBg: 'group-hover:bg-[#F47C8B] group-hover:text-white',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFF9ED] border-b border-[#FF8A24]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFD45C] text-[#173F32] text-xs font-black tracking-wider uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
              <span>COLOURFUL MENUS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#173F32] tracking-tight">
              Flavour By Category
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#252420]/80 font-medium max-w-md leading-relaxed">
            Every category has its own distinct personality—from citrus energy
            and dates sweetness to hearty grain bowls and savoury street-style
            crunch.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              aria-label={`Explore ${cat.title}`}
              className={`group relative rounded-3xl border-2 ${cat.borderColor} ${cat.cardBg} overflow-hidden flex flex-col justify-between text-left cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F32] focus-visible:ring-offset-2`}
            >
              <div className="w-full">
                {/* Image Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/50">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />

                  {/* Category Pill */}
                  <div
                    className={`absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md ${cat.badgeBg}`}
                  >
                    {cat.tagline}
                  </div>

                  {/* Price Tag */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-[#173F32] text-[11px] font-black px-2.5 py-1 rounded-full shadow-sm border border-black/10 tabular-nums">
                    {cat.priceFrom}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-black text-[#173F32] leading-snug transition-colors group-hover:text-[#FF8A24]">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-[#252420]/80 leading-relaxed font-medium">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="w-full p-5 pt-0 flex items-center justify-between text-xs font-black text-[#173F32] transition-colors group-hover:text-[#FF8A24]">
                <span>Explore Category</span>

                <span
                  className={`w-8 h-8 rounded-full bg-white text-[#173F32] transition-colors flex items-center justify-center border border-black/10 shadow-sm ${cat.arrowBg}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};