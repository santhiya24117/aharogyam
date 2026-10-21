import React from 'react';
import { X, ShieldCheck, FileText, RefreshCw } from 'lucide-react';
import { AHAROGYAM_FSSAI } from '../lib/whatsapp';

export type PolicyType = 'privacy' | 'terms' | 'refund' | null;

interface PolicyModalProps {
  type: PolicyType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#FAF7EF] rounded-2xl border border-[#DCE7D6] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DCE7D6] bg-white">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' && <ShieldCheck className="w-5 h-5 text-[#234B38]" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-[#234B38]" />}
            {type === 'refund' && <RefreshCw className="w-5 h-5 text-[#234B38]" />}
            <h3 className="font-serif text-xl font-bold text-[#234B38]">
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'terms' && 'Terms and Conditions'}
              {type === 'refund' && 'Cancellation, Refund & Ordering Policy'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#302F29]/60 hover:text-[#234B38] hover:bg-[#DCE7D6]/40 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="px-6 py-6 overflow-y-auto space-y-4 text-sm text-[#302F29]/85 leading-relaxed">
          {type === 'privacy' && (
            <>
              <p>
                <strong>Aharogyam</strong> respects your privacy and is committed to handling customer information responsibly.
              </p>
              <h4 className="font-semibold text-[#234B38] pt-2">Information Collected</h4>
              <p>
                When you prepare an order request, we collect your name, phone number, and delivery address (for delivery orders) solely to compile your order summary.
              </p>
              <h4 className="font-semibold text-[#234B38] pt-2">Data Transmission & Storage</h4>
              <p>
                We do not sell, rent, or trade your personal information. Order details are transmitted directly via WhatsApp to our official café number for order fulfillment and confirmation. We do not store permanent personal profiles on third-party tracking servers.
              </p>
              <h4 className="font-semibold text-[#234B38] pt-2">Compliance</h4>
              <p>
                Aharogyam operates in compliance with applicable Indian food safety regulations (FSSAI Licence: {AHAROGYAM_FSSAI}).
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                Welcome to <strong>Aharogyam</strong>. By browsing our website and submitting order inquiries, you agree to the following terms:
              </p>
              <h4 className="font-semibold text-[#234B38] pt-2">Menu & Pricing</h4>
              <p>
                Menu items, current availability, and prices listed are subject to daily kitchen preparation. All prices are in Indian Rupees (₹).
              </p>
              <h4 className="font-semibold text-[#234B38] pt-2">Order Request Workflow</h4>
              <p>
                Submitting an order request via our website prepares a WhatsApp message to our café. An order is finalized and binding only after direct mutual confirmation of product availability, delivery timing, and final amount with our team.
              </p>
              <h4 className="font-semibold text-[#234B38] pt-2">Dietary Information</h4>
              <p>
                All items are vegetarian. While we take utmost care, customers with specific allergies should inform our team during confirmation.
              </p>
            </>
          )}

          {type === 'refund' && (
            <>
              <p>
                At <strong>Aharogyam</strong>, we prepare fresh fruit juices, oats bowls, dates milk, and chaat to order to ensure high nutritional quality.
              </p>
              <h4 className="font-semibold text-[#234B38] pt-2">Order Confirmation</h4>
              <p>
                Because orders are fulfilled by fresh kitchen preparation, please review your order items carefully before confirming over WhatsApp.
              </p>
              <h4 className="font-semibold text-[#234B38] pt-2">Cancellations</h4>
              <p>
                Cancellation requests must be communicated immediately via phone (8296011530) or WhatsApp before the kitchen commences food or beverage preparation. Once prepared, orders cannot be cancelled.
              </p>
              <h4 className="font-semibold text-[#234B38] pt-2">Quality & Missing Items</h4>
              <p>
                In the rare event of an issue with food freshness or an incomplete order, please notify us immediately upon delivery or pickup with photos so our team can resolve it promptly.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#DCE7D6] bg-white flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#234B38] text-white text-xs font-semibold hover:bg-[#193628] transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
