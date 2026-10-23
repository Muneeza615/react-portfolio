import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const StatsStrip: React.FC = () => {
  return (
    <section className="border-y border-stone-200/70 bg-white/50 backdrop-blur-sm py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-stone-200/60">
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col justify-center ${
                idx !== 0 ? 'pt-4 md:pt-0 md:pl-8' : ''
              }`}
            >
              <div className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight tabular-nums mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-stone-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
