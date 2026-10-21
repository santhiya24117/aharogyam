import React, { useState } from 'react';
import {
  AHAROGYAM_ADDRESS,
  AHAROGYAM_FSSAI,
  AHAROGYAM_PHONE_DISPLAY,
  AHAROGYAM_WHATSAPP_DISPLAY,
  AHAROGYAM_WHATSAPP_NUMBER,
} from '../lib/whatsapp';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, ArrowUpRight, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Aharogyam 3rd Cross 2nd Main E Block Near Corporation Bank Rajajinagar 2nd Stage Bengaluru 560010'
  )}`;

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Aharogyam, my name is ${inquiryName.trim() || 'Guest'}.\n\nMessage: ${inquiryMessage.trim() || 'I would like to inquire about your café hours and special menu.'}`;
    window.open(`https://wa.me/${AHAROGYAM_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-2xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C58A51] block">
          Get In Touch
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#234B38] tracking-tight">
          Contact Aharogyam
        </h1>
        <p className="text-sm sm:text-base text-[#302F29]/75 leading-relaxed">
          Have a question about our ingredients, want to arrange an advance pickup order, or planning to visit?
          Reach us directly via phone or WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Information Cards */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl border border-[#DCE7D6] p-6 sm:p-8 shadow-xs space-y-6">
            
            <div className="flex items-start gap-4 pb-6 border-b border-[#DCE7D6]/60">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7EF] border border-[#DCE7D6] flex items-center justify-center text-[#234B38] shrink-0">
                <MapPin className="w-6 h-6 text-[#C58A51]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-[#234B38]">Café Address</h3>
                <p className="text-sm text-[#302F29]/85 leading-relaxed">
                  {AHAROGYAM_ADDRESS}
                </p>
                <div className="pt-2">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#234B38] hover:underline"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-[#DCE7D6]/60">
              <div className="p-4 rounded-2xl bg-[#FAF7EF] border border-[#DCE7D6] space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C58A51] uppercase">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Telephone</span>
                </div>
                <a
                  href={`tel:${AHAROGYAM_PHONE_DISPLAY}`}
                  className="font-bold text-base text-[#234B38] hover:underline block"
                >
                  {AHAROGYAM_PHONE_DISPLAY}
                </a>
                <span className="text-[11px] text-[#302F29]/60 block">Direct kitchen counter</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7EF] border border-[#DCE7D6] space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C58A51] uppercase">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </div>
                <a
                  href={`https://wa.me/${AHAROGYAM_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-base text-[#234B38] hover:underline block"
                >
                  {AHAROGYAM_WHATSAPP_DISPLAY}
                </a>
                <span className="text-[11px] text-[#302F29]/60 block">Quick ordering & answers</span>
              </div>
            </div>

            {/* Operating hours & standards */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-xs text-[#302F29]/80">
                <Clock className="w-4 h-4 text-[#C58A51] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#234B38] block text-sm">Opening Hours Notice</strong>
                  <p className="mt-0.5 leading-relaxed">
                    Fresh morning oats bowls, afternoon pressed fruit juices, and evening sprouts chaat.
                    Please call or text WhatsApp before visiting to verify specific holiday batches.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#234B38] pt-2">
                <ShieldCheck className="w-4 h-4 text-[#C58A51] shrink-0" />
                <span>
                  FSSAI Food Safety Licence: <strong className="font-mono">{AHAROGYAM_FSSAI}</strong>
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Direct WhatsApp Message Form */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-[#DCE7D6] p-6 sm:p-8 shadow-xs space-y-5">
          <div className="border-b border-[#DCE7D6]/60 pb-3">
            <h3 className="font-serif text-xl font-bold text-[#234B38]">
              Quick Message via WhatsApp
            </h3>
            <p className="text-xs text-[#302F29]/70 mt-1">
              Send a direct query regarding café timings, party orders, or customized ingredients.
            </p>
          </div>

          <form onSubmit={handleSendInquiry} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="inquiryName" className="block text-xs font-semibold text-[#302F29]">
                Your Name
              </label>
              <input
                id="inquiryName"
                type="text"
                value={inquiryName}
                onChange={(e) => setInquiryName(e.target.value)}
                placeholder="e.g. Priya"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE7D6] text-sm text-[#302F29] bg-white focus:outline-none focus:border-[#234B38] focus:ring-2 focus:ring-[#234B38]/20"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="inquiryMessage" className="block text-xs font-semibold text-[#302F29]">
                Your Inquiry / Message
              </label>
              <textarea
                id="inquiryMessage"
                rows={4}
                value={inquiryMessage}
                onChange={(e) => setInquiryMessage(e.target.value)}
                placeholder="Ask about dates milk preparation, current opening hours, or special dietary questions..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE7D6] text-sm text-[#302F29] bg-white focus:outline-none focus:border-[#234B38] focus:ring-2 focus:ring-[#234B38]/20"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-[#234B38] text-white hover:bg-[#193628] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-[#DCE7D6]" />
              <span>Send Message to WhatsApp</span>
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};
