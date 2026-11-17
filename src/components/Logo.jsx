import React from 'react';
import { Link } from 'react-router-dom';
import brandLogoImg from '../assets/logo.png';

export const Logo = ({ variant = 'default', light = false }) => {
  const primaryTextColor = light ? '#FFFFFF' : '#153C27';
  const accentColor = light ? '#E8C568' : '#C59A3F';

  return (
    <Link to="/" className="inline-flex items-center gap-2 sm:gap-2.5 text-decoration-none group brand-logo">
      {/* Official Shatavari Ayurvedic Leaf + Medical Cross Emblem */}
      <div className={`logo-icon-wrapper flex-shrink-0 rounded-full overflow-hidden flex items-center justify-center p-0.5 border ${light ? 'border-[#C59A3F] bg-white/10' : 'border-[#C59A3F] bg-white'} shadow-xs`}>
        <img
          src={brandLogoImg}
          alt="Shatavari Ayurvedic Official Emblem"
          className={variant === 'large' ? 'w-10 h-10 sm:w-12 sm:h-12 object-contain' : 'w-7 h-7 sm:w-9 sm:h-9 object-contain'}
        />
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
