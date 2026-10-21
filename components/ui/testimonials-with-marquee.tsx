"use client";

import React from "react";
import { motion } from "motion/react";
import { AnimatedTestimonials } from "@/components/ui/testimonials-with-marquee-utils/animated-testimonials";
import { CUSTOMER_REVIEWS, BUSINESS_RATING_INFO } from "@/src/data/reviews";
import { Star } from "lucide-react";

interface TestimonialsMarqueeProps {
  customReviews?: typeof CUSTOMER_REVIEWS;
}

export default function TestimonialsMarquee({ customReviews }: TestimonialsMarqueeProps) {
  const reviewsToDisplay = customReviews || CUSTOMER_REVIEWS;
  const titleWords = "What Our Visitors Say".split(" ");

  return (
    <section className="relative w-full bg-[#FAF7EF] py-16 md:py-24 border-t border-[#DCE7D6]/60">
      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 text-center pb-8 md:pb-12">
          {/* Subtle rating indicator badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE7D6]/60 text-xs font-semibold text-[#234B38]">
            <Star className="w-3.5 h-3.5 fill-[#C58A51] text-[#C58A51]" />
            <span>{BUSINESS_RATING_INFO.score} Rating ({BUSINESS_RATING_INFO.totalReviews} verified reviews)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#234B38] tracking-tight">
            {titleWords.map((word, index) => (
              <motion.span
                key={`title-${word}-${index}`}
                initial={{ opacity: 0, filter: "blur(6px)", y: 12 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-base md:text-lg text-[#302F29]/80 max-w-2xl px-4"
          >
            Authentic words from our guests in Rajajinagar enjoying guilt-free healthy food,
            refreshing dates milk, and balanced flavours.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full"
        >
          <AnimatedTestimonials data={reviewsToDisplay} />
        </motion.div>
      </div>
    </section>
  );
}
