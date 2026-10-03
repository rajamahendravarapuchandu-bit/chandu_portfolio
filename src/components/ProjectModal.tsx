import React, { useState } from 'react';
import { X, ExternalLink, Github, Sparkles, CheckCircle, Database, Server, Cpu, Layers, RefreshCw } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  isDark,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive-demo' | 'architecture'>('overview');
  
  // Interactive simulator state for AgriVision AI demo
  const [selectedCrop, setSelectedCrop] = useState('Tomato (Early Blight)');
  const [soilType, setSoilType] = useState('Loamy Soil (pH 6.4)');
  const [weatherCondition, setWeatherCondition] = useState('High Humidity 82% · 28°C');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState<string | null>(
    "Diagnosis: Early Blight (Alternaria solani) detected with concentric ring lesions on lower leaves.\nRecommendation: Apply copper-based organic fungicide spray in the morning. Ensure furrow irrigation rather than overhead sprinkling to decrease canopy moisture. Soil organic matter is adequate."
  );

  if (!isOpen || !project) return null;

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      if (selectedCrop.includes('Tomato')) {
        setSimulationResult(
          `[Gemini AI Ag-Analysis Output]\n• Crop: Solanum lycopersicum (Tomato)\n• Condition: Early Blight (Alternaria solani) symptoms identified.\n• Severity: Moderate (Stage 2)\n• Weather Impact: ${weatherCondition} promotes fungal spore germination.\n• Action Plan: Apply copper hydroxide at 2g/L. Prune infected basal foliage. Maintain minimum 45cm row aeration.`
        );
      } else if (selectedCrop.includes('Rice')) {
        setSimulationResult(
          `[Gemini AI Ag-Analysis Output]\n• Crop: Oryza sativa (Paddy / Rice)\n• Condition: Bacterial Leaf Blight detected.\n• Soil Feedback: ${soilType} indicates slight nitrogen surplus.\n• Action Plan: Drain field water temporarily for 48 hours. Postpone top-dressing urea; apply potassium fertilizer to strengthen cell walls.`
        );
      } else {
        setSimulationResult(
          `[Gemini AI Ag-Analysis Output]\n• Crop: Zea mays (Maize / Corn)\n• Condition: Fall Armyworm early leaf scraping detected.\n• Soil Feedback: ${soilType} healthy phosphorus levels.\n• Action Plan: Apply neem-based biological biopesticide (Azadirachtin 1500 ppm). Install pheromone traps at 5 per acre.`
        );
      }
      setIsSimulating(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden ${
          isDark
            ? 'bg-neutral-900 border-neutral-800 text-neutral-100'
            : 'bg-white border-neutral-200 text-neutral-900'
        }`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span>Project Showcase</span>
              <span>·</span>
              <span>AI & Full-Stack</span>
            </div>
            <h3 className="text-xl font-bold font-display mt-0.5">{project.title}</h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-neutral-800/60 bg-neutral-950/30">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Overview & Features
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('interactive-demo')}
            className={`pb-3 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'interactive-demo'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive Simulator</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`pb-3 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'architecture'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            System Architecture
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Media Preview */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2 font-mono">
                  Executive Summary
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
                  {project.longDescription}
                </p>
              </div>

              {/* Key Features from Resume */}
              <div>
                <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3 font-mono">
                  Engineered Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-neutral-800/80 bg-neutral-950/40 flex items-start gap-2.5 text-xs text-neutral-300"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2 font-mono">
                  Tech Stack Integration
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-neutral-800 border border-neutral-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'interactive-demo' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-950/20 text-xs text-neutral-300 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-emerald-300 block mb-1">
                    Live AgriVision AI Pipeline Simulation
                  </span>
                  Test how AgriVision AI takes farmer telemetry (crop specimen, weather conditions, and soil profile) and queries the Gemini AI engine to produce diagnostic agriculture advice.
                </div>
              </div>

              {/* Simulator Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                    Select Crop Specimen
                  </label>
                  <select
                    value={selectedCrop}
                    onChange={(e) => setSelectedCrop(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-200 focus:outline-emerald-500 font-mono"
                  >
                    <option value="Tomato (Early Blight)">Tomato (Leaf Spot / Early Blight)</option>
                    <option value="Rice (Bacterial Blight)">Rice / Paddy (Bacterial Leaf Blight)</option>
                    <option value="Maize (Fall Armyworm)">Maize / Corn (Foliage Damage)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                    Soil Profile
                  </label>
                  <select
                    value={soilType}
                    onChange={(e) => setSoilType(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-200 focus:outline-emerald-500 font-mono"
                  >
                    <option value="Loamy Soil (pH 6.4)">Loamy Soil (pH 6.4 · Optimal)</option>
                    <option value="Clay Soil (pH 7.8)">Clay Soil (pH 7.8 · Slow Drainage)</option>
                    <option value="Sandy Soil (pH 5.9)">Sandy Soil (pH 5.9 · High Leaching)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                    Weather Condition
                  </label>
                  <select
                    value={weatherCondition}
                    onChange={(e) => setWeatherCondition(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-200 focus:outline-emerald-500 font-mono"
                  >
                    <option value="High Humidity 82% · 28°C">High Humidity 82% · 28°C (Monsoon)</option>
                    <option value="Dry Season 34°C · Low RH">Dry Season 34°C · Low RH (Summer)</option>
                    <option value="Cool Morning 18°C · Heavy Dew">Cool Morning 18°C · Heavy Dew</option>
                  </select>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleRunSimulation}
                  disabled={isSimulating}
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center gap-2 transition-all disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>{isSimulating ? 'Analyzing Telemetry...' : 'Run Diagnostics with Gemini API'}</span>
                </button>
              </div>

              {/* Simulation Output Terminal */}
              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-3 text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                    <span>agrivision-gemini-stream :: response</span>
                  </div>
                  <span className="text-[10px]">Model: Gemini-API</span>
                </div>
                <pre className="text-emerald-300/90 whitespace-pre-wrap leading-relaxed font-mono">
                  {simulationResult}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/40">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-2">
                    <Cpu className="w-4 h-4" />
                    <span>Frontend Interface (React)</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {project.architecture.frontend}
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/40">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
                    <Server className="w-4 h-4" />
                    <span>Backend Microservices (Express.js)</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {project.architecture.backend}
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/40">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
                    <Database className="w-4 h-4" />
                    <span>Data Persistence (Firebase)</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {project.architecture.database}
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/40">
                  <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>AI Reasoning (Gemini API)</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {project.architecture.aiEngine}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-neutral-950 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span>Built by Rajamahendravarpu ChandraSekhar</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-neutral-700 bg-neutral-800 text-xs font-medium text-neutral-200 hover:text-white hover:bg-neutral-700 flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
