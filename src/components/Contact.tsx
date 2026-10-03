import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactProps {
  isDark: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your name (at least 2 characters)';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please enter a subject (at least 3 characters)';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message (at least 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real client submission with immediate response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-emerald-500 mb-2">
            <span>06</span>
            <span>/</span>
            <span>Connect & Inquire</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-display">
            Get In Touch
          </h2>
          <p className={`mt-2 text-sm sm:text-base max-w-xl ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Interested in collaborating on AI/ML projects or discussing engineering internship opportunities? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className={`rounded-2xl p-6 sm:p-8 border transition-all ${
                isDark
                  ? 'bg-neutral-900/60 border-neutral-800'
                  : 'bg-white border-neutral-200 shadow-sm'
              }`}
            >
              <h3 className="text-lg font-bold font-display mb-2">
                Contact Information
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Feel free to email me, connect on LinkedIn, or inspect my GitHub repositories.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-start justify-between gap-3 group">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-neutral-400 block uppercase">
                        Email
                      </span>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                        className="text-xs sm:text-sm font-medium hover:text-emerald-400 transition-colors break-all"
                      >
                        {PORTFOLIO_DATA.personal.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-1.5 rounded text-neutral-400 hover:text-white transition-colors"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* LinkedIn Item */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 block uppercase">
                      LinkedIn
                    </span>
                    <a
                      href={PORTFOLIO_DATA.personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-medium hover:text-emerald-400 transition-colors break-all"
                    >
                      rajamahendravarapu-chandu-82390a321
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 block uppercase">
                      Phone
                    </span>
                    <a
                      href={`tel:${PORTFOLIO_DATA.personal.rawPhone}`}
                      className="text-xs sm:text-sm font-medium hover:text-emerald-400 transition-colors font-mono"
                    >
                      {PORTFOLIO_DATA.personal.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 block uppercase">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-medium">
                      {PORTFOLIO_DATA.personal.location}
                    </span>
                  </div>
                </div>

                {/* GitHub Item */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 block uppercase">
                      GitHub
                    </span>
                    <a
                      href={PORTFOLIO_DATA.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-medium hover:text-emerald-400 transition-colors"
                    >
                      github.com/rajamahendravarapuchandu
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Notice */}
            <div
              className={`p-4 rounded-xl border text-xs font-mono flex items-center gap-3 ${
                isDark
                  ? 'bg-neutral-900/30 border-neutral-800 text-neutral-300'
                  : 'bg-neutral-50 border-neutral-200 text-neutral-700'
              }`}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
              <span>Open to AI Engineering & Full-Stack Internships</span>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation (col-span-7) */}
          <div className="lg:col-span-7">
            <div
              className={`rounded-2xl p-6 sm:p-8 border transition-all ${
                isDark
                  ? 'bg-neutral-900/60 border-neutral-800'
                  : 'bg-white border-neutral-200 shadow-sm'
              }`}
            >
              <h3 className="text-lg font-bold font-display mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className={`text-xs font-mono mb-6 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Fill in your message details below
              </p>

              {submitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-display">Message Prepared!</h4>
                  <p className={`text-xs sm:text-sm max-w-md mx-auto ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    Thank you, <span className="font-semibold text-emerald-400">{formData.name}</span>. Your message regarding "{formData.subject}" has been queued. You can also send it directly via your mail client:
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
                        formData.subject
                      )}&body=${encodeURIComponent(
                        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
                      )}`}
                      className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-medium hover:bg-emerald-500 transition-colors"
                    >
                      Open Email Client
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-2 rounded-lg border border-neutral-700 text-xs font-medium hover:bg-neutral-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border transition-colors ${
                          isDark
                            ? 'bg-neutral-950 border-neutral-800 text-neutral-100 placeholder:text-neutral-600 focus:border-emerald-500 focus:outline-none'
                            : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:border-emerald-500 focus:outline-none'
                        } ${errors.name ? 'border-red-500' : ''}`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-red-400 font-mono">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="e.g. alex@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border transition-colors ${
                          isDark
                            ? 'bg-neutral-950 border-neutral-800 text-neutral-100 placeholder:text-neutral-600 focus:border-emerald-500 focus:outline-none'
                            : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:border-emerald-500 focus:outline-none'
                        } ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-400 font-mono">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      placeholder="e.g. AI Internship Opportunity / Collaboration"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border transition-colors ${
                        isDark
                          ? 'bg-neutral-950 border-neutral-800 text-neutral-100 placeholder:text-neutral-600 focus:border-emerald-500 focus:outline-none'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:border-emerald-500 focus:outline-none'
                      } ${errors.subject ? 'border-red-500' : ''}`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-[11px] text-red-400 font-mono">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Hi ChandraSekhar, I came across your portfolio and wanted to discuss..."
                      className={`w-full px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border transition-colors resize-none ${
                        isDark
                          ? 'bg-neutral-950 border-neutral-800 text-neutral-100 placeholder:text-neutral-600 focus:border-emerald-500 focus:outline-none'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:border-emerald-500 focus:outline-none'
                      } ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-red-400 font-mono">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 active:scale-95 transition-all disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
