import React from 'react';
import { Play, Eye, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onViewProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onViewProjects,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-stone-950"
    >
      {/* Background Hero Image with Deep Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Interior Design Living Room"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
        />
        {/* Layered vignette & contrast overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-black/70" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Spacer to align content nicely */}
      <div className="h-12"></div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center my-auto flex flex-col items-center">
        {/* Main Serif Headline */}
        <h1 className="serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-wide text-white leading-tight uppercase drop-shadow-md">
          <span className="block">HOME OF DECENCY</span>
          <span className="block italic font-light text-stone-300 text-3xl sm:text-5xl md:text-6xl my-1 sm:my-2">
            &amp;
          </span>
          <span className="block">SIMPLICITY</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 sm:mt-8 max-w-2xl text-stone-200 text-sm sm:text-lg md:text-xl font-light leading-relaxed tracking-wide drop-shadow text-center">
          Transform your home or workspace with <span className="text-amber-200 font-normal">timeless interior designs</span> that blend elegance, comfort, and functionality.
        </p>

        {/* Buttons Row */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          {/* Main Button */}
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto min-w-[160px] px-8 py-3 rounded-full bg-stone-700/80 hover:bg-stone-600/90 backdrop-blur-md border border-stone-500/40 text-stone-100 font-medium text-sm tracking-wider uppercase shadow-xl hover:shadow-stone-700/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Book a call
          </button>

          {/* View Our Project Button */}
          <button
            onClick={onViewProjects}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3 rounded-full bg-stone-900/60 hover:bg-stone-800/80 backdrop-blur-md border border-stone-400/50 text-white font-medium text-sm tracking-wider uppercase transition-all transform hover:-translate-y-0.5"
          >
            <Eye className="w-4 h-4 text-amber-300" />
            <span>View our project</span>
          </button>
        </div>
      </div>

      {/* Bottom Bar with Social Media Links */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 text-stone-300 text-xs gap-4">
        <div className="flex items-center gap-4">
          <span className="text-stone-400 text-[11px] uppercase tracking-widest font-medium">
            Social media
          </span>
          <div className="flex items-center gap-3">
            <a
              href="#facebook"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 rounded-full border border-stone-600/60 bg-stone-900/40 hover:bg-amber-900/60 hover:border-amber-400 flex items-center justify-center text-stone-300 hover:text-white transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="#twitter"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 rounded-full border border-stone-600/60 bg-stone-900/40 hover:bg-amber-900/60 hover:border-amber-400 flex items-center justify-center text-stone-300 hover:text-white transition-all"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="#instagram"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 rounded-full border border-stone-600/60 bg-stone-900/40 hover:bg-amber-900/60 hover:border-amber-400 flex items-center justify-center text-stone-300 hover:text-white transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="text-stone-400 text-[11px] tracking-wider uppercase flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Available for New Projects 2026</span>
        </div>
      </div>
    </section>
  );
};
