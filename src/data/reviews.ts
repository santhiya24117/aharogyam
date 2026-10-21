export interface CustomerReview {
  id: string;
  name: string;
  handle?: string;
  description: string;
  image: string;
  rating?: number;
  highlight?: string;
}

export const BUSINESS_RATING_INFO = {
  score: 4.9,
  totalReviews: 81,
  platform: 'Google Reviews',
  sourceNote: 'Supplied business rating from local visitors in Rajajinagar',
};

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Dinakar',
    handle: 'Local Visitor · Rajajinagar',
    description: 'Healthy, tasty, and completely no sugar & no oil! Loved the natural flavors. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    highlight: 'No Sugar & No Oil',
  },
  {
    id: 'rev-2',
    name: 'Parikshith Hegde',
    handle: 'Dine-in Customer',
    description: 'Must visit café near Rajaji Nagar. Enjoy the food without any guilt absolutely healthy and tasty.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    highlight: 'Guilt-Free Healthy Eating',
  },
  {
    id: 'rev-3',
    name: 'Aditya Aadi',
    handle: 'Regular Customer',
    description: 'Good food, good health & a great Vibe @ Aharogyam. Variety of foods are delicious as well as healthy dishes available for an affordable price.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    highlight: 'Great Vibe & Affordable',
  },
  {
    id: 'rev-4',
    name: 'Vijay Hegde',
    handle: 'Food Enthusiast',
    description: 'A hidden gem in Rajajinagar! Outstanding wholesome food, welcoming ambience, and great service by the brother-sister team.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
    highlight: 'Hidden Gem in Rajajinagar',
  },
  {
    id: 'rev-5',
    name: 'Sandeep P',
    handle: 'Local Resident',
    description: 'Highly recommend their signature dates milk and fresh healthy chaats. Genuine quality and natural ingredients.',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
    highlight: 'Signature Dates Milk',
  },
  {
    id: 'rev-6',
    name: 'Raghu A S',
    handle: 'Health & Wellness Diner',
    description: 'Homely, healthy food prepared with less oil and balanced spices. Appreciate the high hygiene, cleanliness, and courteous service.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    highlight: 'Homely & High Hygiene',
  },
];
