import React, { useState, useEffect } from 'react';
import { Sparkles, Truck, ShieldCheck, Tag } from 'lucide-react';

export const AnnouncementBar = () => {
  const messages = [
    {
      icon: <Truck size={14} className="text-amber-300" />,
      text: 'FREE SHIPPING on all Ayurvedic orders over ₹499 across India'
    },
    {
      icon: <Tag size={14} className="text-amber-300" />,
      text: 'Use code AYUR10 at checkout for an extra 10% OFF your first order'
    },
    {
      icon: <ShieldCheck size={14} className="text-amber-300" />,
      text: '100% Certified Vedic Formulations • Directly Sourced Fresh Herbs'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % messages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <div className="announcement-bar py-2 px-4 bg-primary-dark text-white text-xs font-medium border-b border-primary-light">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Support Pill (Left) */}
        <div className="hidden md:flex items-center gap-2 text-primary-cream/80">
          <Sparkles size={13} className="text-gold-light" />
          <span>Pure Ayurvedic Rasayana Heritage</span>
        </div>

        {/* Central Rotating Message */}
        <div className="flex-1 flex items-center justify-center gap-2 text-center overflow-hidden">
          <span className="inline-flex items-center gap-2 transition-all duration-500 ease-in-out text-gold-cream">
            {messages[currentIndex].icon}
            <span>{messages[currentIndex].text}</span>
          </span>
        </div>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-4 text-xs text-primary-cream/80">
          <span className="hover:text-gold-light transition cursor-pointer">Ayurvedic Doctor Consultation</span>
          <span className="text-primary-cream/30">|</span>
          <span className="font-semibold text-gold-light tracking-wide">COD Available</span>
        </div>
      </div>
    </div>
  );
};
