/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { ProjectsSection } from './components/ProjectsSection';
import { InteractiveCraftLab } from './components/InteractiveCraftLab';
import { PhilosophySection } from './components/PhilosophySection';
import { SkillsAndExperienceSection } from './components/SkillsAndExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { PORTFOLIO_DATA, Project } from './data/portfolioData';

export default function App() {
  const [activeTheme, setActiveTheme] = useState<string>('royal-sapphire');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  const currentTheme =
    PORTFOLIO_DATA.themeGradients.find((t) => t.id === activeTheme) ||
    PORTFOLIO_DATA.themeGradients[0];

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-stone-800 relative selection:bg-blue-200 selection:text-blue-950 transition-colors duration-700">
      {/* Dynamic Soft Ambient Gradient Canvas */}
      <div
        className="fixed inset-0 pointer-events-none -z-20 transition-all duration-700"
        style={{
          background: `
            radial-gradient(at 10% 12%, ${currentTheme.color1} 0px, transparent 55%),
            radial-gradient(at 88% 8%, ${currentTheme.color2} 0px, transparent 50%),
            radial-gradient(at 82% 85%, ${currentTheme.color3} 0px, transparent 55%),
            radial-gradient(at 12% 88%, ${currentTheme.color1} 0px, transparent 50%),
            #faf8f5
          `,
        }}
      />

      {/* Subtle paper grain texture overlay for human warmth */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top Bar Navigation */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenResume={() => setIsResumeOpen(true)}
        activeTheme={activeTheme}
        onSelectTheme={setActiveTheme}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenContact={handleOpenContact}
          onOpenResume={() => setIsResumeOpen(true)}
          activeTheme={activeTheme}
          onSelectTheme={setActiveTheme}
        />

        {/* Full-width Stats Strip */}
        <StatsStrip />

        {/* Selected Works with Case Studies */}
        <ProjectsSection onSelectProject={setSelectedProject} />

        {/* Interactive Frontend Craft Lab */}
        <InteractiveCraftLab />

        {/* Engineering Philosophy */}
        <PhilosophySection />

        {/* Career Timeline & Technical Stack */}
        <SkillsAndExperienceSection />

        {/* Human Kind Words / Testimonials */}
        <TestimonialsSection />

        {/* Contact Form Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Fullscreen Case Study Deep-Dive Lightbox */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Fullscreen Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
