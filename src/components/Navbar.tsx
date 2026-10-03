import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  onOpenResume,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/20'
            : 'bg-white/90 backdrop-blur-md border-b border-neutral-200/80 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-lg font-bold tracking-tight transition-colors focus-visible:outline-emerald-500 font-display"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
          <span className={isDark ? 'text-white' : 'text-neutral-900'}>
            {PORTFOLIO_DATA.personal.preferredName}
          </span>
          <span className="text-emerald-500 font-mono text-xs font-normal">.dev</span>
        </a>

        {/* Zone 2: 4–6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 transition-colors whitespace-nowrap focus-visible:outline-emerald-500 ${
                  isActive
                    ? isDark
                      ? 'text-emerald-400 font-semibold'
                      : 'text-emerald-600 font-semibold'
                    : isDark
                    ? 'text-neutral-400 hover:text-neutral-100'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1–2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`p-2 rounded-lg transition-colors border focus-visible:outline-emerald-500 ${
              isDark
                ? 'bg-neutral-900/80 border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800'
                : 'bg-neutral-100 border-neutral-200 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 active:scale-95 transition-all shadow-sm focus-visible:outline-emerald-400 whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className={`md:hidden p-2 rounded-lg border focus-visible:outline-emerald-500 ${
              isDark
                ? 'bg-neutral-900 border-neutral-800 text-neutral-300'
                : 'bg-neutral-100 border-neutral-200 text-neutral-700'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation overlay */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 py-4 space-y-2 transition-colors ${
            isDark
              ? 'bg-neutral-950/95 border-neutral-800 backdrop-blur-lg'
              : 'bg-white/95 border-neutral-200 backdrop-blur-lg'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === link.href.replace('#', '')
                  ? isDark
                    ? 'bg-emerald-500/10 text-emerald-400 font-semibold'
                    : 'bg-emerald-50 text-emerald-700 font-semibold'
                  : isDark
                  ? 'text-neutral-300 hover:bg-neutral-900'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-neutral-800/40">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-emerald-400 bg-emerald-950/30 rounded-md border border-emerald-800/50"
            >
              <FileText className="w-4 h-4" />
              <span>View Full Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
