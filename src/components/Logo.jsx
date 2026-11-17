import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = ({ variant = 'default', light = false }) => {
  const primaryTextColor = light ? '#FFFFFF' : '#153C27';
  const accentColor = light ? '#E8C568' : '#C59A3F';

  return (
    <Link to="/" className="inline-flex items-center gap-2 sm:gap-2.5 text-decoration-none group brand-logo">
      {/* Herbal Leaf / Vedic Seed Emblem SVG */}
      <div className="logo-icon-wrapper flex-shrink-0">
        <svg
          viewBox="0 0 44 44"
          className={variant === 'large' ? 'w-10 h-10 sm:w-12 sm:h-12' : 'w-7 h-7 sm:w-9 sm:h-9'}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="22" cy="22" r="21" fill={light ? 'rgba(255,255,255,0.1)' : '#EBF3ED'} stroke={accentColor} strokeWidth="1.5" />
          {/* Twin Leaves */}
          <path
            d="M 22 7 C 28 14 31 23 23 31 C 15 23 18 14 22 7 Z"
            fill={accentColor}
            opacity="0.95"
          />
          <path
            d="M 22 14 C 15 19 12 28 19 34 C 25 28 27 19 22 14 Z"
            fill={primaryTextColor}
            opacity="0.85"
          />
          {/* Center Vein */}
          <line x1="22" y1="10" x2="22" y2="33" stroke={light ? '#153C27' : '#FFFFFF'} strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="22" cy="35" r="2" fill={accentColor} />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`brand-name font-bold tracking-wider ${
            variant === 'large'
              ? 'text-xl sm:text-2xl'
              : 'text-sm sm:text-lg'
          }`}
          style={{
            fontFamily: "'Playfair Display', serif",
            color: primaryTextColor,
            letterSpacing: '0.1em',
            lineHeight: 1.1
          }}
        >
          SHATAVARI
        </span>
        <span
          className="brand-tagline uppercase font-semibold tracking-widest text-[9px] sm:text-[10px]"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: accentColor,
            letterSpacing: '0.22em',
            lineHeight: 1.1
          }}
        >
          AYURVEDIC
        </span>
      </div>
    </Link>
  );
};
