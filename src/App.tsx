import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { CelestialBackground } from './components/CelestialBackground';
import { GiftBox } from './components/GiftBox';
import { SurpriseModal } from './components/SurpriseModal';
import { Navbar } from './components/Navbar';
import { MemoriesSection } from './components/MemoriesSection';
import { LetterSection } from './components/LetterSection';
import { SpecialSection } from './components/SpecialSection';
import { BirthdayCakeSection } from './components/BirthdayCakeSection';
import { MusicPlayer } from './components/MusicPlayer';
import { FinalSurpriseSection } from './components/FinalSurpriseSection';
import { BackToTop } from './components/BackToTop';
import { siteContent, type Language } from './data/content';
import './App.css';

function App() {
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const handleOpenSurprise = () => {
    setIsSurpriseOpen(true);
  };

  const handleCloseSurprise = () => {
    setIsSurpriseOpen(false);
  };

  const handleToggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  return (
    <div className="birthday-app-root">
      {/* Top Navigation Bar with Links, Language Toggle & Music Status */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={setCurrentLang}
        isPlayingMusic={isPlayingMusic}
        onToggleMusic={handleToggleMusic}
      />

      {/* =========================================================================
          OPENING HERO SCREEN (PRESERVED IN FULL FIDELITY)
          Magical purple theme, glowing moon, stars, floating hearts, gift box & surprise
          ========================================================================= */}
      <section id="hero" className="birthday-screen-root">
        {/* Magical Celestial Background: Glowing Moon, Twinkling Stars, Stardust & Floating Hearts */}
        <CelestialBackground />

        {/* Main First Screen Content */}
        <main className="hero-content-wrapper">
          {/* Soft Glowing Welcome Badge */}
          <motion.div
            className="wishing-pill-tag"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Sparkles size={16} className="pill-sparkle-icon" />
            <span>{siteContent.hero.tag[currentLang]}</span>
            <Heart size={14} color="#f472b6" fill="#f472b6" />
          </motion.div>

          {/* Main English Heading */}
          <motion.h1
            className="main-birthday-heading"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: 'easeOut' }}
          >
            Happy Birthday, Amma!
          </motion.h1>

          {/* Telugu Heading */}
          <motion.h2
            className="telugu-birthday-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: 'easeOut' }}
          >
            పుట్టినరోజు శుభాకాంక్షలు అమ్మ!
          </motion.h2>

          {/* Centerpiece: Beautiful Animated Gift Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.45, ease: 'easeOut' }}
          >
            <GiftBox onClick={handleOpenSurprise} />
          </motion.div>

          {/* Warm Subtitle */}
          <motion.p
            className="birthday-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          >
            To the most special person in my world{' '}
            <motion.span
              className="heart-emoji"
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              ❤️
            </motion.span>
          </motion.p>

          {/* Surprise Action Button */}
          <motion.button
            type="button"
            className="surprise-trigger-button"
            onClick={handleOpenSurprise}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75, ease: 'easeOut' }}
            whileHover={{
              scale: 1.06,
              boxShadow: '0 8px 35px rgba(236, 72, 153, 0.6), 0 0 35px rgba(168, 85, 247, 0.7)',
            }}
            whileTap={{ scale: 0.96 }}
          >
            <div className="button-inner-sheen" />
            <span>Open Your Surprise ✨</span>
            <Sparkles size={18} className="btn-icon-sparkle" />
          </motion.button>
        </main>
      </section>

      {/* =========================================================================
          SECTION 1: AMMA'S BEAUTIFUL MEMORIES
          ========================================================================= */}
      <MemoriesSection currentLang={currentLang} />

      {/* =========================================================================
          SECTION 2: A LETTER FOR AMMA (ENGLISH & TELUGU)
          ========================================================================= */}
      <LetterSection currentLang={currentLang} />

      {/* =========================================================================
          SECTION 3: WHY YOU ARE SPECIAL (6 ANIMATED CARDS)
          ========================================================================= */}
      <SpecialSection currentLang={currentLang} />

      {/* =========================================================================
          SECTION 4: INTERACTIVE BIRTHDAY CAKE & MAKE A WISH
          ========================================================================= */}
      <BirthdayCakeSection currentLang={currentLang} />

      {/* =========================================================================
          SECTION 6: FINAL CINEMATIC SURPRISE
          ========================================================================= */}
      <FinalSurpriseSection currentLang={currentLang} />

      {/* =========================================================================
          SECTION 5: BACKGROUND MUSIC PLAYER WIDGET
          ========================================================================= */}
      <MusicPlayer
        currentLang={currentLang}
        isPlaying={isPlayingMusic}
        onToggle={handleToggleMusic}
      />

      {/* Floating Back to Top Button */}
      <BackToTop currentLang={currentLang} />

      {/* Surprise Message Modal Dialog */}
      <SurpriseModal
        isOpen={isSurpriseOpen}
        onClose={handleCloseSurprise}
      />
    </div>
  );
}

export default App;
