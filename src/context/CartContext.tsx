import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { MENU_ITEMS } from '../data/menu';
import { MenuItem } from '../types/menu';
import { CartItem } from '../types/order';

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem, quantity?: number) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  isCartDrawerOpen: boolean;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
  toggleCartDrawer: () => void;
  lastAddedItem: MenuItem | null;
  clearLastAddedNotification: () => void;
}

const CART_STORAGE_KEY = 'aharogyam_cart_v1';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Stored state is an array of { id: string, quantity: number }
  const [cartQuantities, setCartQuantities] = useState<{ id: string; quantity: number }[]>(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          return parsed.filter(
            (p) => typeof p.id === 'string' && typeof p.quantity === 'number' && p.quantity > 0
          );
        }
      }
    } catch {
      // ignore storage errors
    }
    return [];
  });

  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState<MenuItem | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartQuantities));
    } catch {
      // ignore quota or disabled errors
    }
  }, [cartQuantities]);

  // Derive cart items using CANONICAL MENU_ITEMS prices and availability
  const items: CartItem[] = useMemo(() => {
    return cartQuantities
      .map((entry) => {
        const canonical = MENU_ITEMS.find((m) => m.id === entry.id);
        if (!canonical || !canonical.available) return null;
        return {
          id: entry.id,
          item: canonical,
          quantity: entry.quantity,
        };
      })
      .filter((entry): entry is CartItem => entry !== null);
  }, [cartQuantities]);

  const totalCount = useMemo(() => {
    return items.reduce((acc, curr) => acc + curr.quantity, 0);
  }, [items]);

  const subtotal = useMemo(() => {
    return items.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  }, [items]);

  const addItem = (item: MenuItem, quantity = 1) => {
    if (!item.available || quantity <= 0) return;

    setCartQuantities((prev) => {
      const existingIndex = prev.findIndex((p) => p.id === item.id);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }
      return [...prev, { id: item.id, quantity }];
    });

    setLastAddedItem(item);
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }
    setCartQuantities((prev) =>
      prev.map((entry) => (entry.id === itemId ? { ...entry, quantity } : entry))
    );
  };

  const removeItem = (itemId: string) => {
    setCartQuantities((prev) => prev.filter((entry) => entry.id !== itemId));
  };

  const clearCart = () => {
    setCartQuantities([]);
  };

  const openCartDrawer = () => setIsCartDrawerOpen(true);
  const closeCartDrawer = () => setIsCartDrawerOpen(false);
  const toggleCartDrawer = () => setIsCartDrawerOpen((prev) => !prev);
  const clearLastAddedNotification = () => setLastAddedItem(null);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        totalCount,
        subtotal,
        isCartDrawerOpen,
        openCartDrawer,
        closeCartDrawer,
        toggleCartDrawer,
        lastAddedItem,
        clearLastAddedNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
