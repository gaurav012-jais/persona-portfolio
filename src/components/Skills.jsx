import React from 'react';
import { Database, Cpu, Globe, Server, Code2 } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-midnight-950 relative overflow-hidden">
      {/* 1. 4K Luminous Blue Ocean Tide / Fluid Silk Wave (Matching Hero aesthetic) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <img
          src="/images/hero-blue-tide.png"
          alt="Luminous Blue Fluid Wave"
          className="w-full h-full object-cover object-center opacity-85 mix-blend-screen filter brightness-110 contrast-105"
          style={{
            transform: 'scaleX(-1) rotate(1deg)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, transparent 100%)',
          }}
        />
      </div>

      {/* Background Cosmic Atmosphere */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Luminous Neon Liquid Blue Ribbon Wave flowing behind the glass cards */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        <svg className="w-full h-full opacity-60" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <path
            d="M-50,220 C250,140 450,420 750,300 C1050,180 1250,380 1500,260"
            stroke="url(#neonRibbonGrad)"
            strokeWidth="3.5"
            filter="url(#ribbonGlow)"
          />
          <path
            d="M-50,250 C280,180 480,450 780,330 C1080,210 1280,410 1500,290"
            stroke="url(#neonRibbonGrad2)"
            strokeWidth="1.5"
            strokeDasharray="10 8"
            opacity="0.75"
          />
          <path
            d="M-50,220 C250,140 450,420 750,300 C1050,180 1250,380 1500,260 L1500,480 C1250,560 950,420 700,500 C450,580 200,470 -50,540 Z"
            fill="url(#ribbonAreaAura)"
            opacity="0.12"
          />
          <defs>
            <filter id="ribbonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="neonRibbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.2" />
              <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.95" />
              <stop offset="65%" stopColor="#0ea5e9" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="neonRibbonGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ribbonAreaAura" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Narrative matching reference */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
              <span>MY SKILLS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
              Expertise with <br />
              <span className="font-serif italic font-normal text-cyan-400">Passion.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed mb-6">
              I combine creativity with technical excellence to build products that are fast, beautiful and future-ready.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-100 font-medium">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                <span>Modern React 18, Hooks & State Architecture</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                <span>Scalable Node.js & NestJS REST Microservices</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                <span>Low-latency Socket.IO Bidirectional Events</span>
              </div>
            </div>
          </div>

          {/* Right Column: 100% Ditto Glassmorphism Constellation (Dart, Flutter, 2x2 cards) */}
          <div className="lg:col-span-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              
              {/* 1. Left Satellite Glass Card: JavaScript (Ditto Dart card in reference) */}
              <div className="flex items-center justify-center self-center">
                <Tilt3DCard
                  maxTilt={14}
                  glowColor="rgba(251, 191, 36, 0.35)"
                  className="w-28 sm:w-32 h-[155px] p-4 rounded-2xl bg-slate-950/45 backdrop-blur-xl border border-white/15 border-t-white/35 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.25),inset_0_-1px_2px_rgba(0,0,0,0.5)] flex flex-col items-center justify-between text-center flex-shrink-0 group cursor-pointer relative overflow-hidden"
                >
                  {/* Diagonal Glass Sheen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/[0.04] to-transparent pointer-events-none rounded-[inherit]" />

                  {/* Top-Right Accent Cube (Matching Dart card in reference) */}
                  <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-[2px] bg-emerald-400 shadow-[0_0_8px_#34d399] pointer-events-none" />

                  <div className="flex flex-col items-center my-auto" style={{ transform: 'translateZ(26px)' }}>
                    {/* 3D Isometric JS Icon */}
                    <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-400/40 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform mb-1.5 shadow-[0_0_15px_rgba(251,191,36,0.25)]">
                      <Code2 className="w-5 h-5 drop-shadow-[0_0_8px_rgba(251,191,36,0.7)]" />
                    </div>
                    <h4 className="text-xs font-extrabold text-white group-hover:text-amber-300 transition-colors">
                      JavaScript
                    </h4>
                  </div>

                  {/* Horizontal mini progress bar with % on right */}
                  <div className="w-full flex items-center gap-2 pt-1 border-t border-white/5" style={{ transform: 'translateZ(18px)' }}>
                    <div className="flex-1 bg-slate-900/90 rounded-full h-1 overflow-hidden p-[0.5px]">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full w-[95%]" />
                    </div>
                    <span className="text-[10px] font-bold text-amber-300 font-mono">
                      95%
                    </span>
                  </div>
                </Tilt3DCard>
              </div>

              {/* 2. Center Dominant Tall 3D Hero Glass Slab: React.js (Ditto Flutter card in reference) */}
              <Tilt3DCard
                maxTilt={16}
                glowColor="rgba(6, 182, 212, 0.45)"
                className="w-full sm:w-56 lg:w-60 h-[360px] p-6 rounded-[28px] bg-slate-950/40 backdrop-blur-2xl border border-cyan-400/80 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(6,182,212,0.4),inset_0_1px_2px_rgba(255,255,255,0.5),inset_0_0_20px_rgba(56,189,248,0.12)] flex flex-col items-center justify-between text-center relative overflow-hidden group flex-shrink-0 select-none cursor-pointer"
              >
                {/* Specular White-Cyan Flare Hotspot on Top-Left Corner (Exact reference match) */}
                <div className="absolute -top-2 left-2 w-16 h-16 bg-white/40 rounded-full blur-xl pointer-events-none" />
                <div className="absolute top-0 left-5 w-14 h-[2px] bg-gradient-to-r from-white via-cyan-200 to-transparent blur-[0.5px] pointer-events-none" />
                <div className="absolute top-1.5 left-3 w-2 h-2 rounded-full bg-white blur-[1px] pointer-events-none" />

                {/* Diagonal Glass Sheen Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/[0.04] to-transparent pointer-events-none rounded-[inherit]" />

                {/* Subtle Top-Right Sensor Dot from Reference */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-cyan-400/70 shadow-[0_0_6px_#38bdf8] pointer-events-none" />

                {/* Glowing cyan inner aura */}
                <div
                  className="absolute -top-12 left-1/2 -translate-x-1/2 w-44 h-44 bg-cyan-400/25 rounded-full blur-2xl pointer-events-none"
                  style={{ transform: 'translateZ(10px)' }}
                />

                {/* 3D React Atomic Orbit Symbol */}
                <div
                  className="relative w-28 h-28 flex items-center justify-center my-auto"
                  style={{ transform: 'translateZ(45px)' }}
                >
                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl animate-pulse" />
                  <svg className="w-24 h-24 text-cyan-400 animate-spin-slow drop-shadow-[0_0_18px_rgba(34,211,238,0.85)]" viewBox="0 0 100 100" fill="none">
                    <ellipse cx="50" cy="50" rx="44" ry="16" stroke="currentColor" strokeWidth="2.4" strokeDasharray="5 3" transform="rotate(0 50 50)" opacity="0.95" />
                    <ellipse cx="50" cy="50" rx="44" ry="16" stroke="currentColor" strokeWidth="2.4" strokeDasharray="5 3" transform="rotate(60 50 50)" opacity="0.95" />
                    <ellipse cx="50" cy="50" rx="44" ry="16" stroke="currentColor" strokeWidth="2.4" strokeDasharray="5 3" transform="rotate(120 50 50)" opacity="0.95" />
                    <circle cx="50" cy="50" r="8" fill="#38bdf8" className="drop-shadow-[0_0_16px_#38bdf8]" />
                  </svg>
                </div>

                {/* Clean Title */}
                <div style={{ transform: 'translateZ(30px)' }} className="mb-4">
                  <h3 className="text-xl font-black text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                    React.js
                  </h3>
                </div>

                {/* Horizontal Pill Progress Bar matching Reference: [━━━━━━━] 96% */}
                <div className="w-full flex items-center gap-3" style={{ transform: 'translateZ(24px)' }}>
                  <div className="flex-1 bg-slate-900/90 rounded-full h-1.5 overflow-hidden p-[1px] border border-cyan-500/40 shadow-inner">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full w-[96%] shadow-[0_0_10px_#38bdf8]" />
                  </div>
                  <span className="text-xs font-black text-cyan-300 font-mono tracking-wider">
                    96%
                  </span>
                </div>
              </Tilt3DCard>

              {/* 3. Right 2x2 Glass Cards Layout (Provider, Firebase, RESTful API, UI/UX structure) */}
              <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 self-center">
                
                {/* Column 1, Top Card: Node & Express (matching Provider card) */}
                <Tilt3DCard
                  maxTilt={12}
                  glowColor="rgba(52, 211, 153, 0.3)"
                  className="p-4 rounded-2xl bg-slate-950/45 backdrop-blur-xl border border-white/12 border-t-white/30 hover:border-emerald-400/50 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/[0.03] to-transparent pointer-events-none rounded-[inherit]" />

                  <div className="flex items-center gap-3 mb-2" style={{ transform: 'translateZ(24px)' }}>
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(52,211,153,0.3)]">
                      <Server className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 text-left">
                      <h4 className="text-xs font-extrabold text-white truncate group-hover:text-emerald-300 transition-colors">
                        Node.js
                      </h4>
                      <span className="text-[10px] font-semibold text-slate-300 block truncate">
                        Backend Engine
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-white/5" style={{ transform: 'translateZ(18px)' }}>
                    <div className="flex-1 bg-slate-900/90 rounded-full h-1 overflow-hidden p-[0.5px]">
                      <div className="h-full bg-emerald-400 rounded-full w-[92%]" />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-300 font-mono">
                      92%
                    </span>
                  </div>
                </Tilt3DCard>

                {/* Column 2, Top Card: MongoDB (matching Firebase card with accent) */}
                <Tilt3DCard
                  maxTilt={12}
                  glowColor="rgba(74, 222, 128, 0.3)"
                  className="p-4 rounded-2xl bg-slate-950/45 backdrop-blur-xl border border-white/12 border-t-white/30 hover:border-green-400/50 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/[0.03] to-transparent pointer-events-none rounded-[inherit]" />

                  {/* Top-Right Accent Dot */}
                  <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80] pointer-events-none" />

                  <div className="flex items-center gap-3 mb-2" style={{ transform: 'translateZ(24px)' }}>
                    <div className="w-9 h-9 rounded-xl bg-green-500/15 border border-green-400/30 flex items-center justify-center text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(74,222,128,0.3)]">
                      <Database className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 text-left">
                      <h4 className="text-xs font-extrabold text-white truncate group-hover:text-green-300 transition-colors">
                        MongoDB
                      </h4>
                      <span className="text-[10px] font-semibold text-slate-300 block truncate">
                        Data Architecture
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-white/5" style={{ transform: 'translateZ(18px)' }}>
                    <div className="flex-1 bg-slate-900/90 rounded-full h-1 overflow-hidden p-[0.5px]">
                      <div className="h-full bg-green-400 rounded-full w-[90%]" />
                    </div>
                    <span className="text-[10px] font-bold text-green-300 font-mono">
                      90%
                    </span>
                  </div>
                </Tilt3DCard>

                {/* Column 1, Bottom Card: RESTful API (matching RESTful API in reference) */}
                <Tilt3DCard
                  maxTilt={12}
                  glowColor="rgba(56, 189, 248, 0.3)"
                  className="p-4 rounded-2xl bg-slate-950/45 backdrop-blur-xl border border-white/12 border-t-white/30 hover:border-sky-400/50 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/[0.03] to-transparent pointer-events-none rounded-[inherit]" />

                  <div className="flex items-center gap-3 mb-2" style={{ transform: 'translateZ(24px)' }}>
                    <div className="w-9 h-9 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 flex-shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(56,189,248,0.3)]">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 text-left">
                      <h4 className="text-xs font-extrabold text-white truncate group-hover:text-sky-300 transition-colors">
                        RESTful API
                      </h4>
                      <span className="text-[10px] font-semibold text-slate-300 block truncate">
                        JWT &amp; Microservices
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-white/5" style={{ transform: 'translateZ(18px)' }}>
                    <div className="flex-1 bg-slate-900/90 rounded-full h-1 overflow-hidden p-[0.5px]">
                      <div className="h-full bg-sky-400 rounded-full w-[94%]" />
                    </div>
                    <span className="text-[10px] font-bold text-sky-300 font-mono">
                      94%
                    </span>
                  </div>
                </Tilt3DCard>

                {/* Column 2, Bottom Card: Socket.IO (matching UI/UX in reference) */}
                <Tilt3DCard
                  maxTilt={12}
                  glowColor="rgba(192, 132, 252, 0.3)"
                  className="p-4 rounded-2xl bg-slate-950/45 backdrop-blur-xl border border-white/12 border-t-white/30 hover:border-purple-400/50 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/[0.03] to-transparent pointer-events-none rounded-[inherit]" />

                  <div className="flex items-center gap-3 mb-2" style={{ transform: 'translateZ(24px)' }}>
                    <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(192,132,252,0.3)]">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 text-left">
                      <h4 className="text-xs font-extrabold text-white truncate group-hover:text-purple-300 transition-colors">
                        Socket.IO
                      </h4>
                      <span className="text-[10px] font-semibold text-slate-300 block truncate">
                        Real-Time Comms
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-white/5" style={{ transform: 'translateZ(18px)' }}>
                    <div className="flex-1 bg-slate-900/90 rounded-full h-1 overflow-hidden p-[0.5px]">
                      <div className="h-full bg-purple-400 rounded-full w-[88%]" />
                    </div>
                    <span className="text-[10px] font-bold text-purple-300 font-mono">
                      88%
                    </span>
                  </div>
                </Tilt3DCard>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
