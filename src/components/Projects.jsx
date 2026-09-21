import React, { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import { ExternalLink, ArrowRight, ArrowLeft, Sparkles, Grid, ChevronLeft, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { RESUME_DATA } from '../data/resumeData';
import Tilt3DCard from './Tilt3DCard';

/* ── Infinite Scroll Carousel Card ── */
function CarouselCard({ project, isFirstFour }) {
  return (
    <div className="w-[280px] sm:w-[300px] flex-shrink-0 p-4 rounded-[28px] bg-slate-900/95 backdrop-blur-2xl border border-slate-700/60 border-t-slate-600/50 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_8px_24px_-8px_rgba(0,0,0,0.2)] flex flex-col justify-between group cursor-pointer relative overflow-hidden select-none">
      {/* Diagonal Specular Glass Reflection Sheen */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/[0.02] to-transparent pointer-events-none rounded-[inherit]" />

      {/* 3D Mobile Phone / App Viewport Showcase */}
      <div className="relative h-52 w-full rounded-2xl overflow-hidden bg-slate-900/90 border border-white/15 shadow-[0_15px_30px_rgba(0,0,0,0.7)] mb-4 select-none">
        {/* Phone Dynamic Island / Notch Sensor */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3 bg-black/90 rounded-full z-20 flex items-center justify-center border border-white/5 pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 mr-1 shadow-[0_0_4px_#38bdf8]" />
          <div className="w-1 h-1 rounded-full bg-slate-600" />
        </div>

        <img
          src={project.image}
          alt={project.title}
          draggable="false"
          className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 pointer-events-none select-none"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?fit=crop&w=600&q=80';
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 pointer-events-none" />

        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between">
          <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase text-cyan-300 bg-midnight-950/90 border border-cyan-500/40 backdrop-blur-md shadow">
            {project.category}
          </span>
          {isFirstFour && (
            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase text-amber-300 bg-amber-500/20 border border-amber-500/40 backdrop-blur-md">
              ★ Flagship
            </span>
          )}
        </div>
      </div>

      {/* Project Narrative Content */}
      <div className="flex flex-col flex-1 text-left px-1">
        <h3 className="text-sm sm:text-base font-extrabold text-white mb-1.5 group-hover:text-cyan-300 transition-colors line-clamp-2 min-h-[2.5rem] leading-snug" title={project.title}>
          {project.title}
        </h3>
        <p className="text-xs text-slate-300 font-normal leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Pill Tags */}
        <div className="flex flex-wrap gap-1.5 mb-2 mt-auto">
          {project.techStack.slice(0, 3).map((tech, tIdx) => (
            <span key={tIdx} className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-800/90 text-cyan-200 border border-cyan-500/20 font-medium">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons for Flagship Projects */}
        {isFirstFour && (
          <div className="flex items-center gap-2 pt-3 border-t border-white/10 mt-2">
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-full text-xs font-extrabold text-white bg-cyan-600 hover:bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all">
              <ExternalLink className="w-3 h-3" />
              <span>Demo</span>
            </a>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-full text-xs font-semibold text-slate-300 bg-slate-800/90 border border-white/15 hover:border-cyan-400 hover:text-white transition-all">
              <GithubIcon className="w-3 h-3" />
              <span>Code</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const { projects } = RESUME_DATA;
  const [activeCategory, setActiveCategory] = useState('All');
  const gridSectionRef = useRef(null);
  const trackRef = useRef(null);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  // Only show first 8 projects in the grid
  const gridProjects = useMemo(() => projects.slice(0, 8), [projects]);

  // Categories for filtering (updated counts for 8 projects)
  const categories = [
    { id: 'All', label: 'All Projects', count: 8 },
    { id: 'Flagship', label: 'Flagship Top 4', count: 4 },
    { id: 'AI', label: 'AI & SaaS', count: 1 },
    { id: 'FullStack', label: 'Full-Stack & Real-Time', count: 3 },
    { id: 'Interactive', label: 'Interactive & 3D', count: 4 },
  ];

  // Filtered projects from the 8
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return gridProjects;
    if (activeCategory === 'Flagship') return gridProjects.slice(0, 4);
    if (activeCategory === 'AI') {
      return gridProjects.filter((p) => p.id === 'imagify');
    }
    if (activeCategory === 'FullStack') {
      return gridProjects.filter(
        (p) => p.id === 'chat-z' || p.id === 'vybe' || p.id === 'Template-editor'
      );
    }
    if (activeCategory === 'Interactive') {
      return gridProjects.filter(
        (p) => p.id === 'music' || p.id === '3d-model-showcase' || p.id === 'dropcraft-dnd' || p.id === 'Todo-List'
      );
    }
    return gridProjects;
  }, [activeCategory, gridProjects]);

  const scrollToGrid = () => {
    gridSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // ── Infinite scroll: duplicate projects 3x for seamless loop ──
  const carouselItems = useMemo(() => [...projects, ...projects, ...projects], [projects]);
  const CARD_WIDTH = 320; // approximate card width + gap
  const TOTAL_SET_WIDTH = projects.length * CARD_WIDTH;

  // Reset scroll position seamlessly when wrapping around
  const wrapScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    if (track.scrollLeft >= TOTAL_SET_WIDTH * 2) {
      track.scrollLeft -= TOTAL_SET_WIDTH;
    } else if (track.scrollLeft <= 20) {
      track.scrollLeft += TOTAL_SET_WIDTH;
    }
  }, [TOTAL_SET_WIDTH]);

  // Set initial scroll position to middle set ONLY ONCE on mount
  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.scrollLeft = TOTAL_SET_WIDTH;
    }
  }, [TOTAL_SET_WIDTH]);

  // Auto-scroll animation loop (runs smoothly without resetting on pause/resume)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animId;
    let lastTime = performance.now();
    const speed = 0.55; // pixels per frame (~33px/s at 60fps)

    const animate = (timestamp) => {
      const delta = timestamp - lastTime;
      lastTime = timestamp;

      // Only auto-scroll when user is NOT hovering and NOT actively dragging
      if (!isPausedRef.current && !isDraggingRef.current && delta < 100) {
        track.scrollLeft += speed * (delta / 16.67);
        wrapScroll();
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [TOTAL_SET_WIDTH, wrapScroll]);

  // Global mouse up so dragging releases even if released outside
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setIsDragging(false);
      }
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  // Mouse Drag handlers
  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // left click only
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX;
    startScrollLeftRef.current = trackRef.current ? trackRef.current.scrollLeft : 0;
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    const dx = e.pageX - startXRef.current;
    if (Math.abs(dx) > 4) {
      hasDraggedRef.current = true;
    }
    trackRef.current.scrollLeft = startScrollLeftRef.current - dx;
    wrapScroll();
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setIsDragging(false);
    }
  };

  const handleTouchStart = () => {
    isPausedRef.current = true;
  };

  const handleTouchEnd = () => {
    isPausedRef.current = false;
  };

  // Prevent accidental clicks on child links if user was dragging
  const handleCaptureClick = (e) => {
    if (hasDraggedRef.current) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  // Manual arrow navigation for smooth forward/backward nudge
  const scrollManual = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const shift = direction === 'left' ? -CARD_WIDTH : CARD_WIDTH;
    track.scrollBy({ left: shift, behavior: 'smooth' });
  };

  return (
    <>
      {/* ============================================================ */}
      {/* SECTION 1: "Digital experiences" — Clean Pure White Section  */}
      {/* ============================================================ */}
      <section id="projects" className="relative py-20 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

          {/* Main Side-by-Side Showcase Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Column: Heading, Narrative, and Browse Button */}
            <div className="lg:col-span-4 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-600 text-xs font-semibold tracking-wider uppercase mb-4">
                <Sparkles className="w-3 h-3" />
                <span>FEATURED PROJECTS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
                Digital experiences / <br />
                that make an <span className="font-serif italic font-normal text-cyan-600">impact.</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mb-8 max-w-md">
                Each project is a unique story of clean architecture, real-time data persistence, and relentless attention to detail.
              </p>

              <button
                onClick={scrollToGrid}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-extrabold tracking-wider uppercase text-white bg-slate-900 hover:bg-cyan-600 border border-slate-800 hover:border-cyan-500 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 group cursor-pointer select-none"
              >
                <span>Explore All Projects</span>
              </button>
            </div>

            {/* Right Column: Infinite Scroll Carousel with All 12 Projects */}
            <div className="lg:col-span-8 relative group/carousel">
              {/* Infinite scrolling track */}
              <div
                ref={trackRef}
                onScroll={wrapScroll}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onClickCapture={handleCaptureClick}
                className={`flex items-center gap-5 overflow-x-auto no-scrollbar py-6 px-2 select-none ${
                  isDragging ? 'cursor-grabbing' : 'cursor-grab'
                }`}
              >
                {carouselItems.map((project, idx) => {
                  const originalIdx = idx % projects.length;
                  const isFirstFour = originalIdx < 4;
                  return (
                    <CarouselCard
                      key={`${project.id}-${idx}`}
                      project={project}
                      isFirstFour={isFirstFour}
                    />
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: "All 8 Applications" — Dark Immersive Zone         */}
      {/* ============================================================ */}
      <section className="py-24 bg-midnight-950 relative overflow-hidden">

        {/* 4K Luminous Blue Ocean Tide / Fluid Silk Wave Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
          <img
            src="/images/hero-blue-tide.png"
            alt="Luminous Blue Fluid Wave"
            className="w-full h-full object-cover object-center opacity-75 mix-blend-screen filter brightness-105 contrast-110"
            style={{
              transform: 'scaleY(-1) scaleX(1.1)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, transparent 100%)',
            }}
          />
        </div>

        {/* Ambient background atmosphere */}
        <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

        <div ref={gridSectionRef} className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

          {/* Gallery Header & Filter Pills */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-2">
                <Grid className="w-3 h-3" />
                <span>COMPLETE PROJECT CATALOG</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                All 8 Applications &amp; Engineering Systems
              </h3>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.5)] scale-105'
                        : 'bg-slate-900/90 text-slate-200 hover:text-white hover:bg-slate-800 border border-white/20 font-semibold'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive ? 'bg-slate-950/30 text-slate-950 font-bold' : 'bg-white/10 text-slate-300 font-bold'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Responsive 4-Column 3D Glassmorphism Grid Showing Filtered Projects (max 8) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => {
              const isFirstFour = projects.findIndex((p) => p.id === project.id) < 4;

              return (
                <Tilt3DCard
                  key={project.id}
                  maxTilt={12}
                  glowColor={isFirstFour ? 'rgba(56, 189, 248, 0.4)' : 'rgba(14, 165, 233, 0.25)'}
                  className="p-4 rounded-[28px] bg-slate-950/45 backdrop-blur-2xl border border-white/15 border-t-white/35 hover:border-cyan-400/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.25)] flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/[0.03] to-transparent pointer-events-none rounded-[inherit]" />

                  {/* Phone Preview Showcase */}
                  <div
                    className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-900/90 border border-white/15 shadow-[0_15px_30px_rgba(0,0,0,0.7)] mb-4"
                    style={{ transform: 'translateZ(24px)' }}
                  >
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3 bg-black/90 rounded-full z-20 flex items-center justify-center border border-white/5 pointer-events-none">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 mr-1 shadow-[0_0_4px_#38bdf8]" />
                      <div className="w-1 h-1 rounded-full bg-slate-600" />
                    </div>

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          'https://images.unsplash.com/photo-1555066931-4365d14bab8c?fit=crop&w=600&q=80';
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 pointer-events-none" />

                    <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase text-cyan-300 bg-midnight-950/90 border border-cyan-500/40 backdrop-blur-md shadow">
                        {project.category}
                      </span>

                      {isFirstFour && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase text-amber-300 bg-amber-500/20 border border-amber-500/40 backdrop-blur-md">
                          ★ Flagship
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-col flex-1 text-left px-1" style={{ transform: 'translateZ(20px)' }}>
                    <h3 className="text-sm sm:text-base font-extrabold text-white mb-1.5 group-hover:text-cyan-300 transition-colors line-clamp-2 min-h-[2.5rem] leading-snug" title={project.title}>
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-200 font-normal leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-2 mt-auto">
                      {project.techStack.slice(0, 3).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-900/90 text-cyan-200 border border-cyan-500/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* ONLY The First 4 Flagship Projects have Demo and Code buttons */}
                    {isFirstFour && (
                      <div
                        className="flex items-center gap-2 pt-3 border-t border-white/10 mt-2"
                        style={{ transform: 'translateZ(28px)' }}
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-full text-xs font-extrabold text-white bg-cyan-600 hover:bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Demo</span>
                        </a>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-full text-xs font-semibold text-slate-300 bg-slate-900/90 border border-white/15 hover:border-cyan-400 hover:text-white transition-all"
                        >
                          <GithubIcon className="w-3 h-3" />
                          <span>Code</span>
                        </a>
                      </div>
                    )}
                  </div>
                </Tilt3DCard>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
