import React from 'react';
import { GraduationCap, Briefcase, Code2, Users, Compass, ShieldCheck, Mail, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutProps {
  isDark: boolean;
}

export const About: React.FC<AboutProps> = ({ isDark }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-emerald-500 mb-2">
            <span>01</span>
            <span>/</span>
            <span>Profile Overview</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-display">
            About Me
          </h2>
          <p className={`mt-2 text-sm sm:text-base max-w-xl ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Undergraduate in Artificial Intelligence & Data Science, bridging algorithmic machine learning with real-world web applications.
          </p>
        </div>

        {/* Visually interesting Bento-inspired layout strictly from resume facts */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Core Technical Identity & Degree (col-span-7) */}
          <div
            className={`md:col-span-7 rounded-2xl p-6 sm:p-8 border transition-all ${
              isDark
                ? 'bg-neutral-900/60 border-neutral-800'
                : 'bg-white border-neutral-200 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display">
                  Academic Focus & Engineering Foundation
                </h3>
                <p className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  Satya Institute of Technology and Management · 2023 - 2027
                </p>
              </div>
            </div>

            <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              Currently pursuing a Bachelor of Artificial Intelligence and Data Science in Vizianagaram. My coursework and self-directed engineering emphasize the union of core programming, statistical analysis, and modern AI development frameworks.
            </p>

            {/* Resume facts summary badges - unboxed text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className={`p-3 rounded-lg border ${isDark ? 'bg-neutral-950/50 border-neutral-800/80 text-neutral-300' : 'bg-neutral-50 border-neutral-200 text-neutral-800'}`}>
                <span className="text-emerald-500 font-semibold block mb-0.5">Specialization</span>
                <span>Artificial Intelligence & Data Science</span>
              </div>
              <div className={`p-3 rounded-lg border ${isDark ? 'bg-neutral-950/50 border-neutral-800/80 text-neutral-300' : 'bg-neutral-50 border-neutral-200 text-neutral-800'}`}>
                <span className="text-emerald-500 font-semibold block mb-0.5">Current Standing</span>
                <span>Undergraduate (GPA: 6.51)</span>
              </div>
            </div>
          </div>

          {/* Card 2: Professional Exposure (col-span-5) */}
          <div
            className={`md:col-span-5 rounded-2xl p-6 sm:p-8 border transition-all flex flex-col justify-between ${
              isDark
                ? 'bg-neutral-900/60 border-neutral-800'
                : 'bg-white border-neutral-200 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display">
                    Industry Experience
                  </h3>
                  <p className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    Indian Servers · 2025
                  </p>
                </div>
              </div>

              <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                Completed an intensive 4-week virtual internship centered on Artificial Intelligence and Cyber Security. Applied Python data science libraries for basic dataset exploration and predictive machine learning models.
              </p>

              <div className={`text-xs font-mono space-y-1.5 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Libraries: NumPy · Pandas · Scikit-learn · TensorFlow</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Focus: AI Analysis & Cyber Security</span>
                </div>
              </div>
            </div>

            {/* Quick action button */}
            <div className="pt-4 mt-4 border-t border-neutral-800/40 flex items-center justify-between">
              <span className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Ready for Internship & Entry Roles
              </span>
              <a
                href="#contact"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
              >
                Get in touch &rarr;
              </a>
            </div>
          </div>

          {/* Card 3: Core Competencies (col-span-12) */}
          <div
            className={`md:col-span-12 rounded-2xl p-6 sm:p-8 border transition-all ${
              isDark
                ? 'bg-neutral-900/60 border-neutral-800'
                : 'bg-white border-neutral-200 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold font-display">
                  Professional Attributes & Working Style
                </h3>
                <p className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  Documented soft skills & collaboration strengths from resume
                </p>
              </div>

              {/* Quick email copy button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg border text-xs font-mono transition-all ${
                  isDark
                    ? 'bg-neutral-950 border-neutral-800 hover:border-neutral-700 text-neutral-300'
                    : 'bg-neutral-50 border-neutral-200 hover:border-neutral-300 text-neutral-700'
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Email Copied!' : PORTFOLIO_DATA.personal.email}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-neutral-950/40 border-neutral-800/80' : 'bg-neutral-50 border-neutral-200'}`}>
                <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold text-sm">
                  <Users className="w-4 h-4" />
                  <span>Communication</span>
                </div>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Clear articulation of technical decisions, project progress, and documentation.
                </p>
              </div>

              <div className={`p-4 rounded-xl border ${isDark ? 'bg-neutral-950/40 border-neutral-800/80' : 'bg-neutral-50 border-neutral-200'}`}>
                <div className="flex items-center gap-2 mb-2 text-teal-400 font-bold text-sm">
                  <Code2 className="w-4 h-4" />
                  <span>Teamwork</span>
                </div>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Collaborative mindset for group engineering assignments, peer reviews, and brainstorming.
                </p>
              </div>

              <div className={`p-4 rounded-xl border ${isDark ? 'bg-neutral-950/40 border-neutral-800/80' : 'bg-neutral-50 border-neutral-200'}`}>
                <div className="flex items-center gap-2 mb-2 text-cyan-400 font-bold text-sm">
                  <Compass className="w-4 h-4" />
                  <span>Adaptability</span>
                </div>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Agile learner eager to integrate emerging generative AI models, frameworks, and workflows.
                </p>
              </div>

              <div className={`p-4 rounded-xl border ${isDark ? 'bg-neutral-950/40 border-neutral-800/80' : 'bg-neutral-50 border-neutral-200'}`}>
                <div className="flex items-center gap-2 mb-2 text-amber-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Leadership</span>
                </div>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Taking initiative in project scoping, architectural ownership, and driving deliverables.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
