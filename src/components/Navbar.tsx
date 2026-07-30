import React, { useState, useEffect } from 'react';
import { Home, PhoneCall, Calculator, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onOpenEstimator
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Top Projects', href: '#top-projects' },
    { name: 'Customer Reviews', href: '#reviews' },
    { name: 'About Us', href: '#about-us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-900/90 backdrop-blur-md shadow-lg py-3 border-b border-stone-800/50 text-white'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-stone-800 border border-amber-600/40 flex items-center justify-center text-amber-400 group-hover:bg-amber-800 transition-colors">
            <Home className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="serif-display text-2xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">
              LuxeSpace
            </span>
            <span className="text-[10px] tracking-widest uppercase text-stone-400 -mt-1 font-medium">
              Interior & Remodeling
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-300 hover:text-amber-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenEstimator}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-full border border-stone-600/80 hover:border-amber-400/80 text-stone-200 hover:text-amber-200 bg-stone-900/40 hover:bg-stone-800/80 transition-all"
          >
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Cost Estimator</span>
          </button>

          <button
            onClick={onOpenConsultation}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider uppercase rounded-full bg-stone-700 hover:bg-stone-600 border border-stone-500/50 text-white shadow-md hover:shadow-amber-950/40 transition-all transform active:scale-95"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
            <span>Book a Call</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenConsultation}
            className="p-2 text-amber-300 bg-stone-800/80 rounded-full border border-stone-700"
            title="Book a Call"
          >
            <PhoneCall className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-200 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-900/95 backdrop-blur-xl border-b border-stone-800 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-stone-200 hover:text-amber-300 text-base font-medium border-b border-stone-800/60"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-stone-700 text-stone-200 bg-stone-800/60 text-sm font-medium"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>Instant Cost Estimator</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-stone-700 hover:bg-stone-600 text-white font-medium text-sm shadow-md"
            >
              <PhoneCall className="w-4 h-4 text-amber-300" />
              <span>Book a Consultation Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
