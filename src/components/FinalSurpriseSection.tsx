import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, RotateCcw, Crown, Flower2 } from 'lucide-react';
import { siteContent, type Language } from '../data/content';
import { soundManager } from '../utils/soundEffects';

interface FinalSurpriseSectionProps {
  currentLang: Language;
}

export const FinalSurpriseSection: React.FC<FinalSurpriseSectionProps> = ({ currentLang }) => {
  const t = siteContent.surprise;

  const handleReplay = () => {
    soundManager.playCelebrationSound();
    // Smoothly scroll back to the hero section to relive the magical journey!
    const heroElem = document.getElementById('hero');
    if (heroElem) {
      heroElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Golden glowing particles & floating rose petals
  const goldenParticles = Array.from({ length: 24 }).map((_, i) => ({
    id: i,
    left: `${(i * 17) % 94 + 3}%`,
    top: `${(i * 23) % 90 + 5}%`,
    size: (i % 3) * 2 + 3,
    duration: 3 + (i % 4) * 1.5,
    delay: (i % 5) * 0.4,
  }));

  const petals = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    left: `${(i * 13) % 90 + 5}%`,
    duration: 8 + (i % 5) * 2,
    delay: (i % 6) * 1.2,
    size: 16 + (i % 3) * 6,
  }));

  return (
    <section id="surprise" className="birthday-section final-surprise-section">
      {/* Golden Particles Layer */}
      <div className="golden-particles-stage" aria-hidden="true">
        {goldenParticles.map((p) => (
          <motion.div
            key={p.id}
            className="gold-particle-dot"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.2, 0.9, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Floating Petals & Hearts */}
        {petals.map((pet) => (
          <motion.div
            key={pet.id}
            className="falling-petal"
            style={{
              left: pet.left,
              top: '-5%',
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: [-25, 25, -25],
              rotate: [0, 360],
              opacity: [0, 0.75, 0.75, 0],
            }}
            transition={{
              duration: pet.duration,
              repeat: Infinity,
              delay: pet.delay,
              ease: 'linear',
            }}
          >
            {pet.id % 2 === 0 ? (
              <Flower2 size={pet.size} color="#f472b6" />
            ) : (
              <Heart size={pet.size} fill="#ec4899" color="#ec4899" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="section-container final-content-container">
        {/* Crown Badge */}
        <motion.div
          className="final-crown-badge"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="crown-circle">
            <Crown size={38} color="#fef08a" />
          </div>
          <span className="crown-tag">{t.daughterLoveTag[currentLang]}</span>
        </motion.div>

        {/* Large Heading 1: "You Are My World, Amma!" */}
        <motion.h2
          className="final-main-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {t.heading[currentLang]}
        </motion.h2>

        {/* Telugu Message: "అమ్మా, నువ్వే నా ప్రపంచం!" */}
        <motion.h3
          className="final-telugu-message telugu-font"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          {t.teluguMessage}
        </motion.h3>

        {/* Display: "Happy Birthday, My Beautiful Amma!" */}
        <motion.h4
          className="final-subheading-display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          {t.subheading[currentLang]}
        </motion.h4>

        {/* Final Emotional Love Letter Message Card */}
        <motion.div
          className="final-emotional-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.65 }}
        >
          <div className="card-sparkle-decor-left">
            <Sparkles size={22} color="#fef08a" />
          </div>
          <p className="final-emotional-text">
            {t.emotionalMessage[currentLang]}
          </p>
          <div className="card-sparkle-decor-right">
            <Sparkles size={22} color="#f472b6" />
          </div>
        </motion.div>

        {/* Replay Button */}
        <motion.button
          type="button"
          className="final-replay-button"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReplay}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <RotateCcw size={20} className="replay-icon" />
          <span>{t.replayButton[currentLang]}</span>
          <Heart size={18} fill="#f472b6" color="#f472b6" />
        </motion.button>

        {/* Footer Credit */}
        <div className="final-footer-credit">
          <p>
            Made with all my heart for Amma | Happy Birthday 🌸
          </p>
        </div>
      </div>
    </section>
  );
};
