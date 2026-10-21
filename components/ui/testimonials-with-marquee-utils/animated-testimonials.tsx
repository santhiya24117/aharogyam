import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export interface TestimonialItem {
  name: string;
  handle?: string;
  description: string;
  image: string;
  rating?: number;
  highlight?: string;
}

interface AnimatedTestimonialsProps {
  data: TestimonialItem[];
  className?: string;
}

export function AnimatedTestimonials({ data, className = '' }: AnimatedTestimonialsProps) {
  // Duplicate array to enable seamless infinite marquee scroll
  const marqueeList = [...data, ...data];

  return (
    <div className={`relative w-full overflow-hidden py-4 ${className}`}>
      {/* Left & Right subtle edge fade gradient with brand Warm Ivory */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 md:w-32 bg-gradient-to-r from-[#FAF7EF] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 md:w-32 bg-gradient-to-l from-[#FAF7EF] to-transparent" />

      <div className="flex w-max gap-6 animate-canopy-x hover:[animation-play-state:paused]" style={{ '--duration': '40s' } as React.CSSProperties}>
        {marqueeList.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="w-[300px] sm:w-[360px] md:w-[400px] shrink-0 rounded-2xl bg-white border border-[#DCE7D6] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-[#C58A51]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C58A51]" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-[#234B38]/20" />
              </div>

              {item.highlight && (
                <div className="text-xs font-semibold tracking-wider text-[#234B38] uppercase mb-2">
                  {item.highlight}
                </div>
              )}

              <p className="text-sm md:text-base text-[#302F29]/90 leading-relaxed italic mb-6">
                "{item.description}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#DCE7D6]/60">
              <img
                src={item.image}
                alt={item.name}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-10 h-10 rounded-full object-cover border border-[#234B38]/20 bg-[#FAF7EF]"
              />
              <div>
                <h4 className="text-sm font-semibold text-[#234B38]">
                  {item.name}
                </h4>
                {item.handle && (
                  <p className="text-xs text-[#302F29]/60">
                    {item.handle}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
