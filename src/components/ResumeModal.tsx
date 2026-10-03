import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, ExternalLink, Check, Copy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  isDark,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden ${
          isDark
            ? 'bg-neutral-900 border-neutral-800 text-neutral-100'
            : 'bg-white border-neutral-200 text-neutral-900'
        }`}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/40">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono font-medium">
              Rajamahendravarpu_ChandraSekhar_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-800 text-xs font-medium text-neutral-200 hover:text-white hover:bg-neutral-700 flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-800 text-xs font-medium text-neutral-200 hover:text-white hover:bg-neutral-700 flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">Share Link</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume modal"
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-neutral-950/20 print:p-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-neutral-800 pb-6 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display">
              {PORTFOLIO_DATA.personal.fullName}
            </h1>
            
            <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-xs font-mono text-neutral-400 print:text-neutral-700">
              <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-emerald-400 transition-colors">
                {PORTFOLIO_DATA.personal.email}
              </a>
              <span>·</span>
              <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                LinkedIn Profile
              </a>
              <span>·</span>
              <span>{PORTFOLIO_DATA.personal.phone}</span>
              <span>·</span>
              <span>{PORTFOLIO_DATA.personal.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 font-semibold">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-neutral-300 print:text-neutral-800">
              {PORTFOLIO_DATA.personal.summary}
            </p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 font-semibold">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {PORTFOLIO_DATA.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-2.5 py-1 rounded bg-neutral-800/60 border border-neutral-700/60 text-neutral-200 print:border-neutral-300 print:text-black"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 font-semibold">
              Education
            </h2>
            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="text-xs sm:text-sm border-l-2 border-emerald-500/40 pl-3">
                  <div className="flex justify-between font-semibold">
                    <span>{edu.degree}</span>
                    <span className="font-mono text-emerald-400 print:text-black font-normal">GPA: {edu.gpa}</span>
                  </div>
                  <div className="text-neutral-400 print:text-neutral-600 font-mono text-xs mt-0.5">
                    {edu.institution} · {edu.period} · {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 font-semibold">
              Work Experience
            </h2>
            <div className="space-y-4">
              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <div key={idx} className="text-xs sm:text-sm border-l-2 border-emerald-500/40 pl-3">
                  <div className="flex justify-between font-semibold">
                    <span>{exp.role}</span>
                    <span className="font-mono text-neutral-400 print:text-neutral-600">{exp.period}</span>
                  </div>
                  <div className="text-emerald-400 print:text-black font-mono text-xs mt-0.5">
                    {exp.company}
                  </div>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-xs text-neutral-300 print:text-neutral-800">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 font-semibold">
              Projects
            </h2>
            <div className="space-y-4">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm border-l-2 border-emerald-500/40 pl-3">
                  <div className="font-semibold text-base">{proj.title}</div>
                  <p className="mt-1 text-xs text-neutral-300 print:text-neutral-800 leading-relaxed">
                    {proj.description}
                  </p>
                  <p className="mt-1 text-xs text-neutral-300 print:text-neutral-800 leading-relaxed">
                    {proj.longDescription}
                  </p>
                  <div className="mt-2 text-[11px] font-mono text-emerald-400 print:text-black">
                    Technologies: {proj.tags.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-3 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between text-xs font-mono text-neutral-400">
          <span>Source: Official Resume · No Hallucinated Data</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
