import React, { useState, useEffect } from 'react';
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
      tag: 'Authentic Vedic Formulations & Rasayana',
      tagIcon: <Sparkles size={13} className="text-[#C59A3F]" />,
      headingPrefix: 'Discover the Power of',
      headingAccent: 'Ayurveda',
      description:
        'Explore nature-inspired herbal products handcrafted with pure botanical extracts, time-honored Vedic recipes, and modern purity standards.',
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
      accentGradient: 'from-[#8C5E1A] via-[#C59A3F] to-[#996B20]'
    },
    {
      id: 'slide-skincare',
      tag: 'Royal 26-Herb Vedic Beauty Elixir',
      tagIcon: <Sparkles size={13} className="text-[#D4AF37]" />,
      headingPrefix: 'Sacred Radiance with Pure',
      headingAccent: 'Kumkumadi Tailam',
      description:
        'Royal 26-herb Ayurvedic formulation slow-simmered for 72 continuous hours to illuminate blemishes and reveal natural golden skin.',
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
      accentGradient: 'from-[#B55A1A] via-[#E28D38] to-[#994711]'
    },
    {
      id: 'slide-juices',
      tag: '100% Wild Crafted & Raw Botanical Juices',
      tagIcon: <Droplets size={13} className="text-[#3A6B25]" />,
      headingPrefix: 'Revitalize with Cold-Pressed',
      headingAccent: 'Herbal Juices',
      description:
        'Fresh cold-pressed juices extracted from wild-harvested botanicals without added water or artificial sugar for complete daily vitality.',
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
      accentGradient: 'from-[#3A6B25] via-[#5C9E38] to-[#2B5418]'
    },
    {
      id: 'slide-haircare',
      tag: 'Kshirpak Vidhi Intensive Hair Regimen',
      tagIcon: <Leaf size={13} className="text-[#153C27]" />,
      headingPrefix: 'Transform Scalp & Roots with',
      headingAccent: 'Bhringraj',
      description:
        'Intensive scalp and root therapy enriched with Bhringraj and Brahmi to nourish follicles and curb hair fall naturally.',
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
      accentGradient: 'from-[#153C27] via-[#2F7347] to-[#0E2C1B]'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [ritualModalOpen, setRitualModalOpen] = useState(false);

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

  const current = slides[currentSlide];

  return (
    <section
      className={`relative overflow-hidden w-full max-w-full bg-gradient-to-b ${current.bgGradient} py-6 sm:py-12 lg:py-16 border-b border-[#E0D5C1] transition-all duration-700 ease-in-out`}
    >
      {/* Decorative Botanical Ambient Shapes */}
      <div className="absolute top-0 right-0 w-72 sm:w-[450px] h-72 sm:h-[450px] bg-[#C59A3F]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 sm:w-80 h-48 sm:h-80 bg-[#153C27]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation Arrows (Desktop) */}
      <button
        type="button"
        onClick={prevSlide}
        className="hidden xl:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#153C27] hover:text-[#C59A3F] border border-[#E0D5C1] shadow-lg items-center justify-center transition-all active:scale-95 group"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="hidden xl:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#153C27] hover:text-[#C59A3F] border border-[#E0D5C1] shadow-lg items-center justify-center transition-all active:scale-95 group"
        aria-label="Next Slide"
      >
        <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column Hero Layout */}
        <div key={current.id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center animate-fadeIn">
          
          {/* Left Text & Interactive Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 text-center lg:text-left">
            
            {/* Top Herbal Heritage Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-[#D4C3A6] text-[10px] sm:text-xs font-semibold text-[#153C27] tracking-wider uppercase shadow-xs">
              {current.tagIcon}
              <span>{current.tag}</span>
            </div>

            {/* Main Heading with Shimmering Gradient Typography */}
            <h1
              className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#153C27] tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {current.headingPrefix}{' '}
              <span className={`bg-gradient-to-r ${current.accentGradient} bg-clip-text text-transparent italic`}>
                {current.headingAccent}
              </span>
            </h1>

            {/* Clean Supporting Text */}
            <p className="text-xs sm:text-base text-[#556357] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {current.description}
            </p>

            {/* Action Buttons */}
            <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5">
              <Link
                to={current.primaryBtnLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-[#153C27] hover:bg-[#1E5437] text-white font-semibold text-xs sm:text-sm tracking-wider shadow-md shadow-[#153C27]/20 hover:shadow-lg transition-all"
              >
                <span>{current.primaryBtnText}</span>
                <ArrowRight size={16} />
              </Link>

              {/* "Discover Ritual" trigger button */}
              <button
                type="button"
                onClick={() => setRitualModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 rounded-full bg-white hover:bg-[#FAF8F5] text-[#153C27] border border-[#C59A3F]/50 font-semibold text-xs sm:text-sm tracking-wider shadow-xs hover:shadow-sm transition-all"
              >
                <Compass size={15} className="text-[#C59A3F]" />
                <span>{current.secondaryBtnText}</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-3 sm:pt-4 border-t border-[#DFD3BE] grid grid-cols-3 gap-2 sm:gap-3 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 text-[#153C27] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <ShieldCheck size={16} />
                </div>
                <div className="text-left">
                  <div className="text-[11px] sm:text-xs font-bold text-[#153C27]">100% Herbal</div>
                  <div className="text-[9px] sm:text-[10px] text-[#718273]">No Chemicals</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 text-[#153C27] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Award size={16} />
                </div>
                <div className="text-left">
                  <div className="text-[11px] sm:text-xs font-bold text-[#153C27]">GMP Certified</div>
                  <div className="text-[9px] sm:text-[10px] text-[#718273]">Vedic Pure</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 text-[#153C27] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Leaf size={16} />
                </div>
                <div className="text-left">
                  <div className="text-[11px] sm:text-xs font-bold text-[#153C27]">Wild Harvested</div>
                  <div className="text-[9px] sm:text-[10px] text-[#718273]">Native Roots</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Product Packaging Showcase (NO BACKGROUND - TRUE TRANSPARENT PNG) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="w-full max-w-sm lg:max-w-none relative group flex flex-col items-center">
              
              {/* Soft gold ambient backlight glow directly behind transparent bottle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C59A3F]/20 to-transparent rounded-full filter blur-3xl transform scale-90 pointer-events-none" />
              
              {/* Floating Innovative Herbal Badge Pill (Top Right) */}
              <div className="absolute top-2 right-2 z-20 bg-white/90 backdrop-blur-md border border-[#E8DEC9] px-2.5 py-1 rounded-xl shadow-xs text-right hidden sm:block">
                <div className="text-[9px] uppercase font-bold text-[#C59A3F] tracking-wider">{current.floatingBadge.title}</div>
                <div className="text-[11px] font-bold text-[#153C27]">{current.floatingBadge.subtitle}</div>
              </div>

              {/* Pure Isolated Bottle with ZERO background */}
              <div className="relative z-10 w-full flex items-center justify-center py-2">
                <img
                  src={current.image}
                  alt={current.imageAlt}
                  className="w-auto max-h-[220px] sm:max-h-[380px] lg:max-h-[440px] object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Quality Seal Pill */}
              <div className="mt-1 sm:absolute sm:bottom-2 sm:left-2 bg-white/95 backdrop-blur-md border border-[#E5DAC6] py-1.5 px-3 rounded-2xl shadow-md z-20 flex items-center gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#153C27] text-[#C59A3F] flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                  {current.badgeRating}
                </div>
                <div className="text-left">
                  <div className="text-[11px] sm:text-xs font-bold text-[#153C27]">{current.badgeTitle}</div>
                  <div className="text-[9px] sm:text-[10px] text-[#697B6B]">{current.badgeSubtitle}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Minimal Subtle Slide Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-5 sm:mt-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => selectSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-6 bg-[#153C27]' : 'w-1.5 bg-[#153C27]/25 hover:bg-[#153C27]/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
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
