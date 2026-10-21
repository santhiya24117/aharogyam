import React from 'react';
import {
  AHAROGYAM_ADDRESS,
  AHAROGYAM_FSSAI,
  AHAROGYAM_PHONE_DISPLAY,
  AHAROGYAM_WHATSAPP_DISPLAY,
  AHAROGYAM_WHATSAPP_NUMBER,
} from '../../lib/whatsapp';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, ArrowUpRight, Sparkles } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Aharogyam 3rd Cross 2nd Main E Block Near Corporation Bank Rajajinagar 2nd Stage Bengaluru 560010'
  )}`;

  return (
    <section className="py-16 sm:py-24 bg-[#173F32] text-[#FFF9ED] relative overflow-hidden">
      {/* Decorative ambient citrus glow */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#FF8A24]/15 blur-3xl" />
      <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#C9ED56]/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0f2b22] rounded-3xl border-2 border-[#FFD45C]/30 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9ED56] text-[#173F32] text-xs font-black tracking-wider uppercase mb-2 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#173F32]" />
                  <span>VISIT US IN BENGALURU</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#FFF9ED] tracking-tight">
                  Come Say Hello at Aharogyam
                </h2>
                <p className="text-sm sm:text-base text-[#FFF9ED]/80 mt-2 leading-relaxed font-medium">
                  Located near Corporation Bank in Rajajinagar 2nd Stage. Stop by for freshly pressed
                  morning juices, nourishing bowls, or wholesome evening chaats with friends.
                </p>
              </div>

              {/* Address & Contact Cards */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#173F32] border border-[#FFD45C]/25 flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#FF8A24] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-[#FFD45C] block">
                      Café Location
                    </span>
                    <p className="font-medium text-sm text-[#FFF9ED] mt-0.5 leading-snug">
                      {AHAROGYAM_ADDRESS}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#173F32] border border-[#FFD45C]/25 flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#FF8A24] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#FFD45C] block">
                        Telephone
                      </span>
                      <a
                        href={`tel:${AHAROGYAM_PHONE_DISPLAY}`}
                        className="font-bold text-base text-[#FFF9ED] hover:text-[#FF8A24] transition-colors"
                      >
                        {AHAROGYAM_PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#173F32] border border-[#FFD45C]/25 flex items-start gap-3">
                    <MessageCircle className="w-4 h-4 text-[#C9ED56] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#C9ED56] block">
                        WhatsApp Ordering
                      </span>
                      <a
                        href={`https://wa.me/${AHAROGYAM_WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-base text-[#FFF9ED] hover:text-[#C9ED56] transition-colors"
                      >
                        {AHAROGYAM_WHATSAPP_DISPLAY}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Operating hours note (Truthful, editable) */}
                <div className="p-4 rounded-2xl bg-[#173F32] border border-[#FFD45C]/25 flex items-start gap-3 text-xs text-[#FFF9ED]/80">
                  <Clock className="w-4 h-4 text-[#FFD45C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#FFD45C] block">Daily Hours & Batch Availability</span>
                    <p className="mt-0.5 leading-relaxed font-medium">
                      Fresh morning breakfast bowls, afternoon pressed fruit juices, and evening snacks.
                      Call or WhatsApp to confirm daily specialty batches or festival hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#FFF9ED]/70 pt-1">
                  <ShieldCheck className="w-4 h-4 text-[#C9ED56]" />
                  <span>FSSAI License: <strong className="font-mono text-[#FFD45C]">{AHAROGYAM_FSSAI}</strong></span>
                </div>
              </div>

              {/* Action buttons with vibrant styling */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF8A24] hover:bg-[#E67210] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${AHAROGYAM_PHONE_DISPLAY}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#173F32] border border-[#FFD45C]/40 text-[#FFD45C] hover:bg-[#FFD45C] hover:text-[#173F32] font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 8296011530</span>
                </a>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border-2 border-[#FFD45C]/50 shadow-2xl aspect-square bg-[#173F32] relative">
                <img
                  src="/src/assets/images/cafe_natural_ambience_1792587028531.jpg"
                  alt="Aharogyam café dining atmosphere in Rajajinagar"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[11px] font-black text-[#FFD45C] uppercase tracking-wider">
                    Bengaluru Haven
                  </span>
                  <h3 className="font-serif text-2xl font-bold mt-1 text-[#FFF9ED]">
                    Rajajinagar 2nd Stage
                  </h3>
                  <p className="text-xs text-[#FFF9ED]/80 mt-1">
                    Near Corporation Bank · Convenient parking & relaxed neighbourhood vibe
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
