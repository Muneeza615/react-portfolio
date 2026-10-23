import React from 'react';
import { Briefcase, CheckCircle2, Award, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsAndExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Career Journey Timeline */}
        <div className="lg:col-span-7 space-y-12">
          <div>
            <div className="text-xs font-semibold tracking-wider text-rose-700/90 uppercase mb-2">
              Career Journey
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
              4+ years of shipping resilient software.
            </h2>
          </div>

          <div className="space-y-10 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-stone-200">
            {PORTFOLIO_DATA.experiences.map((exp) => (
              <div key={exp.id} className="relative pl-9 space-y-3 group">
                {/* Timeline node */}
                <div className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-stone-800 -translate-x-1/2 group-hover:scale-125 group-hover:border-rose-600 transition-all" />

                {/* Role, Company, Period */}
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-xl font-normal text-stone-900">
                    {exp.role}{' '}
                    <span className="font-sans text-sm font-semibold text-stone-600">
                      @ {exp.company}
                    </span>
                  </h3>
                  <span className="text-xs text-stone-500 font-mono tabular-nums">
                    {exp.period}
                  </span>
                </div>

                {/* Location unboxed */}
                <div className="text-xs text-stone-500">
                  <span>{exp.location}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-stone-600 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-2 pt-1">
                  {exp.achievements.map((ach) => (
                    <li key={ach} className="flex items-start gap-2 text-xs text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies used (clean unboxed text separated by dots) */}
                <div className="pt-2 text-xs text-stone-500 font-medium">
                  {exp.technologies.join('  ·  ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Technical Toolkit & Architecture Matrix */}
        <div className="lg:col-span-5 space-y-10">
          <div>
            <div className="text-xs font-semibold tracking-wider text-rose-700/90 uppercase mb-2">
              Capabilities
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
              Technical toolkit.
            </h2>
          </div>

          {/* Core React Stack */}
          <div className="p-6 rounded-2xl bg-white/70 border border-stone-200/80 shadow-xs space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-stone-700" />
              <span>Core Frontend & React</span>
            </h3>

            <div className="space-y-3">
              {PORTFOLIO_DATA.skills.core.map((skill) => (
                <div key={skill.name} className="flex items-start justify-between gap-4 text-xs">
                  <div>
                    <div className="font-semibold text-stone-900">{skill.name}</div>
                    <div className="text-stone-500">{skill.desc}</div>
                  </div>
                  <span className="font-mono text-[11px] text-rose-800 font-medium shrink-0 pt-0.5">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Engineering Standards */}
          <div className="p-6 rounded-2xl bg-white/70 border border-stone-200/80 shadow-xs space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-stone-700" />
              <span>Architecture & Standards</span>
            </h3>

            <div className="space-y-3">
              {PORTFOLIO_DATA.skills.architecture.map((item) => (
                <div key={item.name} className="text-xs">
                  <div className="font-semibold text-stone-900">{item.name}</div>
                  <div className="text-stone-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Tooling */}
          <div className="p-6 rounded-2xl bg-white/70 border border-stone-200/80 shadow-xs space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Tooling & Workflow
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600 font-medium">
              {PORTFOLIO_DATA.skills.tools.map((tool, i) => (
                <React.Fragment key={tool}>
                  {i > 0 && <span aria-hidden="true" className="text-stone-300">·</span>}
                  <span>{tool}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
