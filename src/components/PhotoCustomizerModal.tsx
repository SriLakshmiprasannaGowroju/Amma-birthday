import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, RotateCcw, Check, Sparkles } from 'lucide-react';
import { siteContent, type Language, type MemoryItem } from '../data/content';

interface PhotoCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  customMemories: MemoryItem[];
  onSaveMemories: (updated: MemoryItem[]) => void;
  onResetMemories: () => void;
}

export const PhotoCustomizerModal: React.FC<PhotoCustomizerModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  customMemories,
  onSaveMemories,
  onResetMemories,
}) => {
  const [items, setItems] = useState<MemoryItem[]>(customMemories);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [savedAlert, setSavedAlert] = useState(false);

  // Sync state if props change when opening
  React.useEffect(() => {
    setItems(customMemories);
  }, [customMemories, isOpen]);

  const handleImageFileChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        const updated = [...items];
        updated[index] = {
          ...updated[index],
          image: reader.result,
        };
        setItems(updated);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleTitleChange = (index: number, value: string) => {
    const updated = [...items];
    updated[index] = {
      ...updated[index],
      title: {
        ...updated[index].title,
        [currentLang]: value,
      },
    };
    setItems(updated);
  };

  const handleCaptionChange = (index: number, value: string) => {
    const updated = [...items];
    updated[index] = {
      ...updated[index],
      caption: {
        ...updated[index].caption,
        [currentLang]: value,
      },
    };
    setItems(updated);
  };

  const handleSave = () => {
    onSaveMemories(items);
    setSavedAlert(true);
    setTimeout(() => {
      setSavedAlert(false);
      onClose();
    }, 900);
  };

  const handleReset = () => {
    onResetMemories();
    setItems(siteContent.memories.items);
    setSavedAlert(true);
    setTimeout(() => {
      setSavedAlert(false);
      onClose();
    }, 900);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="customizer-portal" role="dialog" aria-modal="true">
          <motion.div
            className="customizer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <div className="customizer-dialog-wrapper">
            <motion.div
              className="customizer-modal-card"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Close Button */}
              <button
                type="button"
                className="customizer-close-btn"
                onClick={onClose}
                aria-label="Close customizer"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="customizer-header">
                <div className="customizer-badge">
                  <Sparkles size={16} className="badge-sparkle" />
                  <span>
                    {currentLang === 'te'
                      ? 'ఫోటోల కస్టమైజర్'
                      : 'Photo Customizer'}
                  </span>
                </div>
                <h3 className="customizer-title">
                  {currentLang === 'te'
                    ? 'అమ్మ ఫోటోలను మార్చుకోండి'
                    : 'Personalize Amma’s Photos'}
                </h3>
                <p className="customizer-subtitle">
                  {currentLang === 'te'
                    ? 'మీ స్వంత ఫోటోలను నేరుగా మీ డివైస్ నుండి అప్‌లోడ్ చేయండి.'
                    : 'Easily upload photos from your device & update captions without writing code.'}
                </p>
              </div>

              {/* Memory Slot Tabs */}
              <div className="customizer-slot-tabs" role="tablist">
                {items.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === idx}
                    className={`customizer-slot-tab ${activeTab === idx ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab(idx)}
                  >
                    Slot {idx + 1}
                  </button>
                ))}
              </div>

              {/* Active Tab Editor */}
              {items[activeTab] && (
                <div className="customizer-editor-body">
                  <div className="customizer-preview-col">
                    <div className="customizer-preview-box">
                      <img
                        src={items[activeTab].image}
                        alt="Preview"
                        className="customizer-preview-img"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/images/memory-1.svg';
                        }}
                      />
                    </div>
                    <label className="customizer-upload-label">
                      <Upload size={16} />
                      <span>
                        {currentLang === 'te'
                          ? 'ఫోటో ఎంచుకోండి 📁'
                          : 'Upload New Photo 📁'}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden-file-input"
                        onChange={(e) => handleImageFileChange(activeTab, e)}
                      />
                    </label>
                  </div>

                  <div className="customizer-fields-col">
                    <div className="customizer-field-group">
                      <label className="field-label">
                        {currentLang === 'te' ? 'శీర్షిక (Title)' : 'Photo Title'}
                      </label>
                      <input
                        type="text"
                        className="customizer-input"
                        value={items[activeTab].title[currentLang]}
                        onChange={(e) => handleTitleChange(activeTab, e.target.value)}
                        placeholder="e.g. Beautiful Moments"
                      />
                    </div>

                    <div className="customizer-field-group">
                      <label className="field-label">
                        {currentLang === 'te' ? 'వివరణ (Caption)' : 'Photo Caption'}
                      </label>
                      <textarea
                        className="customizer-textarea"
                        rows={3}
                        value={items[activeTab].caption[currentLang]}
                        onChange={(e) => handleCaptionChange(activeTab, e.target.value)}
                        placeholder="Write a sweet memory or note..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons Toolbar */}
              <div className="customizer-footer-toolbar">
                <button
                  type="button"
                  className="customizer-reset-btn"
                  onClick={handleReset}
                  title="Reset to default photos"
                >
                  <RotateCcw size={16} />
                  <span>{currentLang === 'te' ? 'రీసెట్' : 'Reset to Defaults'}</span>
                </button>

                <div className="footer-right-actions">
                  <button
                    type="button"
                    className="customizer-save-btn"
                    onClick={handleSave}
                  >
                    {savedAlert ? (
                      <>
                        <Check size={18} />
                        <span>{currentLang === 'te' ? 'సేవ్ అయింది! ✓' : 'Saved! ✓'}</span>
                      </>
                    ) : (
                      <>
                        <Sparkles size={18} />
                        <span>{currentLang === 'te' ? 'మార్పులను సేవ్ చేయండి' : 'Save Changes ✨'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

