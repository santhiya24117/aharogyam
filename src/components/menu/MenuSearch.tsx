import React from 'react';
import { Search, X } from 'lucide-react';

interface MenuSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultCount: number;
}

export const MenuSearch: React.FC<MenuSearchProps> = ({
  searchQuery,
  onSearchChange,
  resultCount,
}) => {
  return (
    <div className="relative w-full max-w-md">
      <div className="relative flex items-center">
        <Search className="absolute left-3.5 w-4 h-4 text-[#234B38]/60 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search bowls, date drinks, juices, chaat..."
          className="w-full pl-10 pr-9 py-2.5 bg-white rounded-xl border border-[#DCE7D6] text-sm text-[#302F29] placeholder-[#302F29]/50 focus:outline-none focus:ring-2 focus:ring-[#234B38]/30 focus:border-[#234B38]"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 p-1 rounded-full text-[#302F29]/50 hover:text-[#234B38] transition-colors"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {searchQuery && (
        <p className="text-[11px] text-[#302F29]/65 mt-1.5 pl-1">
          Found {resultCount} {resultCount === 1 ? 'item' : 'items'} matching "{searchQuery}"
        </p>
      )}
    </div>
  );
};
