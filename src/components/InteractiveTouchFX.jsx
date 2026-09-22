import React, { useEffect, useRef } from 'react';

/**
 * InteractiveTouchFX Component
 * Global Water Ripple, Caustic Aura & Floating Droplets FX across the entire portfolio:
 * - Active everywhere the cursor moves (desktop mouse + mobile touch)
 * - Luminous Aquatic Caustic Aura (Soft pre-shadow & liquid glow following cursor)
 * - Fluid Concentric Water Ripples spawned dynamically on movement and clicks
 * - Buoyant Sparkling Droplets & Hollow Bubbles drifting behind the cursor
 * - Works gracefully over both dark obsidian and sculpted white ribbon sections
 * - 100% Non-intrusive (pointer-events-none, 60fps pooled animation)
 */
export default function InteractiveTouchFX() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Pointer state
    const pointer = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      prevX: width / 2,
      prevY: height / 2,
      speed: 0,
      isHoveringInteractive: false,
      isOverWhiteSection: false,
      isVisible: false,
      isTouch: false,
    };

    // Object pools
    const ripples = [];
    const droplets = [];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Helper: Detect if pointer is currently over a white section or clickable element
    const checkElementUnderPointer = (x, y) => {
      if (x < 0 || y < 0 || x > width || y > height) return;
      try {
        const el = document.elementFromPoint(x, y);
        if (!el) return;

        // Check if clickable
        pointer.isHoveringInteractive = Boolean(
          el.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer')
        );

        // Check if over a light/white background section
        const whiteParent = el.closest('.bg-white, [class*="from-[#ffffff]"], [class*="bg-gradient-to-b from-[#"]');
        pointer.isOverWhiteSection = Boolean(whiteParent);
      } catch (e) {}
    };

    // Spawn concentric water ripples
    const spawnRipple = (x, y, maxRadius = 55, intensity = 1, color = null) => {
      if (ripples.length > 24) ripples.shift();

      const rippleColor = color || (pointer.isOverWhiteSection ? '#0284c7' : '#38bdf8');

      // Primary wave
      ripples.push({
        x,
        y,
        radius: 4,
        maxRadius: maxRadius * intensity,
        alpha: pointer.isOverWhiteSection ? 0.65 : 0.85,
        speed: 1.8 * intensity,
        color: rippleColor,
        lineWidth: 1.8,
      });

      // Secondary echo wave for true fluid resonance
      ripples.push({
        x,
        y,
        radius: 2,
        maxRadius: maxRadius * 0.7 * intensity,
        alpha: pointer.isOverWhiteSection ? 0.45 : 0.6,
        speed: 1.2 * intensity,
        color: pointer.isOverWhiteSection ? '#0369a1' : '#06b6d4',
        lineWidth: 1.2,
      });
    };

    // Spawn buoyant droplets & bubbles
    const spawnDroplets = (x, y, count = 2, boost = false) => {
      for (let i = 0; i < count; i++) {
        if (droplets.length > 80) droplets.shift();
        const angle = Math.random() * Math.PI * 2;
        const speed = (Math.random() * 2.0 + 0.6) * (boost ? 1.8 : 1);
        droplets.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (boost ? 1.6 : 0.5),
          radius: Math.random() * 2.5 + (boost ? 1.5 : 1),
          alpha: pointer.isOverWhiteSection ? 0.7 : 0.9,
          decay: Math.random() * 0.02 + 0.015,
          color: pointer.isOverWhiteSection ? '#0284c7' : '#38bdf8',
          isBubble: Math.random() > 0.45,
        });
      }
    };

    // Desktop Mouse Move Handler
    let lastMoveTime = 0;
    const handleMouseMove = (e) => {
      pointer.isVisible = true;
      pointer.isTouch = false;
      pointer.targetX = e.clientX;
      pointer.targetY = e.clientY;

      const now = performance.now();
      const dist = Math.hypot(e.clientX - pointer.prevX, e.clientY - pointer.prevY);
      pointer.speed = dist;

      // Check hovered elements every 80ms
      if (now - lastMoveTime > 75) {
        lastMoveTime = now;
        checkElementUnderPointer(e.clientX, e.clientY);

        // Spawn gentle water ripples as mouse glides anywhere on the portfolio
        if (dist > 18) {
          spawnRipple(
            e.clientX,
            e.clientY,
            pointer.isHoveringInteractive ? 52 : 38,
            pointer.isHoveringInteractive ? 1.15 : 0.85
          );

          if (Math.random() > 0.4) {
            spawnDroplets(e.clientX, e.clientY, 1, false);
          }
        }
      }

      pointer.prevX = e.clientX;
      pointer.prevY = e.clientY;
    };

    // Mouse Click Water Splash
    const handleMouseDown = (e) => {
      checkElementUnderPointer(e.clientX, e.clientY);
      spawnRipple(e.clientX, e.clientY, 85, 1.4);
      spawnDroplets(e.clientX, e.clientY, 8, true);
    };

    // Touch Handlers for Mobile
    const handleTouchStart = (e) => {
      pointer.isTouch = true;
      pointer.isVisible = true;
      const touch = e.touches[0];
      if (!touch) return;
      pointer.targetX = pointer.x = touch.clientX;
      pointer.targetY = pointer.y = touch.clientY;

      checkElementUnderPointer(touch.clientX, touch.clientY);
      spawnRipple(touch.clientX, touch.clientY, 65, 1.2);
      spawnDroplets(touch.clientX, touch.clientY, 5, true);
    };

    const handleTouchMove = (e) => {
      pointer.isTouch = true;
      pointer.isVisible = true;
      const touch = e.touches[0];
      if (!touch) return;
      pointer.targetX = touch.clientX;
      pointer.targetY = touch.clientY;

      const dist = Math.hypot(touch.clientX - pointer.prevX, touch.clientY - pointer.prevY);
      if (dist > 22) {
        spawnRipple(touch.clientX, touch.clientY, 42, 0.9);
        if (Math.random() > 0.5) {
          spawnDroplets(touch.clientX, touch.clientY, 1, false);
        }
        pointer.prevX = touch.clientX;
        pointer.prevY = touch.clientY;
      }
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        pointer.isVisible = false;
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth lerp pointer movement
      pointer.x += (pointer.targetX - pointer.x) * 0.28;
      pointer.y += (pointer.targetY - pointer.y) * 0.28;

      // ========================================================
      // 1. RENDER EXPANDING WATER RIPPLES
      // ========================================================
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.alpha *= 0.94;

        if (r.alpha > 0.02 && r.radius < r.maxRadius) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.strokeStyle = r.color;
          ctx.globalAlpha = r.alpha;
          ctx.lineWidth = r.lineWidth;
          ctx.shadowBlur = pointer.isOverWhiteSection ? 4 : 10;
          ctx.shadowColor = r.color;
          ctx.stroke();
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1;
        } else {
          ripples.splice(i, 1);
        }
      }

      // ========================================================
      // 2. RENDER WATER DROPLETS & BUBBLES
      // ========================================================
      for (let i = droplets.length - 1; i >= 0; i--) {
        const d = droplets[i];
        d.x += d.vx;
        d.y += d.vy;
        d.alpha -= d.decay;

        if (d.alpha > 0.02) {
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.radius * (0.6 + d.alpha * 0.4), 0, Math.PI * 2);

          if (d.isBubble) {
            // Luminous water bubble
            ctx.strokeStyle = pointer.isOverWhiteSection
              ? `rgba(2, 132, 199, ${d.alpha * 0.8})`
              : `rgba(224, 242, 254, ${d.alpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
            ctx.fillStyle = pointer.isOverWhiteSection
              ? `rgba(56, 189, 248, ${d.alpha * 0.25})`
              : `rgba(56, 189, 248, ${d.alpha * 0.2})`;
            ctx.fill();
          } else {
            // Sparkling droplet
            ctx.fillStyle = d.color;
            ctx.globalAlpha = d.alpha;
            ctx.shadowBlur = 6;
            ctx.shadowColor = d.color;
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.globalAlpha = 1;
          }
        } else {
          droplets.splice(i, 1);
        }
      }

      // ========================================================
      // 3. AMBIENT AQUATIC CAUSTIC AURA / PRE-SHADOW ON MOUSE MOVE
      // ========================================================
      if (pointer.isVisible && !pointer.isTouch) {
        const isHover = pointer.isHoveringInteractive;
        const isWhite = pointer.isOverWhiteSection;
        const radius = isHover ? 70 : 42;

        // Radiant aquatic aura (soft pre-shadow / glow following mouse)
        const auraGrad = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          radius
        );

        if (isWhite) {
          // Soft sky-blue aquatic shadow over light ribbon sections
          auraGrad.addColorStop(0, isHover ? 'rgba(2, 132, 199, 0.22)' : 'rgba(2, 132, 199, 0.12)');
          auraGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.06)');
          auraGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
        } else {
          // Bioluminescent cyan-electric aura over dark obsidian sections
          auraGrad.addColorStop(0, isHover ? 'rgba(56, 189, 248, 0.38)' : 'rgba(56, 189, 248, 0.2)');
          auraGrad.addColorStop(0.45, isHover ? 'rgba(6, 182, 212, 0.18)' : 'rgba(6, 182, 212, 0.08)');
          auraGrad.addColorStop(1, 'rgba(6, 182, 212, 0)');
        }

        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = auraGrad;
        ctx.fill();

        // Luminous water ring guide
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, isHover ? 26 : 14, 0, Math.PI * 2);
        ctx.strokeStyle = isWhite
          ? (isHover ? 'rgba(2, 132, 199, 0.85)' : 'rgba(2, 132, 199, 0.5)')
          : (isHover ? 'rgba(255, 255, 255, 0.95)' : 'rgba(56, 189, 248, 0.65)');
        ctx.lineWidth = isHover ? 2.0 : 1.2;
        ctx.shadowBlur = isHover ? 12 : 5;
        ctx.shadowColor = isWhite ? '#0284c7' : '#38bdf8';
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Core bright water pearl
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, isHover ? 3.5 : 2.0, 0, Math.PI * 2);
        ctx.fillStyle = isWhite ? '#0284c7' : '#ffffff';
        ctx.shadowBlur = 8;
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
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[100] select-none"
    />
  );
}
