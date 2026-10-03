import React from 'react';
import { FileText, ArrowRight, Download, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeSectionProps {
  isDark: boolean;
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  isDark,
  onOpenResume,
}) => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative rounded-3xl p-8 sm:p-12 border overflow-hidden transition-all ${
            isDark
              ? 'bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border-neutral-800'
              : 'bg-gradient-to-br from-neutral-50 via-white to-neutral-100 border-neutral-200 shadow-md'
          }`}
        >
          {/* Subtle decorative grid/glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <FileText className="w-4 h-4" />
                <span>Verified Documentation</span>
                <span>·</span>
                <span>Official PDF & Digital Format</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-display">
                Want to know more about my journey?
              </h2>

              <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                Review my complete academic transcript, engineering project details, Indian Servers internship curriculum, and technical toolkit in a print-ready document.
              </p>

              <div className={`flex flex-wrap items-center gap-4 text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>SITAM AI & DS (2023-2027)</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Indian Servers Verified</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-emerald-600 text-white hover:bg-emerald-500 active:scale-95 transition-all shadow-md shadow-emerald-950/20 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  onOpenResume();
                  setTimeout(() => window.print(), 300);
                }}
                className={`px-5 py-3.5 rounded-xl font-semibold text-sm border active:scale-95 transition-all flex items-center justify-center gap-2 ${
                  isDark
                    ? 'border-neutral-700 bg-neutral-800/80 hover:bg-neutral-800 text-neutral-200'
                    : 'border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 shadow-sm'
                }`}
              >
                <Download className="w-4 h-4 opacity-75" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
