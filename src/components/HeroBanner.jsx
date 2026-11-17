import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Award,
  Leaf,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Compass,
  X
} from 'lucide-react';

// Transparent Cutout PNGs (NO BACKGROUND)
import productRasayanaPng from '../assets/banners/product-rasayana-transparent.png';
import productSkincarePng from '../assets/banners/product-skincare-transparent.png';
import productJuicesPng from '../assets/banners/product-juices-transparent.png';
import productHaircarePng from '../assets/banners/product-haircare-transparent.png';

export const HeroBanner = () => {
  const slides = [
    {
      id: 'slide-rasayana',
      tag: 'Authentic Vedic Formulations',
      offer: 'Up to 25% OFF • Flat 10% on 1st Order',
      tagIcon: <Sparkles size={13} className="text-[#C59A3F]" />,
      headingPrefix: 'Discover the Power of',
      headingAccent: 'Ayurveda',
      description:
        'Handcrafted with pure botanical extracts, time-honored Vedic recipes, and modern purity standards.',
      primaryBtnText: 'Shop Now',
      primaryBtnLink: '/products',
      secondaryBtnText: 'Explore Rituals',
      ritualTitle: 'Daily Rasayana Dinacharya',
      ritualSteps: [
        'Morning: Mix 1 teaspoon with a cup of warm milk or water on an empty stomach.',
        'Action: Nourishes Ojas (vital energy) and balances Pitta & Vata doshas naturally.',
        'Evening: Repeat before bedtime to support restorative cellular rejuvenation.'
      ],
      image: productRasayanaPng,
      imageAlt: 'Shatavari Ayurvedic Pure Amber Glass Packaging',
      floatingBadge: {
        title: 'Rasayana Potency',
        subtitle: '100% Wild Crafted'
      },
      badgeRating: '★ 4.9',
      badgeTitle: 'Trusted by 25,000+',
      badgeSubtitle: 'Vedic Wellness Enthusiasts',
      bgGradient: 'from-[#FAF7F2] via-[#F4ECE1] to-[#EAE0CF]',
      accentGradient: 'from-[#8C5E1A] via-[#9E6D18] to-[#6E460E]'
    },
    {
      id: 'slide-skincare',
      tag: 'Royal 26-Herb Vedic Elixir',
      offer: 'Flat 25% OFF • Kashmiri Saffron & Chandan',
      tagIcon: <Sparkles size={13} className="text-[#D4AF37]" />,
      headingPrefix: 'Sacred Radiance with Pure',
      headingAccent: 'Kumkumadi Tailam',
      description:
        'Royal 26-herb formulation slow-simmered for 72 continuous hours to illuminate blemishes and restore natural golden skin.',
      primaryBtnText: 'Explore Skincare',
      primaryBtnLink: '/products?category=natural-skincare',
      secondaryBtnText: 'Explore Rituals',
      ritualTitle: 'Kumkumadi Night Glow Ritual',
      ritualSteps: [
        'Cleanse face thoroughly with Neem & Tulsi face wash.',
        'Mist with pure rosewater and leave face slightly damp.',
        'Apply 3-4 golden drops of Kumkumadi Tailam, massaging upwards for 2 minutes before bed.'
      ],
      image: productSkincarePng,
      imageAlt: 'Amber Glass Kumkumadi Dropper Bottle and Night Cream Jar',
      floatingBadge: {
        title: '26-Herb Formula',
        subtitle: '72hr Slow Simmer'
      },
      badgeRating: '★ 5.0',
      badgeTitle: 'Kashmiri Saffron',
      badgeSubtitle: 'Deep Dermal Illuminating Elixir',
      bgGradient: 'from-[#FAF7F2] via-[#FBF0E1] to-[#F5E2C9]',
      accentGradient: 'from-[#9A460F] via-[#B85817] to-[#783007]'
    },
    {
      id: 'slide-juices',
      tag: '100% Wild Crafted Botanical Juices',
      offer: 'Buy 2 Get 1 Free • Zero Added Sugar',
      tagIcon: <Droplets size={13} className="text-[#3A6B25]" />,
      headingPrefix: 'Revitalize with Cold-Pressed',
      headingAccent: 'Herbal Juices',
      description:
        'Fresh cold-pressed juices extracted from wild-harvested botanicals without added water or artificial sugar.',
      primaryBtnText: 'Shop Herbal Juices',
      primaryBtnLink: '/products?category=herbal-juices',
      secondaryBtnText: 'Explore Rituals',
      ritualTitle: 'Morning Gut Detox Protocol',
      ritualSteps: [
        'Dilute 20-30ml of juice in a full glass of lukewarm water.',
        'Drink first thing in the morning 30 minutes before breakfast.',
        'Flushes metabolic Ama toxins and stimulates healthy digestive Agni.'
      ],
      image: productJuicesPng,
      imageAlt: 'Pure Cold-Pressed Ayurvedic Herbal Juices in Amber Glass',
      floatingBadge: {
        title: 'Zero Added Water',
        subtitle: 'Cold-Macerated'
      },
      badgeRating: '100%',
      badgeTitle: 'Cold Macerated',
      badgeSubtitle: 'Zero Added Water or Sugar',
      bgGradient: 'from-[#FAF8F2] via-[#EFF5E4] to-[#DFEDCC]',
      accentGradient: 'from-[#2D5A1A] via-[#3F7C25] to-[#1E3F10]'
    },
    {
      id: 'slide-haircare',
      tag: 'Kshirpak Vidhi Hair Regimen',
      offer: 'Flat 23% OFF • Curb Hair Fall in 4 Weeks',
      tagIcon: <Leaf size={13} className="text-[#153C27]" />,
      headingPrefix: 'Transform Scalp & Roots with',
      headingAccent: 'Bhringraj',
      description:
        'Intensive scalp and root therapy enriched with Bhringraj and Brahmi to nourish follicles naturally.',
      primaryBtnText: 'Shop Hair Care',
      primaryBtnLink: '/products?category=hair-care',
      secondaryBtnText: 'Explore Rituals',
      ritualTitle: 'Classical Champi Scalp Therapy',
      ritualSteps: [
        'Warm 10-15ml of Bhringraj Oil slightly between palms.',
        'Part hair in sections and massage gently into scalp for 10 minutes.',
        'Leave on for 2 hours or overnight, then wash with sulfate-free shampoo.'
      ],
      image: productHaircarePng,
      imageAlt: 'Pure Bhringraj and Brahmi Hair Oil Amber Glass Bottle',
      floatingBadge: {
        title: 'Anti-Hairfall',
        subtitle: 'Kshirpak Vidhi'
      },
      badgeRating: '94%',
      badgeTitle: 'Reduced Hairfall',
      badgeSubtitle: 'Visible Results in 4-6 Weeks',
      bgGradient: 'from-[#FAF7F2] via-[#EDF5EE] to-[#DDECDD]',
      accentGradient: 'from-[#153C27] via-[#245D39] to-[#0D2819]'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [ritualModalOpen, setRitualModalOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-scroll every 3 seconds as requested
  useEffect(() => {
    if (ritualModalOpen) return;

    const timer = setInterval(() => {
      setCurrentSlide((curr) => (curr + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [ritualModalOpen, slides.length]);

  const selectSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    selectSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    selectSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const current = slides[currentSlide];

  return (
    <section className="relative w-full max-w-full overflow-hidden bg-[#FAF7F2] pt-2.5 sm:pt-6 pb-4 sm:pb-8 border-b border-[#E8DEC9]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* MOBILE APP-STYLE BANNER CARD (Visible on Mobile < md)     */}
        {/* Matches Flipkart / Myntra / Amazon e-commerce card banner */}
        {/* ======================================================== */}
        <div
          className="md:hidden relative w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Rounded Promotional Card Container */}
          <div
            key={`mobile-${current.id}`}
            className={`relative w-full h-[195px] sm:h-[220px] rounded-2xl overflow-hidden shadow-lg border-2 border-[#C59A3F] ring-2 ring-[#C59A3F]/20 bg-gradient-to-r ${current.bgGradient} p-3.5 flex items-center justify-between animate-fadeIn transition-all duration-500`}
          >
            {/* Inset Decorative Gold Border */}
            <div className="absolute inset-1.5 rounded-[12px] border border-[#C59A3F]/35 pointer-events-none" />

            {/* Traditional Ornamental Corner Accents (Matching user's screenshot) */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C59A3F] rounded-tl pointer-events-none" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C59A3F] rounded-tr pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C59A3F] rounded-bl pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C59A3F] rounded-br pointer-events-none" />

            {/* Left 62% Content Column */}
            <div className="w-[62%] z-10 flex flex-col justify-between h-full pr-1">
              <div>
                {/* Top Badge */}
                <span className="inline-flex items-center gap-1 text-[9px] uppercase font-bold text-[#8C6216] tracking-wider mb-1 line-clamp-1">
                  {current.tagIcon}
                  <span>{current.tag}</span>
                </span>

                {/* Main Heading */}
                <h2
                  className="text-sm font-bold text-[#153C27] leading-tight line-clamp-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {current.headingPrefix}{' '}
                  <span className="text-[#93520E] italic font-serif">
                    {current.headingAccent}
                  </span>
                </h2>

                {/* Offer Pill (e-commerce special) */}
                <div className="mt-1.5 inline-block">
                  <span className="px-2 py-0.5 rounded-md bg-[#153C27]/10 text-[#153C27] text-[10px] font-bold tracking-tight line-clamp-1 border border-[#153C27]/15">
                    {current.offer}
                  </span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-2 flex items-center gap-2">
                <Link
                  to={current.primaryBtnLink}
                  className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#153C27] text-[#ECC468] text-[11px] font-bold shadow-xs active:scale-95 transition"
                >
                  <span>Shop</span>
                  <ArrowRight size={12} />
                </Link>

                <button
                  type="button"
                  onClick={() => setRitualModalOpen(true)}
                  className="px-2.5 py-1.5 rounded-full bg-white/90 text-[#153C27] text-[10px] font-semibold border border-[#D9CDB8] shadow-2xs"
                >
                  Ritual
                </button>
              </div>
            </div>

            {/* Right 38% Studio Packshot Bottle Area */}
            <div className="w-[38%] h-full flex items-center justify-center relative">
              {/* Soft gold backlight glow */}
              <div className="absolute inset-0 bg-[#C59A3F]/20 rounded-full filter blur-xl transform scale-75 pointer-events-none" />
              
              <img
                src={current.image}
                alt={current.imageAlt}
                className="w-auto h-full max-h-[170px] sm:max-h-[195px] object-contain drop-shadow-xl relative z-10 transform scale-105"
              />

              {/* Quality Rating Badge */}
              <div className="absolute bottom-1 right-0 z-20 bg-white/95 backdrop-blur-md px-1.5 py-0.5 rounded-lg border border-[#E0D5C1] shadow-xs text-[9px] font-bold text-[#153C27]">
                {current.badgeRating}
              </div>
            </div>
          </div>

          {/* Clean App-Style Indicators (Directly below card, matches user's screenshot) */}
          <div className="flex items-center justify-center gap-1.5 mt-2.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => selectSlide(idx)}
                className={`transition-all duration-300 ${
                  currentSlide === idx
                    ? 'w-7 h-1 bg-[#153C27] rounded-full'
                    : 'w-2 h-1 bg-[#D5C9B4] hover:bg-[#A3927B] rounded-full'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP / TABLET HERO SHOWCASE (Visible on md: & above)    */}
        {/* ======================================================== */}
        <div className="hidden md:block relative">
          {/* Desktop 2-Column Layout (Properly proportioned luxury banner for laptop & desktop) */}
          <div
            key={`desktop-${current.id}`}
            className={`relative rounded-3xl p-8 lg:px-12 lg:py-10 min-h-[440px] lg:min-h-[460px] bg-gradient-to-r ${current.bgGradient} grid grid-cols-12 gap-8 items-center shadow-sm overflow-hidden animate-fadeIn`}
          >
            {/* Left 7 Cols */}
            <div className="col-span-7 space-y-4 lg:space-y-5 z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-[#D4C3A6] text-xs font-semibold text-[#153C27] tracking-wider uppercase shadow-xs">
                {current.tagIcon}
                <span>{current.tag}</span>
              </div>

              <h1
                className="text-3xl lg:text-5xl font-bold text-[#153C27] tracking-tight leading-[1.15]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {current.headingPrefix}{' '}
                <span className="text-[#93520E] italic font-serif">
                  {current.headingAccent}
                </span>
              </h1>

              <p className="text-sm lg:text-base text-[#556357] max-w-lg leading-relaxed">
                {current.description}
              </p>

              <div className="pt-2 flex items-center gap-3">
                <Link
                  to={current.primaryBtnLink}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#153C27] hover:bg-[#1E5437] text-white font-semibold text-xs tracking-wider shadow-md shadow-[#153C27]/20 transition active:scale-95"
                >
                  <span>{current.primaryBtnText}</span>
                  <ArrowRight size={15} />
                </Link>

                <button
                  type="button"
                  onClick={() => setRitualModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#FAF8F5] text-[#153C27] border border-[#C59A3F]/50 font-semibold text-xs tracking-wider shadow-xs transition active:scale-95"
                >
                  <Compass size={15} className="text-[#C59A3F]" />
                  <span>{current.secondaryBtnText}</span>
                </button>
              </div>

              <div className="pt-4 border-t border-[#DFD3BE] grid grid-cols-3 gap-3 max-w-md">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#153C27]" />
                  <div className="text-[11px] font-bold text-[#153C27]">100% Herbal</div>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-[#153C27]" />
                  <div className="text-[11px] font-bold text-[#153C27]">GMP Certified</div>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf size={16} className="text-[#153C27]" />
                  <div className="text-[11px] font-bold text-[#153C27]">Wild Harvested</div>
                </div>
              </div>
            </div>

            {/* Right 5 Cols */}
            <div className="col-span-5 flex items-center justify-center relative h-full">
              <div className="relative flex items-center justify-center w-full py-2">
                <div className="absolute inset-0 bg-[#C59A3F]/15 rounded-full filter blur-2xl transform scale-75 pointer-events-none" />
                
                <img
                  src={current.image}
                  alt={current.imageAlt}
                  className="w-auto max-h-[300px] lg:max-h-[340px] object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 relative z-10"
                />

                {/* Floating Trust Badge: Safely positioned inside the card */}
                <div className="absolute bottom-1 left-0 lg:left-2 bg-white/95 backdrop-blur-md border border-[#E5DAC6] py-1.5 px-3 rounded-2xl shadow-md z-20 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#153C27] text-[#C59A3F] flex items-center justify-center font-bold text-[11px]">
                    {current.badgeRating}
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-[#153C27]">{current.badgeTitle}</div>
                    <div className="text-[9px] text-[#697B6B]">{current.badgeSubtitle}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Slider Indicators */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => selectSlide(idx)}
                className={`transition-all duration-300 ${
                  currentSlide === idx
                    ? 'w-8 h-1.5 bg-[#153C27] rounded-full'
                    : 'w-2.5 h-1.5 bg-[#D5C9B4] hover:bg-[#A3927B] rounded-full'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Ayurvedic Ritual Modal */}
      {ritualModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#FAF7F2] rounded-3xl p-5 sm:p-7 max-w-lg w-full border border-[#D9CBB5] shadow-2xl relative space-y-3.5 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setRitualModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C59A3F]">
              <Compass size={14} />
              <span>Vedic Dinacharya Protocol</span>
            </div>

            <h3
              className="text-xl sm:text-2xl font-bold text-[#153C27]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {current.ritualTitle}
            </h3>

            <p className="text-xs text-[#637465] leading-relaxed">
              According to the classical Charaka Samhita, herbal medicine achieves peak efficacy when aligned with your daily bio-rhythms:
            </p>

            <div className="space-y-2 pt-1">
              {current.ritualSteps.map((step, idx) => (
                <div key={idx} className="p-2.5 bg-white rounded-xl border border-[#EAE0CF] flex items-start gap-2.5 shadow-2xs">
                  <div className="w-5 h-5 rounded-full bg-[#153C27] text-[#ECC468] font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-xs text-[#2A3B2D] leading-relaxed font-medium">{step}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 flex items-center justify-between gap-3 border-t border-[#E8DEC9]">
              <div className="text-[10px] text-[#718273]">
                M/s. Shatavari Pharmaceutical Pvt Ltd
              </div>
              <Link
                to={current.primaryBtnLink}
                onClick={() => setRitualModalOpen(false)}
                className="py-2 px-4 rounded-full bg-[#153C27] hover:bg-[#1E5437] text-white text-xs font-bold uppercase tracking-wider transition"
              >
                Shop This Regimen
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
