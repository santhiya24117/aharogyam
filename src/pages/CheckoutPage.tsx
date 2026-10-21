import React, { useState } from 'react';
import { CustomerDetails, CustomerFormErrors } from '../types/order';
import { validateCustomerForm } from '../lib/validation';
import { CustomerDetailsForm } from '../components/checkout/CustomerDetailsForm';
import { OrderReview } from '../components/checkout/OrderReview';
import { CartSummary } from '../components/cart/CartSummary';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShieldCheck, ShoppingBag } from 'lucide-react';

interface CheckoutPageProps {
  onBackToCart: () => void;
  onGoToMenu: () => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  onBackToCart,
  onGoToMenu,
}) => {
  const { items } = useCart();

  const [step, setStep] = useState<'details' | 'review'>('details');

  const [details, setDetails] = useState<CustomerDetails>({
    fullName: '',
    mobileNumber: '',
    fulfilmentMethod: 'pickup',
    houseFlat: '',
    streetLocality: '',
    city: 'Bengaluru',
    state: 'Karnataka',
    pinCode: '',
    landmark: '',
    preferredTime: '',
    customerInstructions: '',
  });

  const [errors, setErrors] = useState<CustomerFormErrors>({});

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateCustomerForm(details);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setStep('review');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (items.length === 0) {
    return (
      <div className="py-16 sm:py-24 max-w-md mx-auto px-4 text-center">
        <div className="bg-white rounded-3xl border border-[#DCE7D6] p-8 space-y-4">
          <ShoppingBag className="w-12 h-12 text-[#234B38] mx-auto opacity-50" />
          <h2 className="font-serif text-2xl font-bold text-[#234B38]">
            Your Bag is Empty
          </h2>
          <p className="text-xs text-[#302F29]/75">
            Please add at least one item from the menu before proceeding to checkout.
          </p>
          <button
            onClick={onGoToMenu}
            className="px-5 py-2.5 rounded-xl bg-[#234B38] text-white text-xs font-semibold hover:bg-[#193628] transition-colors cursor-pointer"
          >
            Explore Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Breadcrumb */}
      <div className="mb-8">
        <button
          onClick={onBackToCart}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#234B38] hover:underline mb-2 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Order Bag</span>
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#234B38]">
              {step === 'details' ? 'Customer Details & Order Options' : 'Review & Request via WhatsApp'}
            </h1>
            <p className="text-xs sm:text-sm text-[#302F29]/70 mt-1">
              {step === 'details'
                ? 'Enter your name, mobile, and fulfillment preference for order verification.'
                : 'Confirm all details before opening your WhatsApp order request.'}
            </p>
          </div>

          {/* Stepper indicator */}
          <div className="flex items-center gap-2 text-xs font-semibold">
            <span
              className={`px-3 py-1 rounded-full ${
                step === 'details'
                  ? 'bg-[#234B38] text-[#FAF7EF]'
                  : 'bg-[#DCE7D6] text-[#234B38]'
              }`}
            >
              1. Details
            </span>
            <span className="text-[#302F29]/40">→</span>
            <span
              className={`px-3 py-1 rounded-full ${
                step === 'review'
                  ? 'bg-[#234B38] text-[#FAF7EF]'
                  : 'bg-white border border-[#DCE7D6] text-[#302F29]/60'
              }`}
            >
              2. Review & Send
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form or Review View */}
        <div className="lg:col-span-8">
          {step === 'details' ? (
            <CustomerDetailsForm
              details={details}
              onChange={setDetails}
              errors={errors}
              onSubmit={handleDetailsSubmit}
              onBackToCart={onBackToCart}
            />
          ) : (
            <OrderReview
              details={details}
              onEditDetails={() => {
                setStep('details');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBackToCart={onBackToCart}
            />
          )}
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-4 sticky top-24 space-y-4">
          <CartSummary
            fulfilmentMethod={details.fulfilmentMethod}
            showCheckoutButton={false}
          />

          <div className="p-4 rounded-2xl bg-white border border-[#DCE7D6] text-xs text-[#302F29]/75 space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-[#234B38]">
              <ShieldCheck className="w-4 h-4 text-[#C58A51]" />
              <span>Direct Kitchen Communication</span>
            </div>
            <p className="leading-relaxed">
              We operate an artisanal kitchen where each order is prepared fresh. WhatsApp enables
              two-way communication with our chefs regarding customizations and real-time dispatch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
