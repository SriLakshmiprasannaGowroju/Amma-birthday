import React, { useEffect, useState } from 'react';

interface SparkleParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export const StardustCursor: React.FC = () => {
  const [particles, setParticles] = useState<SparkleParticle[]>([]);

  useEffect(() => {
    // Only enable on desktop mouse/fine pointer devices to keep mobile scrolling buttery smooth
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) return;

    let particleId = 0;
    const colors = ['#f472b6', '#d8b4fe', '#fef08a', '#c084fc', '#ffffff'];

    const handlePointerMove = (e: PointerEvent) => {
      // Create occasional stardust particle on move
      if (Math.random() > 0.4) {
        const newParticle: SparkleParticle = {
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 4 + 3,
          color: colors[Math.floor(Math.random() * colors.length)],
        };

        setParticles((prev) => [...prev.slice(-18), newParticle]);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Clean up expired particles every 600ms
    const interval = setInterval(() => {
      setParticles((prev) => (prev.length > 0 ? prev.slice(1) : prev));
    }, 120);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="stardust-cursor-container" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="stardust-cursor-sparkle"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 8px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
};

