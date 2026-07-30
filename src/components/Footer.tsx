import React, { useState } from 'react';
import { Home, Facebook, Twitter, Instagram, Send, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-[#685e4d] text-[#e8e2d7] relative pt-16 pb-12 overflow-hidden border-t border-[#7a705e]">
      {/* Geometric Angled Top Banner with Brand Logo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded bg-[#574e3f] flex items-center justify-center text-amber-200">
              <Home className="w-5 h-5" />
            </div>
            <span className="serif-display text-2xl font-bold text-white tracking-wide">
              LuxeSpace
            </span>
          </div>
          <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
            Transform your home or workspace with timeless interior designs that blend elegance, comfort, and functionality.
          </p>
        </div>

        {/* Newsletter Box */}
        <div className="bg-[#574e3f] rounded-2xl p-6 sm:p-8 md:p-10 mb-16 border border-[#716654] shadow-inner max-w-4xl mx-auto text-center">
          <h3 className="serif-display text-xl sm:text-2xl font-normal text-white lowercase">
            let's design something beautiful together
          </h3>
          <p className="text-stone-300 text-xs mt-1.5 font-light lowercase">
            subscribe to get design tips, trends and inspirations straight to your inbox
          </p>

          <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-auto flex-1 px-5 py-2.5 rounded-full bg-white text-stone-900 placeholder:text-stone-400 text-xs focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-[#463f33] hover:bg-[#393329] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>SUBSCRIBE</span>
            </button>
          </form>

          {subscribed && (
            <div className="mt-3 text-xs text-amber-200 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Thank you for subscribing to LuxeSpace newsletter!</span>
            </div>
          )}
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-xs border-b border-[#786d5b] pb-12">
          {/* Column 1: Company */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase mb-4 text-xs sm:text-sm">
              Company
            </h4>
            <ul className="space-y-2.5 text-stone-300 font-light uppercase tracking-wide">
              <li><a href="#about-us" className="hover:text-amber-200 transition-colors">ABOUT US</a></li>
              <li><a href="#about-us" className="hover:text-amber-200 transition-colors">OUR TEAM</a></li>
              <li><a href="#about-us" className="hover:text-amber-200 transition-colors">OUR PROCESS</a></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase mb-4 text-xs sm:text-sm">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-stone-300 font-light uppercase tracking-wide">
              <li><a href="#services" className="hover:text-amber-200 transition-colors">INTERIOR DESIGN</a></li>
              <li><a href="#services" className="hover:text-amber-200 transition-colors">FURNITURE CURATION</a></li>
              <li><a href="#services" className="hover:text-amber-200 transition-colors">SPACE PLANNING</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase mb-4 text-xs sm:text-sm">
              Resources
            </h4>
            <ul className="space-y-2.5 text-stone-300 font-light uppercase tracking-wide">
              <li><a href="#top-projects" className="hover:text-amber-200 transition-colors">PORTFOLIO</a></li>
              <li><a href="#reviews" className="hover:text-amber-200 transition-colors">CLIENT REVIEWS</a></li>
              <li><a href="#call-to-action" className="hover:text-amber-200 transition-colors">DESIGN ESTIMATOR</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase mb-4 text-xs sm:text-sm">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-stone-300 font-light">
              <li><a href="tel:+2348032274651" className="hover:text-amber-200 transition-colors">+234 803 227 4651</a></li>
              <li><a href="mailto:luxespace@gmail.com" className="hover:text-amber-200 transition-colors">luxespace@gmail.com</a></li>
              <li>Mon–Sat, 8:00 AM to 5:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Social Icons & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-light">
          <div>
            <span className="text-[11px] block uppercase tracking-widest text-stone-400 mb-2 font-medium">
              Social media
            </span>
            <div className="flex items-center gap-3">
              <a
                href="#facebook"
                onClick={(e) => e.preventDefault()}
                className="w-7 h-7 rounded-full bg-[#574e3f] hover:bg-amber-800 flex items-center justify-center text-stone-200 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="#twitter"
                onClick={(e) => e.preventDefault()}
                className="w-7 h-7 rounded-full bg-[#574e3f] hover:bg-amber-800 flex items-center justify-center text-stone-200 transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="w-7 h-7 rounded-full bg-[#574e3f] hover:bg-amber-800 flex items-center justify-center text-stone-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="text-[11px] text-stone-300 tracking-wider">
            &copy; 2026 LuxeSpace Interiors. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
