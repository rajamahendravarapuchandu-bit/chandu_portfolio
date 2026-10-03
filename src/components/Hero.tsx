import React, { useState } from 'react';
import {
  ArrowDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Code2,
  Copy,
  Check,
  Terminal,
  Cpu,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  isDark: boolean;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isDark, onOpenResume }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const pythonSnippet = `# Candidate Profile: AI & Data Science
from sitam_academics import Degree
from industry_experience import IndianServersInternship
from featured_project import AgriVisionAI

developer = {
    "name": "${PORTFOLIO_DATA.personal.fullName}",
    "degree": "B.Tech in Artificial Intelligence & Data Science",
    "institution": "Satya Institute of Technology and Management",
    "internship": "AI & Cyber Security @ Indian Servers (2025)",
    "stack": ["Python", "React", "TensorFlow", "Gemini API", "Firebase"]
}

def get_focus():
    return "Building practical, impact-driven AI applications"`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(pythonSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Typographic & Bio Anchor */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            {/* Status & Focus Kicker */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-wide">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className={isDark ? 'text-emerald-400' : 'text-emerald-600 font-medium'}>
                Undergraduate in AI & Data Science
              </span>
              <span className={isDark ? 'text-neutral-600' : 'text-neutral-400'}>·</span>
              <span className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>
                SITAM '27
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-display">
                <span className={isDark ? 'text-white' : 'text-neutral-950'}>
                  Hi, I'm{' '}
                </span>
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  ChandraSekhar
                </span>
              </h1>
              <p className={`text-lg sm:text-xl font-medium tracking-tight ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                {PORTFOLIO_DATA.personal.fullName}
              </p>
            </div>

            {/* Professional Summary from Resume */}
            <p
              className={`text-base sm:text-lg leading-relaxed max-w-xl text-balance ${
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              }`}
            >
              {PORTFOLIO_DATA.personal.summary}
            </p>

            {/* Quick unboxed metadata */}
            <div className={`flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                <span>Python · React · ML · Generative AI</span>
              </div>
              <span>·</span>
              <span>Class of 2027</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg font-semibold text-sm bg-emerald-600 text-white hover:bg-emerald-500 active:scale-95 transition-all shadow-md shadow-emerald-950/20 focus-visible:outline-emerald-400 flex items-center gap-2 whitespace-nowrap"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className={`px-6 py-3 rounded-lg font-semibold text-sm border active:scale-95 transition-all focus-visible:outline-emerald-400 flex items-center gap-2 whitespace-nowrap ${
                  isDark
                    ? 'border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-100 hover:border-neutral-600'
                    : 'border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-900 hover:border-neutral-400 shadow-sm'
                }`}
              >
                <span>View Resume</span>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </button>
            </div>

            {/* Social & Contact Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-neutral-800/40">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className={`flex items-center gap-2 text-xs font-medium py-1 px-2 rounded transition-colors ${
                  isDark
                    ? 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                }`}
              >
                <Linkedin className="w-4 h-4 text-emerald-500" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className={`flex items-center gap-2 text-xs font-medium py-1 px-2 rounded transition-colors ${
                  isDark
                    ? 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                }`}
              >
                <Github className="w-4 h-4 text-emerald-500" />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                aria-label="Send email"
                className={`flex items-center gap-2 text-xs font-medium py-1 px-2 rounded transition-colors ${
                  isDark
                    ? 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                }`}
              >
                <Mail className="w-4 h-4 text-emerald-500" />
                <span className="hidden sm:inline">{PORTFOLIO_DATA.personal.email}</span>
                <span className="sm:hidden">Email</span>
              </a>

              <a
                href={`tel:${PORTFOLIO_DATA.personal.rawPhone}`}
                aria-label="Phone call"
                className={`hidden md:flex items-center gap-2 text-xs font-medium py-1 px-2 rounded transition-colors ${
                  isDark
                    ? 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                }`}
              >
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>{PORTFOLIO_DATA.personal.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Modern Tech Monogram & Code Visual (NO personal photo) */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end w-full">
            <div className="w-full max-w-lg space-y-4">
              
              {/* Monogram & Developer Identity Strip */}
              <div
                className={`relative rounded-2xl p-5 border transition-all duration-300 overflow-hidden ${
                  isDark
                    ? 'bg-neutral-900/80 border-neutral-800 shadow-2xl shadow-emerald-950/20'
                    : 'bg-white border-neutral-200 shadow-lg'
                }`}
              >
                {/* Subtle gradient background mesh */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-4 relative z-10">
                  {/* Stylish Initials Monogram Badge */}
                  <div className="relative group shrink-0">
                    {/* Glowing outer ring */}
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 opacity-60 blur-sm group-hover:opacity-100 transition-opacity" />
                    
                    {/* Circle Container with Initials */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-neutral-950 border border-emerald-500/40 flex items-center justify-center overflow-hidden shadow-inner">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-transparent to-teal-500/20" />
                      
                      {/* Geometric accent line */}
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emerald-400/40 rounded-tr-lg" />
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-emerald-400/40 rounded-bl-lg" />
                      
                      {/* RC Initials */}
                      <span className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display bg-gradient-to-br from-white via-neutral-100 to-emerald-300 bg-clip-text text-transparent">
                        RC
                      </span>
                    </div>
                  </div>

                  {/* Identity text beside monogram */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
                        Verified Portfolio
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-display truncate mt-0.5">
                      Rajamahendravarpu ChandraSekhar
                    </h3>
                    <p className={`text-xs font-mono truncate ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      Satya Institute of Technology & Management
                    </p>
                  </div>
                </div>

                {/* Sub-strip with quick milestones */}
                <div
                  className={`mt-4 pt-3 border-t grid grid-cols-2 gap-2 text-xs font-mono ${
                    isDark ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-600'
                  }`}
                >
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-neutral-950/40 border border-neutral-800/60">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">AI & DS (2023-27)</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-neutral-950/40 border border-neutral-800/60">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">Indian Servers Alum</span>
                  </div>
                </div>
              </div>

              {/* Code-Inspired Technical Console Card */}
              <div
                className={`rounded-2xl border overflow-hidden shadow-xl ${
                  isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-900 border-neutral-800 text-neutral-100'
                }`}
              >
                {/* Console Window Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900/90 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
                      <Terminal className="w-3 h-3 text-emerald-400" />
                      <span>chandrasekhar_profile.py</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="p-1 rounded text-neutral-400 hover:text-white transition-colors"
                    title="Copy code"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Syntax-Highlighted Python Code Snippet */}
                <div className="p-4 font-mono text-xs overflow-x-auto leading-relaxed">
                  <pre className="text-neutral-300">
                    <code>
                      <span className="text-neutral-500"># Engineering Profile & Technology Stack</span>{'\n'}
                      <span className="text-purple-400">class</span> <span className="text-emerald-400">Developer</span>:{'\n'}
                      {'    '}<span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(<span className="text-teal-300">self</span>):{'\n'}
                      {'        '}<span className="text-teal-300">self</span>.name = <span className="text-amber-300">"ChandraSekhar"</span>{'\n'}
                      {'        '}<span className="text-teal-300">self</span>.undergrad = <span className="text-amber-300">"SITAM (AI & Data Science)"</span>{'\n'}
                      {'        '}<span className="text-teal-300">self</span>.experience = <span className="text-amber-300">"Indian Servers (Intern)"</span>{'\n'}
                      {'        '}<span className="text-teal-300">self</span>.featured_app = <span className="text-amber-300">"AgriVision AI"</span>{'\n'}
                      {'\n'}
                      {'    '}<span className="text-purple-400">def</span> <span className="text-blue-400">current_toolkit</span>(<span className="text-teal-300">self</span>):{'\n'}
                      {'        '}<span className="text-purple-400">return</span> [{'\n'}
                      {'            '}<span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"React"</span>, <span className="text-amber-300">"TensorFlow"</span>,{'\n'}
                      {'            '}<span className="text-amber-300">"Gemini API"</span>, <span className="text-amber-300">"Express.js"</span>, <span className="text-amber-300">"Firebase"</span>{'\n'}
                      {'        '}]{'\n'}
                    </code>
                  </pre>
                </div>

                {/* Console Status Footer */}
                <div className="px-4 py-2 bg-neutral-900/60 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Status: Available for Internships</span>
                  </div>
                  <span className="text-emerald-400/90 font-medium">Python 3.11</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
