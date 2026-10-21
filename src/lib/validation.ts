import { CustomerDetails, CustomerFormErrors } from '../types/order';

/**
 * Normalizes Indian phone numbers: strips non-digits, strips leading +91 or 91 or 0 if 10 digits follow.
 * Returns 10 digits or empty string if invalid.
 */
export function normalizeIndianPhoneNumber(input: string): string {
  const digits = input.replace(/\D/g, '');
  if (digits.length === 10) {
    return /^[6-9]\d{9}$/.test(digits) ? digits : '';
  }
  if (digits.length === 11 && digits.startsWith('0')) {
    const sub = digits.slice(1);
    return /^[6-9]\d{9}$/.test(sub) ? sub : '';
  }
  if (digits.length === 12 && digits.startsWith('91')) {
    const sub = digits.slice(2);
    return /^[6-9]\d{9}$/.test(sub) ? sub : '';
  }
  return '';
}

export function validateCustomerForm(details: CustomerDetails): {
  isValid: boolean;
  errors: CustomerFormErrors;
} {
  const errors: CustomerFormErrors = {};

  if (!details.fullName || details.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 letters).';
  }

  const normalizedPhone = normalizeIndianPhoneNumber(details.mobileNumber);
  if (!normalizedPhone) {
    errors.mobileNumber = 'Please enter a valid 10-digit Indian mobile number.';
  }

  if (details.fulfilmentMethod === 'delivery') {
    if (!details.houseFlat || details.houseFlat.trim().length < 1) {
      errors.houseFlat = 'House / Flat / Building name is required for delivery.';
    }

    if (!details.streetLocality || details.streetLocality.trim().length < 3) {
      errors.streetLocality = 'Street / Locality / Cross details are required.';
    }

    if (!details.city || details.city.trim().length < 2) {
      errors.city = 'City name is required.';
    }

    if (!details.state || details.state.trim().length < 2) {
      errors.state = 'State name is required.';
    }

    const pin = details.pinCode.trim();
    if (!/^[1-9][0-9]{5}$/.test(pin)) {
      errors.pinCode = 'Please enter a valid 6-digit Indian PIN code.';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
