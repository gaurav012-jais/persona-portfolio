import React from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import FluidOceanWave from './FluidOceanWave';

export default function CertificationsEducation() {
  const { certifications } = RESUME_DATA;

  return (
    <section id="credentials" className="py-20 bg-midnight-950 relative overflow-hidden">
      {/* 1. Dynamic Animated Fluid Ocean Water Wave (Pure liquid, no rigid lines) */}
      <FluidOceanWave variant="credentials" opacity={0.75} />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry <span className="font-serif italic font-normal text-cyan-400">Certifications.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-midnight-850 border border-white/5 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-card-elevated h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30">
                    {cert.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-300">{cert.year}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-300 font-normal leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-300 mt-auto">
                <span className="font-mono text-[11px] font-medium text-slate-400">
                  {cert.certId ? `ID: ${cert.certId}` : cert.issuer}
                </span>
                <span className="flex items-center gap-1 text-emerald-400 font-semibold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
