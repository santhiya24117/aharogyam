import React from 'react';
import { MenuCategoryId } from '../../types/menu';
import { MENU_CATEGORIES } from '../../data/menu';

interface MenuCategoryTabsProps {
  activeCategory: MenuCategoryId;
  onSelectCategory: (category: MenuCategoryId) => void;
  categoryCounts: Record<MenuCategoryId, number>;
}

export const MenuCategoryTabs: React.FC<MenuCategoryTabsProps> = ({
  activeCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2">
      <div className="flex items-center gap-2 p-1.5 bg-white rounded-2xl border-2 border-[#FFD45C]/50 w-max sm:w-auto shadow-sm">
        {MENU_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = categoryCounts[cat.id] ?? 0;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-[#FF8A24] text-white shadow-md'
                  : 'text-[#173F32] hover:bg-[#FFF4E0] hover:text-[#FF8A24]'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full tabular-nums font-black ${
                  isActive ? 'bg-[#173F32] text-[#FFF9ED]' : 'bg-[#FFD45C]/60 text-[#173F32]'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
