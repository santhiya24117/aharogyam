import React from 'react';
import { CustomerDetails, CustomerFormErrors } from '../../types/order';
import { MapPin, User, Phone, Clock, FileText, CheckCircle2 } from 'lucide-react';

interface CustomerDetailsFormProps {
  details: CustomerDetails;
  onChange: (details: CustomerDetails) => void;
  errors: CustomerFormErrors;
  onSubmit: (e: React.FormEvent) => void;
  onBackToCart: () => void;
}

export const CustomerDetailsForm: React.FC<CustomerDetailsFormProps> = ({
  details,
  onChange,
  errors,
  onSubmit,
  onBackToCart,
}) => {
  const updateField = (field: keyof CustomerDetails, value: string) => {
    onChange({
      ...details,
      [field]: value,
    });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* 1. Fulfilment Method Selector */}
      <div className="bg-white rounded-2xl border border-[#DCE7D6] p-5 sm:p-6 shadow-xs space-y-3">
        <label className="text-xs uppercase font-bold tracking-wider text-[#302F29]/70 block">
          1. Choose Order Fulfilment Method *
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Pickup option */}
          <button
            type="button"
            onClick={() => updateField('fulfilmentMethod', 'pickup')}
            className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex items-start gap-3 ${
              details.fulfilmentMethod === 'pickup'
                ? 'border-[#234B38] bg-[#FAF7EF]'
                : 'border-[#DCE7D6] bg-white hover:border-[#234B38]/40'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 ${
                details.fulfilmentMethod === 'pickup'
                  ? 'border-[#234B38] bg-[#234B38]'
                  : 'border-[#DCE7D6]'
              }`}
            >
              {details.fulfilmentMethod === 'pickup' && (
                <div className="w-2 h-2 rounded-full bg-white" />
              )}
            </div>
            <div>
              <span className="font-bold text-sm text-[#234B38] block">
                Self Pickup at Café
              </span>
              <span className="text-xs text-[#302F29]/70 block mt-0.5 leading-snug">
                Pick up directly from Rajajinagar 2nd Stage. Zero delivery charges.
              </span>
            </div>
          </button>

          {/* Delivery option */}
          <button
            type="button"
            onClick={() => updateField('fulfilmentMethod', 'delivery')}
            className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex items-start gap-3 ${
              details.fulfilmentMethod === 'delivery'
                ? 'border-[#234B38] bg-[#FAF7EF]'
                : 'border-[#DCE7D6] bg-white hover:border-[#234B38]/40'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 ${
                details.fulfilmentMethod === 'delivery'
                  ? 'border-[#234B38] bg-[#234B38]'
                  : 'border-[#DCE7D6]'
              }`}
            >
              {details.fulfilmentMethod === 'delivery' && (
                <div className="w-2 h-2 rounded-full bg-white" />
              )}
            </div>
            <div>
              <span className="font-bold text-sm text-[#234B38] block">
                Doorstep Delivery
              </span>
              <span className="text-xs text-[#302F29]/70 block mt-0.5 leading-snug">
                Serviceability and delivery charges confirmed directly by the café team.
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* 2. Customer Contact Information */}
      <div className="bg-white rounded-2xl border border-[#DCE7D6] p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-[#DCE7D6]/60 pb-3">
          <User className="w-4 h-4 text-[#234B38]" />
          <h3 className="font-serif text-lg font-bold text-[#234B38]">
            2. Customer Contact Details
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold text-[#302F29]"
            >
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              value={details.fullName}
              onChange={(e) => updateField('fullName', e.target.value)}
              placeholder="e.g. Anand Sharma"
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#302F29] bg-white focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? 'border-red-500 focus:ring-red-200'
                  : 'border-[#DCE7D6] focus:border-[#234B38] focus:ring-[#234B38]/20'
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-600 font-medium">{errors.fullName}</p>
            )}
          </div>

          {/* Mobile Phone */}
          <div className="space-y-1.5">
            <label
              htmlFor="mobileNumber"
              className="block text-xs font-semibold text-[#302F29]"
            >
              Mobile Number (WhatsApp active) <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-2.5 text-xs font-medium text-[#302F29]/60">
                +91
              </span>
              <input
                id="mobileNumber"
                type="tel"
                value={details.mobileNumber}
                onChange={(e) => updateField('mobileNumber', e.target.value)}
                placeholder="10-digit mobile number"
                className={`w-full pl-12 pr-3.5 py-2.5 rounded-xl border text-sm text-[#302F29] bg-white focus:outline-none focus:ring-2 tabular-nums ${
                  errors.mobileNumber
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-[#DCE7D6] focus:border-[#234B38] focus:ring-[#234B38]/20'
                }`}
              />
            </div>
            {errors.mobileNumber ? (
              <p className="text-xs text-red-600 font-medium">{errors.mobileNumber}</p>
            ) : (
              <p className="text-[11px] text-[#302F29]/60">
                Used to verify your order and communicate delivery/pickup status.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 3. Delivery Address (Conditionally shown only when delivery is selected) */}
      {details.fulfilmentMethod === 'delivery' && (
        <div className="bg-white rounded-2xl border border-[#DCE7D6] p-5 sm:p-6 shadow-xs space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 border-b border-[#DCE7D6]/60 pb-3">
            <MapPin className="w-4 h-4 text-[#234B38]" />
            <h3 className="font-serif text-lg font-bold text-[#234B38]">
              3. Delivery Address (Bengaluru Area)
            </h3>
          </div>

          <div className="space-y-4">
            {/* House / Flat */}
            <div className="space-y-1.5">
              <label
                htmlFor="houseFlat"
                className="block text-xs font-semibold text-[#302F29]"
              >
                Flat / House / Building Number & Name <span className="text-red-600">*</span>
              </label>
              <input
                id="houseFlat"
                type="text"
                value={details.houseFlat}
                onChange={(e) => updateField('houseFlat', e.target.value)}
                placeholder="e.g. Flat 302, Green Meadows Apts"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#302F29] bg-white focus:outline-none focus:ring-2 ${
                  errors.houseFlat
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-[#DCE7D6] focus:border-[#234B38] focus:ring-[#234B38]/20'
                }`}
              />
              {errors.houseFlat && (
                <p className="text-xs text-red-600 font-medium">{errors.houseFlat}</p>
              )}
            </div>

            {/* Street / Locality */}
            <div className="space-y-1.5">
              <label
                htmlFor="streetLocality"
                className="block text-xs font-semibold text-[#302F29]"
              >
                Street, Main / Cross, Locality <span className="text-red-600">*</span>
              </label>
              <input
                id="streetLocality"
                type="text"
                value={details.streetLocality}
                onChange={(e) => updateField('streetLocality', e.target.value)}
                placeholder="e.g. 5th Main, 4th Block, Rajajinagar"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#302F29] bg-white focus:outline-none focus:ring-2 ${
                  errors.streetLocality
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-[#DCE7D6] focus:border-[#234B38] focus:ring-[#234B38]/20'
                }`}
              />
              {errors.streetLocality && (
                <p className="text-xs text-red-600 font-medium">{errors.streetLocality}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* City */}
              <div className="space-y-1.5">
                <label htmlFor="city" className="block text-xs font-semibold text-[#302F29]">
                  City <span className="text-red-600">*</span>
                </label>
                <input
                  id="city"
                  type="text"
                  value={details.city}
                  onChange={(e) => updateField('city', e.target.value)}
                  placeholder="Bengaluru"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#302F29] bg-white focus:outline-none focus:ring-2 ${
                    errors.city
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-[#DCE7D6] focus:border-[#234B38] focus:ring-[#234B38]/20'
                  }`}
                />
                {errors.city && (
                  <p className="text-xs text-red-600 font-medium">{errors.city}</p>
                )}
              </div>

              {/* State */}
              <div className="space-y-1.5">
                <label htmlFor="state" className="block text-xs font-semibold text-[#302F29]">
                  State <span className="text-red-600">*</span>
                </label>
                <input
                  id="state"
                  type="text"
                  value={details.state}
                  onChange={(e) => updateField('state', e.target.value)}
                  placeholder="Karnataka"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#302F29] bg-white focus:outline-none focus:ring-2 ${
                    errors.state
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-[#DCE7D6] focus:border-[#234B38] focus:ring-[#234B38]/20'
                  }`}
                />
                {errors.state && (
                  <p className="text-xs text-red-600 font-medium">{errors.state}</p>
                )}
              </div>

              {/* PIN code */}
              <div className="space-y-1.5">
                <label htmlFor="pinCode" className="block text-xs font-semibold text-[#302F29]">
                  6-Digit PIN Code <span className="text-red-600">*</span>
                </label>
                <input
                  id="pinCode"
                  type="text"
                  maxLength={6}
                  value={details.pinCode}
                  onChange={(e) => updateField('pinCode', e.target.value)}
                  placeholder="560010"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#302F29] bg-white focus:outline-none focus:ring-2 tabular-nums ${
                    errors.pinCode
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-[#DCE7D6] focus:border-[#234B38] focus:ring-[#234B38]/20'
                  }`}
                />
                {errors.pinCode && (
                  <p className="text-xs text-red-600 font-medium">{errors.pinCode}</p>
                )}
              </div>
            </div>

            {/* Landmark (Optional) */}
            <div className="space-y-1.5">
              <label htmlFor="landmark" className="block text-xs font-semibold text-[#302F29]">
                Nearby Landmark (Optional)
              </label>
              <input
                id="landmark"
                type="text"
                value={details.landmark}
                onChange={(e) => updateField('landmark', e.target.value)}
                placeholder="e.g. Near Corporation Bank / Rajajinagar Metro"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE7D6] text-sm text-[#302F29] bg-white focus:outline-none focus:border-[#234B38] focus:ring-2 focus:ring-[#234B38]/20"
              />
            </div>
          </div>
        </div>
      )}

      {/* 4. Optional Preferences & Instructions */}
      <div className="bg-white rounded-2xl border border-[#DCE7D6] p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-[#DCE7D6]/60 pb-3">
          <FileText className="w-4 h-4 text-[#234B38]" />
          <h3 className="font-serif text-lg font-bold text-[#234B38]">
            {details.fulfilmentMethod === 'delivery' ? '4.' : '3.'} Timing & Special Kitchen Instructions (Optional)
          </h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label
              htmlFor="preferredTime"
              className="block text-xs font-semibold text-[#302F29] flex items-center gap-1.5"
            >
              <Clock className="w-3.5 h-3.5 text-[#C58A51]" />
              <span>Preferred {details.fulfilmentMethod === 'pickup' ? 'Pickup' : 'Delivery'} Time (Subject to availability)</span>
            </label>
            <input
              id="preferredTime"
              type="text"
              value={details.preferredTime}
              onChange={(e) => updateField('preferredTime', e.target.value)}
              placeholder="e.g. Today around 5:30 PM, or As soon as ready"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE7D6] text-sm text-[#302F29] bg-white focus:outline-none focus:border-[#234B38] focus:ring-2 focus:ring-[#234B38]/20"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="instructions"
              className="block text-xs font-semibold text-[#302F29]"
            >
              Customer Notes / Preparation Preference
            </label>
            <textarea
              id="instructions"
              rows={3}
              value={details.customerInstructions}
              onChange={(e) => updateField('customerInstructions', e.target.value)}
              placeholder="e.g. Mild spice on peanut chaat, extra napkins, keep juices chilled..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE7D6] text-sm text-[#302F29] bg-white focus:outline-none focus:border-[#234B38] focus:ring-2 focus:ring-[#234B38]/20"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <button
          type="button"
          onClick={onBackToCart}
          className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#DCE7D6] text-xs font-semibold text-[#302F29] hover:bg-white transition-colors cursor-pointer"
        >
          Back to Order Bag
        </button>

        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#234B38] text-[#FAF7EF] hover:bg-[#193628] font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95"
        >
          <CheckCircle2 className="w-4 h-4 text-[#DCE7D6]" />
          <span>Review Order Summary</span>
        </button>
      </div>
    </form>
  );
};
