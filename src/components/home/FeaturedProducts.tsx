import React from 'react';
import { MENU_ITEMS } from '../../data/menu';
import { ProductCard } from '../menu/ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedProductsProps {
  onViewAllMenu: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onViewAllMenu }) => {
  const featuredItems = MENU_ITEMS.filter((item) => item.featured).slice(0, 6);

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAF2] border-b border-[#C9ED56]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C9ED56] text-[#173F32] text-xs font-black tracking-wider uppercase mb-2 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
              <span>CUSTOMER FAVOURITES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#173F32] tracking-tight">
              Most Loved at Aharogyam
            </h2>
          </div>

          <button
            onClick={onViewAllMenu}
            className="inline-flex items-center gap-2 text-sm font-extrabold text-[#FF8A24] hover:text-[#E67210] transition-colors cursor-pointer group"
          >
            <span>Browse All {MENU_ITEMS.length} Menu Items</span>
            <ArrowRight className="w-4 h-4 text-[#FF8A24] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Responsive Grid: 2 cards on mobile, 2-3 on tablet, 3 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
          {featuredItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onViewAllMenu}
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-[#173F32] hover:bg-[#0f2b22] text-[#FFF9ED] font-black text-sm uppercase tracking-wider transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            <span>View Full Menu & Order Online</span>
            <ArrowRight className="w-4 h-4 text-[#C9ED56]" />
          </button>
        </div>

      </div>
    </section>
  );
};
