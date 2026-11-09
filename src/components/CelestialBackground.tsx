import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

interface Star {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  isSparkle?: boolean;
}

interface Particle {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  xOffset: number;
}

interface FloatingHeart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export const CelestialBackground: React.FC = () => {
  // Generate deterministic stars so they don't re-randomize on re-renders
  const stars: Star[] = useMemo(() => {
    const starList: Star[] = [];
    const count = 50;
    for (let i = 0; i < count; i++) {
      // Semi-random seeded distribution
      const pseudoRand1 = ((i * 9301 + 49297) % 233280) / 233280;
      const pseudoRand2 = ((i * 49297 + 9301) % 233280) / 233280;
      const pseudoRand3 = ((i * 31415 + 12345) % 233280) / 233280;

      starList.push({
        id: i,
        top: pseudoRand1 * 95,
        left: pseudoRand2 * 98,
        size: pseudoRand3 > 0.85 ? 3.5 : pseudoRand3 > 0.5 ? 2.5 : 1.5,
        duration: 2 + pseudoRand1 * 3,
        delay: pseudoRand2 * 4,
        isSparkle: i % 8 === 0,
      });
    }
    return starList;
  }, []);

  // Ambient floating stardust particles
  const particles: Particle[] = useMemo(() => {
    const particleList: Particle[] = [];
    const count = 22;
    for (let i = 0; i < count; i++) {
      const r1 = ((i * 7919 + 65537) % 100000) / 100000;
      const r2 = ((i * 65537 + 7919) % 100000) / 100000;
      particleList.push({
        id: i,
        top: 20 + r1 * 75,
        left: 5 + r2 * 90,
        size: 3 + (i % 3) * 2,
        duration: 6 + r1 * 5,
        delay: r2 * 3,
        xOffset: (i % 2 === 0 ? 1 : -1) * (15 + r1 * 20),
      });
    }
    return particleList;
  }, []);

  // Slowly floating hearts that drift upwards with love
  const hearts: FloatingHeart[] = useMemo(() => {
    return [
      { id: 1, left: 10, size: 20, duration: 14, delay: 0, color: 'rgba(236, 72, 153, 0.45)' },
      { id: 2, left: 24, size: 16, duration: 18, delay: 3, color: 'rgba(216, 180, 254, 0.5)' },
      { id: 3, left: 38, size: 24, duration: 16, delay: 7, color: 'rgba(244, 114, 182, 0.4)' },
      { id: 4, left: 62, size: 18, duration: 15, delay: 2, color: 'rgba(192, 132, 252, 0.45)' },
      { id: 5, left: 78, size: 22, duration: 19, delay: 5, color: 'rgba(244, 114, 182, 0.35)' },
      { id: 6, left: 90, size: 15, duration: 13, delay: 9, color: 'rgba(216, 180, 254, 0.45)' },
      { id: 7, left: 50, size: 17, duration: 21, delay: 11, color: 'rgba(236, 72, 153, 0.35)' },
    ];
  }, []);

  return (
    <div className="celestial-background-container" aria-hidden="true">
      {/* Deep purple & lavender ambient cosmic gradient glows */}
      <div className="ambient-glow nebula-top-left" />
      <div className="ambient-glow nebula-center-lavender" />
      <div className="ambient-glow nebula-bottom-right" />

      {/* Floating Magical Glowing Moon */}
      <motion.div
        className="glowing-moon-wrapper"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      >
        <motion.div
          className="moon-body"
          animate={{
            y: [-6, 6, -6],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Inner moon surface with crater shading & glow */}
          <div className="moon-surface">
            <div className="moon-crater crater-1" />
            <div className="moon-crater crater-2" />
            <div className="moon-crater crater-3" />
          </div>
          {/* Radiant moon aureole */}
          <div className="moon-halo-inner" />
          <div className="moon-halo-outer" />
        </motion.div>
      </motion.div>

      {/* Twinkling Stars */}
      <div className="stars-layer">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className={`star-element ${star.isSparkle ? 'sparkle-star' : 'dot-star'}`}
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.2, 0.95, 0.2],
              scale: [0.75, 1.25, 0.75],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: 'easeInOut',
            }}
          >
            {star.isSparkle && (
              <Sparkles
                size={star.size * 2.8}
                className="sparkle-icon"
                strokeWidth={1.5}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Floating Stardust Particles */}
      <div className="particles-layer">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="stardust-particle"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              y: [-25, 25, -25],
              x: [-p.xOffset, p.xOffset, -p.xOffset],
              opacity: [0.15, 0.65, 0.15],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Slowly Floating Translucent Hearts */}
      <div className="hearts-layer">
        {hearts.map((h) => (
          <motion.div
            key={h.id}
            className="floating-heart"
            style={{
              left: `${h.left}%`,
              bottom: '-8%',
            }}
            animate={{
              y: ['0vh', '-115vh'],
              x: [-20, 20, -20],
              rotate: [-12, 12, -12],
              opacity: [0, 0.7, 0.7, 0],
            }}
            transition={{
              duration: h.duration,
              repeat: Infinity,
              delay: h.delay,
              ease: 'easeInOut',
            }}
          >
            <Heart
              size={h.size}
              color={h.color}
              fill={h.color}
              className="glow-heart"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

