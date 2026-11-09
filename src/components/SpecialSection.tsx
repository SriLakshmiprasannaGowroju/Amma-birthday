import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Smile,
  Flower2,
  HeartHandshake,
  Sparkles,
  HandHeart,
} from 'lucide-react';
import { siteContent, type Language, type SpecialReason } from '../data/content';

interface SpecialSectionProps {
  currentLang: Language;
}

export const SpecialSection: React.FC<SpecialSectionProps> = ({ currentLang }) => {
  const t = siteContent.special;

  // Icon mapper for dynamic icon rendering
  const renderCardIcon = (iconName: string, color: string) => {
    const props = { size: 30, color: color, strokeWidth: 1.8 };
    switch (iconName) {
      case 'Heart':
        return <Heart {...props} fill={color} />;
      case 'Smile':
        return <Smile {...props} />;
      case 'Flower2':
        return <Flower2 {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'HandHeart':
        return <HandHeart {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="special" className="birthday-section special-section">
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
            <Sparkles size={16} className="badge-sparkle" />
            <span>Cherished Qualities</span>
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

        {/* Six Cards Grid */}
        <div className="special-cards-grid">
          {t.cards.map((card: SpecialReason, idx: number) => (
            <motion.div
              key={card.id}
              className="special-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: `0 15px 35px rgba(168, 85, 247, 0.3), 0 0 25px ${card.accentColor}40`,
                transition: { duration: 0.25 },
              }}
            >
              {/* Corner Badge */}
              <div className="card-top-row">
                <div
                  className="card-icon-pill"
                  style={{
                    backgroundColor: `${card.accentColor}20`,
                    borderColor: `${card.accentColor}50`,
                  }}
                >
                  {renderCardIcon(card.iconName, card.accentColor)}
                </div>
                <span className="card-num-badge">{card.badge}</span>
              </div>

              {/* Title & Description */}
              <h3 className="special-card-title">{card.title[currentLang]}</h3>
              <p className="special-card-description">{card.description[currentLang]}</p>

              {/* Card bottom glow bar */}
              <div
                className="card-bottom-glow-bar"
                style={{
                  background: `linear-gradient(90deg, ${card.accentColor}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
