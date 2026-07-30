import React, { useState } from 'react';
import { X, Calendar, Clock, Phone, Mail, User, Building, CheckCircle2, Sparkles } from 'lucide-react';
import { ConsultationFormData } from '../types';
import emailjs from '@emailjs/browser';
interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Interior Design',
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: defaultService,
    preferredDate: '',
    preferredTime: '10:00 AM',
    propertyType: 'Residential',
    budgetRange: '$10,000 - $25,000',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    // Send booking notification to you
    await emailjs.send(
      'service_bumyznc',
      'template_kviemah',
      {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        serviceType: formData.serviceType,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        propertyType: formData.propertyType,
        budgetRange: formData.budgetRange,
        notes: formData.notes,
      },
      'I2QiYwYjwbRaOez4d'
    );

    // Send confirmation email to the customer
    await emailjs.send(
      'service_bumyznc',
      'template_jfqu864',
      {
        fullName: formData.fullName,
        email: formData.email,
        serviceType: formData.serviceType,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        propertyType: formData.propertyType,
        budgetRange: formData.budgetRange,
      },
      'I2QiYwYjwbRaOez4d'
    );

    setIsSubmitted(true);
  } catch (error) {
    console.error('Email failed to send:', error);
    alert('Sorry, your booking could not be sent. Please try again.');
  }
};
  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-stone-200 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-800 rounded-full hover:bg-stone-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest mb-1">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Consultation Booking</span>
            </div>
            <h3 className="serif-display text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
              Book Your Design Call
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mb-6">
              Schedule a 1-on-1 virtual or in-person consultation with a lead LuxeSpace interior designer.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-800 focus:outline-none text-xs sm:text-sm text-stone-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+234 803 227 4651"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-800 focus:outline-none text-xs sm:text-sm text-stone-800"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-800 focus:outline-none text-xs sm:text-sm text-stone-800"
                  />
                </div>
              </div>

              {/* Service & Property Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Requested Service
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-800 focus:outline-none text-xs sm:text-sm text-stone-800 bg-white"
                  >
                    <option value="Interior Design">Interior Design</option>
                    <option value="Furniture Designs">Furniture Designs</option>
                    <option value="Space Planning">Space Planning</option>
                    <option value="House Renovations">House Renovations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-800 focus:outline-none text-xs sm:text-sm text-stone-800 bg-white"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Office">Office</option>
                    <option value="Hospitality">Hospitality</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-800 focus:outline-none text-xs sm:text-sm text-stone-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-800 focus:outline-none text-xs sm:text-sm text-stone-800 bg-white"
                    >
                      <option>09:00 AM</option>
                      <option>10:00 AM</option>
                      <option>01:00 PM</option>
                      <option>03:00 PM</option>
                      <option>05:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Estimated Budget */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Estimated Budget Range
                </label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-800 focus:outline-none text-xs sm:text-sm text-stone-800 bg-white"
                >
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000 - $50,000</option>
                  <option>$50,000 - $100,000+</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Project Brief / Special Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your space vision, style preferences or timeline..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-800 focus:outline-none text-xs sm:text-sm text-stone-800"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                Confirm Consultation Call
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="serif-display text-2xl font-bold text-stone-900 mb-2">
              Call Request Confirmed!
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto mb-6">
              Thank you, <span className="font-semibold text-stone-900">{formData.fullName}</span>. A senior interior designer from LuxeSpace will reach out to you at{' '}
              <span className="font-semibold text-stone-900">{formData.phone}</span> on{' '}
              <span className="font-semibold text-stone-900">{formData.preferredDate || 'your selected date'}</span> at{' '}
              <span className="font-semibold text-stone-900">{formData.preferredTime}</span>.
            </p>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-left text-xs space-y-1.5 mb-6">
              <div className="flex justify-between">
                <span className="text-stone-500">Service:</span>
                <span className="font-semibold text-stone-800">{formData.serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Property:</span>
                <span className="font-semibold text-stone-800">{formData.propertyType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Budget Range:</span>
                <span className="font-semibold text-stone-800">{formData.budgetRange}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              Done &amp; Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
