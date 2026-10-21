import React, { useMemo, useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menu';
import { MenuCategoryId } from '../types/menu';
import { ProductCard } from '../components/menu/ProductCard';
import { MenuCategoryTabs } from '../components/menu/MenuCategoryTabs';
import { MenuSearch } from '../components/menu/MenuSearch';
import { Sparkles, Utensils, RotateCcw } from 'lucide-react';

interface MenuPageProps {
  initialCategory?: MenuCategoryId;
}

export const MenuPage: React.FC<MenuPageProps> = ({ initialCategory = 'all' }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<MenuCategoryId, number> = {
      all: MENU_ITEMS.length,
      specials: 0,
      'snacks-chaat': 0,
      'fruit-juices': 0,
      'dates-milk': 0,
      detox: 0,
    };
    MENU_ITEMS.forEach((item) => {
      counts[item.categoryId] = (counts[item.categoryId] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.categoryId === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inName = item.name.toLowerCase().includes(q);
      const inDesc = item.description.toLowerCase().includes(q);
      const inCat = item.categoryName.toLowerCase().includes(q);
      const inLabels = item.dietaryLabels.some((l) => l.toLowerCase().includes(q));

      return inName || inDesc || inCat || inLabels;
    });
  }, [activeCategory, searchQuery]);

  const activeCategoryMeta = MENU_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-[#FFD45C]/40">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF8A24]">
            <Utensils className="w-3.5 h-3.5" />
            <span>CAFÉ MENU & DAILY PREPARATIONS</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#173F32] tracking-tight">
            Fresh Vegetarian Fare
          </h1>
          <p className="text-sm sm:text-base text-[#252420]/80 font-medium leading-relaxed">
            Every item is prepared to order using authentic, natural ingredients, wholesome date milk,
            fresh seasonal produce, and traditional spices.
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-auto">
          <MenuSearch
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            resultCount={filteredItems.length}
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <MenuCategoryTabs
          activeCategory={activeCategory}
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
          }}
          categoryCounts={categoryCounts}
        />
      </div>

      {/* Active category heading banner */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#173F32]">
            {activeCategoryMeta?.label}
          </h2>
          <p className="text-xs sm:text-sm text-[#252420]/70 font-medium mt-0.5">
            {activeCategoryMeta?.tagline}
          </p>
        </div>

        <span className="text-xs font-black text-[#173F32] bg-[#C9ED56] px-3.5 py-1 rounded-full tabular-nums shadow-xs">
          {filteredItems.length} items
        </span>
      </div>

      {/* Products Grid */}
      {filteredItems.length === 0 ? (
        <div className="py-16 text-center bg-white rounded-2xl border border-[#DCE7D6] p-8 max-w-md mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#FAF7EF] flex items-center justify-center mx-auto text-[#234B38]">
            <Sparkles className="w-6 h-6 opacity-60" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#234B38]">
            No matching items found
          </h3>
          <p className="text-xs text-[#302F29]/70">
            We couldn't find any dish matching your current filter. Try resetting search or selecting another category.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#234B38] text-white text-xs font-semibold hover:bg-[#193628] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Show Complete Menu</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
