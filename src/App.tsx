/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar, ActivePage } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { PolicyModal, PolicyType } from './components/PolicyModal';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { MenuCategoryId } from './types/menu';
import { Check, ShoppingBag, X } from 'lucide-react';

function AppContent() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [activeMenuCategory, setActiveMenuCategory] = useState<MenuCategoryId>('all');
  const [policyModalType, setPolicyModalType] = useState<PolicyType>(null);

  const { lastAddedItem, clearLastAddedNotification, openCartDrawer } = useCart();

  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToMenu = (category: MenuCategoryId = 'all') => {
    setActiveMenuCategory(category);
    setActivePage('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7EF] text-[#302F29] font-sans selection:bg-[#DCE7D6] selection:text-[#234B38]">
      {/* Global Navbar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenSearch={() => handleNavigateToMenu('all')}
        onOpenPolicy={(type) => setPolicyModalType(type)}
      />

      {/* Main Page Content Router */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigateToMenu={handleNavigateToMenu}
            onNavigateToStory={() => handleNavigate('story')}
          />
        )}

        {activePage === 'menu' && (
          <MenuPage initialCategory={activeMenuCategory} />
        )}

        {activePage === 'story' && (
          <AboutPage onGoToMenu={() => handleNavigateToMenu('all')} />
        )}

        {activePage === 'reviews' && <ReviewsPage />}

        {activePage === 'contact' && <ContactPage />}

        {activePage === 'cart' && (
          <CartPage
            onGoToMenu={() => handleNavigateToMenu('all')}
            onGoToCheckout={() => handleNavigate('checkout')}
          />
        )}

        {activePage === 'checkout' && (
          <CheckoutPage
            onBackToCart={() => handleNavigate('cart')}
            onGoToMenu={() => handleNavigateToMenu('all')}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPolicy={(type) => setPolicyModalType(type)}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        onGoToCheckout={() => handleNavigate('checkout')}
        onGoToMenu={() => handleNavigateToMenu('all')}
      />

      {/* Legal & Policy Modals */}
      <PolicyModal
        type={policyModalType}
        onClose={() => setPolicyModalType(null)}
      />

      {/* Subtle Add-to-Cart Toast Alert */}
      {lastAddedItem && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-[#234B38] text-[#FAF7EF] p-4 rounded-2xl shadow-xl border border-[#DCE7D6]/30 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200 max-w-sm"
        >
          <div className="w-8 h-8 rounded-full bg-[#193628] flex items-center justify-center text-[#DCE7D6] shrink-0">
            <Check className="w-4 h-4" />
          </div>

          <div className="flex-1 min-w-0 pr-2">
            <h2 className="text-xs font-bold leading-tight truncate">
              {lastAddedItem.name} added
            </h2>
            <p className="text-[11px] text-[#DCE7D6]">Added to your order bag</p>
          </div>

          <button
            onClick={() => {
              clearLastAddedNotification();
              openCartDrawer();
            }}
            className="px-2.5 py-1 rounded-lg bg-[#FAF7EF] text-[#234B38] text-xs font-bold hover:bg-[#DCE7D6] transition-colors shrink-0"
          >
            View Bag
          </button>

          <button
            onClick={clearLastAddedNotification}
            className="text-[#FAF7EF]/60 hover:text-white p-1"
            aria-label="Dismiss notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
