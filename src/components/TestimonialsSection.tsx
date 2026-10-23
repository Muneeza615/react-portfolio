import React from 'react';
import { Quote } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 border-t border-stone-200/70 bg-gradient-to-b from-stone-50/60 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-rose-700/90 uppercase mb-2">
            Kind Words & Collaborations
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
            Trusted by design and engineering peers.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-white/80 border border-stone-200/80 shadow-xs flex flex-col justify-between soft-card-hover"
            >
              <div>
                <Quote className="w-5 h-5 text-rose-300 mb-4" />
                <p className="text-sm text-stone-700 leading-relaxed italic mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-200 to-amber-100 border border-stone-200 flex items-center justify-center font-serif text-xs font-semibold text-stone-800 shrink-0">
                  {t.avatarText}
                </div>
                <div>
                  <div className="font-serif text-sm font-semibold text-stone-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-stone-500">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
