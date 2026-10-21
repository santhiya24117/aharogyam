import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Phone, MapPin, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { AHAROGYAM_PHONE_DISPLAY } from '../../lib/whatsapp';

export type ActivePage = 'home' | 'menu' | 'story' | 'reviews' | 'contact' | 'cart' | 'checkout';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onOpenSearch?: () => void;
  onOpenPolicy?: (type: 'privacy' | 'terms' | 'refund') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenSearch,
}) => {
  const { totalCount, openCartDrawer } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: ActivePage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: ActivePage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'story', label: 'Our Story' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top vibrant announcement bar */}
      <div className="bg-[#173F32] text-[#FFF9ED] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-3 sm:gap-4 border-b border-[#234B38]">
        <div className="flex items-center gap-1.5 font-bold text-[#FFD45C]">
          <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
          <span>Fresh Cold-Pressed Juices & Healthy Bowls</span>
        </div>
        <span className="hidden sm:inline text-[#C9ED56]/60">·</span>
        <span className="hidden sm:inline text-[#FFF9ED]/90">Rajajinagar 2nd Stage, Bengaluru</span>
        <span className="hidden md:inline text-[#C9ED56]/60">·</span>
        <a
          href={`tel:${AHAROGYAM_PHONE_DISPLAY}`}
          className="hidden md:inline-flex items-center gap-1.5 text-[#FFD45C] hover:text-[#FFF9ED] font-semibold transition-colors"
        >
          <Phone className="w-3 h-3 text-[#FF8A24]" />
          <span>82960 11530</span>
        </a>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#FFF9ED]/95 backdrop-blur-md border-b border-[#FF8A24]/15 shadow-xs transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Zone 1: Brand Wordmark with vibrant badge */}
            <button
              onClick={() => handleNavClick('home')}
              className="text-left group cursor-pointer focus:outline-none shrink-0"
              aria-label="Aharogyam Home"
            >
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#173F32] group-hover:text-[#FF8A24] transition-colors leading-none">
                  Aharogyam
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-[#C9ED56] text-[#173F32] text-[10px] font-black uppercase tracking-wider">
                  Fresh
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase font-bold text-[#FF8A24] block mt-1">
                Healthy Vegetarian Café
              </span>
            </button>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-sm font-bold tracking-wide transition-colors cursor-pointer py-1 relative whitespace-nowrap ${
                      isActive
                        ? 'text-[#FF8A24]'
                        : 'text-[#252420]/80 hover:text-[#173F32]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF8A24] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Actions (Search & Cart) */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Quick Search trigger */}
              <button
                onClick={() => {
                  if (onOpenSearch) onOpenSearch();
                  else handleNavClick('menu');
                }}
                className="p-2.5 rounded-full text-[#173F32] hover:bg-[#FFD45C]/30 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF8A24]/30"
                aria-label="Search menu items"
                title="Search menu"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Cart Drawer Trigger Button in bright citrus color */}
              <button
                onClick={openCartDrawer}
                className="relative flex items-center gap-2 bg-[#FF8A24] hover:bg-[#E67210] text-white px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full text-sm font-bold transition-transform active:scale-95 shadow-md shadow-[#FF8A24]/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF8A24]/40"
                aria-label={`View cart with ${totalCount} items`}
              >
                <ShoppingBag className="w-4 h-4 text-[#FFF9ED]" />
                <span className="hidden sm:inline">Order Bag</span>
                {totalCount > 0 && (
                  <span className="inline-flex items-center justify-center bg-[#173F32] text-[#FFF9ED] text-xs font-black w-5 h-5 rounded-full tabular-nums">
                    {totalCount}
                  </span>
                )}
              </button>

              {/* Mobile hamburger menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-[#173F32] hover:bg-[#FFD45C]/30 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFF9ED] border-b border-[#FF8A24]/20 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                  activePage === link.id
                    ? 'bg-[#FF8A24] text-white'
                    : 'text-[#173F32] hover:bg-[#FFD45C]/30'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-3 border-t border-[#FF8A24]/20 flex flex-col gap-2">
              <button
                onClick={() => {
                  handleNavClick('cart');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between w-full px-4 py-3 bg-white border border-[#FF8A24]/30 rounded-xl text-sm font-bold text-[#173F32]"
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#FF8A24]" />
                  <span>Review Cart & Checkout</span>
                </span>
                <span className="bg-[#FF8A24] text-white text-xs px-2.5 py-0.5 rounded-full font-bold">
                  {totalCount}
                </span>
              </button>

              <div className="px-4 pt-2 text-xs text-[#252420]/75 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FF8A24]" />
                <span>Rajajinagar 2nd Stage, Bengaluru</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
