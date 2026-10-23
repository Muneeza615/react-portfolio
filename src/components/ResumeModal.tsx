import React, { useEffect, useState } from 'react';
import { X, Download, Printer, Check, Mail, MapPin, Globe, ExternalLink, Calendar } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloaded(true);
    // Create text resume file or simulate PDF download
    const element = document.createElement("a");
    const resumeText = `MUNEEZA AIJAZ - FRONTEND DEVELOPER & REACT ENGINEER
Email: ${PORTFOLIO_DATA.personal.email}
Location: ${PORTFOLIO_DATA.personal.location}

SUMMARY:
${PORTFOLIO_DATA.personal.extendedBio}

EXPERIENCE:
${PORTFOLIO_DATA.experiences.map(e => `
- ${e.role} at ${e.company} (${e.period})
  ${e.description}
  Achievements:
  ${e.achievements.map(a => `  * ${a}`).join('\n')}
  Technologies: ${e.technologies.join(', ')}
`).join('\n')}

CORE SKILLS:
${PORTFOLIO_DATA.skills.core.map(s => `${s.name}: ${s.desc}`).join('\n')}
Architecture: ${PORTFOLIO_DATA.skills.architecture.map(a => a.name).join(', ')}
Tools: ${PORTFOLIO_DATA.skills.tools.join(', ')}
`;
    const file = new Blob([resumeText], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "Muneeza_Aijaz_Frontend_Engineer_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-stone-950/60 backdrop-blur-md animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-y-auto z-10 flex flex-col">
        {/* Modal Toolbar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-stone-200">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span className="text-stone-900 font-semibold">Curriculum Vitae</span>
            <span aria-hidden="true">·</span>
            <span>Muneeza Aijaz</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {downloaded ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Download className="w-3.5 h-3.5" />}
              <span>{downloaded ? 'Downloaded' : 'Download CV'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              title="Print resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-10 space-y-8 text-stone-800 font-sans">
          {/* Header */}
          <div className="border-b border-stone-200 pb-6">
            <h1 className="font-serif text-3xl font-normal text-stone-900 tracking-tight mb-1">
              Muneeza Aijaz
            </h1>
            <p className="text-sm font-medium text-rose-800 mb-3">
              Frontend Developer & React Specialist · UI Architecture
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-600">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-stone-400" />
                {PORTFOLIO_DATA.personal.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                Lahore, Pakistan (Open to Remote Worldwide)
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-stone-400" />
                muneeza-portfolio.dev
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Frontend engineer with 4+ years of dedicated React & TypeScript experience architecting responsive web applications, design systems, and high-performance interactive interfaces. Proven track record reducing layout shifts, eliminating render bottlenecks, and translating complex product design requirements into accessible, resilient web applications.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Professional Experience
            </h2>

            {PORTFOLIO_DATA.experiences.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-wrap items-baseline justify-between">
                  <h3 className="text-sm font-bold text-stone-900">
                    {exp.role} <span className="font-normal text-stone-600">— {exp.company}</span>
                  </h3>
                  <span className="text-xs text-stone-500 font-mono tabular-nums">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs text-stone-600">
                  {exp.description}
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-stone-700">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="leading-relaxed">
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-stone-200">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                Education
              </h2>
              <div className="text-xs space-y-1">
                <div className="font-semibold text-stone-900">
                  Bachelor of Science in Computer Science
                </div>
                <div className="text-stone-500">
                  University of Engineering & Technology · 2017 — 2021
                </div>
                <div className="text-stone-600 italic">
                  Graduated with Honors · Specialization in Human-Computer Interaction
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                Certifications
              </h2>
              <div className="text-xs space-y-1">
                <div className="font-semibold text-stone-900">
                  Meta Certified Frontend Developer
                </div>
                <div className="text-stone-500">
                  Meta / Coursera · React, State Architecture & Testing
                </div>
                <div className="font-semibold text-stone-900 mt-2">
                  Web Accessibility Specialist (CPACC)
                </div>
                <div className="text-stone-500">
                  International Association of Accessibility Professionals
                </div>
              </div>
            </div>
          </div>

          {/* Technical Toolkit */}
          <div className="pt-4 border-t border-stone-200">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
              Technical Stack & Competencies
            </h2>
            <div className="text-xs text-stone-700 space-y-1">
              <div>
                <span className="font-semibold text-stone-900">Languages & Frameworks: </span>
                React 19, TypeScript, JavaScript (ESNext), Next.js, HTML5 Semantic DOM, CSS3/Grid.
              </div>
              <div>
                <span className="font-semibold text-stone-900">Styling & Motion: </span>
                Tailwind CSS, Motion (Framer Motion), CSS Modules, Radix UI Primitives, Headless UI.
              </div>
              <div>
                <span className="font-semibold text-stone-900">State & Performance: </span>
                Zustand, React Query, Redux Toolkit, Web Vitals, Virtualization, Web Workers.
              </div>
              <div>
                <span className="font-semibold text-stone-900">Testing & Tooling: </span>
                Vitest, React Testing Library, Jest, Vite, Git/GitHub, Storybook, Figma.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
