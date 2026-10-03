/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TechBackground } from './components/TechBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Toggle Theme handler
  const handleToggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  // Sync initial theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Track active section for navigation
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen relative selection:bg-emerald-500/20 selection:text-emerald-300 transition-colors duration-300 ${
      isDark ? 'bg-neutral-950 text-neutral-100' : 'bg-neutral-50 text-neutral-900'
    }`}>
      {/* Background Interactive Tech Grid Canvas */}
      <TechBackground isDark={isDark} />

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <Navbar
          isDark={isDark}
          onToggleTheme={handleToggleTheme}
          onOpenResume={() => setIsResumeModalOpen(true)}
          activeSection={activeSection}
        />

        {/* Page Content */}
        <main className="flex-1">
          <Hero
            isDark={isDark}
            onOpenResume={() => setIsResumeModalOpen(true)}
          />

          <About isDark={isDark} />

          <Skills isDark={isDark} />

          <Projects isDark={isDark} />

          <Experience isDark={isDark} />

          <Education isDark={isDark} />

          <ResumeSection
            isDark={isDark}
            onOpenResume={() => setIsResumeModalOpen(true)}
          />

          <Contact isDark={isDark} />
        </main>

        {/* Footer */}
        <Footer isDark={isDark} />
      </div>

      {/* Full Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}
