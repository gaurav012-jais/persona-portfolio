import React, { useRef, useState } from 'react';

export default function Tilt3DCard({
  children,
  className = '',
  maxTilt = 12,
  glare = true,
  glowColor = 'rgba(56, 189, 248, 0.35)',
  style = {},
  ...props
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({
    rx: 0,
    ry: 0,
    glareX: 50,
    glareY: 50,
    isHovered: false,
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = (x / rect.width) * 100;
    const yPct = (y / rect.height) * 100;

    // Invert X tilt for natural feel
    const rx = ((y / rect.height) - 0.5) * -maxTilt;
    const ry = ((x / rect.width) - 0.5) * maxTilt;

    setTilt({
      rx,
      ry,
      glareX: xPct,
      glareY: yPct,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt({
      rx: 0,
      ry: 0,
      glareX: 50,
      glareY: 50,
      isHovered: false,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setTilt((prev) => ({ ...prev, isHovered: true }))}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: tilt.isHovered
          ? `perspective(1000px) rotateX(${tilt.rx.toFixed(2)}deg) rotateY(${tilt.ry.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: tilt.isHovered
          ? 'transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1)'
          : 'transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1)',
        transformStyle: 'preserve-3d',
        ...style,
      }}
      className={`relative ${className}`}
      {...props}
    >
      {/* Specular Glare Reflection Sheen */}
      {glare && (
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300 z-30"
          style={{
            opacity: tilt.isHovered ? 0.35 : 0,
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.1) 40%, transparent 75%)`,
          }}
        />
      )}

      {/* Dynamic 3D Ambient Floor Glow on Hover */}
      <div
        className="absolute -inset-1 rounded-[inherit] pointer-events-none transition-opacity duration-500 -z-10 blur-xl"
        style={{
          opacity: tilt.isHovered ? 0.55 : 0,
          background: glowColor,
        }}
      />

      {children}
    </div>
  );
}
