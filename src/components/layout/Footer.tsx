import React from 'react';
import { ActivePage } from './Navbar';
import {
  AHAROGYAM_ADDRESS,
  AHAROGYAM_FSSAI,
  AHAROGYAM_PHONE_DISPLAY,
  AHAROGYAM_WHATSAPP_DISPLAY,
  AHAROGYAM_WHATSAPP_NUMBER,
} from '../../lib/whatsapp';
import { BUSINESS_RATING_INFO } from '../../data/reviews';
import { Phone, MessageCircle, MapPin, Award, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  onOpenPolicy: (type: 'privacy' | 'terms' | 'refund') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPolicy }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Aharogyam 3rd Cross 2nd Main E Block Near Corporation Bank Rajajinagar 2nd Stage Bengaluru 560010'
  )}`;

  return (
    <footer className="bg-[#173F32] text-[#FFF9ED] pt-16 pb-12 border-t border-[#234B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#FFF9ED]/15">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif text-3xl font-black tracking-tight text-[#FFF9ED] block">
                Aharogyam
              </span>
              <span className="text-xs tracking-widest uppercase font-bold text-[#FF8A24] block mt-1">
                Healthy Vegetarian Food & Beverages
              </span>
            </div>

            <p className="text-sm text-[#FFF9ED]/80 leading-relaxed max-w-sm font-medium">
              Wholesome oats bowls, nutrient-rich date-based drinks, freshly pressed juices, and authentic
              Indian snacks, crafted for everyday vitality in Rajajinagar, Bengaluru.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#FFF9ED]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0f2b22] border border-[#FFD45C]/30 text-[#FFD45C] font-bold">
                <Award className="w-3.5 h-3.5 text-[#FF8A24]" />
                <span>{BUSINESS_RATING_INFO.score} ★ on {BUSINESS_RATING_INFO.platform} ({BUSINESS_RATING_INFO.totalReviews} reviews)</span>
              </span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black tracking-widest uppercase text-[#FFD45C]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#FF8A24] text-[#FFF9ED]/80 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-[#FF8A24] text-[#FFD45C] font-bold transition-colors cursor-pointer"
                >
                  Full Menu & Prices
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="hover:text-[#FF8A24] text-[#FFF9ED]/80 transition-colors cursor-pointer"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-[#FF8A24] text-[#FFF9ED]/80 transition-colors cursor-pointer"
                >
                  Guest Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cart')}
                  className="hover:text-[#FF8A24] text-[#FFF9ED]/80 transition-colors cursor-pointer"
                >
                  Order Bag & Checkout
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black tracking-widest uppercase text-[#FFD45C]">
              Visit & Contact
            </h4>
            <div className="space-y-3 text-sm text-[#FFF9ED]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF8A24] shrink-0 mt-1" />
                <div>
                  <p className="leading-snug">{AHAROGYAM_ADDRESS}</p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#C9ED56] hover:underline mt-1 font-bold"
                  >
                    <span>Get Google Maps directions</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF8A24] shrink-0" />
                <a
                  href={`tel:${AHAROGYAM_PHONE_DISPLAY}`}
                  className="hover:text-[#FF8A24] hover:underline font-medium"
                >
                  Call: {AHAROGYAM_PHONE_DISPLAY}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#C9ED56] shrink-0" />
                <a
                  href={`https://wa.me/${AHAROGYAM_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9ED56] hover:underline font-medium"
                >
                  WhatsApp: {AHAROGYAM_WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          {/* Trust & Compliance */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black tracking-widest uppercase text-[#FFD45C]">
              Food Standards
            </h4>
            <div className="p-4 rounded-2xl bg-[#0f2b22] border border-[#FFD45C]/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-black text-[#FFF9ED]">
                <ShieldCheck className="w-4 h-4 text-[#C9ED56]" />
                <span>FSSAI Certified Café</span>
              </div>
              <p className="text-xs text-[#FFD45C] font-mono">
                Licence No: {AHAROGYAM_FSSAI}
              </p>
              <p className="text-[11px] text-[#FFF9ED]/70 leading-relaxed font-medium">
                Vegetarian kitchen adhering to stringent hygiene and fresh food handling protocols.
              </p>
            </div>

            <div className="pt-1">
              <a
                href={`https://wa.me/${AHAROGYAM_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  'Hello Aharogyam, I have a quick query regarding your menu and timings.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-full bg-[#FF8A24] hover:bg-[#E67210] text-white text-xs font-black uppercase tracking-wider transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Chat with Café on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar with legal & policy links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF9ED]/65">
          <p>© {new Date().getFullYear()} Aharogyam. All rights reserved. Rajajinagar, Bengaluru.</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-[#FFF9ED] transition-colors cursor-pointer underline-offset-2 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-[#FFF9ED] transition-colors cursor-pointer underline-offset-2 hover:underline"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onOpenPolicy('refund')}
              className="hover:text-[#FFF9ED] transition-colors cursor-pointer underline-offset-2 hover:underline"
            >
              Cancellation & Ordering Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
