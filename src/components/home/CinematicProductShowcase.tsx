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
    image: '/src/assets/images/cinematic_juices_spread_1792588718918.jpg',
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
    image: '/src/assets/images/dates_milk_shake_1792587026685.jpg',
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
    image: '/src/assets/images/hero_healthy_bowl_1792587025479.jpg',
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
    image: '/src/assets/images/peanut_chaat_bowl_1792588718374.jpg',
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
    image: '/src/assets/images/cinematic_brand_finale_1792588718405.jpg',
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

  // Timer loop for auto-advancing scenes
  useEffect(() => {
    if (!isPlaying) {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      return;
    }

    startTimeRef.current = Date.now() - (progress / 100) * SCENE_DURATION_MS;

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min(100, (elapsed / SCENE_DURATION_MS) * 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        handleNext();
      } else {
        animationFrameRef.current = requestAnimationFrame(tick);
      }
    };

    animationFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [currentIdx, isPlaying, handleNext, progress]);

  return (
    <section
      className="relative w-full overflow-hidden select-none border-b border-black/10 transition-colors duration-700"
      style={{ backgroundColor: currentScene.containerBg }}
    >
      {/* Container with responsive height */}
      <div className="relative w-full h-[520px] sm:h-[580px] md:h-[640px] lg:h-[700px] flex flex-col justify-between">
        
        {/* Background Visual Layer with smooth cross-dissolve and subtle camera push-in */}
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
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />

            {/* Custom scene-tailored gradient scrim */}
            <div className={`absolute inset-0 bg-gradient-to-t ${currentScene.scrimGradient}`} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Ambient Ingredient Visual Accents */}
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          {currentScene.particles.type === 'citrus' && (
            <motion.div
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 360, opacity: 0.85 }}
              transition={{ rotate: { duration: 25, repeat: Infinity, ease: 'linear' }, opacity: { duration: 0.8 } }}
              className="absolute -top-12 -right-12 w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-dashed border-[#FFD45C]/60 bg-[#FF8A24]/20 backdrop-blur-xs flex items-center justify-center pointer-events-none"
            >
              <div className="w-3/4 h-3/4 rounded-full border border-[#FFD45C]/40" />
            </motion.div>
          )}

          {currentScene.particles.type === 'dates' && (
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 0.95 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="absolute top-12 right-6 sm:right-12 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-[#FFD45C]/50 text-[#FFF9ED] text-xs font-bold shadow-lg"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD45C] animate-pulse" />
              <span>100% Naturally Sweetened with Dates</span>
            </motion.div>
          )}

          {currentScene.particles.type === 'fruits' && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.9 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="absolute bottom-28 right-8 sm:right-16 hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl bg-black/60 backdrop-blur-md border border-[#C9ED56]/50 text-[#FFF9ED] text-xs font-bold shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-[#C9ED56]" />
              <span>Rolled Oats · Creamy Date Milk · Fresh Cut Fruits</span>
            </motion.div>
          )}

          {currentScene.particles.type === 'herbs' && (
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 0.9 }}
              transition={{ duration: 0.9 }}
              className="absolute top-16 right-8 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-[#FFD45C]/50 text-[#FFF9ED] text-xs font-bold shadow-lg"
            >
              <Flame className="w-4 h-4 text-[#FFD45C]" />
              <span>Roasted Peanuts · Zesty Chaat Masala · Fresh Herbs</span>
            </motion.div>
          )}
        </div>

        {/* Top Header bar within showcase */}
        <div className="relative z-20 px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="font-serif text-xl sm:text-2xl font-black tracking-tight text-[#FFF9ED]">
              Aharogyam
            </span>
            <span className="text-[#FFF9ED]/60">·</span>
            <span className="text-[11px] sm:text-xs font-bold text-[#FFD45C] tracking-widest uppercase">
              Flavour Film
            </span>
          </div>

          {/* Play/Pause & Prev/Next Mini Controls */}
          <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-[#FFF9ED] hover:text-[#FFD45C] transition-colors p-1 cursor-pointer focus:outline-none"
              aria-label={isPlaying ? 'Pause showcase' : 'Play showcase'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <div className="w-[1px] h-3 bg-white/20" />
            <button
              onClick={handlePrev}
              className="text-[#FFF9ED] hover:text-[#FFD45C] transition-colors p-1 cursor-pointer focus:outline-none"
              aria-label="Previous scene"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="text-[#FFF9ED] hover:text-[#FFD45C] transition-colors p-1 cursor-pointer focus:outline-none"
              aria-label="Next scene"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Content Overlay: Left-aligned bold commercial typography */}
        <div className="relative z-20 px-4 sm:px-8 lg:px-12 max-w-2xl my-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-3 sm:space-y-4"
            >
              {/* Category Eyebrow badge */}
              <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md ${currentScene.badgeBg}`}>
                <span>{currentScene.icon}</span>
                <span>{currentScene.categoryLabel}</span>
                <span className="opacity-80">({currentScene.stepNumber}/05)</span>
              </div>

              {/* Bold Commercial Title */}
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-[#FFF9ED] tracking-tight leading-[1.08] drop-shadow-lg">
                {currentScene.headline}
              </h2>

              {/* Tagline */}
              <p className="font-serif italic text-lg sm:text-2xl text-[#FFD45C] drop-shadow-md font-normal">
                {currentScene.tagline}
              </p>

              {/* Primary Call to Action buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3 sm:pt-4">
                <button
                  onClick={onExploreMenu}
                  className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl active:scale-95 cursor-pointer ${currentScene.buttonBg} ${currentScene.buttonText}`}
                >
                  <span>Explore Our Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {currentScene.category !== 'all' && onSelectCategory && (
                  <button
                    onClick={() => onSelectCategory(currentScene.category)}
                    className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-[#FFF9ED] border border-white/30 text-xs sm:text-sm font-bold transition-colors cursor-pointer shadow-md"
                  >
                    <span>View {currentScene.categoryLabel}</span>
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Interactive Scene Selector & Progress Timeline */}
        <div className="relative z-20 px-4 sm:px-8 lg:px-12 pb-6 sm:pb-8">
          <div className="grid grid-cols-5 gap-2 sm:gap-4 max-w-4xl">
            {SCENES.map((scene, idx) => {
              const isActive = idx === currentIdx;
              const isPassed = idx < currentIdx;

              return (
                <button
                  key={scene.id}
                  onClick={() => handleSelectScene(idx)}
                  className="group flex flex-col text-left focus:outline-none cursor-pointer"
                  aria-label={`Jump to scene ${idx + 1}: ${scene.categoryLabel}`}
                >
                  {/* Progress Line */}
                  <div className="w-full h-1.5 sm:h-2 rounded-full bg-white/25 overflow-hidden mb-2 shadow-inner">
                    <div
                      className={`h-full transition-all ${
                        isActive
                          ? 'bg-[#FFD45C]'
                          : isPassed
                          ? 'bg-white/90'
                          : 'bg-transparent'
                      }`}
                      style={{
                        width: isActive ? `${progress}%` : isPassed ? '100%' : '0%',
                        transitionDuration: isActive ? '50ms' : '300ms',
                      }}
                    />
                  </div>

                  {/* Scene Labels */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] sm:text-xs font-mono font-black tracking-wider ${
                        isActive ? 'text-[#FFD45C]' : 'text-white/70 group-hover:text-white'
                      }`}
                    >
                      {scene.stepNumber}
                    </span>
                    <span
                      className={`hidden md:inline text-[11px] font-bold tracking-wide truncate ml-1.5 ${
                        isActive ? 'text-[#FFF9ED]' : 'text-white/60 group-hover:text-white/90'
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
