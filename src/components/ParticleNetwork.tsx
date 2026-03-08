import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const PARTICLE_COUNT = 70;
const CONNECTION_DIST = 150;
const SPEED = 0.3;
const ACCENT_RGB = '249, 115, 22';

export default function ParticleNetwork({ fixed = false }: { fixed?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    const getDimensions = () => fixed
      ? { w: window.innerWidth, h: window.innerHeight }
      : { w: canvas.getBoundingClientRect().width || canvas.parentElement?.clientWidth || window.innerWidth,
          h: canvas.getBoundingClientRect().height || canvas.parentElement?.clientHeight || window.innerHeight };

    const init = () => {
      const w = canvas.width;
      const h = canvas.height;
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * SPEED * 2,
        vy: (Math.random() - 0.5) * SPEED * 2,
        radius: Math.random() * 1.5 + 0.8,
        opacity: Math.random() * 0.45 + 0.15,
      }));
    };

    const resize = () => {
      const { w, h } = getDimensions();
      if (w === canvas.width && h === canvas.height) return;
      canvas.width = w;
      canvas.height = h;
      init();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT_RGB}, ${p.opacity})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${ACCENT_RGB}, ${(1 - dist / CONNECTION_DIST) * 0.2})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    // Double RAF ensures the browser has done layout before we read dimensions
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        resize();
        draw();
      });
    });

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`${fixed ? 'fixed' : 'absolute'} inset-0 w-full h-full pointer-events-none`}
      style={{ zIndex: 0 }}
    />
  );
}
