import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t transition-colors ${
        isDark ? 'bg-neutral-950 border-neutral-800/80 text-neutral-400' : 'bg-white border-neutral-200 text-neutral-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Identity */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <a
              href="#home"
              className="text-base font-bold tracking-tight font-display text-white flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className={isDark ? 'text-white' : 'text-neutral-900'}>
                {PORTFOLIO_DATA.personal.fullName}
              </span>
            </a>
            <p className="text-xs font-mono text-neutral-500">
              AI & Data Science Undergraduate · Satya Institute of Technology and Management
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-emerald-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`p-2 rounded-lg border transition-colors ${
                isDark
                  ? 'border-neutral-800 bg-neutral-900 hover:text-white hover:border-neutral-700'
                  : 'border-neutral-200 bg-neutral-100 hover:text-neutral-950'
              }`}
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`p-2 rounded-lg border transition-colors ${
                isDark
                  ? 'border-neutral-800 bg-neutral-900 hover:text-white hover:border-neutral-700'
                  : 'border-neutral-200 bg-neutral-100 hover:text-neutral-950'
              }`}
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              aria-label="Email"
              className={`p-2 rounded-lg border transition-colors ${
                isDark
                  ? 'border-neutral-800 bg-neutral-900 hover:text-white hover:border-neutral-700'
                  : 'border-neutral-200 bg-neutral-100 hover:text-neutral-950'
              }`}
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm active:scale-95"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Quiet Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-500 gap-2">
          <span>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.fullName}. All rights reserved.
          </span>
          <span className="flex items-center gap-1">
            Built with React & Tailwind CSS · Verified from Resume
          </span>
        </div>
      </div>
    </footer>
  );
};
