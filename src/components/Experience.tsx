import React from 'react';
import { Briefcase, Calendar, Shield, Cpu, Terminal, CheckCircle2, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ExperienceProps {
  isDark: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-emerald-500 mb-2">
            <span>04</span>
            <span>/</span>
            <span>Professional Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-display">
            Work Experience
          </h2>
          <p className={`mt-2 text-sm sm:text-base max-w-xl ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Industry internship experience applying machine learning algorithms and cyber security concepts to practical problem spaces.
          </p>
        </div>

        {/* Experience Cards */}
        {PORTFOLIO_DATA.experience.map((exp, idx) => (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isDark
                ? 'bg-neutral-900/50 border-neutral-800'
                : 'bg-white border-neutral-200 shadow-sm'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Visual Showcase Column */}
              <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[300px] bg-neutral-950 overflow-hidden">
                <img
                  src="/src/assets/images/cybersecurity_ai_preview_1791001405057.jpg"
                  alt="Indian Servers AI & Cybersecurity Internship"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Cyber Security & AI Lab</span>
                  </div>
                  <p className="text-sm font-bold text-white font-display">
                    Indian Servers · Practical Research
                  </p>
                </div>
              </div>

              {/* Information Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <Briefcase className="w-4 h-4" />
                      </span>
                      <h3 className="text-xl font-bold font-display">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-800/40">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                      <span>·</span>
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-emerald-500/90 mb-4 font-mono">
                    {exp.company} · {exp.type}
                  </p>

                  <div className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Stack from Resume */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Libraries & Frameworks Applied:
                    </h4>
                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded border ${
                            isDark
                              ? 'bg-neutral-950 border-neutral-800 text-neutral-300'
                              : 'bg-neutral-100 border-neutral-200 text-neutral-800'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800/50 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>Verified 4-Week Technical Program</span>
                  <span className="text-emerald-400">2025</span>
                </div>

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};
