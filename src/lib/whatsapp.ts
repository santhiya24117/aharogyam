import { CartItem, CustomerDetails } from '../types/order';

export const AHAROGYAM_WHATSAPP_NUMBER = '918296011530';
export const AHAROGYAM_PHONE_DISPLAY = '8296011530';
export const AHAROGYAM_WHATSAPP_DISPLAY = '+91 82960 11530';
export const AHAROGYAM_ADDRESS =
  '3rd Cross, 2nd Main, E Block, Near Corporation Bank, Rajajinagar 2nd Stage, Bengaluru, Karnataka 560010';
export const AHAROGYAM_FSSAI = '21226181000003';

/**
 * Builds the structured WhatsApp order message matching Aharogyam's format.
 */
export function generateWhatsAppOrderMessage(
  details: CustomerDetails,
  items: CartItem[],
  subtotal: number
): string {
  const lines: string[] = [];

  lines.push('Hello Aharogyam! I would like to place an order.');
  lines.push('');
  lines.push('CUSTOMER DETAILS');
  lines.push(`Name: ${details.fullName.trim()}`);
  lines.push(`Phone: ${details.mobileNumber.trim()}`);
  lines.push('');
  lines.push('ORDER ITEMS');

  items.forEach((cartItem) => {
    const itemTotal = cartItem.item.price * cartItem.quantity;
    lines.push(
      `${cartItem.item.name} × ${cartItem.quantity}`
    );
    lines.push(`₹${cartItem.item.price} each`);
    lines.push(`Item total: ₹${itemTotal}`);
    lines.push('');
  });

  lines.push(`ITEM SUBTOTAL: ₹${subtotal}`);
  lines.push('');
  lines.push(
    `ORDER TYPE: ${details.fulfilmentMethod === 'pickup' ? 'Pickup' : 'Delivery'}`
  );

  if (details.fulfilmentMethod === 'delivery') {
    lines.push('');
    lines.push('DELIVERY ADDRESS:');
    lines.push(details.houseFlat.trim());
    lines.push(details.streetLocality.trim());
    lines.push(
      `${details.city.trim()}, ${details.state.trim()} - ${details.pinCode.trim()}`
    );
    if (details.landmark.trim()) {
      lines.push(`Landmark: ${details.landmark.trim()}`);
    }
  }

  if (details.preferredTime.trim()) {
    lines.push('');
    lines.push(`Preferred time: ${details.preferredTime.trim()}`);
  }

  if (details.customerInstructions.trim()) {
    lines.push('');
    lines.push(`Instructions: ${details.customerInstructions.trim()}`);
  }

  lines.push('');
  lines.push(
    'Please confirm product availability, delivery serviceability and the final payable amount.'
  );

  return lines.join('\n');
}

/**
 * Generates the wa.me click-to-chat URL with safe encoding for spaces, ampersands, and line breaks.
 */
export function buildWhatsAppOrderUrl(
  details: CustomerDetails,
  items: CartItem[],
  subtotal: number
): string {
  const message = generateWhatsAppOrderMessage(details, items, subtotal);
  return `https://wa.me/${AHAROGYAM_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
