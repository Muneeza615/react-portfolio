import React from 'react';
import { ArrowDown, Sparkles, Code2, Compass, Layers, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  activeTheme: string;
  onSelectTheme: (themeId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenContact,
  onOpenResume,
  activeTheme,
  onSelectTheme,
}) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Split screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Left Column: Typographic Hierarchy & Story */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Subtle editorial kicker */}
            <div className="flex items-center gap-2.5 text-xs font-semibold text-blue-800 tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>Frontend Developer · React Specialist · UI Engineer</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] tracking-tight text-stone-900 mb-6 text-balance font-normal">
              Crafting interfaces that feel{' '}
              <span className="italic font-light text-blue-900 underline decoration-blue-400/70 decoration-wavy decoration-1 underline-offset-8">
                alive, intuitive
              </span>
              , and deeply human.
            </h1>

            {/* Humanized lead copy */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl mb-6">
              Hello, I&apos;m <span className="font-semibold text-stone-900">Muneeza Aijaz</span>. I specialize in building calm, accessible React applications where fluid state, 60fps spring gestures, and tactile design systems meet obsessive performance standards.
            </p>

            {/* Clean unboxed metadata with typographic separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-8 font-medium">
              <span>Lahore, Pakistan</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Worldwide Remote Available</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>4+ Years Production Experience</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-emerald-700 font-semibold">Open for New Roles</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                Explore Selected Works
              </a>
              <a
                href="#craft-lab"
                className="px-5 py-3 text-sm font-medium text-stone-700 bg-white/90 hover:bg-white border border-blue-200/80 hover:border-blue-300 rounded-full transition-all duration-200 hover:shadow-sm cursor-pointer whitespace-nowrap flex items-center gap-2"
              >
                <Code2 className="w-4 h-4 text-blue-600" />
                <span>Frontend Craft Lab</span>
              </a>
              <button
                onClick={onOpenResume}
                className="px-4 py-3 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer whitespace-nowrap"
              >
                View Resume →
              </button>
            </div>

            {/* Interactive Ambient Gradient Tuner */}
            <div className="pt-5 border-t border-stone-200/60 flex flex-wrap items-center gap-3 text-xs text-stone-500">
              <span className="flex items-center gap-1.5 font-medium text-stone-600">
                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                <span>Ambient Mood:</span>
              </span>
              <div className="flex items-center gap-1.5 bg-white/80 p-1 rounded-full border border-blue-100 shadow-xs">
                {PORTFOLIO_DATA.themeGradients.map((theme) => {
                  const isActive = activeTheme === theme.id;
                  return (
                    <button
                      key={theme.id}
                      onClick={() => onSelectTheme(theme.id)}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-blue-900 text-white shadow-xs'
                          : 'text-stone-600 hover:text-stone-900 hover:bg-blue-50/60'
                      }`}
                    >
                      <span
                        className="w-2 h-2 rounded-full border border-white/60"
                        style={{ backgroundColor: theme.accent }}
                      />
                      <span>{theme.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Container (Attached Portrait with matching Royal Blue theme) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Soft ambient blur halo behind portrait matching the deep royal blue */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-500/30 via-indigo-400/25 to-sky-300/30 blur-2xl -z-10 opacity-80" />

              {/* Main portrait frame with soft glass styling */}
              <div className="relative rounded-2xl overflow-hidden border border-blue-200/60 bg-white/40 shadow-xl backdrop-blur-xs group">
                <img
                  src="/src/assets/images/muneeza_aijaz_portrait.png"
                  alt="Muneeza Aijaz — Frontend Developer & React Engineer"
                  className="w-full aspect-square object-cover object-top hover:scale-[1.015] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle glass reflection gradient scrim at bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-lg font-normal tracking-tight text-white">
                        Muneeza Aijaz
                      </p>
                      <p className="text-xs text-blue-200/90">
                        Frontend Developer &amp; React Specialist
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-950/50 backdrop-blur-md text-[11px] text-white font-medium border border-blue-400/30">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        Available for hire
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle secondary floating card */}
              <div className="mt-4 p-3.5 rounded-xl bg-white/90 border border-blue-100/90 shadow-sm backdrop-blur-md flex items-center justify-between text-xs text-stone-600">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                  <span className="font-medium text-stone-800">Currently crafting:</span>
                  <span className="text-stone-500">React 19 &amp; UI Architecture</span>
                </div>
                <button
                  onClick={onOpenContact}
                  className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer underline underline-offset-2"
                >
                  Say hello
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
