import React from 'react';
import { CUSTOMER_REVIEWS, BUSINESS_RATING_INFO } from '../data/reviews';
import TestimonialsMarquee from '../components/ui/testimonials-with-marquee';
import { Star, Quote, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ReviewsPage: React.FC = () => {
  return (
    <div className="py-10 sm:py-16 space-y-16">
      
      {/* Top Banner & Rating Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#DCE7D6] p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C58A51] block">
                Verified Visitor Feedback
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#234B38] tracking-tight">
                Guest Reviews & Word of Mouth
              </h1>
              <p className="text-sm sm:text-base text-[#302F29]/80 leading-relaxed max-w-2xl">
                We believe in honest, healthy food that speaks for itself. Here are the genuine experiences
                shared by our guests visiting Aharogyam in Rajajinagar 2nd Stage.
              </p>
            </div>

            {/* Score Showcase */}
            <div className="md:col-span-4 p-6 rounded-2xl bg-[#FAF7EF] border border-[#DCE7D6] text-center space-y-2">
              <span className="font-serif text-5xl sm:text-6xl font-bold text-[#234B38] block tabular-nums">
                {BUSINESS_RATING_INFO.score}
              </span>
              <div className="flex justify-center text-[#C58A51] gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C58A51]" />
                ))}
              </div>
              <p className="text-xs font-bold text-[#234B38]">
                Based on {BUSINESS_RATING_INFO.totalReviews} verified Google reviews
              </p>
              <p className="text-[11px] text-[#302F29]/60">
                {BUSINESS_RATING_INFO.sourceNote}
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Animated Marquee Component Integration */}
      <TestimonialsMarquee />

      {/* Grid of All Real Customer Reviews */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#234B38]">
            Complete Review Archive
          </h2>
          <p className="text-xs sm:text-sm text-[#302F29]/70 mt-1">
            Read unabridged excerpts from local diners enjoying healthy eats in Rajajinagar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-[#DCE7D6] p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#C58A51] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C58A51]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#234B38]/20" />
                </div>

                {review.highlight && (
                  <span className="inline-block text-[11px] font-bold text-[#234B38] bg-[#DCE7D6]/60 px-2.5 py-0.5 rounded-full mb-3">
                    {review.highlight}
                  </span>
                )}

                <p className="text-sm sm:text-base text-[#302F29]/90 italic leading-relaxed mb-6">
                  "{review.description}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#DCE7D6]/60">
                <img
                  src={review.image}
                  alt={review.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-[#234B38]/20 bg-[#FAF7EF]"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#234B38]">{review.name}</h4>
                  {review.handle && (
                    <span className="text-xs text-[#302F29]/60">{review.handle}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
