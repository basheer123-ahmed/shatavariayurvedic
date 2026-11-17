import React from 'react';
import { Sparkles, ShieldCheck, Award, Heart, Leaf, Target, Handshake, Quote, CheckCircle2, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import imgFacility from '../assets/banners/hero-rasayana.jpg';

export const About = () => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 sm:py-20 border-b border-[#E8DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header / Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D9CDB8] text-[#153C27] text-xs font-semibold uppercase tracking-widest shadow-sm">
            <Sparkles size={14} className="text-[#C59A3F]" />
            <span>Our Legacy &amp; Mission</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#153C27] tracking-tight leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A Trusted Name in Pharmaceuticals
          </h1>

          <p className="text-base sm:text-lg text-[#526454] leading-relaxed">
            At <strong>Shatavari Ayurvedic</strong>, we believe the path to health lies in nature. Founded with a vision to standardize and scientificize Ayurveda, we've grown into a leading pharmaceutical player in Andhra Pradesh.
          </p>
        </div>

        {/* 2-Column Corporate Heritage Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#E9DFCF] shadow-sm mb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#C59A3F] uppercase tracking-widest flex items-center gap-2">
                <Factory size={16} />
                <span>M/s. Shatavari Ayurvedic and Pharmaceutical Private Limited</span>
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#153C27] leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Bridging Traditional Wisdom &amp; Modern Manufacturing
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#4E6051] leading-relaxed">
              <strong>M/s. Shatavari Ayurvedic and Pharmaceutical Private Limited</strong> was established to bridge the gap between traditional wisdom and modern manufacturing practices. Our state-of-the-art facility in Tirupati is equipped with advanced machinery to extract, process, and package herbal formulations while maintaining their bio-potency.
            </p>

            <p className="text-sm sm:text-base text-[#4E6051] leading-relaxed">
              We focus on creating products that are not only effective but also free from heavy metals, contaminants, and synthetic additives. Each batch undergoes rigorous testing to meet international pharmaceutical standards.
            </p>

            {/* Quality & Facility Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DEC9]">
                <CheckCircle2 size={18} className="text-[#153C27] flex-shrink-0" />
                <span className="text-xs font-bold text-[#153C27]">Tirupati Pharmaceutical Facility</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DEC9]">
                <CheckCircle2 size={18} className="text-[#153C27] flex-shrink-0" />
                <span className="text-xs font-bold text-[#153C27]">Zero Heavy Metals &amp; Contaminants</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DEC9]">
                <CheckCircle2 size={18} className="text-[#153C27] flex-shrink-0" />
                <span className="text-xs font-bold text-[#153C27]">International Pharma Standards</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DEC9]">
                <CheckCircle2 size={18} className="text-[#153C27] flex-shrink-0" />
                <span className="text-xs font-bold text-[#153C27]">Guaranteed Bio-Potency Extracts</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#E5DAC6] bg-white group">
              <img
                src={imgFacility}
                alt="Shatavari Ayurvedic Tirupati Pharmaceutical Facility"
                className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F281B] via-[#0F281B]/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[#ECC468] text-xs font-bold uppercase tracking-wider mb-2 self-start border border-white/20">
                  <Sparkles size={13} />
                  <span>Certified Ayurvedic Manufacturing</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-white mb-1">
                  M/s. Shatavari Ayurvedic &amp; Pharmaceutical Pvt Ltd
                </h3>
                <p className="text-xs text-[#D1DFD4] leading-relaxed">
                  Tirupati, Andhra Pradesh, India — Rigorous science meeting ancient botanical heritage.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Pillars: Vision, Mission & Commitment */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-[#C59A3F] uppercase tracking-widest">
              Core Principles
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#153C27]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Vision, Mission &amp; Commitment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* 🎯 Our Vision */}
            <div className="bg-white rounded-3xl p-8 border border-[#E9DFCF] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#FAF2DE] text-[#C59A3F] flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">
                  🎯
                </div>
                <h3
                  className="text-2xl font-bold text-[#153C27]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Our Vision
                </h3>
                <p className="text-sm text-[#4E6051] leading-relaxed">
                  To be the global leader in natural wellness by validating ancient wisdom through rigorous science.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F2ECE1] text-xs font-bold text-[#C59A3F] uppercase tracking-wider">
                Ancient Wisdom • Rigorous Science
              </div>
            </div>

            {/* 🌱 Our Mission */}
            <div className="bg-white rounded-3xl p-8 border border-[#E9DFCF] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#EBF3ED] text-[#153C27] flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">
                  🌱
                </div>
                <h3
                  className="text-2xl font-bold text-[#153C27]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Our Mission
                </h3>
                <p className="text-sm text-[#4E6051] leading-relaxed">
                  To provide high-quality, safe, and accessible Ayurvedic products that empower individuals to live healthier lives.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F2ECE1] text-xs font-bold text-[#153C27] uppercase tracking-wider">
                Safe • High-Quality • Accessible
              </div>
            </div>

            {/* 🤝 Our Commitment */}
            <div className="bg-white rounded-3xl p-8 border border-[#E9DFCF] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#F4ECE1] text-[#996B20] flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">
                  🤝
                </div>
                <h3
                  className="text-2xl font-bold text-[#153C27]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Our Commitment
                </h3>
                <p className="text-sm text-[#4E6051] leading-relaxed">
                  Sustainability is at our core. We protect the environment while harvesting its bounties.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F2ECE1] text-xs font-bold text-[#153C27] uppercase tracking-wider">
                Eco-Conscious • Sustainable Sourcing
              </div>
            </div>

          </div>
        </div>

        {/* Driven by Excellence - Board of Directors Quote */}
        <div className="bg-[#153C27] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl mb-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59A3F]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#ECC468] text-xs font-semibold uppercase tracking-widest border border-white/20">
              <Quote size={13} />
              <span>Driven by Excellence</span>
            </div>

            <blockquote
              className="text-2xl sm:text-3xl lg:text-4xl font-normal italic text-[#FAF7F2] leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "We don't just sell medicines; we advocate for a lifestyle shift. Ayurveda is the science of life, and our goal is to bring that life back to its most vibrant state."
            </blockquote>

            <div className="pt-4 border-t border-[#2B543C] max-w-sm mx-auto">
              <div className="text-base font-bold text-[#ECC468] tracking-wider uppercase">
                The Board of Directors
              </div>
              <div className="text-xs text-[#A8C4B0] mt-0.5">
                Shatavari Pharmaceutical Pvt Ltd • Tirupati, AP
              </div>
            </div>
          </div>
        </div>

        {/* Explore Products CTA Banner */}
        <div className="text-center pt-2">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#153C27] hover:bg-[#1E5437] text-[#ECC468] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            <span>Explore Certified Formulations</span>
            <Sparkles size={15} />
          </Link>
        </div>

      </div>
    </div>
  );
};
