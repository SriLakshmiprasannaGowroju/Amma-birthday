import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { siteContent, type Language } from '../data/content';

interface BackToTopProps {
  currentLang: Language;
}

export const BackToTop: React.FC<BackToTopProps> = ({ currentLang }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          className="floating-back-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          title={siteContent.backToTop[currentLang]}
          aria-label={siteContent.backToTop[currentLang]}
        >
          <ArrowUp size={20} className="arrow-icon" />
          <Heart size={12} fill="#ec4899" color="#ec4899" className="mini-heart-top" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
