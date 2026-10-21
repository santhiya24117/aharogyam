import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { HeroMarquee } from '../components/home/HeroMarquee';
import { CinematicProductShowcase } from '../components/home/CinematicProductShowcase';
import { CategorySection } from '../components/home/CategorySection';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { OurStory } from '../components/home/OurStory';
import { LocationSection } from '../components/home/LocationSection';
import TestimonialsMarquee from '../components/ui/testimonials-with-marquee';
import { MenuCategoryId } from '../types/menu';

interface HomePageProps {
  onNavigateToMenu: (category?: MenuCategoryId) => void;
  onNavigateToStory: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateToMenu,
  onNavigateToStory,
}) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection
        onExploreMenu={() => onNavigateToMenu('all')}
        onOurStory={onNavigateToStory}
      />

      {/* Continuous Scrolling Brand Marquee directly below Hero */}
      <HeroMarquee />

      {/* Cinematic Animated Product Showcase: Juices -> Dates Drinks -> Oats Bowls -> Chaat -> Finale */}
      <CinematicProductShowcase
        onExploreMenu={() => onNavigateToMenu('all')}
        onSelectCategory={(cat) => onNavigateToMenu(cat)}
      />

      {/* Popular Categories */}
      <CategorySection onSelectCategory={(cat) => onNavigateToMenu(cat)} />

      {/* Featured Favourites */}
      <FeaturedProducts onViewAllMenu={() => onNavigateToMenu('all')} />

      {/* Philosophy & Story */}
      <OurStory onExploreMenu={() => onNavigateToMenu('all')} />

      {/* Real Animated Testimonials Marquee */}
      <TestimonialsMarquee />

      {/* Visit Aharogyam */}
      <LocationSection />
    </div>
  );
};
