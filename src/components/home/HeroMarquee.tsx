import React from 'react';

const MARQUEE_ITEMS = [
  'JUICY SIPS',
  'CREAMY OATS BOWLS',
  'CHAAT WITH A TWIST',
  'DATES THAT DELIGHT',
  'FRESHNESS IN EVERY GLASS',
  'FLAVOUR IN EVERY SPOON',
  'YOUR FAVOURITES, MADE FRESH',
  'SOMETHING DELICIOUS AWAITS',
];

export const HeroMarquee: React.FC = () => {
  return (
    <div
      className="relative w-full bg-[#173F32] overflow-hidden select-none border-y border-[#234B38]/60 h-[52px] md:h-[68px] flex items-center shadow-inner"
      role="region"
      aria-label="Aharogyam healthy food highlights marquee"
    >
      {/* Edge gradient scrims for gentle entry & exit */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 sm:w-20 bg-gradient-to-r from-[#173F32] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 sm:w-20 bg-gradient-to-l from-[#173F32] to-transparent" />

      {/* Infinite scrolling track container with hover pause */}
      <div className="flex w-max animate-marquee-smooth hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
        {/* Render sequence 1 */}
        <div className="flex items-center shrink-0">
          {MARQUEE_ITEMS.map((item, index) => (
            <div key={`seq1-${index}`} className="flex items-center">
              <span className="text-[#FFF9ED] font-sans font-bold text-xs sm:text-sm md:text-base tracking-wider uppercase whitespace-nowrap px-4 sm:px-6">
                {item}
              </span>
              <span
                aria-hidden="true"
                className="text-[#E5B65C] text-sm sm:text-base font-extrabold select-none inline-block px-1"
              >
                ✳
              </span>
            </div>
          ))}
        </div>

        {/* Render duplicate sequence 2 for seamless 0-gap infinite loop */}
        <div aria-hidden="true" className="flex items-center shrink-0">
          {MARQUEE_ITEMS.map((item, index) => (
            <div key={`seq2-${index}`} className="flex items-center">
              <span className="text-[#FFF9ED] font-sans font-bold text-xs sm:text-sm md:text-base tracking-wider uppercase whitespace-nowrap px-4 sm:px-6">
                {item}
              </span>
              <span
                aria-hidden="true"
                className="text-[#E5B65C] text-sm sm:text-base font-extrabold select-none inline-block px-1"
              >
                ✳
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
