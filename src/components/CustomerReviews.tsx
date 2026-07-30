import React, { useState } from 'react';
import { Star, Plus, Quote, CheckCircle2, X } from 'lucide-react';
import { REVIEWS_DATA } from '../data/mockData';
import { ReviewItem } from '../types';

export const CustomerReviews: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS_DATA);
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: '',
    projectType: 'Living Room Design',
  });
  const [submittedToast, setSubmittedToast] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const created: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      avatarUrl: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200`,
      rating: newReview.rating,
      comment: newReview.comment,
      date: 'Just now',
      projectType: newReview.projectType,
    };

    setReviews([created, ...reviews]);
    setShowAddReviewModal(false);
    setNewReview({ name: '', rating: 5, comment: '', projectType: 'Living Room Design' });
    setSubmittedToast(true);
    setTimeout(() => setSubmittedToast(false), 4000);
  };

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-stone-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="serif-display text-3xl sm:text-4xl md:text-5xl font-medium text-stone-900">
            Customer Reviews
          </h2>
          <p className="mt-3 text-stone-500 text-sm sm:text-base font-normal">
            Discover how our thoughtful spatial designs and craftsmanship resonated with our satisfied clients.
          </p>
        </div>

        {/* Layout with Warm Beige Left Panel + Overlapping Floating Cards Right Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Warm Cream Card */}
          <div className="lg:col-span-5 bg-[#f5efe6] rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-sm border border-[#e8dfd3] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl" />

            <div>
              <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold mb-2 block">
                Testimonials
              </span>
              <h3 className="serif-display text-3xl sm:text-4xl font-normal text-stone-900 leading-tight">
                Customer Reviews
              </h3>
              <p className="mt-6 text-stone-600 text-sm leading-relaxed">
                Read authentic feedback from homeowners and commercial clients whose vision came to life through our design expertise.
              </p>

              {/* Overall Rating Stats */}
              <div className="mt-8 pt-8 border-t border-stone-300/60 flex items-center gap-4">
                <div className="text-4xl font-bold text-stone-900 serif-display">4.9</div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-xs text-stone-500 mt-1 font-medium">
                    Based on 120+ Verified Client Projects
                  </div>
                </div>
              </div>
            </div>

            {/* Add Review Action */}
            <div className="mt-10 pt-6">
              <button
                onClick={() => setShowAddReviewModal(true)}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>Leave a Review</span>
              </button>
            </div>
          </div>

          {/* Right Column with Stacked White Floating Testimonial Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl border border-stone-200/90 transition-all duration-300 transform hover:-translate-y-1 relative"
              >
                <div className="flex items-start justify-between gap-4">
                  {/* Avatar & Name */}
                  <div className="flex items-center gap-3.5">
                    <img
                      src={rev.avatarUrl}
                      alt={rev.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-amber-100 shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-stone-900 text-base leading-snug">
                        {rev.name}
                      </h4>
                      <span className="text-[11px] text-stone-400 block font-medium">
                        {rev.projectType} • {rev.date}
                      </span>
                    </div>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Comment Text */}
                <p className="mt-4 text-xs sm:text-sm text-stone-600 font-light leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Review Modal */}
      {showAddReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-stone-200 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowAddReviewModal(false)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="serif-display text-2xl font-bold text-stone-900 mb-1">
              Leave Your Feedback
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Share your experience working with LuxeSpace Interiors.
            </p>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-800 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Project Type
                </label>
                <input
                  type="text"
                  value={newReview.projectType}
                  onChange={(e) => setNewReview({ ...newReview, projectType: e.target.value })}
                  placeholder="e.g. House Renovation"
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-800 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Star Rating
                </label>
                <div className="flex items-center gap-2 py-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className="p-1 focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= newReview.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-stone-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Review Comment
                </label>
                <textarea
                  rows={3}
                  required
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  placeholder="Tell us about the design quality, communication, and overall experience..."
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-800 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-stone-800 hover:bg-stone-700 text-white font-semibold text-xs uppercase tracking-wider shadow-md transition-colors"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Notification Toast */}
      {submittedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-stone-700 animate-in slide-in-from-bottom-5">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span className="text-xs font-medium">Thank you! Your review has been added.</span>
        </div>
      )}
    </section>
  );
};
