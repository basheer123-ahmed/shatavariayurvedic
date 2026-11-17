import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2, Factory, Quote } from 'lucide-react';
import imgPackaging from '../assets/banners/hero-rasayana.jpg';

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DEC9] relative overflow-hidden">
      {/* Decorative Botanical Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59A3F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#153C27]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D9CDB8] text-[#153C27] text-xs font-semibold uppercase tracking-widest shadow-sm">
            <Sparkles size={14} className="text-[#C59A3F]" />
            <span>Our Legacy &amp; Mission</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#153C27] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A Trusted Name in Pharmaceuticals
          </h2>

          <p className="text-base sm:text-lg text-[#556757] leading-relaxed">
            At <strong>Shatavari Ayurvedic</strong>, we believe the path to health lies in nature. Founded with a vision to standardize and scientificize Ayurveda, we've grown into a leading pharmaceutical player in Andhra Pradesh.
          </p>
        </div>

        {/* 2-Column Corporate Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14">
          
          {/* Left Text Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#C59A3F] uppercase tracking-widest flex items-center gap-2">
                <Factory size={15} />
                <span>M/s. Shatavari Ayurvedic and Pharmaceutical Private Limited</span>
              </span>
              <h3
                className="text-2xl sm:text-3xl font-bold text-[#153C27] leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Bridging Traditional Wisdom &amp; Modern Manufacturing
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#4E5F50] leading-relaxed">
              Established to bridge the gap between traditional wisdom and modern manufacturing practices, our state-of-the-art facility in Tirupati is equipped with advanced machinery to extract, process, and package herbal formulations while maintaining their bio-potency.
            </p>

            <p className="text-sm sm:text-base text-[#4E5F50] leading-relaxed">
              We focus on creating products that are not only effective but also free from heavy metals, contaminants, and synthetic additives. Each batch undergoes rigorous testing to meet international pharmaceutical standards.
            </p>

            {/* Quality Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E8DEC9] shadow-xs">
                <CheckCircle2 size={17} className="text-[#153C27] flex-shrink-0" />
                <span className="text-xs font-bold text-[#153C27]">Tirupati Pharmaceutical Facility</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E8DEC9] shadow-xs">
                <CheckCircle2 size={17} className="text-[#153C27] flex-shrink-0" />
                <span className="text-xs font-bold text-[#153C27]">Heavy Metal Free Certification</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E8DEC9] shadow-xs">
                <CheckCircle2 size={17} className="text-[#153C27] flex-shrink-0" />
                <span className="text-xs font-bold text-[#153C27]">International Quality Standards</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E8DEC9] shadow-xs">
                <CheckCircle2 size={17} className="text-[#153C27] flex-shrink-0" />
                <span className="text-xs font-bold text-[#153C27]">100% Herbal Bio-Potency</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#153C27] text-[#ECC468] font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#1C5134] hover:shadow-lg transition-all active:scale-95"
              >
                <span>Read Full Legacy &amp; Story</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#F2ECE1] text-[#153C27] font-bold text-xs uppercase tracking-wider border border-[#D9CDB8] shadow-sm transition-all"
              >
                <span>Explore Formulations</span>
              </Link>
            </div>
          </div>

          {/* Right Visual Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#E5DAC6] bg-white group">
              <img
                src={imgPackaging}
                alt="Shatavari Ayurvedic Tirupati State-of-the-Art Pharmaceutical Packaging"
                className="w-full h-[430px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F281B] via-[#0F281B]/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[#ECC468] text-xs font-bold uppercase tracking-wider mb-2 self-start border border-white/20">
                  <Quote size={13} />
                  <span>Driven by Excellence</span>
                </div>
                <blockquote
                  className="text-base sm:text-lg font-medium italic text-[#FAF7F2] mb-2 leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "We don't just sell medicines; we advocate for a lifestyle shift. Ayurveda is the science of life, and our goal is to bring that life back to its most vibrant state."
                </blockquote>
                <div className="text-xs text-[#ECC468] font-semibold tracking-wider">
                  — The Board of Directors, Shatavari Pharmaceutical Pvt Ltd
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Pillars Row: Vision, Mission & Commitment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {/* 🎯 Our Vision */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DEC9] shadow-sm space-y-3">
            <div className="text-2xl">🎯</div>
            <h4 className="text-lg font-bold text-[#153C27]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Vision
            </h4>
            <p className="text-xs sm:text-sm text-[#5D6F60] leading-relaxed">
              To be the global leader in natural wellness by validating ancient wisdom through rigorous science.
            </p>
          </div>

          {/* 🌱 Our Mission */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DEC9] shadow-sm space-y-3">
            <div className="text-2xl">🌱</div>
            <h4 className="text-lg font-bold text-[#153C27]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Mission
            </h4>
            <p className="text-xs sm:text-sm text-[#5D6F60] leading-relaxed">
              To provide high-quality, safe, and accessible Ayurvedic products that empower individuals to live healthier lives.
            </p>
          </div>

          {/* 🤝 Our Commitment */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DEC9] shadow-sm space-y-3">
            <div className="text-2xl">🤝</div>
            <h4 className="text-lg font-bold text-[#153C27]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Commitment
            </h4>
            <p className="text-xs sm:text-sm text-[#5D6F60] leading-relaxed">
              Sustainability is at our core. We protect the environment while harvesting its bounties.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
