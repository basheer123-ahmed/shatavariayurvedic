import React from 'react';
import { Leaf, Award, BookOpen, HeartPulse, Sparkles } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-[#C59A3F]" />,
      title: 'Nature-inspired Ingredients',
      description:
        'Ethically sourced whole botanical roots, bark, and seeds wild-crafted from sustainable regional farms across India.'
    },
    {
      icon: <Award className="w-8 h-8 text-[#C59A3F]" />,
      title: 'Quality-focused Products',
      description:
        'Manufactured in certified GMP facilities adhering to stringent safety, heavy metal testing, and microbiological standards.'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#C59A3F]" />,
      title: 'Ayurvedic Heritage',
      description:
        'Rooted in centuries-old Charaka and Sushruta Samhita treatises, keeping classical Vedic wisdom intact for modern life.'
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-[#C59A3F]" />,
      title: 'Everyday Wellness',
      description:
        'Holistic remedies designed to balance your Doshas, restore calm, and nurture gentle vitality for every family member.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF7F2] to-[#F2EADA] border-b border-[#E5DAC6] relative overflow-hidden">
      {/* Decorative Botanical Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#153C27]/5 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#C59A3F]/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8DEC9] text-[#153C27] text-xs font-semibold uppercase tracking-widest">
            <Sparkles size={13} className="text-[#C59A3F]" />
            <span>Purity, Potency &amp; Tradition</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#153C27]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why Choose Shatavari Ayurvedic?
          </h2>
          <p className="text-sm sm:text-base text-[#5C6E5F]">
            We bridge authentic time-tested Ayurvedic formulations with rigorous contemporary quality standards to ensure your daily well-being.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feat, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-[#E9DFCF] shadow-sm hover:shadow-xl hover:border-[#C59A3F] transition-all duration-300 group flex flex-col items-center text-center hover:-translate-y-1"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-2xl bg-[#F6F1E8] group-hover:bg-[#153C27] flex items-center justify-center mb-5 transition-colors duration-300 shadow-inner">
                <div className="group-hover:text-white transition-colors">
                  {feat.icon}
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold text-[#153C27] mb-2.5 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {feat.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#5D6F60] leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
