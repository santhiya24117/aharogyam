import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuCategoryId } from '../../types/menu';
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Utensils,
  GlassWater,
  Heart,
  Flame,
} from 'lucide-react';

// Vite-compatible image imports
import cinematicJuices from '../../assets/images/cinematic_juices_spread_1792588718918.jpg';
import datesMilkShake from '../../assets/images/dates_milk_shake_1792587026685.jpg';
import heroHealthyBowl from '../../assets/images/hero_healthy_bowl_1792587025479.jpg';
import peanutChaatBowl from '../../assets/images/peanut_chaat_bowl_1792588718374.jpg';
import cinematicBrandFinale from '../../assets/images/cinematic_brand_finale_1792588718405.jpg';

interface CinematicProductShowcaseProps {
  onExploreMenu: () => void;
  onSelectCategory?: (category: MenuCategoryId) => void;
}

interface ShowcaseScene {
  id: string;
  category: MenuCategoryId;
  stepNumber: string;
  categoryLabel: string;
  headline: string;
  tagline: string;
  image: string;
  alt: string;
  containerBg: string;
  scrimGradient: string;
  accentColor: string;
  badgeBg: string;
  buttonBg: string;
  buttonText: string;
  icon: React.ReactNode;
  particles: {
    type: 'citrus' | 'dates' | 'fruits' | 'herbs' | 'glow';
  };
}

const SCENES: ShowcaseScene[] = [
  {
    id: 'juices',
    category: 'fruit-juices',
    stepNumber: '01',
    categoryLabel: 'Fresh Pressed Juices',
    headline: 'FRESHLY PRESSED',
    tagline: 'Colour your day with vibrant flavour.',
    image: cinematicJuices,
    alt: 'Vibrant colourful freshly pressed juices in orange, ruby red and fresh green with citrus slices',
    containerBg: '#FF8A24',
    scrimGradient: 'from-[#E66B08] via-[#FF8A24]/75 to-black/30',
    accentColor: '#FFD45C',
    badgeBg: 'bg-[#FFD45C] text-[#173F32]',
    buttonBg: 'bg-[#173F32] hover:bg-[#0f2b22]',
    buttonText: 'text-[#FFF9ED]',
    icon: <GlassWater className="w-3.5 h-3.5" />,
    particles: { type: 'citrus' },
  },
  {
    id: 'dates-milk',
    category: 'dates-milk',
    stepNumber: '02',
    categoryLabel: 'Dates Milk & Shakes',
    headline: 'DATES THAT DELIGHT',
    tagline: 'Rich flavour. Happy moments.',
    image: datesMilkShake,
    alt: 'Signature chilled date milk shake with whole Medjool dates and crushed almonds',
    containerBg: '#8C5326',
    scrimGradient: 'from-[#6E3C16] via-[#8C5326]/80 to-black/35',
    accentColor: '#FFD45C',
    badgeBg: 'bg-[#FFD45C] text-[#173F32]',
    buttonBg: 'bg-[#FFD45C] hover:bg-[#e6bf47]',
    buttonText: 'text-[#173F32]',
    icon: <Heart className="w-3.5 h-3.5" />,
    particles: { type: 'dates' },
  },
  {
    id: 'oats-bowl',
    category: 'specials',
    stepNumber: '03',
    categoryLabel: 'Aharogyam Specials',
    headline: 'A BOWL FULL OF GOODNESS',
    tagline: 'Make every spoonful special.',
    image: heroHealthyBowl,
    alt: 'Creamy date milk breakfast oats bowl with sliced fresh figs, pomegranate seeds, and bananas',
    containerBg: '#366E3A',
    scrimGradient: 'from-[#234F26] via-[#366E3A]/85 to-black/35',
    accentColor: '#C9ED56',
    badgeBg: 'bg-[#C9ED56] text-[#173F32]',
    buttonBg: 'bg-[#C9ED56] hover:bg-[#b8dd42]',
    buttonText: 'text-[#173F32]',
    icon: <Utensils className="w-3.5 h-3.5" />,
    particles: { type: 'fruits' },
  },
  {
    id: 'chaat',
    category: 'snacks-chaat',
    stepNumber: '04',
    categoryLabel: 'Snacks & Chaat',
    headline: 'CHAAT WITH A TWIST',
    tagline: 'Big flavour. Beautifully served.',
    image: peanutChaatBowl,
    alt: 'Authentic Indian roasted peanut chaat tossed with diced red onions, ripe tomatoes, and fresh coriander',
    containerBg: '#E04B28',
    scrimGradient: 'from-[#B83313] via-[#E04B28]/80 to-black/35',
    accentColor: '#FFD45C',
    badgeBg: 'bg-[#FFD45C] text-[#173F32]',
    buttonBg: 'bg-[#173F32] hover:bg-[#0f2b22]',
    buttonText: 'text-[#FFF9ED]',
    icon: <Flame className="w-3.5 h-3.5" />,
    particles: { type: 'herbs' },
  },
  {
    id: 'finale',
    category: 'all',
    stepNumber: '05',
    categoryLabel: 'The Complete Experience',
    headline: 'FRESH CHOICES. BETTER DAYS.',
    tagline: 'Discover your next favourite at Aharogyam.',
    image: cinematicBrandFinale,
    alt: 'Aharogyam complete healthy spread with oats bowl, signature dates milk, red juice, and peanut chaat',
    containerBg: '#173F32',
    scrimGradient: 'from-[#0F2B22] via-[#173F32]/85 to-black/40',
    accentColor: '#FFD45C',
    badgeBg: 'bg-[#C9ED56] text-[#173F32]',
    buttonBg: 'bg-[#FF8A24] hover:bg-[#e67210]',
    buttonText: 'text-[#FFF9ED]',
    icon: <Sparkles className="w-3.5 h-3.5" />,
    particles: { type: 'glow' },
  },
];

const SCENE_DURATION_MS = 6000;

export const CinematicProductShowcase: React.FC<CinematicProductShowcaseProps> = ({
  onExploreMenu,
  onSelectCategory,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const currentScene = SCENES[currentIdx];

  const handleNext = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % SCENES.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIdx((prev) => (prev - 1 + SCENES.length) % SCENES.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  const handleSelectScene = (index: number) => {
    setCurrentIdx(index);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  // Timer loop for automatically advancing between scenes.
  useEffect(() => {
    if (!isPlaying) {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      return;
    }

    startTimeRef.current =
      Date.now() - (progress / 100) * SCENE_DURATION_MS;

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min(
        100,
        (elapsed / SCENE_DURATION_MS) * 100
      );

      setProgress(newProgress);

      if (newProgress >= 100) {
        animationFrameRef.current = null;
        handleNext();
      } else {
        animationFrameRef.current = requestAnimationFrame(tick);
      }
    };

    animationFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [currentIdx, isPlaying, handleNext, progress]);

  return (
    <section
      className="relative w-full overflow-hidden select-none border-b border-black/10 transition-colors duration-700"
      style={{ backgroundColor: currentScene.containerBg }}
    >
      {/* Container with responsive height */}
      <div className="relative flex w-full h-[520px] sm:h-[580px] md:h-[640px] lg:h-[700px] flex-col justify-between">

        {/* Background visual layer with cross-dissolve and camera push-in */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0"
          >
            <img
              src={currentScene.image}
              alt={currentScene.alt}
              className="h-full w-full object-cover object-center"
            />

            {/* Scene-specific gradient overlays */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${currentScene.scrimGradient}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Ambient ingredient visual accents */}
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          {currentScene.particles.type === 'citrus' && (
            <motion.div
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 360, opacity: 0.85 }}
              transition={{
                rotate: {
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                },
                opacity: { duration: 0.8 },
              }}
              className="pointer-events-none absolute -top-12 -right-12 flex h-48 w-48 items-center justify-center rounded-full border-2 border-dashed border-[#FFD45C]/60 bg-[#FF8A24]/20 backdrop-blur-xs sm:h-64 sm:w-64"
            >
              <div className="h-3/4 w-3/4 rounded-full border border-[#FFD45C]/40" />
            </motion.div>
          )}

          {currentScene.particles.type === 'dates' && (
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 0.95 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="absolute top-12 right-6 hidden items-center gap-2 rounded-full border border-[#FFD45C]/50 bg-black/60 px-4 py-2 text-xs font-bold text-[#FFF9ED] shadow-lg backdrop-blur-md sm:right-12 sm:flex"
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#FFD45C]" />
              <span>100% Naturally Sweetened with Dates</span>
            </motion.div>
          )}

          {currentScene.particles.type === 'fruits' && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.9 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="absolute bottom-28 right-8 hidden items-center gap-2 rounded-2xl border border-[#C9ED56]/50 bg-black/60 px-4 py-2 text-xs font-bold text-[#FFF9ED] shadow-lg backdrop-blur-md sm:right-16 sm:flex"
            >
              <Sparkles className="h-4 w-4 text-[#C9ED56]" />
              <span>Rolled Oats · Creamy Date Milk · Fresh Cut Fruits</span>
            </motion.div>
          )}

          {currentScene.particles.type === 'herbs' && (
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 0.9 }}
              transition={{ duration: 0.9 }}
              className="absolute top-16 right-8 hidden items-center gap-2 rounded-full border border-[#FFD45C]/50 bg-black/60 px-4 py-2 text-xs font-bold text-[#FFF9ED] shadow-lg backdrop-blur-md sm:flex"
            >
              <Flame className="h-4 w-4 text-[#FFD45C]" />
              <span>Roasted Peanuts · Zesty Chaat Masala · Fresh Herbs</span>
            </motion.div>
          )}
        </div>

        {/* Top header bar */}
        <div className="relative z-20 flex items-center justify-between px-4 pt-6 sm:px-8 sm:pt-8 lg:px-12">
          <div className="flex items-center gap-2.5">
            <span className="font-serif text-xl font-black tracking-tight text-[#FFF9ED] sm:text-2xl">
              Aharogyam
            </span>
            <span className="text-[#FFF9ED]/60">·</span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FFD45C] sm:text-xs">
              Flavour Film
            </span>
          </div>

          {/* Play/pause and previous/next controls */}
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3.5 py-1.5 shadow-md backdrop-blur-md">
            <button
              type="button"
              onClick={() => setIsPlaying((playing) => !playing)}
              className="cursor-pointer p-1 text-[#FFF9ED] transition-colors hover:text-[#FFD45C] focus:outline-none"
              aria-label={isPlaying ? 'Pause showcase' : 'Play showcase'}
            >
              {isPlaying ? (
                <Pause className="h-3.5 w-3.5" />
              ) : (
                <Play className="h-3.5 w-3.5" />
              )}
            </button>

            <div className="h-3 w-px bg-white/20" />

            <button
              type="button"
              onClick={handlePrev}
              className="cursor-pointer p-1 text-[#FFF9ED] transition-colors hover:text-[#FFD45C] focus:outline-none"
              aria-label="Previous scene"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="cursor-pointer p-1 text-[#FFF9ED] transition-colors hover:text-[#FFD45C] focus:outline-none"
              aria-label="Next scene"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Main content overlay */}
        <div className="relative z-20 my-auto max-w-2xl px-4 sm:px-8 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-3 sm:space-y-4"
            >
              {/* Category badge */}
              <div
                className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-black uppercase tracking-wider shadow-md ${currentScene.badgeBg}`}
              >
                <span>{currentScene.icon}</span>
                <span>{currentScene.categoryLabel}</span>
                <span className="opacity-80">
                  ({currentScene.stepNumber}/05)
                </span>
              </div>

              {/* Main headline */}
              <h2 className="font-serif text-3xl font-black leading-[1.08] tracking-tight text-[#FFF9ED] drop-shadow-lg sm:text-5xl md:text-6xl">
                {currentScene.headline}
              </h2>

              {/* Tagline */}
              <p className="font-serif text-lg font-normal italic text-[#FFD45C] drop-shadow-md sm:text-2xl">
                {currentScene.tagline}
              </p>

              {/* Call-to-action buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3 sm:pt-4">
                <button
                  type="button"
                  onClick={onExploreMenu}
                  className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-7 py-3.5 text-xs font-black uppercase tracking-wider shadow-xl transition-all active:scale-95 sm:text-sm ${currentScene.buttonBg} ${currentScene.buttonText}`}
                >
                  <span>Explore Our Menu</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                {currentScene.category !== 'all' && onSelectCategory && (
                  <button
                    type="button"
                    onClick={() => onSelectCategory(currentScene.category)}
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-white/30 bg-black/50 px-5 py-3.5 text-xs font-bold text-[#FFF9ED] shadow-md backdrop-blur-md transition-colors hover:bg-black/70 sm:text-sm"
                  >
                    <span>View {currentScene.categoryLabel}</span>
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom scene selector and progress timeline */}
        <div className="relative z-20 px-4 pb-6 sm:px-8 sm:pb-8 lg:px-12">
          <div className="grid max-w-4xl grid-cols-5 gap-2 sm:gap-4">
            {SCENES.map((scene, idx) => {
              const isActive = idx === currentIdx;
              const isPassed = idx < currentIdx;

              return (
                <button
                  type="button"
                  key={scene.id}
                  onClick={() => handleSelectScene(idx)}
                  className="group flex cursor-pointer flex-col text-left focus:outline-none"
                  aria-label={`Jump to scene ${idx + 1}: ${scene.categoryLabel}`}
                  aria-current={isActive ? 'step' : undefined}
                >
                  {/* Progress line */}
                  <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-white/25 shadow-inner sm:h-2">
                    <div
                      className={`h-full ${
                        isActive
                          ? 'bg-[#FFD45C]'
                          : isPassed
                            ? 'bg-white/90'
                            : 'bg-transparent'
                      }`}
                      style={{
                        width: isActive
                          ? `${progress}%`
                          : isPassed
                            ? '100%'
                            : '0%',
                        transitionDuration: isActive ? '50ms' : '300ms',
                      }}
                    />
                  </div>

                  {/* Scene labels */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[10px] font-black tracking-wider sm:text-xs ${
                        isActive
                          ? 'text-[#FFD45C]'
                          : 'text-white/70 group-hover:text-white'
                      }`}
                    >
                      {scene.stepNumber}
                    </span>

                    <span
                      className={`ml-1.5 hidden truncate text-[11px] font-bold tracking-wide md:inline ${
                        isActive
                          ? 'text-[#FFF9ED]'
                          : 'text-white/60 group-hover:text-white/90'
                      }`}
                    >
                      {scene.categoryLabel.split(' ')[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
