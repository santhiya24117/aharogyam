import React, { useState } from 'react';
import { MenuItem } from '../../types/menu';
import { useCart } from '../../context/CartContext';
import { Plus, Check, Utensils, AlertCircle } from 'lucide-react';

interface ProductCardProps {
  item: MenuItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const { addItem, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const existingInCart = items.find((cartItem) => cartItem.id === item.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(item, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <article className="group bg-white rounded-2xl border-2 border-[#FFD45C]/35 overflow-hidden flex flex-col justify-between hover:border-[#FF8A24] hover:shadow-xl transition-all duration-300 h-full">
      <div>
        {/* Responsive Image Frame with consistent 4:3 Aspect Ratio */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FFF9ED]">
          {!imageError ? (
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-3 bg-[#FFF4E0] text-[#173F32] text-center border-b border-[#FFD45C]/50">
              <div className="w-10 h-10 rounded-full bg-[#FFD45C] flex items-center justify-center mb-1">
                <Utensils className="w-5 h-5 text-[#173F32]" />
              </div>
              <span className="text-[11px] font-bold text-[#173F32] line-clamp-1">
                {item.name}
              </span>
              <span className="text-[10px] text-[#252420]/70 font-medium">
                Freshly prepared
              </span>
            </div>
          )}

          {/* Availability / Dietary status tag */}
          <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1 max-w-[85%]">
            {item.dietaryLabels.slice(0, 1).map((label, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-full bg-[#C9ED56] text-[9px] sm:text-[10px] font-black text-[#173F32] shadow-sm uppercase tracking-wider truncate"
              >
                {label}
              </span>
            ))}
          </div>

          {/* Current In-Cart Count Badge */}
          {existingInCart && (
            <div className="absolute top-2.5 right-2.5 bg-[#FF8A24] text-white text-[10px] sm:text-[11px] font-black px-2 py-0.5 rounded-full shadow-md tabular-nums">
              {existingInCart.quantity} in bag
            </div>
          )}
        </div>

        {/* Content details scaled for mobile & desktop */}
        <div className="p-3 sm:p-4 md:p-5 flex flex-col">
          <div className="flex items-center gap-1 text-[10px] sm:text-xs text-[#FF8A24] font-black tracking-wider uppercase truncate">
            <span>{item.categoryName}</span>
          </div>

          <h3 className="font-serif text-sm sm:text-base md:text-lg font-black text-[#173F32] leading-tight sm:leading-snug mt-1 group-hover:text-[#FF8A24] transition-colors break-words">
            {item.name}
          </h3>

          <p className="text-[11px] sm:text-xs text-[#252420]/75 font-medium mt-1 sm:mt-1.5 line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          {item.servingInfo && (
            <span className="text-[10px] text-[#252420]/55 mt-1 hidden sm:block truncate">
              {item.servingInfo}
            </span>
          )}
        </div>
      </div>

      {/* Card bottom bar: Price & Add CTA scaled gracefully */}
      <div className="px-3 pb-3 pt-2 sm:px-4 sm:pb-4 md:px-5 md:pb-5 flex items-center justify-between gap-1.5 border-t border-[#FFD45C]/30 mt-auto">
        <div className="flex flex-col min-w-0">
          <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-wider text-[#252420]/50">
            Price
          </span>
          <span className="font-serif text-base sm:text-xl md:text-2xl font-black text-[#173F32] tabular-nums leading-none">
            ₹{item.price}
          </span>
        </div>

        {item.available ? (
          <button
            onClick={handleAddToCart}
            className={`flex items-center justify-center gap-1 min-h-[38px] sm:min-h-[42px] px-3 py-1.5 sm:px-4 sm:py-2 md:px-4 md:py-2.5 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all cursor-pointer shrink-0 shadow-sm ${
              justAdded
                ? 'bg-[#438B49] text-white'
                : 'bg-[#173F32] text-[#FFF9ED] hover:bg-[#FF8A24] hover:text-white active:scale-95'
            }`}
            aria-label={`Add ${item.name} to order bag`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFF9ED]" />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Add to Bag</span>
                <span className="sm:hidden">Add</span>
              </>
            )}
          </button>
        ) : (
          <span className="inline-flex items-center gap-1 text-[10px] text-[#252420]/50">
            <AlertCircle className="w-3 h-3" />
            <span className="hidden sm:inline">Unavailable</span>
          </span>
        )}
      </div>
    </article>
  );
};
