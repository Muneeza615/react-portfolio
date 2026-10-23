import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Code, Layout, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'systems' | 'apps' | 'editorial' | 'performance'>('all');

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="text-xs font-semibold tracking-wider text-rose-700/90 uppercase mb-2">
            Selected Works
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
            Designed for clarity, engineered for resilience.
          </h2>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-100/90 border border-stone-200/70 rounded-xl overflow-x-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              filter === 'all'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            All Works
          </button>
          <button
            onClick={() => setFilter('systems')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              filter === 'systems'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Design Systems
          </button>
          <button
            onClick={() => setFilter('apps')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              filter === 'apps'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            React Web Apps
          </button>
          <button
            onClick={() => setFilter('editorial')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              filter === 'editorial'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Editorial & Living
          </button>
          <button
            onClick={() => setFilter('performance')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              filter === 'performance'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Health & Telemetry
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group relative rounded-2xl bg-white/70 border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between soft-card-hover"
          >
            {/* Image Preview with clean framing */}
            <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 border-b border-stone-200/60">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-300" />

              {/* Top Action Overlay */}
              <div className="absolute top-4 right-4">
                <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-stone-800 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Card Content with ZERO PILLS */}
            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
              <div>
                {/* Clean unboxed metadata with typographic separators */}
                <div className="flex items-center gap-2 text-xs text-stone-500 font-medium mb-2.5">
                  <span className="text-rose-700 font-semibold">{project.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.role}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{project.year}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-normal text-stone-900 tracking-tight mb-2 group-hover:text-rose-900 transition-colors">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  {project.summary}
                </p>
              </div>

              {/* Bottom Metrics & Tags */}
              <div className="pt-4 border-t border-stone-200/60 space-y-3">
                {/* Primary Metric highlight */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500">{project.metrics[0].label}</span>
                  <span className="font-serif font-medium text-stone-900 text-sm tabular-nums">
                    {project.metrics[0].value}
                  </span>
                </div>

                {/* Clean unboxed tags separated by middle dots */}
                <div className="text-[11px] text-stone-500 font-medium truncate">
                  {project.tags.slice(0, 4).join('  ·  ')}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
