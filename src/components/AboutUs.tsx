import React from 'react';
import { Award, Compass, Users, CheckCircle2 } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-stone-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="serif-display text-3xl sm:text-4xl md:text-5xl font-medium text-stone-900">
            About Us
          </h2>
        </div>

        {/* Content with Left Dark Vertical Accent Bar */}
        <div className="flex gap-6 sm:gap-8 items-start">
          {/* Vertical Dark Bar */}
          <div className="w-1.5 self-stretch bg-stone-900 rounded-full flex-shrink-0" />

          {/* Text paragraphs */}
          <div className="space-y-6 text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              At LuxeSpace Interiors, we believe every space should reflect the people who live and work in it. Our team is passionate about creating elegant, functional, and timeless interiors that combine creativity, comfort, and exceptional craftsmanship.
            </p>
            <p>
              We specialize in designing sophisticated residential and commercial interiors tailored to your unique vision. With a commitment to quality and attention to detail, we transform ordinary spaces into extraordinary experiences.
            </p>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-stone-200">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200/80">
            <div className="w-10 h-10 rounded-lg bg-stone-800 text-amber-300 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">Award-Winning</h4>
              <p className="text-xs text-stone-500">Recognized interior design studio</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200/80">
            <div className="w-10 h-10 rounded-lg bg-stone-800 text-amber-300 flex items-center justify-center flex-shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">End-to-End Service</h4>
              <p className="text-xs text-stone-500">Concept through final turn-key</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200/80">
            <div className="w-10 h-10 rounded-lg bg-stone-800 text-amber-300 flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">Client Centric</h4>
              <p className="text-xs text-stone-500">100% bespoke spatial tailoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
