import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { siteContent, type Language, type MemoryItem } from '../data/content';
import { getAssetUrl } from '../utils/assets';

interface MemoriesSectionProps {
  currentLang: Language;
}

export const MemoriesSection: React.FC<MemoriesSectionProps> = ({ currentLang }) => {
  const t = siteContent.memories;
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) =>
          prev !== null ? (prev + 1) % t.items.length : null
        );
      }
      if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) =>
          prev !== null ? (prev - 1 + t.items.length) % t.items.length : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, t.items.length]);

  const activeItem: MemoryItem | null =
    activePhotoIndex !== null ? t.items[activePhotoIndex] : null;

  return (
    <section id="memories" className="birthday-section memories-section">
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
            <span>Memories & Moments</span>
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

        {/* Responsive Gallery Grid */}
        <div className="memories-grid">
          {t.items.map((item, index) => (
            <motion.div
              key={item.id}
              className="memory-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
              onClick={() => setActivePhotoIndex(index)}
            >
              {/* Card Image Container with glowing overlay on hover */}
              <div className="memory-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title[currentLang]}
                  className="memory-image"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    if (img.src.endsWith('.jpeg')) {
                      img.src = img.src.replace('.jpeg', '.jpg');
                    } else if (img.src.endsWith('.jpg')) {
                      img.src = img.src.replace('.jpg', '.png');
                    } else if (!img.src.includes('memory-')) {
                      img.src = getAssetUrl(`images/memory-${item.id}.svg`);
                    }
                  }}
                />
                <div className="memory-image-overlay">
                  <span className="overlay-tag">{item.tag[currentLang]}</span>
                  <span className="overlay-click-hint">Click to Enlarge 🔍</span>
                </div>
              </div>

              {/* Card Caption Info */}
              <div className="memory-card-body">
                <h3 className="memory-item-title">{item.title[currentLang]}</h3>
                <p className="memory-item-caption">{item.caption[currentLang]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="lightbox-portal" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <motion.div
              className="lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhotoIndex(null)}
            />

            {/* Lightbox Dialog Container */}
            <div className="lightbox-dialog">
              <motion.div
                className="lightbox-card"
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 320 }}
              >
                {/* Close Button */}
                <button
                  type="button"
                  className="lightbox-close-btn"
                  onClick={() => setActivePhotoIndex(null)}
                  aria-label="Close photo preview"
                >
                  <X size={22} />
                </button>

                {/* Left / Right Nav Buttons */}
                <button
                  type="button"
                  className="lightbox-nav-btn btn-prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIndex((prev) =>
                      prev !== null ? (prev - 1 + t.items.length) % t.items.length : null
                    );
                  }}
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={28} />
                </button>

                <button
                  type="button"
                  className="lightbox-nav-btn btn-next"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIndex((prev) =>
                      prev !== null ? (prev + 1) % t.items.length : null
                    );
                  }}
                  aria-label="Next photo"
                >
                  <ChevronRight size={28} />
                </button>

                {/* Lightbox Main Image */}
                <div className="lightbox-image-container">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title[currentLang]}
                    className="lightbox-main-img"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      if (img.src.endsWith('.jpeg')) {
                        img.src = img.src.replace('.jpeg', '.jpg');
                      } else if (img.src.endsWith('.jpg')) {
                        img.src = img.src.replace('.jpg', '.png');
                      } else if (!img.src.includes('memory-')) {
                        img.src = getAssetUrl(`images/memory-${activeItem.id}.svg`);
                      }
                    }}
                  />
                </div>

                {/* Lightbox Details */}
                <div className="lightbox-details">
                  <div className="lightbox-tag-pill">
                    <Heart size={14} fill="#ec4899" color="#ec4899" />
                    <span>{activeItem.tag[currentLang]}</span>
                  </div>
                  <h3 className="lightbox-photo-title">{activeItem.title[currentLang]}</h3>
                  <p className="lightbox-photo-caption">{activeItem.caption[currentLang]}</p>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
