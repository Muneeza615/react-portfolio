import React from 'react';
import { Heart, Gauge, Shield, CodeXml } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  const icons = [Heart, Gauge, Shield, CodeXml];

  return (
    <section id="philosophy" className="py-24 max-w-6xl mx-auto px-6">
      <div className="max-w-2xl mb-16">
        <div className="text-xs font-semibold tracking-wider text-rose-700/90 uppercase mb-2">
          Engineering Philosophy
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight mb-4">
          Principles that guide every line of code.
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Building frontend applications is where math, typography, and human empathy converge. Here are the core convictions I bring to every product team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PORTFOLIO_DATA.principles.map((principle, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div
              key={principle.number}
              className="group p-8 rounded-2xl bg-white/70 border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden soft-card-hover"
            >
              {/* Soft decorative ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100/30 rounded-bl-full pointer-events-none -z-10 group-hover:bg-rose-100/50 transition-colors" />

              {/* Natural Editorial Numbering */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-lg font-normal text-rose-800/80">
                  {principle.number}.
                </span>
                <div className="w-9 h-9 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-stone-800" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-normal text-stone-900 tracking-tight mb-3">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                {principle.description}
              </p>

              {/* Concrete Detail */}
              <div className="pt-4 border-t border-stone-100 text-xs text-stone-500 italic">
                {principle.detail}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
