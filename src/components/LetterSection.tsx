import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Mail, MailOpen } from 'lucide-react';
import { siteContent, type Language } from '../data/content';

interface LetterSectionProps {
  currentLang: Language;
}

export const LetterSection: React.FC<LetterSectionProps> = ({ currentLang }) => {
  const t = siteContent.letter;
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id="letter" className="birthday-section letter-section">
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
            <Mail size={16} className="badge-sparkle" />
            <span>From the Depths of My Heart</span>
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

        {/* Envelope & Parchment Letter Container */}
        <div className="letter-wrapper">
          {/* Envelope Header Toggle */}
          <div className="envelope-toggle-bar">
            <button
              type="button"
              className="envelope-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <>
                  <MailOpen size={18} className="text-pink" />
                  <span>Fold Letter / మడవండి</span>
                </>
              ) : (
                <>
                  <Mail size={18} className="text-pink" />
                  <span>Open Letter / లేఖ తెరవండి ✉️</span>
                </>
              )}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="letter-scroll-paper"
                initial={{ opacity: 0, y: 30, scaleY: 0.85 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: 20, scaleY: 0.9 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {/* Decorative Golden Wax Seal */}
                <div className="wax-seal-badge">
                  <div className="seal-circle">
                    <Heart size={20} fill="#fef08a" color="#fef08a" />
                  </div>
                  <span className="seal-caption">{t.sealText[currentLang]}</span>
                </div>

                {/* Sparkling decorative header */}
                <div className="letter-inner-header">
                  <Sparkles size={20} className="letter-sparkle" />
                  <span className="letter-top-flourish">~ 🌸 ~</span>
                  <Sparkles size={20} className="letter-sparkle" />
                </div>

                {/* English Letter Body */}
                <div className="letter-language-block english-block">
                  <div className="lang-watermark">English</div>
                  <h3 className="letter-salutation">{t.englishLetter[0]}</h3>
                  <div className="letter-paragraphs">
                    {t.englishLetter.slice(1, -2).map((para, idx) => (
                      <p key={idx} className="letter-paragraph">
                        {para}
                      </p>
                    ))}
                  </div>
                  <div className="letter-closing">
                    <p className="letter-love-line">{t.englishLetter[t.englishLetter.length - 2]}</p>
                    <p className="letter-birthday-cheer">{t.englishLetter[t.englishLetter.length - 1]}</p>
                  </div>
                </div>

                {/* Elegant Golden Divider */}
                <div className="letter-separator-line">
                  <div className="divider-line" />
                  <Heart size={18} fill="#f472b6" color="#f472b6" className="divider-heart" />
                  <div className="divider-line" />
                </div>

                {/* Telugu Letter Translation Block */}
                <div className="letter-language-block telugu-block">
                  <div className="lang-watermark">తెలుగు అనువాదం</div>
                  <h3 className="letter-salutation telugu-font">{t.teluguLetter[0]}</h3>
                  <div className="letter-paragraphs">
                    {t.teluguLetter.slice(1, -2).map((para, idx) => (
                      <p key={idx} className="letter-paragraph telugu-font">
                        {para}
                      </p>
                    ))}
                  </div>
                  <div className="letter-closing">
                    <p className="letter-love-line telugu-font">{t.teluguLetter[t.teluguLetter.length - 2]}</p>
                    <p className="letter-birthday-cheer telugu-font">{t.teluguLetter[t.teluguLetter.length - 1]}</p>
                  </div>
                </div>

                {/* Letter Signature */}
                <div className="letter-signature-box">
                  <p className="signature-text">{t.signature[currentLang]}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
