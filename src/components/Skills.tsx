import React, { useState } from 'react';
import {
  Code,
  Terminal,
  Globe,
  Database,
  Server,
  Cpu,
  Brain,
  Layers,
  Sparkles,
  Wrench,
  CheckCircle2,
  Users,
  Compass,
  Award
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';

interface SkillsProps {
  isDark: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Programming Languages' },
    { id: 'web', label: 'Web Technologies' },
    { id: 'ai', label: 'Machine Learning & AI' },
    { id: 'tools', label: 'Developer Tools' },
    { id: 'soft', label: 'Core Competencies' },
  ];

  const filteredSkills =
    selectedCategory === 'all'
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((s) => s.category === selectedCategory);

  const getSkillIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'python':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'java':
        return <Code className="w-5 h-5 text-orange-400" />;
      case 'html':
      case 'css':
        return <Globe className="w-5 h-5 text-sky-400" />;
      case 'react':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'express.js':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'firebase':
        return <Database className="w-5 h-5 text-amber-500" />;
      case 'gemini api':
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case 'tensorflow':
        return <Brain className="w-5 h-5 text-orange-500" />;
      case 'scikit-learn':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 'numpy':
      case 'pandas':
        return <Cpu className="w-5 h-5 text-teal-400" />;
      case 'visual studio code':
        return <Wrench className="w-5 h-5 text-blue-500" />;
      case 'communication':
      case 'teamwork':
        return <Users className="w-5 h-5 text-emerald-400" />;
      case 'adaptability':
      case 'leadership':
        return <Award className="w-5 h-5 text-amber-400" />;
      default:
        return <Code className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'languages':
        return 'Language';
      case 'web':
        return 'Web & Cloud';
      case 'ai':
        return 'AI & Data';
      case 'tools':
        return 'Environment';
      case 'soft':
        return 'Professional';
      default:
        return 'Technology';
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-emerald-500 mb-2">
            <span>02</span>
            <span>/</span>
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-display">
            Skills & Toolkit
          </h2>
          <p className={`mt-2 text-sm sm:text-base max-w-xl ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Technologies, libraries, and core engineering abilities documented directly in my academic journey and practical project work.
          </p>
        </div>

        {/* Category Filter Tabs (Zero-pill button rule: functional tabs with subtle indicator) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl border mb-10 bg-neutral-900/40 border-neutral-800/80 max-w-full overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap focus-visible:outline-emerald-500 ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                  : isDark
                  ? 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid (NO fake 90% bars - authentic contextual descriptions) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className={`group rounded-xl p-5 border transition-all duration-200 hover:-translate-y-1 ${
                isDark
                  ? 'bg-neutral-900/50 border-neutral-800 hover:border-emerald-500/40 hover:bg-neutral-900'
                  : 'bg-white border-neutral-200 shadow-sm hover:border-emerald-500/50 hover:shadow-md'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-neutral-800/50 border border-neutral-700/40 group-hover:border-emerald-500/30 transition-colors">
                  {getSkillIcon(skill.name)}
                </div>
                <span className={`text-[11px] font-mono ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                  {getCategoryLabel(skill.category)}
                </span>
              </div>

              <h3 className="text-base font-bold font-display tracking-tight group-hover:text-emerald-400 transition-colors">
                {skill.name}
              </h3>

              <p className={`mt-2 text-xs leading-relaxed line-clamp-3 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {skill.description}
              </p>

              <div className="mt-4 pt-3 border-t border-neutral-800/40 flex items-center justify-between text-[11px] font-mono">
                <span className="flex items-center gap-1 text-emerald-400/90">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  <span>Resume Verified</span>
                </span>
                <span className={isDark ? 'text-neutral-600' : 'text-neutral-400'}>
                  Hands-on
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
