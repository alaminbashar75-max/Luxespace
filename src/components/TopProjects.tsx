import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, Sparkles, Filter } from 'lucide-react';
import { PROJECTS_DATA } from '../data/mockData';
import { ProjectItem } from '../types';

interface TopProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

// Extra gallery photos for interactive cycling through cards
const PROJECT_VARIATIONS: Record<string, string[]> = {
  'proj-1': [
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1600'
  ],
  'proj-2': [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1600'
  ],
  'proj-3': [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600'
  ],
  'proj-4': [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1600'
  ]
};

export const TopProjects: React.FC<TopProjectsProps> = ({ onSelectProject }) => {
  // Active slide indices for each project card
  const [activeSlide, setActiveSlide] = useState<Record<string, number>>({
    'proj-1': 0,
    'proj-2': 0,
    'proj-3': 0,
    'proj-4': 0,
  });

  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');

  const categories = ['All', 'Interior Decoration', 'Furniture Designs', 'Space Planning', 'House Renovations'];

  const filteredProjects = activeCategoryFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategoryFilter);

  const handlePrev = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const photos = PROJECT_VARIATIONS[id] || [];
    setActiveSlide((prev) => ({
      ...prev,
      [id]: (prev[id] - 1 + photos.length) % photos.length,
    }));
  };

  const handleNext = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const photos = PROJECT_VARIATIONS[id] || [];
    setActiveSlide((prev) => ({
      ...prev,
      [id]: (prev[id] + 1) % photos.length,
    }));
  };

  return (
    <section id="top-projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50 text-stone-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="serif-display text-3xl sm:text-4xl md:text-5xl font-medium text-stone-900">
            Top Projects
          </h2>
          <p className="mt-3 text-stone-500 text-sm sm:text-base font-normal">
            Browse through our featured portfolio of bespoke interiors, furniture designs, and structural renovations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategoryFilter(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-full tracking-wider uppercase transition-all ${
                activeCategoryFilter === cat
                  ? 'bg-stone-800 text-white shadow-md'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* List of Banner Cards */}
        <div className="space-y-10">
          {filteredProjects.map((project) => {
            const photos = PROJECT_VARIATIONS[project.id] || [project.imageUrl];
            const currentPhotoIndex = activeSlide[project.id] || 0;
            const currentImg = photos[currentPhotoIndex] || project.imageUrl;

            return (
              <div
                key={project.id}
                className="group relative h-[480px] sm:h-[540px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-xl border border-stone-300 transition-all duration-300"
              >
                {/* Background Image */}
                <img
                  src={currentImg}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 sm:px-12 md:px-20 text-white z-10">
                  {/* Title */}
                  <h3 className="serif-display text-3xl sm:text-5xl md:text-6xl font-normal tracking-wider text-white uppercase drop-shadow-md">
                    {project.title}
                  </h3>

                  {/* Subtext */}
                  <p className="mt-4 max-w-xl text-stone-200 text-xs sm:text-sm font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Slide Counter dots */}
                  {photos.length > 1 && (
                    <div className="flex items-center gap-2 mt-4">
                      {photos.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1.5 rounded-full transition-all ${
                            idx === currentPhotoIndex ? 'w-6 bg-amber-300' : 'w-1.5 bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Navigation & View All Controls */}
                  <div className="mt-8 flex items-center justify-between w-full max-w-lg">
                    {/* Left Arrow Button */}
                    <button
                      onClick={(e) => handlePrev(project.id, e)}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/40 bg-black/30 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white transition-all transform active:scale-95 hover:border-amber-300"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* View All Button */}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-8 sm:px-12 py-2.5 sm:py-3 rounded-full bg-stone-700/80 hover:bg-stone-600/90 backdrop-blur-md border border-stone-500/50 text-white text-xs sm:text-sm font-medium tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:border-amber-300 flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4 text-amber-300" />
                      <span>View all</span>
                    </button>

                    {/* Right Arrow Button */}
                    <button
                      onClick={(e) => handleNext(project.id, e)}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/40 bg-black/30 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white transition-all transform active:scale-95 hover:border-amber-300"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
