import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-200/80 bg-stone-50/70 py-12 text-xs text-stone-600">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-serif text-lg font-normal text-stone-900 tracking-tight">
              {PORTFOLIO_DATA.personal.name}
            </div>
            <div className="text-stone-500 mt-1">
              Frontend Developer · React Specialist · UI Engineer
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-medium">
            <a href="#projects" className="hover:text-stone-950 transition-colors">
              Works
            </a>
            <a href="#craft-lab" className="hover:text-stone-950 transition-colors">
              Craft Lab
            </a>
            <a href="#philosophy" className="hover:text-stone-950 transition-colors">
              Philosophy
            </a>
            <a href="#experience" className="hover:text-stone-950 transition-colors">
              Experience
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-stone-950 transition-colors cursor-pointer text-left"
            >
              Resume
            </button>
            <button
              onClick={onOpenContact}
              className="hover:text-stone-950 transition-colors cursor-pointer text-left"
            >
              Contact
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500">
          <div className="flex items-center gap-1.5">
            <span>Designed & coded with calm intention by Muneeza Aijaz</span>
            <span aria-hidden="true">·</span>
            <span>2026</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 transition-colors"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 transition-colors"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-stone-600 hover:text-stone-950 transition-colors cursor-pointer ml-2"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
