import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-stone-950/60 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl border border-stone-200/90 shadow-2xl overflow-y-auto z-10 flex flex-col">
        {/* Sticky Header with Close button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-stone-200">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span>Case Study</span>
            <span aria-hidden="true">/</span>
            <span className="text-stone-900 font-semibold">{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close case study modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Tagline */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-stone-900 tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-stone-600 font-light">
              {project.tagline}
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100 aspect-video">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-gradient-to-r from-stone-50 via-rose-50/30 to-amber-50/20 border border-stone-200/80">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="font-serif text-2xl font-normal text-stone-900 tabular-nums">
                  {m.value}
                </span>
                <span className="text-xs text-stone-500 font-medium">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Deep Dive: Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-normal text-stone-900 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-rose-500" />
                <span>The Architectural Challenge</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-xl font-normal text-stone-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Engineered Solution</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* React Patterns Used */}
          <div className="p-5 rounded-xl bg-stone-50/80 border border-stone-200/70 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Key React & Frontend Architecture Patterns
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.reactFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Unboxed */}
          <div className="space-y-2 pt-2 border-t border-stone-200/70">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              Technologies & Tooling
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-700 font-medium">
              {project.techStack.map((tech, index) => (
                <React.Fragment key={tech}>
                  {index > 0 && <span aria-hidden="true" className="text-stone-300">·</span>}
                  <span>{tech}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200/70">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Inspect Code</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-stone-500 hover:text-stone-900 font-medium cursor-pointer"
            >
              Close Viewer (ESC)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
