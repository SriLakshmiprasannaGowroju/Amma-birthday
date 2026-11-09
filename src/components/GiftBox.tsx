import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

interface GiftBoxProps {
  onClick?: () => void;
}

export const GiftBox: React.FC<GiftBoxProps> = ({ onClick }) => {
  return (
    <div className="gift-box-wrapper" onClick={onClick} role="button" tabIndex={0} title="Click to open your surprise!">
      {/* Floating Sparkles around the box */}
      <motion.div
        className="gift-sparkle gift-sparkle-1"
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.4, 1, 0.4],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Sparkles size={22} color="#fbcfe8" />
      </motion.div>

      <motion.div
        className="gift-sparkle gift-sparkle-2"
        animate={{
          scale: [1.2, 0.7, 1.2],
          opacity: [0.8, 0.3, 0.8],
          rotate: [180, 270, 360],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          delay: 0.8,
          ease: 'easeInOut',
        }}
      >
        <Sparkles size={18} color="#d8b4fe" />
      </motion.div>

      <motion.div
        className="gift-sparkle gift-sparkle-3"
        animate={{
          scale: [0.9, 1.25, 0.9],
          opacity: [0.5, 0.95, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 1.4,
          ease: 'easeInOut',
        }}
      >
        <Heart size={16} color="#f472b6" fill="#f472b6" />
      </motion.div>

      {/* Main floating container for the box */}
      <motion.div
        className="gift-box-container"
        animate={{
          y: [-10, 10, -10],
          rotate: [-1.2, 1.2, -1.2],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{
          scale: 1.08,
          rotate: [0, -3, 3, -1, 1, 0],
          transition: { duration: 0.4 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glowing back aura */}
        <div className="gift-box-aura" />

        {/* Gift Box SVG Representation for crisp beauty at any scale */}
        <svg
          className="gift-box-svg"
          viewBox="0 0 200 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Box Body Gradient: Rich royal violet to deep plum */}
            <linearGradient id="boxBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="50%" stopColor="#7e22ce" />
              <stop offset="100%" stopColor="#4c1d95" />
            </linearGradient>

            {/* Box Lid Gradient */}
            <linearGradient id="boxLidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="60%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#581c87" />
            </linearGradient>

            {/* Ribbon Gradient: Soft golden lavender & pink sheen */}
            <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="35%" stopColor="#f472b6" />
              <stop offset="70%" stopColor="#e879f9" />
              <stop offset="100%" stopColor="#fbcfe8" />
            </linearGradient>

            {/* Bow Gradient */}
            <linearGradient id="bowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>

            {/* Subtle Inner Highlight */}
            <linearGradient id="innerSheen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.45)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>

            {/* Drop Shadow filter */}
            <filter id="giftShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#3b0764" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Ribbon Bow on top */}
          <g className="gift-bow-group">
            {/* Left Bow Loop */}
            <path
              d="M100 64 C75 25, 40 40, 58 68 C72 82, 92 72, 100 66 Z"
              fill="url(#bowGrad)"
              filter="url(#giftShadow)"
            />
            {/* Left Bow Inner Hole */}
            <path
              d="M93 64 C78 45, 60 52, 70 66 C78 72, 88 68, 93 64 Z"
              fill="#581c87"
              opacity="0.4"
            />

            {/* Right Bow Loop */}
            <path
              d="M100 64 C125 25, 160 40, 142 68 C128 82, 108 72, 100 66 Z"
              fill="url(#bowGrad)"
              filter="url(#giftShadow)"
            />
            {/* Right Bow Inner Hole */}
            <path
              d="M107 64 C122 45, 140 52, 130 66 C122 72, 112 68, 107 64 Z"
              fill="#581c87"
              opacity="0.4"
            />

            {/* Flowing Ribbon tails */}
            <path
              d="M95 68 C80 95, 65 110, 52 118 C58 110, 68 95, 90 70 Z"
              fill="url(#ribbonGrad)"
            />
            <path
              d="M105 68 C120 95, 135 110, 148 118 C142 110, 132 95, 110 70 Z"
              fill="url(#ribbonGrad)"
            />

            {/* Center Bow Knot */}
            <circle cx="100" cy="66" r="11" fill="url(#bowGrad)" />
            <circle cx="100" cy="66" r="6" fill="#fef08a" opacity="0.8" />
          </g>

          {/* Main Box Body */}
          <rect
            x="38"
            y="92"
            width="124"
            height="96"
            rx="8"
            fill="url(#boxBodyGrad)"
            filter="url(#giftShadow)"
          />

          {/* Box Body Top Sheen */}
          <rect
            x="38"
            y="92"
            width="124"
            height="20"
            rx="4"
            fill="url(#innerSheen)"
          />

          {/* Box Body Vertical Ribbon */}
          <rect
            x="88"
            y="92"
            width="24"
            height="96"
            fill="url(#ribbonGrad)"
          />
          {/* Box Body Horizontal Ribbon */}
          <rect
            x="38"
            y="132"
            width="124"
            height="18"
            fill="url(#ribbonGrad)"
          />

          {/* Box Lid */}
          <rect
            x="30"
            y="72"
            width="140"
            height="26"
            rx="6"
            fill="url(#boxLidGrad)"
            filter="url(#giftShadow)"
          />
          {/* Box Lid Highlight Sheen */}
          <rect
            x="30"
            y="72"
            width="140"
            height="8"
            rx="3"
            fill="url(#innerSheen)"
          />

          {/* Lid Ribbon (Vertical) */}
          <rect
            x="88"
            y="72"
            width="24"
            height="26"
            fill="url(#ribbonGrad)"
          />

          {/* Decorative Sparkle Accents on Box */}
          <circle cx="55" cy="115" r="2.5" fill="#fbcfe8" opacity="0.75" />
          <circle cx="145" cy="165" r="2" fill="#fef08a" opacity="0.8" />
          <circle cx="135" cy="110" r="1.5" fill="#fbcfe8" opacity="0.6" />
        </svg>

        {/* "Made with Love" subtle glowing tag */}
        <div className="gift-tag-pill">
          <span>✨ For Amma ✨</span>
        </div>
      </motion.div>

      {/* Dynamic Floor Shadow beneath the box */}
      <motion.div
        className="gift-shadow-floor"
        animate={{
          scale: [0.85, 1.15, 0.85],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

