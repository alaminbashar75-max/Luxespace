import React, { useState } from 'react';
import { X, MapPin, Calendar, Clock, Maximize2, Tag, ArrowRight, Layers, PhoneCall } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);
  const [sliderPos, setSliderPos] = useState(50);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-6 overflow-y-auto">
      <div className="bg-stone-900 text-stone-100 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-stone-800 my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-stone-800/90 hover:bg-stone-700 text-stone-300 hover:text-white rounded-full transition-colors border border-stone-700"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image / Before-After Interactive View */}
        <div className="relative h-[320px] sm:h-[420px] w-full overflow-hidden bg-stone-950">
          {!showBeforeAfter ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            /* Before/After Interactive Comparison Slider */
            <div
              className="relative w-full h-full select-none cursor-ew-resize overflow-hidden"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                setSliderPos((x / rect.width) * 100);
              }}
              onTouchMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const touch = e.touches[0];
                const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
                setSliderPos((x / rect.width) * 100);
              }}
            >
              {/* After (New finished project) Image */}
              <img
                src={project.imageUrl}
                alt="After Transformation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute bottom-4 right-4 px-3 py-1 rounded bg-black/70 text-[10px] uppercase font-bold tracking-widest text-amber-300 backdrop-blur-sm z-10">
                After Transformation
              </span>

              {/* Before Image overlay clipped by slider position */}
              <div
                className="absolute top-0 left-0 bottom-0 overflow-hidden border-r-2 border-white shadow-2xl z-10"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={project.beforeImageUrl || project.imageUrl}
                  alt="Before Transformation"
                  className="absolute top-0 left-0 h-full max-w-none object-cover"
                  style={{ width: '100%', height: '100%' }}
                />
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded bg-black/70 text-[10px] uppercase font-bold tracking-widest text-stone-200 backdrop-blur-sm">
                  Before Remodel
                </span>
              </div>

              {/* Slider Handle line */}
              <div
                className="absolute top-0 bottom-0 z-20 w-1 bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)]"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-400 text-stone-900 flex items-center justify-center font-bold text-xs shadow-lg">
                  &lt;&gt;
                </div>
              </div>
            </div>
          )}

          {/* Toggle Before/After Mode button */}
          {project.beforeImageUrl && (
            <button
              onClick={() => setShowBeforeAfter(!showBeforeAfter)}
              className="absolute top-4 left-4 z-20 px-4 py-2 rounded-full bg-stone-900/80 hover:bg-stone-800 backdrop-blur-md border border-stone-600 text-xs font-semibold text-amber-300 uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{showBeforeAfter ? 'View Photo' : 'Compare Before / After'}</span>
            </button>
          )}

          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-900 to-transparent" />
        </div>

        {/* Modal Content Details */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Header & Category */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1 block">
                {project.category}
              </span>
              <h2 className="serif-display text-3xl sm:text-4xl font-normal text-white">
                {project.title}
              </h2>
            </div>

            <button
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-900/30"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Inquire About Similar Design</span>
            </button>
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-stone-950/80 border border-stone-800 text-xs">
            <div>
              <span className="text-stone-400 block font-medium uppercase tracking-wider text-[10px]">
                Location
              </span>
              <div className="flex items-center gap-1.5 font-semibold text-stone-200 mt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{project.location}</span>
              </div>
            </div>

            <div>
              <span className="text-stone-400 block font-medium uppercase tracking-wider text-[10px]">
                Completion
              </span>
              <div className="flex items-center gap-1.5 font-semibold text-stone-200 mt-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{project.completionYear}</span>
              </div>
            </div>

            <div>
              <span className="text-stone-400 block font-medium uppercase tracking-wider text-[10px]">
                Space Size
              </span>
              <div className="flex items-center gap-1.5 font-semibold text-stone-200 mt-1">
                <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                <span>{project.sizeSqFt} sq. ft.</span>
              </div>
            </div>

            <div>
              <span className="text-stone-400 block font-medium uppercase tracking-wider text-[10px]">
                Timeline
              </span>
              <div className="flex items-center gap-1.5 font-semibold text-stone-200 mt-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{project.duration}</span>
              </div>
            </div>
          </div>

          {/* Design Story Narrative */}
          <div>
            <h4 className="serif-display text-xl font-medium text-white mb-2">
              Design Vision &amp; Execution
            </h4>
            <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
              {project.fullStory}
            </p>
          </div>

          {/* Project Tags */}
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 block mb-2">
              Design Elements
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-stone-800 text-stone-300 text-xs font-medium border border-stone-700 flex items-center gap-1"
                >
                  <Tag className="w-3 h-3 text-amber-400" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
