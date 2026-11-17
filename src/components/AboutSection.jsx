import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Factory,
  Quote,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  FileCheck2,
  Microscope,
  Leaf
} from 'lucide-react';
import imgPackaging from '../assets/banners/hero-rasayana.jpg';

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DEC9] relative overflow-hidden">
      {/* Decorative Botanical Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59A3F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#153C27]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D9CDB8] text-[#153C27] text-xs font-semibold uppercase tracking-widest shadow-xs">
            <Sparkles size={14} className="text-[#C59A3F]" />
            <span>Our Legacy &amp; Mission</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#153C27] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A Trusted Name in Pharmaceuticals
          </h2>

          <p className="text-sm sm:text-base text-[#556757] leading-relaxed max-w-2xl mx-auto">
            At <strong>Shatavari Ayurvedic</strong>, we believe the path to health lies in nature. Founded with a vision to standardize and scientificize Ayurveda, we've grown into a leading pharmaceutical player in Andhra Pradesh.
          </p>
        </div>

        {/* Real Data Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
          <div className="p-4 sm:p-6 rounded-2xl bg-white border border-[#E9DFCF] shadow-xs text-center group hover:border-[#C59A3F] transition-all">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#153C27] mb-1">
              15,000<span className="text-[#C59A3F]">+</span>
            </div>
            <div className="text-xs font-bold text-[#153C27] uppercase tracking-wider mb-1">Sq. Ft. Facility</div>
            <div className="text-[11px] text-[#718273]">Tirupati cGMP Manufacturing Plant</div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-white border border-[#E9DFCF] shadow-xs text-center group hover:border-[#C59A3F] transition-all">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#153C27] mb-1">
              0.0<span className="text-[#C59A3F]">%</span>
            </div>
            <div className="text-xs font-bold text-[#153C27] uppercase tracking-wider mb-1">Heavy Metals</div>
            <div className="text-[11px] text-[#718273]">ICP-MS Lab Tested Every Batch</div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-white border border-[#E9DFCF] shadow-xs text-center group hover:border-[#C59A3F] transition-all">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#153C27] mb-1">
              16<span className="text-[#C59A3F]">+</span>
            </div>
            <div className="text-xs font-bold text-[#153C27] uppercase tracking-wider mb-1">Pure Formulations</div>
            <div className="text-[11px] text-[#718273]">Standardized Vedic Pharmacopoeia</div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-white border border-[#E9DFCF] shadow-xs text-center group hover:border-[#C59A3F] transition-all">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#153C27] mb-1">
              50,000<span className="text-[#C59A3F]">+</span>
            </div>
            <div className="text-xs font-bold text-[#153C27] uppercase tracking-wider mb-1">Families Served</div>
            <div className="text-[11px] text-[#718273]">Across AP, Telangana &amp; South India</div>
          </div>
        </div>

        {/* 2-Column Corporate Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-12 sm:mb-16">
          
          {/* Left Text & Detailed Credential Panels (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C59A3F] uppercase tracking-wider">
                <Factory size={16} />
                <span>M/s. Shatavari Ayurvedic and Pharmaceutical Private Limited</span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold text-[#153C27] leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Bridging Traditional Wisdom &amp; Modern Manufacturing
              </h3>
              <p className="text-sm sm:text-base text-[#4E5F50] leading-relaxed">
                Established to bridge the gap between traditional wisdom and modern manufacturing practices, our state-of-the-art facility in Tirupati is equipped with advanced machinery to extract, process, and package herbal formulations while maintaining their bio-potency.
              </p>
              <p className="text-sm sm:text-base text-[#4E5F50] leading-relaxed">
                We focus on creating products that are not only effective but also free from heavy metals, contaminants, and synthetic additives. Each batch undergoes rigorous testing to meet international pharmaceutical standards.
              </p>
            </div>

            {/* Detailed Real Data Specification Cards (Replaced generic chips) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-[#E8DEC9] shadow-2xs space-y-1">
                <div className="flex items-center gap-2">
                  <Factory size={16} className="text-[#153C27]" />
                  <span className="text-xs font-bold text-[#153C27]">Tirupati Pharma Plant</span>
                </div>
                <p className="text-[11px] text-[#637565] leading-relaxed">
                  23-7-169, Santhi Nagar, MR Palli Circle, Tirupati AP. Positive-pressure cGMP cleanrooms &amp; vacuum extractors.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#E8DEC9] shadow-2xs space-y-1">
                <div className="flex items-center gap-2">
                  <Microscope size={16} className="text-[#153C27]" />
                  <span className="text-xs font-bold text-[#153C27]">Zero Heavy Metals</span>
                </div>
                <p className="text-[11px] text-[#637565] leading-relaxed">
                  ICP-MS spectroscopy testing on every lot. 100% free from lead, arsenic, mercury, and synthetic additives.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#E8DEC9] shadow-2xs space-y-1">
                <div className="flex items-center gap-2">
                  <FileCheck2 size={16} className="text-[#153C27]" />
                  <span className="text-xs font-bold text-[#153C27]">AYUSH &amp; GMP Licensed</span>
                </div>
                <p className="text-[11px] text-[#637565] leading-relaxed">
                  Licensed by Dept. of AYUSH, Govt. of Andhra Pradesh. Schedule T &amp; ISO 9001:2015 certified operations.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#E8DEC9] shadow-2xs space-y-1">
                <div className="flex items-center gap-2">
                  <Leaf size={16} className="text-[#153C27]" />
                  <span className="text-xs font-bold text-[#153C27]">100% Bio-Potent Extracts</span>
                </div>
                <p className="text-[11px] text-[#637565] leading-relaxed">
                  Whole-herb aqueous macerations preserving active saponins, withanolides, and natural healing bio-markers.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#153C27] hover:bg-[#1C5134] text-white font-semibold text-xs tracking-wider uppercase shadow-md transition"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#F2ECE1] text-[#153C27] font-semibold text-xs tracking-wider uppercase border border-[#D9CDB8] shadow-2xs transition"
              >
                <span>Contact Facility</span>
              </Link>
            </div>
          </div>

          {/* Right Corporate Executive Leadership & Certificate Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="h-full rounded-3xl bg-gradient-to-b from-[#153C27] to-[#0D2418] text-white p-6 sm:p-8 border-2 border-[#D4C3A6] shadow-xl flex flex-col justify-between relative overflow-hidden">
              
              {/* Background watermark seal */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-8 border-white/5 pointer-events-none" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 pb-5 border-b border-white/15">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C59A3F]/25 text-[#ECC468] text-[11px] font-bold uppercase tracking-wider border border-[#C59A3F]/40">
                    <Quote size={13} />
                    <span>Driven by Excellence</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-white/60 tracking-widest">
                    Est. Tirupati, AP
                  </span>
                </div>

                {/* Main Quote */}
                <blockquote
                  className="mt-6 text-base sm:text-lg font-medium italic text-[#FAF7F2] leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "We don't just sell medicines; we advocate for a lifestyle shift. Ayurveda is the science of life, and our goal is to bring that life back to its most vibrant state."
                </blockquote>

                {/* Board of Directors Signature line */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-sm font-bold text-[#ECC468] tracking-wide">
                    The Board of Directors
                  </div>
                  <div className="text-xs text-white/70 font-medium">
                    M/s. Shatavari Ayurvedic and Pharmaceutical Private Limited
                  </div>
                </div>
              </div>

              {/* Verified Facility Official Address Box */}
              <div className="mt-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2 text-xs">
                <div className="flex items-start gap-2 text-white/90">
                  <MapPin size={15} className="text-[#ECC468] flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    23-7-169, 3rd Floor, Santhi Nagar, MR Palli Circle, Tirupati, AP - 517502
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/10 text-[11px] text-white/80">
                  <span className="flex items-center gap-1.5">
                    <Phone size={13} className="text-[#ECC468]" />
                    <span>+91 94937 82350</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail size={13} className="text-[#ECC468]" />
                    <span>shatavariayurvedic@gmail.com</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 3 Pillars Row: Vision, Mission & Commitment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 pt-2">
          {/* 🎯 Our Vision */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DEC9] shadow-xs space-y-2.5 hover:shadow-md transition">
            <div className="text-2xl">🎯</div>
            <h4 className="text-lg font-bold text-[#153C27]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Vision
            </h4>
            <p className="text-xs sm:text-sm text-[#5D6F60] leading-relaxed">
              To be the global leader in natural wellness by validating ancient wisdom through rigorous science and standardized pharmaceutical processes.
            </p>
          </div>

          {/* 🌱 Our Mission */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DEC9] shadow-xs space-y-2.5 hover:shadow-md transition">
            <div className="text-2xl">🌱</div>
            <h4 className="text-lg font-bold text-[#153C27]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Mission
            </h4>
            <p className="text-xs sm:text-sm text-[#5D6F60] leading-relaxed">
              To provide high-quality, safe, and accessible Ayurvedic products that empower individuals to live healthier, chemical-free lives.
            </p>
          </div>

          {/* 🤝 Our Commitment */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DEC9] shadow-xs space-y-2.5 hover:shadow-md transition">
            <div className="text-2xl">🤝</div>
            <h4 className="text-lg font-bold text-[#153C27]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Commitment
            </h4>
            <p className="text-xs sm:text-sm text-[#5D6F60] leading-relaxed">
              Sustainability is at our core. We partner directly with indigenous herbal cultivators, protecting the ecosystem while wild-harvesting botanicals.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
