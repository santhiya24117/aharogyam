export type MenuCategoryId =
  | 'all'
  | 'specials'
  | 'snacks-chaat'
  | 'fruit-juices'
  | 'dates-milk'
  | 'detox';

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
  tagline: string;
}

export interface MenuItem {
  id: string;
  name: string;
  categoryId: Exclude<MenuCategoryId, 'all'>;
  categoryName: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
  dietaryLabels: string[];
  servingInfo?: string;
  ingredientsNote?: string;
  featured?: boolean;
}
