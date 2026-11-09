import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Info, Play, Pause } from 'lucide-react';
import { siteContent, type Language } from '../data/content';
import { soundManager } from '../utils/soundEffects';
import { getAssetUrl } from '../utils/assets';

interface MusicPlayerProps {
  currentLang: Language;
  isPlaying: boolean;
  onToggle: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  currentLang,
  isPlaying,
  onToggle,
}) => {
  const t = siteContent.music;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasFileError, setHasFileError] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  // Sync audio playback with parent state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setHasFileError(false);
            soundManager.stopSynthesizerMelody();
          })
          .catch(() => {
            // Audio file was missing or blocked: fallback to synthesized soothing melody!
            setHasFileError(true);
            soundManager.startSynthesizerMelody();
          });
      }
    } else {
      audio.pause();
      soundManager.stopSynthesizerMelody();
    }
  }, [isPlaying]);

  const handleAudioError = () => {
    setHasFileError(true);
    if (isPlaying) {
      soundManager.startSynthesizerMelody();
    }
  };

  return (
    <div className="floating-music-widget" role="region" aria-label="Music Player">
      {/* Hidden native audio tag trying to load public/music/amma-birthday.mp3 */}
      <audio
        ref={audioRef}
        src={getAssetUrl('music/amma-birthday.mp3')}
        loop
        preload="none"
        onError={handleAudioError}
      />

      <div className="music-pill-card">
        {/* Play/Pause Button */}
        <motion.button
          type="button"
          className={`music-play-btn ${isPlaying ? 'playing' : ''}`}
          onClick={onToggle}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? <Pause size={18} fill="#ffffff" /> : <Play size={18} fill="#ffffff" />}
        </motion.button>

        {/* Music Title & Equalizer Visualizer */}
        <div className="music-info-meta" onClick={onToggle}>
          <div className="music-title-row">
            <Music size={14} className="music-icon-note" />
            <span className="music-title-text">{t.title[currentLang]}</span>
          </div>
          <span className="music-status-text">
            {isPlaying ? t.playing[currentLang] : t.paused[currentLang]}
          </span>
        </div>

        {/* Animated Visualizer Equalizer Bars */}
        <div className="music-visualizer-bars" aria-hidden="true">
          <span className={`equalizer-bar eq-1 ${isPlaying ? 'animated' : ''}`} />
          <span className={`equalizer-bar eq-2 ${isPlaying ? 'animated' : ''}`} />
          <span className={`equalizer-bar eq-3 ${isPlaying ? 'animated' : ''}`} />
          <span className={`equalizer-bar eq-4 ${isPlaying ? 'animated' : ''}`} />
        </div>

        {/* Info button for missing file helper note */}
        <button
          type="button"
          className="music-info-toggle-btn"
          onClick={() => setShowNotice(!showNotice)}
          title="Audio Info / గమనిక"
          aria-label="Audio info"
        >
          <Info size={15} />
        </button>
      </div>

      {/* Helper Notification Notice for Missing MP3 / Synthesizer Fallback */}
      <AnimatePresence>
        {(showNotice || (hasFileError && isPlaying)) && (
          <motion.div
            className="music-helper-popup"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
          >
            <p className="notice-text">{t.missingNotice[currentLang]}</p>
            <button
              type="button"
              className="notice-dismiss-btn"
              onClick={() => {
                setShowNotice(false);
                setHasFileError(false);
              }}
            >
              OK / సరే ✓
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
