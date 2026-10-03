import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface EducationProps {
  isDark: boolean;
}

export const Education: React.FC<EducationProps> = ({ isDark }) => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-emerald-500 mb-2">
            <span>05</span>
            <span>/</span>
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-display">
            Education
          </h2>
          <p className={`mt-2 text-sm sm:text-base max-w-xl ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Formal academic milestones in Artificial Intelligence, Data Science, and Mathematics.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-neutral-800/80 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-10">
          
          {PORTFOLIO_DATA.education.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Node Indicator */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                  item.status === 'In Progress'
                    ? 'bg-emerald-500 border-neutral-950 ring-4 ring-emerald-500/20'
                    : 'bg-neutral-800 border-emerald-500/60 group-hover:bg-emerald-500'
                }`}
              />

              {/* Education Card */}
              <div
                className={`rounded-2xl p-6 sm:p-7 border transition-all duration-200 ${
                  isDark
                    ? 'bg-neutral-900/60 border-neutral-800 group-hover:border-neutral-700'
                    : 'bg-white border-neutral-200 shadow-sm group-hover:shadow-md'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                      {item.status} · {item.field}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-display group-hover:text-emerald-400 transition-colors">
                      {item.degree}
                    </h3>
                  </div>

                  {/* GPA Box with Tabular Numerals */}
                  <div
                    className={`px-3 py-1.5 rounded-lg border flex items-center gap-1.5 self-start sm:self-auto font-mono text-xs ${
                      isDark
                        ? 'bg-neutral-950 border-neutral-800 text-emerald-400'
                        : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                    }`}
                  >
                    <Award className="w-3.5 h-3.5 text-emerald-500" />
                    <span>GPA:</span>
                    <span className="font-bold tabular-nums text-sm">{item.gpa}</span>
                  </div>
                </div>

                <p className={`text-sm sm:text-base font-medium mb-4 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  {item.institution}
                </p>

                {/* Metadata row */}
                <div className={`flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono pt-3 border-t ${
                  isDark ? 'border-neutral-800/80 text-neutral-400' : 'border-neutral-200 text-neutral-600'
                }`}>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{item.period}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
