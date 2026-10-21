import React from 'react';
import { useCart } from '../../context/CartContext';
import { CartItemRow } from './CartItem';
import { X, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';

interface CartDrawerProps {
  onGoToCheckout: () => void;
  onGoToMenu: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  onGoToCheckout,
  onGoToMenu,
}) => {
  const { isCartDrawerOpen, closeCartDrawer, items, totalCount, subtotal, clearCart } =
    useCart();

  if (!isCartDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCartDrawer}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7EF] border-l border-[#DCE7D6] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="px-5 py-4 border-b border-[#DCE7D6] bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#234B38]" />
              <h2 className="font-serif text-xl font-bold text-[#234B38]">
                Your Order Bag
              </h2>
              {totalCount > 0 && (
                <span className="bg-[#DCE7D6] text-[#234B38] text-xs font-bold px-2 py-0.5 rounded-full">
                  {totalCount}
                </span>
              )}
            </div>

            <button
              onClick={closeCartDrawer}
              className="p-1.5 rounded-full text-[#302F29]/60 hover:text-[#234B38] hover:bg-[#FAF7EF] transition-colors cursor-pointer"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body items */}
          <div className="flex-1 overflow-y-auto px-5 py-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#DCE7D6]/60 flex items-center justify-center text-[#234B38]">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#234B38]">
                    Your bag is empty
                  </h3>
                  <p className="text-xs text-[#302F29]/70 mt-1 max-w-xs">
                    Explore our wholesome dates milk, refreshing cold juices, and fresh snacks.
                  </p>
                </div>
                <button
                  onClick={() => {
                    closeCartDrawer();
                    onGoToMenu();
                  }}
                  className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#234B38] text-white text-xs font-semibold hover:bg-[#193628] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Browse Full Menu</span>
                </button>
              </div>
            ) : (
              <div className="space-y-1">
                <div className="flex justify-between items-center pb-2">
                  <span className="text-xs text-[#302F29]/60 uppercase tracking-wider font-semibold">
                    Selected Items
                  </span>
                  <button
                    onClick={clearCart}
                    className="text-xs text-[#302F29]/60 hover:text-red-700 transition-colors"
                  >
                    Clear Bag
                  </button>
                </div>
                {items.map((cartItem) => (
                  <CartItemRow key={cartItem.id} item={cartItem} />
                ))}
              </div>
            )}
          </div>

          {/* Footer actions */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#DCE7D6] bg-white space-y-4">
              <div className="space-y-1.5 text-xs text-[#302F29]/80">
                <div className="flex justify-between items-center text-sm font-semibold text-[#234B38]">
                  <span>Item Subtotal</span>
                  <span className="font-serif text-xl font-bold tabular-nums">
                    ₹{subtotal}
                  </span>
                </div>
                <p className="text-[11px] text-[#302F29]/60">
                  Taxes, pickup/delivery confirmation and availability verified via WhatsApp.
                </p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    closeCartDrawer();
                    onGoToCheckout();
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#234B38] text-[#FAF7EF] hover:bg-[#193628] font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-[0.99]"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4 text-[#DCE7D6]" />
                </button>

                <button
                  onClick={closeCartDrawer}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-medium text-[#234B38] hover:bg-[#FAF7EF] transition-colors text-center cursor-pointer"
                >
                  Continue Adding Items
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
