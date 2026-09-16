import React from 'react';
import { ArrowRight, Sparkles, Zap, MessageSquare, Image as ImageIcon } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function Hero({ onOpenAI }) {
  const { personal } = RESUME_DATA;

  return (
    <section id="hero" className="relative min-h-[720px] lg:min-h-[780px] pt-28 pb-14 flex items-center overflow-hidden bg-midnight-950">
      
      {/* 1. Luminous Blue Ocean Tide / Fluid Silk Wave (Exact User Asset) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <img
          src="/images/hero-blue-tide.png"
          alt="Luminous Blue Ocean Tide"
          className="w-full h-full object-cover object-center opacity-95 mix-blend-screen filter brightness-105 contrast-105"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Role Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>FULL STACK / MERN DEVELOPER</span>
            </div>

            {/* Main Editorial Headline with Italic Serif Accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
              Crafting Premium <br />
              Full-Stack Experiences <br />
              that <span className="font-serif italic font-normal text-cyan-400 tracking-normal">People Love</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed max-w-md mb-8">
              I design and build high-performance, beautiful and scalable web applications for forward-thinking startups and engineering teams.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold text-white bg-midnight-800 border border-white/20 hover:border-cyan-400 hover:shadow-glow-cyan-sm hover:scale-105 transition-all group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenAI}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-slate-100 bg-white/10 border border-white/20 hover:border-cyan-500/50 hover:text-white transition-all shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Ask Gaurav AI</span>
              </button>
            </div>
          </div>

          {/* Right Hero Column: 3D Floating Perspective Device Frames */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md h-[460px] flex items-center justify-center">
              
              {/* Primary Phone Mockup (Chat-Z Real-Time App) */}
              <div className="absolute left-4 sm:left-6 top-4 w-56 sm:w-64 h-[400px] rounded-[38px] p-3 bg-gradient-to-b from-slate-700 via-slate-900 to-black border border-white/20 shadow-2xl shadow-cyan-950/80 transform -rotate-6 hover:rotate-0 transition-transform duration-500 z-20 flex flex-col overflow-hidden">
                {/* Phone Speaker Notch */}
                <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800 mr-1" />
                </div>

                {/* Phone Screen UI */}
                <div className="w-full flex-1 bg-midnight-950 rounded-[28px] p-3.5 flex flex-col justify-between overflow-hidden border border-white/5">
                  {/* Top Bar */}
                  <div>
                    <div className="flex items-center justify-between text-[10px] text-slate-300 mb-3">
                      <span className="font-semibold text-white">Chat-Z Messenger</span>
                      <span className="flex items-center gap-1 text-emerald-400 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live
                      </span>
                    </div>

                    <div className="p-3 rounded-2xl bg-midnight-850 border border-white/5 mb-2.5">
                      <p className="text-[10px] text-slate-300 font-medium">Socket.IO Rooms</p>
                      <h4 className="text-sm font-bold text-white">Engineering Channel</h4>
                    </div>

                    <div className="space-y-2">
                      <div className="p-2 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-[10px] text-cyan-200 self-start font-medium">
                        Real-time message delivered ⚡
                      </div>
                      <div className="p-2 rounded-xl bg-midnight-800 text-[10px] text-slate-200 self-end font-medium">
                        Redux state synchronized!
                      </div>
                    </div>
                  </div>

                  {/* Bottom App Bar */}
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] text-slate-300 font-medium">
                    <span>MERN Stack</span>
                    <span className="text-cyan-400 font-bold">Sub-ms Latency</span>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Device (Imagify AI SaaS) */}
              <div className="absolute right-0 sm:right-4 bottom-2 w-56 sm:w-64 h-[390px] rounded-[38px] p-3 bg-gradient-to-b from-cyan-900/60 via-slate-900 to-black border border-cyan-500/30 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500 z-30 flex flex-col overflow-hidden">
                {/* Phone Speaker Notch */}
                <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2" />

                {/* Phone Screen UI */}
                <div className="w-full flex-1 bg-midnight-950 rounded-[28px] p-3.5 flex flex-col justify-between overflow-hidden border border-white/5">
                  <div>
                    <div className="flex items-center justify-between text-[10px] text-slate-300 mb-2">
                      <span className="flex items-center gap-1 font-semibold text-white">
                        <ImageIcon className="w-3 h-3 text-cyan-400" />
                        Imagify AI
                      </span>
                      <span className="text-[10px] text-cyan-400 font-bold">SaaS v2</span>
                    </div>

                    <div className="w-full h-32 rounded-xl overflow-hidden mb-2 relative border border-white/10">
                      <img
                        src="/images/project image/imagify.png"
                        alt="Imagify Preview"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?fit=crop&w=400&q=80";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-transparent to-transparent" />
                      <span className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white bg-black/60 px-1.5 py-0.5 rounded">
                        Text to Image Gen
                      </span>
                    </div>

                    <p className="text-[10px] text-slate-200 leading-snug font-medium">
                      OpenAI DALL-E 3 API &amp; Cloudinary CDN Integration
                    </p>
                  </div>

                  {/* Floating Status Pill */}
                  <div className="px-3 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 flex items-center justify-between text-[10px]">
                    <span className="text-white font-medium">Credits: 100%</span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Floating Status Pill on top of device */}
              <div className="absolute -bottom-2 right-12 z-40 bg-midnight-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-cyan-500/40 text-[11px] font-medium text-white shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for new opportunities</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
