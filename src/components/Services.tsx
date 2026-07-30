import React from 'react';
import { Home, Armchair, Sparkles, Hammer, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-4 h-4 text-white" />;
      case 'Armchair':
        return <Armchair className="w-4 h-4 text-white" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-white" />;
      case 'Hammer':
        return <Hammer className="w-4 h-4 text-white" />;
      default:
        return <Home className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-stone-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="serif-display text-3xl sm:text-4xl md:text-5xl font-medium text-stone-900">
            Our Services
          </h2>
          <p className="mt-3 text-stone-500 text-sm sm:text-base font-normal">
            Explore our specialized design, furniture curation, space planning, and remodeling solutions.
          </p>
        </div>

        {/* Services 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group relative h-[360px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-end p-6 border border-stone-200"
            >
              {/* Card Image Background */}
              <img
                src={service.imageUrl}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 transition-all" />

              {/* Top Right Arrow Trigger */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-900/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Content Box */}
              <div className="relative z-10 text-white">
                {/* Title + Icon Badge */}
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="serif-display text-xl font-semibold tracking-wide text-white">
                    {service.title}
                  </h3>
                  <div className="p-1 rounded bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Subtext */}
                <p className="text-xs text-stone-300 font-light leading-relaxed line-clamp-2">
                  {service.description}
                </p>

                {/* Interactive Action Text on Hover */}
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-amber-300 font-medium">
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
