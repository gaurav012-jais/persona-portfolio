import React, { useState, useEffect, useRef } from 'react';
import { Waves, Sparkles } from 'lucide-react';

/**
 * WaterLoader Component - Full-Screen Roaring Tsunami Surge
 * - Giant multi-layered oceanic tsunami wave rising across the entire viewport (0% -> 100%)
 * - Realistic harmonic sine waves, frothing white foam crest, rising effervescent bubbles & sea spray
 * - Duration: ~4 seconds (smooth 3-5 sec pacing requested by user)
 * - Powerful tidal wash / tsunami splash curtain reveal when complete
 */
export default function WaterLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [statusText, setStatusText] = useState('Gathering Deep Ocean Currents...');
  const canvasRef = useRef(null);

  // Status updates as the tsunami builds up
  useEffect(() => {
    if (progress < 25) {
      setStatusText('Deep Sea Currents Awakening...');
    } else if (progress < 50) {
      setStatusText('Tsunami Wave Surging Across Viewport...');
    } else if (progress < 75) {
      setStatusText('Bioluminescent Energy Reaching Peak Amplitude...');
    } else if (progress < 95) {
      setStatusText('Crest Approaching Apex...');
    } else {
      setStatusText('Tsunami Crest Breaking! Entering Portfolio...');
    }
  }, [progress]);

  // Timer: ~4 seconds total duration (within the 3-5 sec range requested)
  useEffect(() => {
    let startTimestamp = null;
    const duration = 4000;
    let frameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const rawProgress = Math.min(elapsed / duration, 1);

      // Smooth cubic ease-out
      const eased = 1 - Math.pow(1 - rawProgress, 2.8);
      const currentVal = Math.floor(eased * 100);

      setProgress(currentVal);

      if (rawProgress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 950);
        }, 400);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  // Full-Screen Tsunami Canvas Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let step = 0;

    // Sea spray and splash droplets flying off the tsunami crest
    const sprayParticles = [];
    // Deep underwater bubbles
    const deepBubbles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: height + Math.random() * 200,
      radius: Math.random() * 4 + 1.5,
      speed: Math.random() * 2 + 1.2,
      wobble: Math.random() * Math.PI * 2,
      alpha: Math.random() * 0.6 + 0.25,
    }));

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      step += 0.045;

      // The Tsunami waterline rises from bottom (height) to top (0)
      // When progress is 0, waterLevel is at height + 40
      // When progress is 100, waterLevel reaches -50 (flooding entire screen)
      const targetWaterY = height + 40 - (progress / 100) * (height + 90);

      // 1. LAYER 1: Deepest Oceanic Trench Wave (Deep Indigo / Midnight Cyan)
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 10) {
        const wave1 =
          Math.sin(x * 0.0035 + step * 0.7) * 45 +
          Math.cos(x * 0.008 + step * 0.5) * 25;
        ctx.lineTo(x, targetWaterY + wave1 + 35);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      const trenchGrad = ctx.createLinearGradient(0, targetWaterY, 0, height);
      trenchGrad.addColorStop(0, 'rgba(3, 105, 161, 0.45)');
      trenchGrad.addColorStop(0.5, 'rgba(6, 78, 118, 0.85)');
      trenchGrad.addColorStop(1, 'rgba(2, 20, 45, 0.98)');
      ctx.fillStyle = trenchGrad;
      ctx.fill();
      ctx.restore();

      // 2. LAYER 2: Mid Oceanic Tsunami Swell (Electric Deep Cyan & Turquoise)
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 8) {
        const wave2 =
          Math.sin(x * 0.005 + step * 1.1 + Math.PI / 3) * 55 +
          Math.cos(x * 0.002 + step * 0.9) * 35;
        ctx.lineTo(x, targetWaterY + wave2 + 15);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      const midGrad = ctx.createLinearGradient(0, targetWaterY, 0, height);
      midGrad.addColorStop(0, 'rgba(6, 182, 212, 0.65)');
      midGrad.addColorStop(0.4, 'rgba(14, 165, 233, 0.82)');
      midGrad.addColorStop(1, 'rgba(3, 50, 90, 0.96)');
      ctx.fillStyle = midGrad;
      ctx.fill();
      ctx.restore();

      // 3. LAYER 3: Forefront Giant Tsunami Wave with Roaring Crest
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height);
      const crestPoints = [];
      for (let x = 0; x <= width; x += 6) {
        const wave3 =
          Math.sin(x * 0.006 + step * 1.5) * 65 +
          Math.sin(x * 0.012 + step * 2.1) * 20 +
          Math.cos(x * 0.003 + step * 0.8) * 30;
        const cy = targetWaterY + wave3;
        crestPoints.push({ x, y: cy });
        ctx.lineTo(x, cy);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      const foreGrad = ctx.createLinearGradient(0, targetWaterY, 0, height);
      foreGrad.addColorStop(0, 'rgba(56, 189, 248, 0.88)');
      foreGrad.addColorStop(0.3, 'rgba(14, 165, 233, 0.92)');
      foreGrad.addColorStop(1, 'rgba(4, 30, 60, 0.98)');
      ctx.fillStyle = foreGrad;
      ctx.fill();

      // 4. White Glowing Tsunami Foam Crest along the wave tip
      ctx.beginPath();
      crestPoints.forEach((pt, idx) => {
        if (idx === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
      ctx.lineWidth = 4.5;
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 18;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Secondary fine foam ripple
      ctx.beginPath();
      crestPoints.forEach((pt, idx) => {
        if (idx === 0) ctx.moveTo(pt.x, pt.y + 6);
        else ctx.lineTo(pt.x, pt.y + 6);
      });
      ctx.strokeStyle = 'rgba(186, 230, 253, 0.65)';
      ctx.lineWidth = 2.5;
      ctx.stroke();
      ctx.restore();

      // 5. Spawn sea spray particles at random wave crests
      if (sprayParticles.length < 90 && Math.random() > 0.25) {
        const randPt = crestPoints[Math.floor(Math.random() * crestPoints.length)];
        if (randPt) {
          sprayParticles.push({
            x: randPt.x,
            y: randPt.y - 2,
            vx: (Math.random() - 0.5) * 4.5,
            vy: -Math.random() * 5.5 - 2,
            size: Math.random() * 3 + 1,
            alpha: 1,
            gravity: 0.16,
          });
        }
      }

      // Draw and update spray particles
      for (let i = sprayParticles.length - 1; i >= 0; i--) {
        const p = sprayParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.alpha -= 0.022;

        if (p.alpha > 0.05) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(224, 242, 254, ${p.alpha})`;
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          sprayParticles.splice(i, 1);
        }
      }

      // 6. Draw Underwater Rising Bubbles
      deepBubbles.forEach((b) => {
        b.y -= b.speed;
        b.wobble += 0.035;
        const curX = b.x + Math.sin(b.wobble) * 4;

        if (b.y < targetWaterY) {
          b.y = height + 40;
          b.x = Math.random() * width;
        }

        if (b.y >= targetWaterY && b.y <= height) {
          ctx.beginPath();
          ctx.arc(curX, b.y, b.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(224, 242, 254, ${b.alpha})`;
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [progress]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 450);
  };

  return (
    <div
      className={`fixed inset-0 z-[250] flex flex-col items-center justify-center bg-[#030509] select-none transition-all duration-1000 ease-in-out ${
        isExiting
          ? 'opacity-0 -translate-y-full pointer-events-none scale-105'
          : 'opacity-100 translate-y-0 scale-100'
      }`}
    >
      {/* Fullscreen Roaring Tsunami Water Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* Cyber Tsunami Hologram Display HUD (Centered) */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-lg">
        
        {/* Floating Tsunami Core Emblem */}
        <div className="relative p-3 rounded-full bg-midnight-950/70 border border-cyan-400/40 shadow-[0_0_60px_rgba(56,189,248,0.4)] backdrop-blur-xl mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-600 via-sky-500 to-cyan-300 flex items-center justify-center shadow-inner relative overflow-hidden animate-pulse">
            <Waves className="w-10 h-10 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]" />
            <div className="absolute inset-0 bg-white/20 blur-[2px] animate-[spin_8s_linear_infinite]" />
          </div>
          {/* Orbiting particles */}
          <div className="absolute -inset-3 rounded-full border border-dashed border-cyan-400/35 animate-[spin_10s_linear_infinite] pointer-events-none" />
        </div>

        {/* Monogram / Title */}
        <h1 className="font-sans font-extrabold text-3xl md:text-4xl tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
          Gaurav <span className="text-cyan-400">Jaiswal</span>
        </h1>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300 mt-1 font-semibold drop-shadow-md">
          MERN Full-Stack Developer • Digital Experiences
        </p>

        {/* Giant Tsunami Metric Indicator */}
        <div className="mt-8 flex items-baseline gap-2">
          <span className="font-mono text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white drop-shadow-[0_0_25px_rgba(56,189,248,0.65)]">
            {progress}
          </span>
          <span className="font-mono text-2xl md:text-3xl font-bold text-cyan-400">%</span>
        </div>

        {/* Status Ticker */}
        <div className="mt-4 flex items-center gap-2 px-4 py-1.5 rounded-full bg-midnight-950/80 border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.25)] backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
          <span className="font-mono text-xs text-slate-200 tracking-wider">
            {statusText}
          </span>
        </div>

        {/* Tsunami Surge Width Level Bar */}
        <div className="mt-5 w-64 md:w-80 h-2 rounded-full bg-midnight-900/90 border border-cyan-500/30 overflow-hidden relative shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-cyan-600 via-sky-400 to-cyan-200 transition-all duration-150 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute top-0 right-0 bottom-0 w-3 bg-white blur-[1px] animate-pulse" />
          </div>
        </div>

        <p className="font-mono text-[10px] text-cyan-300/70 uppercase tracking-widest mt-2">
          SURGING TSUNAMI FLUID DYNAMICS • 4.0S DURATION
        </p>
      </div>

      {/* Skip button at top/bottom right */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 z-30 px-4 py-2 rounded-full text-xs font-mono text-slate-300 hover:text-white bg-midnight-900/80 hover:bg-cyan-950/90 border border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.2)] flex items-center gap-2 cursor-pointer"
        aria-label="Skip Tsunami Loader"
      >
        <span>Skip Tsunami</span>
        <span className="text-cyan-400 font-bold">→</span>
      </button>

      {/* Tsunami Tidal Crash Curtain Transition on Exit */}
      <div
        className={`fixed inset-0 pointer-events-none transition-all duration-1000 ease-out ${
          isExiting ? 'bg-cyan-500/20 backdrop-blur-2xl opacity-0' : 'opacity-0'
        }`}
      />
    </div>
  );
}
