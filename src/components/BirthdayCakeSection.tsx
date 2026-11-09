import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Wind, RotateCcw, Cake as CakeIcon } from 'lucide-react';
import { siteContent, type Language } from '../data/content';
import { soundManager } from '../utils/soundEffects';

interface BirthdayCakeSectionProps {
  currentLang: Language;
}

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
}

export const BirthdayCakeSection: React.FC<BirthdayCakeSectionProps> = ({ currentLang }) => {
  const t = siteContent.cake;
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [cakeCut, setCakeCut] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  // Trigger celebration confetti
  const triggerConfetti = () => {
    const pieces: ConfettiPiece[] = [];
    const colors = ['#f472b6', '#c084fc', '#fef08a', '#38bdf8', '#fb7185', '#a855f7', '#ffffff'];
    for (let i = 0; i < 40; i++) {
      pieces.push({
        id: i,
        x: (Math.random() - 0.5) * 550,
        y: -150 - Math.random() * 300,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 6 + Math.random() * 10,
        rotation: Math.random() * 360,
      });
    }
    setConfetti(pieces);
  };

  const handleMakeWish = () => {
    soundManager.playBlowSound();
    setCandlesBlown(true);
    triggerConfetti();
    setTimeout(() => {
      soundManager.playSparkleChime();
    }, 400);
  };

  const handleCutCake = () => {
    soundManager.playCelebrationSound();
    setCakeCut(true);
    triggerConfetti();
  };

  const handleRelight = () => {
    setCandlesBlown(false);
    setCakeCut(false);
    setConfetti([]);
  };

  return (
    <section id="cake" className="birthday-section cake-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-block">
          <motion.div
            className="section-badge"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CakeIcon size={16} className="badge-sparkle" />
            <span>Celebration Moment</span>
            <Heart size={14} fill="#ec4899" color="#ec4899" />
          </motion.div>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {t.heading[currentLang]}
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t.subtitle[currentLang]}
          </motion.p>
        </div>

        {/* Cake Showcase Area */}
        <div className="cake-display-stage">
          {/* Confetti Explosion Layer */}
          <div className="cake-confetti-container" aria-hidden="true">
            {confetti.map((c) => (
              <motion.div
                key={c.id}
                className="confetti-bit"
                style={{
                  backgroundColor: c.color,
                  width: `${c.size}px`,
                  height: `${c.size * 1.4}px`,
                }}
                initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                animate={{
                  opacity: [1, 1, 0],
                  x: c.x,
                  y: [0, c.y, c.y + 450],
                  rotate: c.rotation + 720,
                }}
                transition={{ duration: 3.2, ease: 'easeOut' }}
              />
            ))}
          </div>

          {/* SVG Vector Birthday Cake */}
          <div className="cake-illustration-wrapper">
            <svg
              className={`birthday-cake-svg ${cakeCut ? 'cake-is-cut' : ''}`}
              viewBox="0 0 360 360"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Plate Gradient */}
                <linearGradient id="plateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e9d5ff" />
                  <stop offset="50%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#7e22ce" />
                </linearGradient>

                {/* Bottom Tier Sponge: Velvet Lavender */}
                <linearGradient id="spongeBottom" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="50%" stopColor="#6d28d9" />
                  <stop offset="100%" stopColor="#4c1d95" />
                </linearGradient>

                {/* Top Tier Sponge: Strawberry Cream */}
                <linearGradient id="spongeTop" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="50%" stopColor="#db2777" />
                  <stop offset="100%" stopColor="#9d174d" />
                </linearGradient>

                {/* Frosting White/Vanilla Sheen */}
                <linearGradient id="frostingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="#fdf4ff" />
                  <stop offset="100%" stopColor="#fae8ff" />
                </linearGradient>

                {/* Candle Body Striping */}
                <linearGradient id="candleGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="50%" stopColor="#f472b6" />
                  <stop offset="100%" stopColor="#fef08a" />
                </linearGradient>

                {/* Flame Radial Glow */}
                <radialGradient id="flameGrad" cx="50%" cy="60%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="35%" stopColor="#fef08a" />
                  <stop offset="70%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#ef4444" stop-opacity="0" />
                </radialGradient>
              </defs>

              {/* Decorative Pedestal Stand / Plate */}
              <ellipse cx="180" cy="305" rx="145" ry="24" fill="url(#plateGrad)" opacity="0.9" />
              <ellipse cx="180" cy="301" rx="135" ry="18" fill="#ffffff" opacity="0.3" />

              {/* Bottom Tier (Tier 1) */}
              <rect x="65" y="210" width="230" height="85" rx="14" fill="url(#spongeBottom)" />
              {/* Bottom Tier Frosting Swag & Drip */}
              <path
                d="M65 225 Q80 245 95 225 Q110 245 125 225 Q140 245 155 225 Q170 245 185 225 Q200 245 215 225 Q230 245 245 225 Q260 245 275 225 Q290 245 295 225 L295 210 L65 210 Z"
                fill="url(#frostingGrad)"
              />
              {/* Pearl Garlands on Bottom Tier */}
              <circle cx="95" cy="255" r="5" fill="#fef08a" />
              <circle cx="135" cy="260" r="5" fill="#fbcfe8" />
              <circle cx="180" cy="262" r="6" fill="#fef08a" />
              <circle cx="225" cy="260" r="5" fill="#fbcfe8" />
              <circle cx="265" cy="255" r="5" fill="#fef08a" />

              {/* Top Tier (Tier 2) */}
              <rect x="95" y="145" width="170" height="70" rx="12" fill="url(#spongeTop)" />
              {/* Top Tier Frosting Drip */}
              <path
                d="M95 158 Q110 174 125 158 Q140 174 155 158 Q170 174 185 158 Q200 174 215 158 Q230 174 245 158 Q260 174 265 158 L265 145 L95 145 Z"
                fill="url(#frostingGrad)"
              />
              {/* Strawberries / Rosettes on Top Tier */}
              <circle cx="115" cy="144" r="8" fill="#ef4444" />
              <circle cx="150" cy="142" r="8" fill="#f43f5e" />
              <circle cx="180" cy="140" r="9" fill="#ef4444" />
              <circle cx="210" cy="142" r="8" fill="#f43f5e" />
              <circle cx="245" cy="144" r="8" fill="#ef4444" />

              {/* 5 Candles & Flames */}
              {[
                { x: 120, y: 110 },
                { x: 150, y: 104 },
                { x: 180, y: 100 },
                { x: 210, y: 104 },
                { x: 240, y: 110 },
              ].map((candle, idx) => (
                <g key={idx} className="candle-group">
                  {/* Candle Stick */}
                  <rect
                    x={candle.x - 3.5}
                    y={candle.y}
                    width="7"
                    height="35"
                    rx="2"
                    fill="url(#candleGrad1)"
                  />
                  {/* Candle Wick */}
                  <line
                    x1={candle.x}
                    y1={candle.y}
                    x2={candle.x}
                    y2={candle.y - 7}
                    stroke="#475569"
                    strokeWidth="2"
                  />

                  {/* Flame or Smoke */}
                  {!candlesBlown ? (
                    <g className="candle-flame-motion">
                      {/* Ambient flame halo glow */}
                      <circle
                        cx={candle.x}
                        cy={candle.y - 14}
                        r="14"
                        fill="#fef08a"
                        opacity="0.35"
                        className="flame-glow-pulse"
                      />
                      {/* Teardrop Flame */}
                      <path
                        d={`M${candle.x} ${candle.y - 7} C${candle.x - 6} ${candle.y - 14}, ${candle.x - 4} ${candle.y - 24}, ${candle.x} ${candle.y - 27} C${candle.x + 4} ${candle.y - 24}, ${candle.x + 6} ${candle.y - 14}, ${candle.x} ${candle.y - 7} Z`}
                        fill="url(#flameGrad)"
                      />
                      {/* Inner bright core */}
                      <ellipse
                        cx={candle.x}
                        cy={candle.y - 12}
                        rx="2"
                        ry="4"
                        fill="#ffffff"
                      />
                    </g>
                  ) : (
                    /* Smoke wisps after blowing */
                    <path
                      d={`M${candle.x} ${candle.y - 7} Q${candle.x - 4} ${candle.y - 18} ${candle.x + 2} ${candle.y - 28} T${candle.x - 2} ${candle.y - 38}`}
                      stroke="rgba(243, 232, 255, 0.6)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="4 2"
                      className="smoke-wisp-fade"
                    />
                  )}
                </g>
              ))}

              {/* Cake Cut Reveal Slice Effect */}
              {cakeCut && (
                <g className="cut-slice-decor">
                  <path
                    d="M175 210 L145 285 L215 285 Z"
                    fill="#fef08a"
                    opacity="0.9"
                  />
                  <text
                    x="180"
                    y="255"
                    fill="#4c1d95"
                    fontSize="11"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    ❤️ Love
                  </text>
                </g>
              )}
            </svg>

            {/* Glowing Floor Platform Aura */}
            <div className="cake-platform-glow" />
          </div>

          {/* Interactive Wish / Cut Celebration Banner */}
          <AnimatePresence>
            {candlesBlown && (
              <motion.div
                className="wish-celebration-banner"
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', damping: 20 }}
              >
                <div className="wish-banner-tag">
                  <Sparkles size={16} color="#fef08a" />
                  <span>Wish Granted</span>
                  <Heart size={14} fill="#ec4899" color="#ec4899" />
                </div>
                <h3 className="wish-banner-title">{t.wishMessage[currentLang]}</h3>
                <p className="wish-banner-subtext">
                  {cakeCut ? t.sliceCutMessage[currentLang] : t.wishSubtext[currentLang]}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Buttons Toolbar */}
          <div className="cake-action-toolbar">
            {!candlesBlown ? (
              <motion.button
                type="button"
                className="cake-action-btn wish-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleMakeWish}
              >
                <Wind size={20} className="btn-icon" />
                <span>{t.makeWishButton[currentLang]}</span>
                <Sparkles size={18} className="btn-icon" />
              </motion.button>
            ) : !cakeCut ? (
              <div className="cake-secondary-actions">
                <motion.button
                  type="button"
                  className="cake-action-btn cut-cake-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCutCake}
                >
                  <CakeIcon size={20} className="btn-icon" />
                  <span>{t.cutCakeButton[currentLang]}</span>
                </motion.button>

                <button
                  type="button"
                  className="cake-relight-btn"
                  onClick={handleRelight}
                  title="Relight Candles"
                >
                  <RotateCcw size={16} />
                  <span>{t.relightButton[currentLang]}</span>
                </button>
              </div>
            ) : (
              <motion.button
                type="button"
                className="cake-action-btn relight-full-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRelight}
              >
                <RotateCcw size={18} className="btn-icon" />
                <span>{t.relightButton[currentLang]}</span>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
