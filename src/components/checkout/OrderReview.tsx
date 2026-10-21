import React, { useState } from 'react';
import { CustomerDetails } from '../../types/order';
import { useCart } from '../../context/CartContext';
import { buildWhatsAppOrderUrl, AHAROGYAM_WHATSAPP_DISPLAY } from '../../lib/whatsapp';
import {
  MessageCircle,
  Edit2,
  ArrowLeft,
  MapPin,
  User,
  Phone,
  Clock,
  FileText,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

interface OrderReviewProps {
  details: CustomerDetails;
  onEditDetails: () => void;
  onBackToCart: () => void;
}

export const OrderReview: React.FC<OrderReviewProps> = ({
  details,
  onEditDetails,
  onBackToCart,
}) => {
  const { items, subtotal } = useCart();
  const [hasLaunchedWhatsApp, setHasLaunchedWhatsApp] = useState(false);

  const whatsappUrl = buildWhatsAppOrderUrl(details, items, subtotal);

  const handleLaunchWhatsApp = () => {
    setHasLaunchedWhatsApp(true);
    // Open in new tab/app
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6">
      {/* Informational Banner */}
      <div className="bg-[#DCE7D6]/50 rounded-2xl border border-[#234B38]/20 p-4 sm:p-5 flex items-start gap-3 text-xs sm:text-sm text-[#234B38] leading-relaxed">
        <MessageCircle className="w-5 h-5 text-[#234B38] shrink-0 mt-0.5" />
        <div>
          <strong className="block font-serif text-base text-[#234B38] mb-0.5">
            Step 2: Review Before Sending via WhatsApp
          </strong>
          <span>
            Please inspect your order items and customer information below. When ready, click
            <strong> "Continue to WhatsApp"</strong> to generate your pre-formatted order message directly
            to our café counter ({AHAROGYAM_WHATSAPP_DISPLAY}).
          </span>
        </div>
      </div>

      {/* Customer & Fulfilment Details Card */}
      <div className="bg-white rounded-2xl border border-[#DCE7D6] p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-[#DCE7D6]/60 pb-3">
          <h3 className="font-serif text-lg font-bold text-[#234B38]">
            Customer & Delivery Information
          </h3>
          <button
            onClick={onEditDetails}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#234B38] hover:underline cursor-pointer"
          >
            <Edit2 className="w-3.5 h-3.5" />
            <span>Edit Details</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#302F29]">
          <div className="flex items-center gap-2.5">
            <User className="w-4 h-4 text-[#C58A51] shrink-0" />
            <div>
              <span className="text-[11px] text-[#302F29]/60 block uppercase font-semibold">
                Customer Name
              </span>
              <span className="font-bold text-[#234B38]">{details.fullName}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-[#C58A51] shrink-0" />
            <div>
              <span className="text-[11px] text-[#302F29]/60 block uppercase font-semibold">
                Contact Phone
              </span>
              <span className="font-bold text-[#234B38] tabular-nums">
                +91 {details.mobileNumber}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#C58A51] shrink-0" />
            <div>
              <span className="text-[11px] text-[#302F29]/60 block uppercase font-semibold">
                Fulfilment Method
              </span>
              <span className="font-bold text-[#234B38]">
                {details.fulfilmentMethod === 'pickup'
                  ? 'Self Pickup (Rajajinagar)'
                  : 'Doorstep Delivery'}
              </span>
            </div>
          </div>

          {details.preferredTime && (
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#C58A51] shrink-0" />
              <div>
                <span className="text-[11px] text-[#302F29]/60 block uppercase font-semibold">
                  Preferred Time
                </span>
                <span className="font-medium">{details.preferredTime}</span>
              </div>
            </div>
          )}
        </div>

        {details.fulfilmentMethod === 'delivery' && (
          <div className="pt-3 border-t border-[#DCE7D6]/60 flex items-start gap-2.5 text-xs sm:text-sm">
            <MapPin className="w-4 h-4 text-[#C58A51] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] text-[#302F29]/60 block uppercase font-semibold">
                Delivery Address
              </span>
              <p className="font-medium text-[#234B38] leading-snug">
                {details.houseFlat}, {details.streetLocality}
              </p>
              <p className="text-[#302F29]/80">
                {details.city}, {details.state} -{' '}
                <span className="font-semibold tabular-nums">{details.pinCode}</span>
              </p>
              {details.landmark && (
                <p className="text-[11px] text-[#302F29]/70 mt-0.5">
                  Landmark: {details.landmark}
                </p>
              )}
            </div>
          </div>
        )}

        {details.customerInstructions && (
          <div className="pt-3 border-t border-[#DCE7D6]/60 flex items-start gap-2.5 text-xs sm:text-sm">
            <FileText className="w-4 h-4 text-[#C58A51] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] text-[#302F29]/60 block uppercase font-semibold">
                Kitchen Instructions
              </span>
              <p className="italic text-[#302F29]/90">"{details.customerInstructions}"</p>
            </div>
          </div>
        )}
      </div>

      {/* Cart Items List */}
      <div className="bg-white rounded-2xl border border-[#DCE7D6] p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-[#DCE7D6]/60 pb-3">
          <h3 className="font-serif text-lg font-bold text-[#234B38]">
            Items in Order ({items.length})
          </h3>
          <button
            onClick={onBackToCart}
            className="text-xs font-semibold text-[#234B38] hover:underline cursor-pointer"
          >
            Change Items
          </button>
        </div>

        <div className="divide-y divide-[#DCE7D6]/50">
          {items.map((cartItem) => (
            <div
              key={cartItem.id}
              className="py-3 flex items-center justify-between gap-4 text-xs sm:text-sm"
            >
              <div>
                <h4 className="font-bold text-[#234B38]">{cartItem.item.name}</h4>
                <span className="text-xs text-[#302F29]/60">
                  ₹{cartItem.item.price} × {cartItem.quantity}
                </span>
              </div>
              <div className="text-right font-bold text-[#234B38] tabular-nums">
                ₹{cartItem.item.price * cartItem.quantity}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-[#DCE7D6] flex justify-between items-baseline">
          <span className="font-semibold text-base text-[#234B38]">Estimated Item Total</span>
          <span className="font-serif text-2xl font-bold text-[#234B38] tabular-nums">
            ₹{subtotal}
          </span>
        </div>
      </div>

      {/* Post-launch feedback box if user clicked WhatsApp */}
      {hasLaunchedWhatsApp && (
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 font-bold text-amber-950">
            <AlertCircle className="w-4 h-4 text-amber-700" />
            <span>Order Request Prepared</span>
          </div>
          <p className="leading-relaxed">
            WhatsApp has been launched with your exact order request.
            <strong> Please tap "Send" in WhatsApp</strong> so our café receives your message. Our
            team will reply to confirm item availability, preparation timing, and final payment.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-200/80 hover:bg-amber-300 font-semibold text-xs text-amber-950 transition-colors"
            >
              <span>Click here if WhatsApp didn't open</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Final Action Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <button
          onClick={onEditDetails}
          className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#DCE7D6] text-xs font-semibold text-[#302F29] hover:bg-white transition-colors cursor-pointer flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Edit Customer Info</span>
        </button>

        <button
          onClick={handleLaunchWhatsApp}
          disabled={items.length === 0}
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#234B38] text-[#FAF7EF] hover:bg-[#193628] font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer active:scale-95"
        >
          <MessageCircle className="w-5 h-5 text-[#DCE7D6]" />
          <span>Continue to WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
