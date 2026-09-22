import React, { useEffect, useRef } from 'react';

/**
 * FluidOceanWave Component - Hyper-Realistic Oceanic Liquid Water Simulation
 * Features:
 * - Trochoidal / Gerstner wave mathematics (steep, peaked crests & broad rolling troughs)
 * - Multi-harmonic superposition: Deep abyssal swell, mid tidal current & capillary surface ripples
 * - Dynamic Subsurface Water Caustics: Dancing refractive light webs shifting with fluid currents
 * - Floating Crest Spray & Foam Glints: Buoyant sea spray droplets riding the wave peaks
 * - Interactive Fluid Disturbance: Cursor movement over the wave causes localized transverse ripples & wake
 * - Layered Volumetric Depth Gradients (Deep Oceanic Abyss -> Electric Aqua -> Crystal Surface Azure)
 */
export default function FluidOceanWave({
  variant = 'hero', // 'hero' | 'skills' | 'projects' | 'credentials' | 'contact'
  opacity = 0.92,
  className = '',
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;
    let canvasRect = { left: 0, top: 0, width: 0, height: 0 };

    // Mouse wake state
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      speed: 0,
      lastX: 0,
      lastY: 0,
      isActive: false,
    };

    const resize = () => {
      canvasRect = canvas.getBoundingClientRect();
      width = canvas.width = canvasRect.width || window.innerWidth;
      height = canvas.height = canvasRect.height || 600;
    };

    resize();
    window.addEventListener('resize', resize);

    const handleWindowMouseMove = (e) => {
      const relX = e.clientX - canvasRect.left;
      const relY = e.clientY - canvasRect.top;

      if (relX >= -100 && relX <= width + 100 && relY >= -100 && relY <= height + 100) {
        const dx = relX - mouse.lastX;
        const dy = relY - mouse.lastY;
        mouse.speed = Math.min(Math.sqrt(dx * dx + dy * dy), 40);
        mouse.targetX = relX;
        mouse.targetY = relY;
        mouse.lastX = relX;
        mouse.lastY = relY;
        mouse.isActive = true;
      } else {
        mouse.isActive = false;
      }
    };

    window.addEventListener('mousemove', handleWindowMouseMove, { passive: true });

    // Section-specific wave tuning for organic flow
    const config = {
      hero: {
        baseY: 0.53,
        amplitude: 58,
        wavelength: 0.0032,
        speed: 0.018,
        flipX: false,
        angleOffset: 0.045,
      },
      skills: {
        baseY: 0.48,
        amplitude: 62,
        wavelength: 0.0028,
        speed: 0.015,
        flipX: true,
        angleOffset: -0.04,
      },
      projects: {
        baseY: 0.51,
        amplitude: 52,
        wavelength: 0.003,
        speed: 0.016,
        flipX: false,
        angleOffset: 0.035,
      },
      credentials: {
        baseY: 0.47,
        amplitude: 48,
        wavelength: 0.0035,
        speed: 0.014,
        flipX: true,
        angleOffset: -0.025,
      },
      contact: {
        baseY: 0.55,
        amplitude: 50,
        wavelength: 0.0031,
        speed: 0.016,
        flipX: false,
        angleOffset: 0.04,
      },
    }[variant] || {
      baseY: 0.5,
      amplitude: 50,
      wavelength: 0.0032,
      speed: 0.016,
      flipX: false,
      angleOffset: 0,
    };

    // Crest foam & spray particle system
    const sprayParticles = [];
    const maxParticles = 38;
    for (let i = 0; i < maxParticles; i++) {
      sprayParticles.push({
        x: Math.random() * (width || 1200),
        yOffset: (Math.random() - 0.5) * 16,
        size: Math.random() * 2.2 + 0.8,
        alpha: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.4 + 0.2,
        drift: Math.random() * 0.02 + 0.01,
      });
    }

    let step = 0;

    // Gerstner peaked-crest wave calculation
    const getGerstnerHeight = (x, midY, time, amp, waveLen, harmonic = 1) => {
      const k = waveLen * harmonic;
      const phase = time * (1 + harmonic * 0.25);
      // Primary sine
      const s1 = Math.sin(x * k + phase);
      // Secondary harmonic to peak the crest (Trochoidal profile)
      const s2 = Math.sin(2 * (x * k + phase) + Math.PI * 0.5) * 0.28;
      // High-frequency capillary ripples
      const s3 = Math.sin(4 * (x * k + phase * 1.5)) * 0.08;
      
      // Interactive mouse wake disturbance
      let wake = 0;
      if (mouse.isActive && mouse.x > -500) {
        const distToMouse = Math.abs(x - mouse.x);
        if (distToMouse < 160) {
          const factor = 1 - distToMouse / 160;
          wake = Math.sin(distToMouse * 0.08 - time * 6) * factor * (mouse.speed * 0.35);
        }
      }

      return midY + (s1 + s2 + s3) * amp + wake;
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      step += config.speed;

      // Smooth lerp mouse position
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;
      mouse.speed *= 0.95;

      ctx.save();
      if (config.flipX) {
        ctx.translate(width, 0);
        ctx.scale(-1, 1);
      }

      const midY = height * config.baseY;

      // ========================================================
      // 1. ABYSSAL DEEP OCEAN SWELL (Deep Midnight Navy Flow)
      // ========================================================
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(-30, height + 60);

      for (let x = -30; x <= width + 50; x += 14) {
        const tilt = (x - width / 2) * config.angleOffset;
        const y = getGerstnerHeight(
          x,
          midY + 36 + tilt,
          step * 0.7,
          config.amplitude * 0.85,
          config.wavelength * 0.78,
          0.9
        );
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width + 50, height + 60);
      ctx.closePath();

      const backGrad = ctx.createLinearGradient(0, midY - 60, 0, height + 50);
      backGrad.addColorStop(0, 'rgba(2, 44, 92, 0.35)');
      backGrad.addColorStop(0.35, 'rgba(3, 30, 68, 0.55)');
      backGrad.addColorStop(0.7, 'rgba(1, 15, 40, 0.3)');
      backGrad.addColorStop(1, 'rgba(1, 10, 26, 0.0)');
      ctx.fillStyle = backGrad;
      ctx.fill();
      ctx.restore();

      // ========================================================
      // 2. MID-DEPTH TRANSLUCENT AQUA CURRENT (Electric Cyan Body)
      // ========================================================
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(-30, height + 60);

      const midCrestPoints = [];
      for (let x = -30; x <= width + 50; x += 10) {
        const tilt = (x - width / 2) * config.angleOffset;
        const y = getGerstnerHeight(
          x,
          midY + 14 + tilt,
          step * 1.05 + Math.PI * 0.35,
          config.amplitude * 0.95,
          config.wavelength,
          1.0
        );
        midCrestPoints.push({ x, y });
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width + 50, height + 60);
      ctx.closePath();

      const midGrad = ctx.createLinearGradient(0, midY - 70, 0, height + 60);
      midGrad.addColorStop(0, 'rgba(8, 145, 178, 0.58)');
      midGrad.addColorStop(0.25, 'rgba(6, 182, 212, 0.46)');
      midGrad.addColorStop(0.65, 'rgba(2, 60, 115, 0.25)');
      midGrad.addColorStop(1, 'rgba(1, 20, 50, 0.0)');
      ctx.fillStyle = midGrad;
      ctx.fill();
      ctx.restore();

      // ========================================================
      // 3. SUBSURFACE DANCING WATER CAUSTICS (Light Refraction)
      // ========================================================
      ctx.save();
      ctx.beginPath();
      const causticCount = 8;
      for (let c = 0; c < causticCount; c++) {
        const phaseShift = c * (Math.PI / 4) + step * 1.3;
        const startX = ((c * (width / causticCount) + step * 25) % (width + 200)) - 100;
        const cAmp = 18 + Math.sin(phaseShift) * 8;
        
        ctx.moveTo(startX, midY + 10);
        for (let seg = 0; seg < 5; seg++) {
          const px = startX + seg * 24 + Math.sin(phaseShift + seg) * cAmp;
          const py = midY + 15 + seg * 20 + Math.cos(phaseShift + seg * 0.8) * 12;
          ctx.lineTo(px, py);
        }
      }
      ctx.strokeStyle = 'rgba(186, 230, 253, 0.16)';
      ctx.lineWidth = 1.8;
      ctx.lineCap = 'round';
      ctx.filter = 'blur(1.5px)';
      ctx.stroke();
      ctx.filter = 'none';
      ctx.restore();

      // ========================================================
      // 4. FOREFRONT ROARING OCEAN WATER WAVE (Crystal Azure)
      // ========================================================
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(-30, height + 60);

      const foreCrestPoints = [];
      for (let x = -30; x <= width + 50; x += 8) {
        const tilt = (x - width / 2) * config.angleOffset;
        const y = getGerstnerHeight(
          x,
          midY - 12 + tilt,
          step * 1.38,
          config.amplitude * 1.08,
          config.wavelength * 1.15,
          1.1
        );
        foreCrestPoints.push({ x, y });
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width + 50, height + 60);
      ctx.closePath();

      const foreGrad = ctx.createLinearGradient(0, midY - 95, 0, height + 60);
      foreGrad.addColorStop(0, 'rgba(56, 189, 248, 0.72)');
      foreGrad.addColorStop(0.2, 'rgba(14, 165, 233, 0.55)');
      foreGrad.addColorStop(0.55, 'rgba(3, 105, 161, 0.28)');
      foreGrad.addColorStop(1, 'rgba(1, 20, 48, 0.0)');
      ctx.fillStyle = foreGrad;
      ctx.fill();

      // ========================================================
      // 5. TRANSLUCENT LIQUID CREST CURL & LUMINOUS WATER HIGHLIGHT
      // ========================================================
      // Soft glowing cyan edge along wave crest
      ctx.beginPath();
      foreCrestPoints.forEach((pt, i) => {
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.strokeStyle = 'rgba(186, 230, 253, 0.75)';
      ctx.lineWidth = 3.5;
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 20;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Pure crystal water specular crest line
      ctx.beginPath();
      foreCrestPoints.forEach((pt, i) => {
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // ========================================================
      // 6. FLOATING CREST SPRAY & FOAM PARTICLES
      // ========================================================
      sprayParticles.forEach((sp) => {
        sp.x += sp.speed;
        if (sp.x > width + 40) sp.x = -20;

        // Find wave height at particle x
        const tilt = (sp.x - width / 2) * config.angleOffset;
        const waveY = getGerstnerHeight(
          sp.x,
          midY - 12 + tilt,
          step * 1.38,
          config.amplitude * 1.08,
          config.wavelength * 1.15,
          1.1
        );

        const py = waveY + sp.yOffset;

        ctx.beginPath();
        ctx.arc(sp.x, py, sp.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 242, 254, ${sp.alpha * (0.6 + Math.sin(step * 3 + sp.x * 0.05) * 0.4)})`;
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.restore();
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, [variant]);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      style={{ opacity }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
