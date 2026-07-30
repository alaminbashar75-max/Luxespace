import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';

interface CallToActionProps {
  onOpenConsultation: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="call-to-action" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-stone-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="serif-display text-3xl sm:text-4xl md:text-5xl font-medium text-stone-900">
            Call to action
          </h2>
          <p className="mt-3 text-stone-500 text-sm sm:text-base font-normal">
            Let us collaborate with you to create an inspiring space tailored to your unique lifestyle.
          </p>
        </div>

        {/* Big Yellow/Golden Warm Card Container */}
        <div className="bg-[#fcf3e3] border border-[#f3e3c6] rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-lg relative overflow-hidden">
          {/* Subtle warm glow background accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Big Headline */}
            <h3 className="serif-display text-3xl sm:text-5xl md:text-6xl font-normal text-stone-900 leading-tight">
              Ready to Transform Your Home?
            </h3>

            {/* Paragraph Subtext */}
            <p className="mt-6 text-stone-700 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
              Whether you're renovating your home or designing a new space, we're here to provide expert guidance and exceptional interior solutions tailored to your needs
            </p>

            {/* Book a Call Button */}
            <div className="mt-8 sm:mt-10">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#6a6052] hover:bg-[#584f42] text-white font-medium text-sm tracking-wider uppercase shadow-xl hover:shadow-stone-700/30 transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <Phone className="w-4 h-4 text-amber-200" />
                <span>Book a Call</span>
              </button>
            </div>

            {/* Bottom Contact Details Bar inside Card */}
            <div className="mt-14 pt-8 border-t border-[#ebd8b7] flex flex-col sm:flex-row items-center justify-between text-stone-700 text-xs sm:text-sm font-medium gap-4">
              <a
                href="tel:+2348032274651"
                className="flex items-center gap-2 hover:text-stone-900 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>+234 803 227 4651</span>
              </a>

              <a
                href="mailto:luxespace@gmail.com"
                className="flex items-center gap-2 hover:text-stone-900 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-700" />
                <span>luxespace@gmail.com</span>
              </a>

              <div className="flex items-center gap-3">
                <span className="text-[11px] uppercase tracking-widest text-stone-500 font-semibold">
                  Social media
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="#facebook"
                    onClick={(e) => e.preventDefault()}
                    className="w-7 h-7 rounded-full bg-[#eedcc1] hover:bg-[#6a6052] hover:text-white flex items-center justify-center text-stone-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#twitter"
                    onClick={(e) => e.preventDefault()}
                    className="w-7 h-7 rounded-full bg-[#eedcc1] hover:bg-[#6a6052] hover:text-white flex items-center justify-center text-stone-700 transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#instagram"
                    onClick={(e) => e.preventDefault()}
                    className="w-7 h-7 rounded-full bg-[#eedcc1] hover:bg-[#6a6052] hover:text-white flex items-center justify-center text-stone-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
