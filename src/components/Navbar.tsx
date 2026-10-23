import React, { useState, useEffect } from 'react';
import { Mail, FileText, Menu, X, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  activeTheme: string;
  onSelectTheme: (themeId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  onOpenResume,
  activeTheme,
  onSelectTheme,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-stone-200/60 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-slate-900 font-semibold text-lg tracking-tight whitespace-nowrap shrink-0 transition-opacity hover:opacity-85"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-200 via-sky-100 to-indigo-200 flex items-center justify-center text-xs font-serif italic text-stone-800 shadow-sm border border-blue-200/50">
            M
          </span>
          <span className="font-serif text-xl tracking-tight text-stone-900 font-medium">
            {PORTFOLIO_DATA.personal.name}
          </span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a
            href="#projects"
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-200"
          >
            Selected Works
          </a>
          <a
            href="#craft-lab"
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-200"
          >
            Craft Lab
          </a>
          <a
            href="#philosophy"
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-200"
          >
            Philosophy
          </a>
          <a
            href="#experience"
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-200"
          >
            Experience
          </a>
          <button
            onClick={onOpenResume}
            className="text-stone-600 hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left py-1"
          >
            Resume
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenContact}
            className="px-4 py-2 text-xs font-semibold tracking-wide text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200/80 rounded-full transition-all duration-200 hover:shadow-sm whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5 text-stone-600" />
            <span>Let&apos;s Connect</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-stone-200/80 px-6 py-4 space-y-3 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-3 pt-2 text-sm font-medium text-stone-700">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-stone-900"
            >
              Selected Works
            </a>
            <a
              href="#craft-lab"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-stone-900"
            >
              Craft Lab
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-stone-900"
            >
              Philosophy
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-stone-900"
            >
              Experience
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-left py-1.5 text-stone-700 hover:text-stone-900 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Resume & Credentials</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full text-center py-2.5 px-4 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors"
            >
              Let&apos;s Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
