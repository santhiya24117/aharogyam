import React from 'react';
import { useCart } from '../context/CartContext';
import { CartItemRow } from '../components/cart/CartItem';
import { CartSummary } from '../components/cart/CartSummary';
import { ShoppingBag, ArrowLeft, Trash2 } from 'lucide-react';

interface CartPageProps {
  onGoToMenu: () => void;
  onGoToCheckout: () => void;
}

export const CartPage: React.FC<CartPageProps> = ({ onGoToMenu, onGoToCheckout }) => {
  const { items, totalCount, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="py-16 sm:py-24 max-w-xl mx-auto px-4 text-center">
        <div className="bg-white rounded-3xl border border-[#DCE7D6] p-8 sm:p-12 space-y-5 shadow-xs">
          <div className="w-20 h-20 rounded-full bg-[#FAF7EF] border border-[#DCE7D6] flex items-center justify-center mx-auto text-[#234B38]">
            <ShoppingBag className="w-10 h-10 opacity-70" />
          </div>
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#234B38]">
              Your Bag is Empty
            </h1>
            <p className="text-sm text-[#302F29]/75 mt-2 leading-relaxed">
              You haven't added any items to your order yet. Explore our handcrafted dates milk drinks,
              fresh cold-pressed juices, and healthy sprouts chaat.
            </p>
          </div>
          <button
            onClick={onGoToMenu}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#234B38] text-white text-sm font-semibold hover:bg-[#193628] transition-all shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore Aharogyam Menu</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <button
            onClick={onGoToMenu}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#234B38] hover:underline mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Continue Browsing Menu</span>
          </button>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#234B38]">
            Review Order Bag ({totalCount} {totalCount === 1 ? 'item' : 'items'})
          </h1>
        </div>

        <button
          onClick={clearCart}
          className="inline-flex items-center gap-1.5 text-xs text-[#302F29]/70 hover:text-red-700 transition-colors p-2 cursor-pointer"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Clear Bag</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Items List */}
        <div className="lg:col-span-7 xl:col-span-8 bg-white rounded-2xl border border-[#DCE7D6] p-5 sm:p-7 shadow-xs">
          <div className="divide-y divide-[#DCE7D6]/60">
            {items.map((cartItem) => (
              <CartItemRow key={cartItem.id} item={cartItem} />
            ))}
          </div>
        </div>

        {/* Summary Side card */}
        <div className="lg:col-span-5 xl:col-span-4 sticky top-24">
          <CartSummary
            showCheckoutButton
            onProceed={onGoToCheckout}
            proceedLabel="Proceed to Customer Details"
          />
        </div>
      </div>
    </div>
  );
};
