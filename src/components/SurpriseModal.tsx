import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X, Stars } from 'lucide-react';

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SurpriseModal: React.FC<SurpriseModalProps> = ({ isOpen, onClose }) => {
  // Listen for Escape key to dismiss gracefully
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Burst particles for celebration when opened
  const burstParticles = [
    { x: -90, y: -80, scale: 1.2, delay: 0.1 },
    { x: 90, y: -70, scale: 1.1, delay: 0.15 },
    { x: -110, y: 30, scale: 0.9, delay: 0.2 },
    { x: 110, y: 40, scale: 1, delay: 0.12 },
    { x: -60, y: 100, scale: 1.3, delay: 0.25 },
    { x: 70, y: 90, scale: 0.85, delay: 0.18 },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-portal-wrapper" role="dialog" aria-modal="true">
          {/* Glassmorphism Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
          />

          {/* Centered Modal Card Container */}
          <div className="modal-dialog-container">
            <motion.div
              className="surprise-card"
              initial={{ opacity: 0, scale: 0.7, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{
                type: 'spring',
                damping: 22,
                stiffness: 300,
              }}
            >
              {/* Outer Radiant Glow */}
              <div className="surprise-card-glow" />

              {/* Close Button */}
              <button
                type="button"
                className="modal-close-btn"
                onClick={onClose}
                aria-label="Close message"
              >
                <X size={20} />
              </button>

              {/* Celebration Sparkle Particles */}
              {burstParticles.map((pt, idx) => (
                <motion.div
                  key={idx}
                  className="modal-burst-particle"
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, pt.scale, 0.4],
                    x: pt.x,
                    y: pt.y,
                  }}
                  transition={{
                    duration: 1.8,
                    delay: pt.delay,
                    ease: 'easeOut',
                    repeat: Infinity,
                    repeatDelay: 2.5,
                  }}
                >
                  {idx % 2 === 0 ? (
                    <Sparkles size={18} color="#f472b6" />
                  ) : (
                    <Heart size={16} color="#d8b4fe" fill="#d8b4fe" />
                  )}
                </motion.div>
              ))}

              {/* Heart Badge with Pulsing Ring */}
              <div className="modal-heart-badge">
                <motion.div
                  className="pulsing-heart-circle"
                  animate={{
                    scale: [1, 1.15, 1],
                    boxShadow: [
                      '0 0 15px rgba(236, 72, 153, 0.4)',
                      '0 0 35px rgba(236, 72, 153, 0.8)',
                      '0 0 15px rgba(236, 72, 153, 0.4)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Heart size={36} color="#ffffff" fill="#ec4899" />
                </motion.div>
              </div>

              {/* Header Label */}
              <div className="modal-header-tag">
                <Stars size={16} className="tag-sparkle" />
                <span>Special Surprise for Amma</span>
                <Stars size={16} className="tag-sparkle" />
              </div>

              {/* The Exact Required Heartfelt Message */}
              <motion.h3
                className="surprise-main-message"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                "Amma, this little surprise is made with all my love!"
              </motion.h3>

              {/* Sweet Emotional Note */}
              <motion.p
                className="surprise-sub-note"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                You bring unconditional warmth, comfort, and boundless light into my life every single day.
                Wishing you endless joy, radiant health, and all the happiness in the universe. 🌸✨
              </motion.p>

              {/* Close Button with Sweet Heart */}
              <motion.button
                type="button"
                className="modal-action-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
              >
                <span>With All My Love ❤️</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

