import React from 'react';
import { useCart } from '../../context/CartContext';
import { Info, ShieldCheck } from 'lucide-react';

interface CartSummaryProps {
  fulfilmentMethod?: 'pickup' | 'delivery';
  showCheckoutButton?: boolean;
  onProceed?: () => void;
  proceedLabel?: string;
  disabled?: boolean;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  fulfilmentMethod = 'pickup',
  showCheckoutButton = false,
  onProceed,
  proceedLabel = 'Proceed to Checkout',
  disabled = false,
}) => {
  const { subtotal, totalCount } = useCart();

  return (
    <div className="bg-white rounded-2xl border border-[#DCE7D6] p-5 sm:p-6 shadow-xs space-y-4">
      <h3 className="font-serif text-lg font-bold text-[#234B38] border-b border-[#DCE7D6]/60 pb-3">
        Order Summary
      </h3>

      <div className="space-y-2.5 text-sm text-[#302F29]/80">
        <div className="flex justify-between items-center">
          <span>Items in Bag ({totalCount})</span>
          <span className="font-medium tabular-nums text-[#302F29]">₹{subtotal}</span>
        </div>

        <div className="flex justify-between items-center text-xs">
          <span>Fulfilment Type</span>
          <span className="font-medium text-[#234B38] capitalize">
            {fulfilmentMethod === 'pickup' ? 'Self Pickup (Free)' : 'Delivery'}
          </span>
        </div>

        {fulfilmentMethod === 'delivery' && (
          <div className="flex justify-between items-center text-xs text-[#302F29]/70">
            <span>Delivery Fee</span>
            <span className="italic">Confirmed by café</span>
          </div>
        )}

        <div className="pt-3 border-t border-[#DCE7D6] flex justify-between items-baseline">
          <span className="font-semibold text-base text-[#234B38]">Item Subtotal</span>
          <span className="font-serif text-2xl font-bold text-[#234B38] tabular-nums">
            ₹{subtotal}
          </span>
        </div>
      </div>

      <div className="p-3 bg-[#FAF7EF] rounded-xl border border-[#DCE7D6]/80 flex items-start gap-2.5 text-xs text-[#302F29]/75 leading-relaxed">
        <Info className="w-4 h-4 text-[#C58A51] shrink-0 mt-0.5" />
        <p>
          Final amount, product availability, and delivery charges (if applicable) are confirmed
          directly by Aharogyam via WhatsApp before preparation begins.
        </p>
      </div>

      {showCheckoutButton && (
        <button
          onClick={onProceed}
          disabled={disabled || totalCount === 0}
          className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer ${
            disabled || totalCount === 0
              ? 'bg-[#302F29]/15 text-[#302F29]/40 cursor-not-allowed'
              : 'bg-[#234B38] text-[#FAF7EF] hover:bg-[#193628] active:scale-[0.99]'
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-[#DCE7D6]" />
          <span>{proceedLabel}</span>
        </button>
      )}
    </div>
  );
};
