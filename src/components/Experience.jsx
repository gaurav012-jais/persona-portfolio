import React from 'react';
import { Briefcase, Award, GraduationCap, Code } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function Experience() {
  const roadmap = [
    {
      period: '2022 – 2026',
      title: 'B.Tech in CS',
      organization: 'DR. Ambedkar Institute of Technology',
      desc: 'Focused on algorithms, database design, and web architecture with 7.65 CGPA.',
      icon: GraduationCap,
      active: false,
    },
    {
      period: '2024',
      title: 'Infosys Springboard',
      organization: 'JavaScript & REST APIs',
      desc: 'Completed enterprise full-stack training in modern JS, REST patterns, and Spring Boot.',
      icon: Code,
      active: false,
    },
    {
      period: '2025',
      title: 'Oracle Cloud AI',
      organization: 'Certified Associate',
      desc: 'Validated expertise in Artificial Intelligence foundations and Oracle Cloud AI infrastructure.',
      icon: Award,
      active: false,
    },
    {
      period: 'June 2026 – Present',
      title: 'Full Stack Developer',
      organization: 'JPL Tech Pvt. Ltd. (Delhi)',
      desc: 'Engineered low-code template builder using React, NestJS, and MySQL with drag-and-drop editor.',
      icon: Briefcase,
      active: true,
    },
  ];

  return (
    <section id="experience" className="relative z-20 overflow-hidden bg-midnight-950">
      
      {/* Top Wave: Dark (#030509) to White Silk */}
      <div className="wave-top bg-midnight-950 -mb-[1px]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
        >
          <defs>
            <linearGradient id="expWhiteBody" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f8fafc" />
            </linearGradient>
            <linearGradient id="expFoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.85" />
              <stop offset="30%" stopColor="#f1f5f9" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* Layer 1: Sculpted Secondary Fold */}
          <path
            d="M0,42 C180,68 360,18 640,28 C880,38 1120,65 1440,25 L1440,120 L0,120 Z"
            fill="url(#expFoldGrad)"
            opacity="0.6"
          />

          {/* Layer 2: Primary Wave Curve */}
          <path
            d="M0,48 C200,75 420,24 680,32 C920,40 1160,70 1440,30 L1440,120 L0,120 Z"
            fill="url(#expWhiteBody)"
          />

          {/* Layer 3: Edge Highlight */}
          <path
            d="M0,48 C200,75 420,24 680,32 C920,40 1160,70 1440,30"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Main White Ribbon Body */}
      <div className="bg-gradient-to-b from-[#ffffff] via-[#fcfdfe] to-[#f8fafc] text-slate-900 py-12 sm:py-16 px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Heading */}
          <div className="text-left mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold tracking-wider uppercase mb-3">
              <span>EXPERIENCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              The journey <br />
              that <span className="font-serif italic font-normal text-sky-600">shaped me.</span>
            </h2>
          </div>

          {/* Horizontal Step-Node Roadmap (Exact match to reference image) */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-6 left-10 right-10 h-0.5 border-t-2 border-dashed border-slate-300 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {roadmap.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div key={idx} className="flex flex-col items-start lg:items-center text-left lg:text-center group">
                    {/* Node Dot */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 shadow-md ${
                        step.active
                          ? 'bg-sky-600 text-white ring-4 ring-sky-200'
                          : 'bg-slate-100 text-slate-700 border border-slate-300 group-hover:bg-slate-900 group-hover:text-white'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Node Content */}
                    <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200 mb-2">{step.period}</span>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs font-bold text-slate-800 mb-1.5">
                      {step.organization}
                    </p>
                    <p className="text-xs font-medium text-slate-700 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave: White to Dark (#030509) */}
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
            fill="url(#expFoldGrad)"
            opacity="0.5"
          />

          {/* Layer 2: Primary Bottom Wave Curve */}
          <path
            d="M0,0 L1440,0 L1440,75 C1220,38 980,22 740,28 C480,34 240,85 0,18 Z"
            fill="url(#expWhiteBody)"
          />

          {/* Layer 3: Crease Shadow Line */}
          <path
            d="M1440,75 C1220,38 980,22 740,28 C480,34 240,85 0,18"
            stroke="rgba(148, 163, 184, 0.4)"
            strokeWidth="1"
          />
        </svg>
      </div>

    </section>
  );
}
