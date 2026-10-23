import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, MapPin, Clock } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Frontend / React Engineering Role',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = PORTFOLIO_DATA.personal.email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white/70 rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-sm relative overflow-hidden">
        {/* Soft decorative gradient in corner */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-rose-200/30 via-orange-100/20 to-transparent rounded-full pointer-events-none -z-10" />

        {/* Left Column: Human Invitation */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div>
            <div className="text-xs font-semibold tracking-wider text-rose-700/90 uppercase mb-2">
              Get in Touch
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight mb-4">
              Let&apos;s build something calm and enduring together.
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
              Whether you are looking for a dedicated React developer, need someone to architect a resilient design system, or just want to chat about user experience and state management—my inbox is always open.
            </p>

            <div className="space-y-3 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0" />
                <span>Lahore, Pakistan · Open to Remote (Global)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                <span>Typical response time: Within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Quick Copy Email card */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
              Direct Inquiries
            </span>
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs text-stone-800 truncate">
                {PORTFOLIO_DATA.personal.email}
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-xs font-medium text-stone-700 bg-white border border-stone-200 rounded-md hover:bg-stone-50 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Frontend%20Engineering%20Inquiry`}
                  className="px-2.5 py-1 text-xs font-medium text-white bg-stone-900 rounded-md hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Mailto
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-stone-50/80 border border-stone-200 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-stone-900 font-normal">
                Message Sent Warmly!
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-sm">
                Thank you for reaching out, <span className="font-semibold text-stone-800">{formData.name}</span>. I have received your note and will reply to <span className="font-semibold text-stone-800">{formData.email}</span> shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    subject: 'Frontend / React Engineering Role',
                    message: '',
                  });
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold text-stone-700 bg-white border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-stone-700">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-rose-400 transition-all text-stone-800 placeholder-stone-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-stone-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-rose-400 transition-all text-stone-800 placeholder-stone-400"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-stone-700">
                  Topic / Project Type
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-rose-400 transition-all text-stone-800 cursor-pointer"
                >
                  <option value="Frontend / React Engineering Role">
                    Full-time Frontend / React Engineering Role
                  </option>
                  <option value="Contract / Design System Architecture">
                    Design System Architecture / Consulting
                  </option>
                  <option value="Web App Performance Audit">
                    React Performance & Web Vitals Audit
                  </option>
                  <option value="Friendly Coffee Chat">
                    Friendly Chat / Coffee Connection
                  </option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-stone-700">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me a bit about your product, team, or what you'd like to collaborate on..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-rose-400 transition-all text-stone-800 placeholder-stone-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-rose-300" />
                    <span>Send Note to Muneeza</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
