import React, { useState } from 'react';
import { Mail, Phone, Send, MapPin, CheckCircle, ArrowUpRight, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FluidBrandLogo } from './Icons';
import { RESUME_DATA } from '../data/resumeData';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "28d9e152-7ab3-4641-92cc-f27aed7f6188";

export default function Contact({ onOpenAI }) {
  const { personal } = RESUME_DATA;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setIsSuccess(false);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          from_name: 'Gaurav Portfolio Contact',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setIsSuccess(false);
        }, 7000);
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again or email directly.');
      }
    } catch (error) {
      setErrorMessage('Network connection error. Please check your internet or reach out via Email/WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative z-20 overflow-hidden bg-midnight-950">
      
      {/* 1. Sculpted White Silk Wave Ribbon CTA Banner (Seamless match to reference) */}
      <div className="wave-top bg-midnight-950 -mb-[1px]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
        >
          <defs>
            {/* Sculpted Silk Ribbon Shading Gradients */}
            <linearGradient id="contactWhiteBody" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f8fafc" />
            </linearGradient>

            <linearGradient id="contactFoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.85" />
              <stop offset="30%" stopColor="#f1f5f9" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.5" />
            </linearGradient>

            <filter id="contactTopDrop" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#94a3b8" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* Layer 1: Sculpted Secondary Fold */}
          <path
            d="M0,42 C180,68 360,18 640,28 C880,38 1120,65 1440,25 L1440,120 L0,120 Z"
            fill="url(#contactFoldGrad)"
            opacity="0.6"
          />

          {/* Layer 2: Primary Wave Curve */}
          <path
            d="M0,48 C200,75 420,24 680,32 C920,40 1160,70 1440,30 L1440,120 L0,120 Z"
            fill="url(#contactWhiteBody)"
            filter="url(#contactTopDrop)"
          />

          {/* Layer 3: Silk Edge Highlight along the crest */}
          <path
            d="M0,48 C200,75 420,24 680,32 C920,40 1160,70 1440,30"
            stroke="rgba(255, 255, 255, 0.95)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Main Sculpted White Silk Ribbon Canvas - Seamless Flow Without Any Straight Box Lines */}
      <div className="bg-gradient-to-b from-[#f8fafc] via-[#fcfdfe] to-[#f8fafc] text-slate-800 py-16 sm:py-24 px-6 lg:px-12 relative z-10 overflow-hidden">
        
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[550px] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,1)_0%,_rgba(248,250,252,0.8)_40%,_transparent_75%)] pointer-events-none blur-3xl" />

        {/* Soft Specular Light from Top-Left */}
        <div className="absolute -top-24 -left-24 w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.95)_0%,_transparent_70%)] pointer-events-none blur-2xl" />

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Headline & Content */}
          <div className="max-w-xl text-left">
            {/* Elevated Category Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-sky-700 text-xs font-bold tracking-wider uppercase mb-5 shadow-sm border border-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              <span>LET'S WORK TOGETHER</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5">
              Have a <span className="font-serif italic font-normal text-sky-600">project</span> <br />
              in mind?
            </h2>

            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-8 max-w-lg">
              I'm always open to discussing new engineering projects, creative full-stack architectures, or opportunities to be part of your vision.
            </p>

            {/* Elevated Pill Button */}
            <a
              href="#contact-form-area"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-sky-600 shadow-lg hover:shadow-xl hover:scale-102 active:scale-98 transition-all duration-300 group"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right 3D Floating Cyan Holographic Crystal on Sculpted Silk Wave */}
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center group select-none">
            
            {/* 3D Sculpted Sweeping Silk Wave Crest behind Emblem (Matching Reference Mockup) */}
            <div className="absolute -right-8 -bottom-10 w-80 sm:w-96 h-80 sm:h-96 pointer-events-none z-0">
              <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
                <defs>
                  <linearGradient id="contactSilkWaveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.4" />
                    <stop offset="40%" stopColor="#e2e8f0" stopOpacity="0.8" />
                    <stop offset="75%" stopColor="#ffffff" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.7" />
                  </linearGradient>
                  <filter id="contactWaveDrop" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="-6" dy="10" stdDeviation="12" floodColor="#94a3b8" floodOpacity="0.25" />
                  </filter>
                </defs>
                <path
                  d="M40,320 C140,330 260,260 320,120 C350,60 380,20 400,0 L400,400 L0,400 Z"
                  fill="url(#contactSilkWaveGrad)"
                  filter="url(#contactWaveDrop)"
                />
                <path
                  d="M40,320 C140,330 260,260 320,120 C350,60 380,20 400,0"
                  stroke="rgba(255, 255, 255, 0.9)"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Soft Elliptical Ground Ambient Shadow & Floor Reflection */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-64 h-10 bg-slate-400/25 rounded-full blur-md pointer-events-none" />
            <div className="absolute bottom-1 inset-x-10 h-16 bg-sky-400/30 rounded-full blur-xl group-hover:bg-sky-400/45 transition-all duration-700 pointer-events-none" />
            
            {/* Floating 3D Crystal Platform Container */}
            <div className="relative w-full h-full flex items-center justify-center animate-float z-10">
              <img
                src="/images/holographic-3d-emblem.jpg"
                alt="3D Holographic Tech Emblem"
                style={{
                  maskImage: 'radial-gradient(ellipse at 50% 52%, black 42%, rgba(0,0,0,0.6) 58%, transparent 76%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at 50% 52%, black 42%, rgba(0,0,0,0.6) 58%, transparent 76%)',
                }}
                className="w-full h-full object-contain mix-blend-multiply filter contrast-[112%] brightness-[103%] drop-shadow-[0_20px_35px_rgba(14,165,233,0.35)] group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/holographic-3d-emblem.jpg";
                }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave Transition: White Silk Ribbon to Dark (#030509) */}
      <div className="wave-bottom bg-midnight-950 -mt-[1px]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
        >
          {/* Layer 1: Sculpted Secondary Fold */}
          <path
            d="M0,0 L1440,0 L1440,68 C1240,32 1020,18 780,24 C520,30 260,82 0,22 Z"
            fill="url(#contactFoldGrad)"
            opacity="0.5"
          />

          {/* Layer 2: Primary Bottom Wave Curve matching reference */}
          <path
            d="M0,0 L1440,0 L1440,75 C1220,38 980,22 740,28 C480,34 240,85 0,18 Z"
            fill="url(#contactWhiteBody)"
          />

          {/* Layer 3: Crease Shadow Line */}
          <path
            d="M1440,75 C1220,38 980,22 740,28 C480,34 240,85 0,18"
            stroke="rgba(148, 163, 184, 0.4)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* 2. Dark Section with Direct Channels & Message Form */}
      <div id="contact-form-area" className="py-20 bg-midnight-950 relative overflow-hidden">
        
        {/* Luminous Blue Ocean Tide / Fluid Silk Wave Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
          <img
            src="/images/hero-blue-tide.png"
            alt="Luminous Blue Fluid Wave"
            className="w-full h-full object-cover object-center opacity-60 mix-blend-screen filter brightness-105"
            style={{
              transform: 'scaleX(-1) translateY(5%)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, transparent 100%)',
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Direct Info Cards */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                Get In Touch Directly
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-medium mb-6 leading-relaxed">
                Connect directly through email or phone, or send an instant inquiry below.
              </p>

              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-midnight-850 border border-white/5 hover:border-cyan-500/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-cyan-300/90 block font-bold uppercase tracking-wider">Email</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {personal.email}
                  </span>
                </div>
              </a>

              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-midnight-850 border border-white/5 hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-emerald-300/90 block font-bold uppercase tracking-wider">WhatsApp / Phone</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    +91 {personal.phoneDisplay}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-midnight-850 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-midnight-900 border border-white/10 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-cyan-300/90 block font-bold uppercase tracking-wider">Location</span>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {personal.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-midnight-850 border border-white/10 text-slate-100 hover:text-white hover:border-cyan-400 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-midnight-850 border border-white/10 text-slate-100 hover:text-white hover:border-cyan-400 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-midnight-850 rounded-3xl p-6 sm:p-8 border border-white/5 shadow-card-elevated">
                <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider">
                  Send a Message
                </h4>

                {isSuccess && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-300 text-xs">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Thank you! Your message has been sent directly to Gaurav's inbox.</span>
                  </div>
                )}

                {errorMessage && (
                  <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-3 text-rose-300 text-xs">
                    <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-100 uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{ backgroundColor: '#04070e', color: '#ffffff', caretColor: '#38bdf8' }}
                        className="w-full px-3.5 py-2.5 rounded-xl !bg-[#04070e] !text-white border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 text-white text-xs placeholder:text-slate-400 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-100 uppercase tracking-wider mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ backgroundColor: '#04070e', color: '#ffffff', caretColor: '#38bdf8' }}
                        className="w-full px-3.5 py-2.5 rounded-xl !bg-[#04070e] !text-white border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 text-white text-xs placeholder:text-slate-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-100 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Project Inquiry / Job Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{ backgroundColor: '#04070e', color: '#ffffff', caretColor: '#38bdf8' }}
                      className="w-full px-3.5 py-2.5 rounded-xl !bg-[#04070e] !text-white border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 text-white text-xs placeholder:text-slate-400 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-100 uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your message or project details here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ backgroundColor: '#04070e', color: '#ffffff', caretColor: '#38bdf8' }}
                      className="w-full px-3.5 py-2.5 rounded-xl !bg-[#04070e] !text-white border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 text-white text-xs placeholder:text-slate-400 outline-none transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-cyan-600 hover:bg-cyan-500 shadow-glow-cyan-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
