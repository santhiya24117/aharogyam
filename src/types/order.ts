import { MenuItem } from './menu';

export type FulfilmentMethod = 'pickup' | 'delivery';

export interface CustomerDetails {
  fullName: string;
  mobileNumber: string;
  fulfilmentMethod: FulfilmentMethod;
  houseFlat: string;
  streetLocality: string;
  city: string;
  state: string;
  pinCode: string;
  landmark: string;
  preferredTime: string;
  customerInstructions: string;
}

export interface CartItem {
  id: string; // product id
  item: MenuItem;
  quantity: number;
}

export type CustomerFormErrors = Partial<Record<keyof CustomerDetails, string>>;
