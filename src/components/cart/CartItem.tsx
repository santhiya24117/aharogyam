import React from 'react';
import { CartItem as CartItemType } from '../../types/order';
import { useCart } from '../../context/CartContext';
import { Plus, Minus, Trash2 } from 'lucide-react';

interface CartItemRowProps {
  item: CartItemType;
  compact?: boolean;
}

export const CartItemRow: React.FC<CartItemRowProps> = ({ item, compact = false }) => {
  const { updateQuantity, removeItem } = useCart();
  const lineTotal = item.item.price * item.quantity;

  return (
    <div className="flex items-center gap-3 sm:gap-4 py-3.5 border-b border-[#DCE7D6]/60 last:border-b-0">
      {/* Thumbnail */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-[#FAF7EF] border border-[#DCE7D6] shrink-0 relative">
        <img
          src={item.item.image}
          alt={item.item.name}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info & Controls */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="text-sm font-bold text-[#234B38] leading-tight truncate">
              {item.item.name}
            </h4>
            <span className="text-xs text-[#302F29]/60 block mt-0.5">
              ₹{item.item.price} each
            </span>
          </div>

          <div className="text-right shrink-0">
            <span className="text-sm font-bold text-[#234B38] tabular-nums">
              ₹{lineTotal}
            </span>
          </div>
        </div>

        {/* Stepper & Remove */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-[#DCE7D6] rounded-lg bg-white overflow-hidden shadow-xs">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="w-8 h-8 flex items-center justify-center text-[#234B38] hover:bg-[#FAF7EF] active:bg-[#DCE7D6] transition-colors cursor-pointer"
              aria-label={`Decrease ${item.item.name} quantity`}
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-8 text-center text-xs font-bold text-[#302F29] tabular-nums">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-[#234B38] hover:bg-[#FAF7EF] active:bg-[#DCE7D6] transition-colors cursor-pointer"
              aria-label={`Increase ${item.item.name} quantity`}
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="text-xs text-[#302F29]/60 hover:text-red-700 flex items-center gap-1 transition-colors p-1"
            aria-label={`Remove ${item.item.name}`}
          >
            <Trash2 className="w-3.5 h-3.5" />
            {!compact && <span className="hidden sm:inline">Remove</span>}
          </button>
        </div>
      </div>
    </div>
  );
};
