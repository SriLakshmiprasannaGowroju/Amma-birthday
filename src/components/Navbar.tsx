import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Globe, Volume2, VolumeX } from 'lucide-react';
import { siteContent, type Language } from '../data/content';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: (lang: Language) => void;
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  isPlayingMusic,
  onToggleMusic,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = siteContent.nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: t.home[currentLang] },
    { id: 'memories', label: t.memories[currentLang] },
    { id: 'letter', label: t.letter[currentLang] },
    { id: 'special', label: t.special[currentLang] },
    { id: 'cake', label: t.cake[currentLang] },
    { id: 'surprise', label: t.surprise[currentLang] },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`site-navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-container">
        {/* Brand / Logo */}
        <button
          type="button"
          className="nav-brand-button"
          onClick={() => scrollToSection('hero')}
        >
          <span className="brand-icon">
            <Heart size={20} fill="#ec4899" color="#ec4899" />
          </span>
          <span className="brand-text">Amma ✨</span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop-links" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className="nav-link-item"
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Controls: Music & Language Switch */}
        <div className="nav-actions-group">
          {/* Quick Music Toggle */}
          <button
            type="button"
            className={`nav-music-btn ${isPlayingMusic ? 'music-active' : ''}`}
            onClick={onToggleMusic}
            title={isPlayingMusic ? 'Pause Music' : 'Play Music'}
            aria-label="Toggle background music"
          >
            {isPlayingMusic ? (
              <>
                <Volume2 size={18} className="text-pink" />
                <span className="nav-audio-visualizer" aria-hidden="true">
                  <span className="bar bar-1" />
                  <span className="bar bar-2" />
                  <span className="bar bar-3" />
                </span>
              </>
            ) : (
              <VolumeX size={18} className="text-muted" />
            )}
          </button>

          {/* Language Switch Toggle (English / తెలుగు) */}
          <div className="language-toggle-pill" role="group" aria-label="Language selection">
            <Globe size={15} className="lang-globe-icon" />
            <button
              type="button"
              className={`lang-choice-btn ${currentLang === 'en' ? 'lang-selected' : ''}`}
              onClick={() => onToggleLang('en')}
            >
              EN
            </button>
            <span className="lang-divider">/</span>
            <button
              type="button"
              className={`lang-choice-btn ${currentLang === 'te' ? 'lang-selected' : ''}`}
              onClick={() => onToggleLang('te')}
            >
              తెలుగు
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-nav-inner">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  className="mobile-nav-link"
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.label}
                </button>
              ))}

              <div className="mobile-lang-row">
                <span className="mobile-lang-label">Language / భాష:</span>
                <div className="language-toggle-pill">
                  <button
                    type="button"
                    className={`lang-choice-btn ${currentLang === 'en' ? 'lang-selected' : ''}`}
                    onClick={() => {
                      onToggleLang('en');
                      setMobileMenuOpen(false);
                    }}
                  >
                    English
                  </button>
                  <span className="lang-divider">|</span>
                  <button
                    type="button"
                    className={`lang-choice-btn ${currentLang === 'te' ? 'lang-selected' : ''}`}
                    onClick={() => {
                      onToggleLang('te');
                      setMobileMenuOpen(false);
                    }}
                  >
                    తెలుగు
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
