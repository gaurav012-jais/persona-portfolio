import React, { useEffect, useRef, useState } from 'react';

/**
 * InteractiveTouchFX
 * Provides seamless, high-performance visual feedback for:
 * 1. Mouse movement anywhere on screen (ambient glowing spotlight aura + particle trail)
 * 2. Touch tap & swipe on phones/tablets (luminous ripple waves & spark bursts)
 * 3. Mouse wheel & mobile scroll (kinetic particles + luminous top progress bar)
 */
export default function InteractiveTouchFX() {
  const canvasRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse / Touch position tracking with smooth lerp interpolation
    const pointer = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHoveringClickable: false,
      isVisible: false,
      isTouch: false,
    };

    // Particle pool for high 60-120fps performance
    const particles = [];
    const ripples = [];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Helper: spawn particles
    const spawnParticles = (x, y, count = 2, speedMultiplier = 1, color = null) => {
      for (let i = 0; i < count; i++) {
        if (particles.length > 70) particles.shift(); // Limit pool
        const angle = Math.random() * Math.PI * 2;
        const speed = (Math.random() * 1.8 + 0.4) * speedMultiplier;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2.8 + 1.2,
          alpha: 0.85,
          color: color || (Math.random() > 0.4 ? '#38bdf8' : '#06b6d4'),
          life: 1,
          decay: Math.random() * 0.025 + 0.02,
        });
      }
    };

    // Helper: spawn touch ripple ring
    const spawnRipple = (x, y, maxRadius = 45, color = 'rgba(56, 189, 248, ') => {
      if (ripples.length > 8) ripples.shift();
      ripples.push({
        x,
        y,
        radius: 4,
        maxRadius,
        alpha: 0.9,
        color,
      });
    };

    // 1. Mouse move handler (Desktop)
    const handleMouseMove = (e) => {
      pointer.isVisible = true;
      pointer.isTouch = false;
      pointer.targetX = e.clientX;
      pointer.targetY = e.clientY;

      // Spawn subtle particle trail on movement
      if (Math.random() > 0.4) {
        spawnParticles(e.clientX, e.clientY, 1, 0.7);
      }

      // Detect if hovering over clickable elements
      const target = e.target;
      if (target && target.closest) {
        pointer.isHoveringClickable = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer')
        );
      }
    };

    // 2. Mouse click ripple
    const handleMouseDown = (e) => {
      spawnRipple(e.clientX, e.clientY, 55, 'rgba(6, 182, 212, ');
      spawnParticles(e.clientX, e.clientY, 7, 2, '#38bdf8');
    };

    // 3. Touch handlers (Mobile & Tablets)
    const handleTouchStart = (e) => {
      pointer.isTouch = true;
      pointer.isVisible = true;
      const touch = e.touches[0];
      if (!touch) return;
      pointer.targetX = pointer.x = touch.clientX;
      pointer.targetY = pointer.y = touch.clientY;

      // Burst of ripples & spark particles at touch location
      spawnRipple(touch.clientX, touch.clientY, 50, 'rgba(56, 189, 248, ');
      spawnParticles(touch.clientX, touch.clientY, 6, 1.8, '#38bdf8');
    };

    const handleTouchMove = (e) => {
      pointer.isTouch = true;
      pointer.isVisible = true;
      const touch = e.touches[0];
      if (!touch) return;
      pointer.targetX = touch.clientX;
      pointer.targetY = touch.clientY;

      // Smooth flowing touch trail while dragging/swiping
      spawnParticles(touch.clientX, touch.clientY, 2, 1, '#06b6d4');
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        pointer.isVisible = false;
      }, 350);
    };

    // 4. Scroll handler (Mouse wheel & Phone touch scroll)
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Update scroll progress bar
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        setScrollProgress((currentScrollY / maxScroll) * 100);
      }

      // Spawn reactive kinetic particles along screen edge on fast scroll
      if (Math.abs(deltaY) > 2) {
        const posX = pointer.isVisible ? pointer.x : width * 0.95;
        const posY = pointer.isVisible ? pointer.y : height * 0.5;
        spawnParticles(posX + (Math.random() - 0.5) * 30, posY + (Math.random() - 0.5) * 30, 2, 1.2);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth lerp pointer coordinates
      pointer.x += (pointer.targetX - pointer.x) * 0.28;
      pointer.y += (pointer.targetY - pointer.y) * 0.28;

      // Render Touch & Click Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += (r.maxRadius - r.radius) * 0.12 + 0.8;
        r.alpha *= 0.91;

        if (r.alpha > 0.02) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `${r.color}${r.alpha})`;
          ctx.lineWidth = 1.8;
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#38bdf8';
          ctx.stroke();
          ctx.shadowBlur = 0;
        } else {
          ripples.splice(i, 1);
        }
      }

      // Render Trailing Particles (Touch & Mouse move/scroll)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha > 0.02) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.alpha, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1;
        } else {
          particles.splice(i, 1);
        }
      }

      // Render Ambient Glow Spotlight Aura on Desktop (when mouse is active)
      if (pointer.isVisible && !pointer.isTouch) {
        const radius = pointer.isHoveringClickable ? 32 : 18;

        // Outer soft ambient glow
        const gradient = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          pointer.isHoveringClickable ? 55 : 35
        );
        gradient.addColorStop(0, pointer.isHoveringClickable ? 'rgba(56, 189, 248, 0.35)' : 'rgba(56, 189, 248, 0.18)');
        gradient.addColorStop(0.6, 'rgba(6, 182, 212, 0.08)');
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');

        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, pointer.isHoveringClickable ? 55 : 35, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Inner glowing ring/dot
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = pointer.isHoveringClickable ? 'rgba(56, 189, 248, 0.85)' : 'rgba(56, 189, 248, 0.45)';
        ctx.lineWidth = pointer.isHoveringClickable ? 2 : 1.2;
        ctx.stroke();

        // Pinpoint center dot
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, pointer.isHoveringClickable ? 4 : 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#38bdf8';
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#38bdf8';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Dynamic Scroll Reading Progress Line at Top of Window */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] pointer-events-none bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_12px_#38bdf8] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Global Interactive Canvas for Mouse, Touch & Scroll FX */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[60] select-none"
      />
    </>
  );
}
