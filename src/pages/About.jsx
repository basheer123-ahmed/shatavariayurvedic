import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Award,
  Heart,
  Leaf,
  Target,
  Handshake,
  Quote,
  CheckCircle2,
  Factory,
  MapPin,
  Mail,
  Phone,
  Microscope,
  FileCheck2,
  Building2,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16 border-b border-[#E8DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header / Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D9CDB8] text-[#153C27] text-xs font-semibold uppercase tracking-widest shadow-2xs">
            <Sparkles size={14} className="text-[#C59A3F]" />
            <span>Our Legacy &amp; Mission</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#153C27] tracking-tight leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A Trusted Name in Pharmaceuticals
          </h1>

          <p className="text-base sm:text-lg text-[#526454] leading-relaxed max-w-2xl mx-auto">
            At <strong>Shatavari Ayurvedic</strong>, we believe the path to health lies in nature. Founded with a vision to standardize and scientificize Ayurveda, we've grown into a leading pharmaceutical player in Andhra Pradesh.
          </p>
        </div>

        {/* Real Data Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E9DFCF] shadow-2xs text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#153C27] mb-1">
              15,000<span className="text-[#C59A3F]">+</span>
            </div>
            <div className="text-xs font-bold text-[#153C27] uppercase tracking-wider mb-1">Sq. Ft. Facility</div>
            <div className="text-[11px] text-[#718273]">Tirupati cGMP Manufacturing Plant</div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E9DFCF] shadow-2xs text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#153C27] mb-1">
              0.0<span className="text-[#C59A3F]">%</span>
            </div>
            <div className="text-xs font-bold text-[#153C27] uppercase tracking-wider mb-1">Heavy Metals</div>
            <div className="text-[11px] text-[#718273]">ICP-MS Lab Tested Every Batch</div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E9DFCF] shadow-2xs text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#153C27] mb-1">
              16<span className="text-[#C59A3F]">+</span>
            </div>
            <div className="text-xs font-bold text-[#153C27] uppercase tracking-wider mb-1">Pure Formulations</div>
            <div className="text-[11px] text-[#718273]">Standardized Vedic Pharmacopoeia</div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E9DFCF] shadow-2xs text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#153C27] mb-1">
              50,000<span className="text-[#C59A3F]">+</span>
            </div>
            <div className="text-xs font-bold text-[#153C27] uppercase tracking-wider mb-1">Families Served</div>
            <div className="text-[11px] text-[#718273]">Across AP, Telangana &amp; South India</div>
          </div>
        </div>

        {/* 2-Column Corporate Heritage Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E9DFCF] shadow-sm mb-12 sm:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#C59A3F] uppercase tracking-wider flex items-center gap-2">
                <Factory size={16} />
                <span>M/s. Shatavari Ayurvedic and Pharmaceutical Private Limited</span>
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#153C27] leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Bridging Traditional Wisdom &amp; Modern Manufacturing
              </h2>

              <p className="text-sm sm:text-base text-[#4E6051] leading-relaxed">
                <strong>M/s. Shatavari Ayurvedic and Pharmaceutical Private Limited</strong> was established to bridge the gap between traditional wisdom and modern manufacturing practices. Our state-of-the-art facility in Tirupati is equipped with advanced machinery to extract, process, and package herbal formulations while maintaining their bio-potency.
              </p>

              <p className="text-sm sm:text-base text-[#4E6051] leading-relaxed">
                We focus on creating products that are not only effective but also free from heavy metals, contaminants, and synthetic additives. Each batch undergoes rigorous testing to meet international pharmaceutical standards.
              </p>
            </div>

            {/* Detailed Real Data Specification Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DEC9] space-y-1">
                <div className="flex items-center gap-2">
                  <Factory size={16} className="text-[#153C27]" />
                  <span className="text-xs font-bold text-[#153C27]">Tirupati Pharma Plant</span>
                </div>
                <p className="text-[11px] text-[#637565] leading-relaxed">
                  23-7-169, Santhi Nagar, MR Palli Circle, Tirupati AP. Positive-pressure cleanrooms &amp; vacuum extractors.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DEC9] space-y-1">
                <div className="flex items-center gap-2">
                  <Microscope size={16} className="text-[#153C27]" />
                  <span className="text-xs font-bold text-[#153C27]">Zero Heavy Metals</span>
                </div>
                <p className="text-[11px] text-[#637565] leading-relaxed">
                  ICP-MS spectroscopy testing on every lot. 100% free from lead, arsenic, mercury, and synthetic additives.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DEC9] space-y-1">
                <div className="flex items-center gap-2">
                  <FileCheck2 size={16} className="text-[#153C27]" />
                  <span className="text-xs font-bold text-[#153C27]">AYUSH &amp; GMP Licensed</span>
                </div>
                <p className="text-[11px] text-[#637565] leading-relaxed">
                  Licensed by Dept. of AYUSH, Govt. of Andhra Pradesh. Schedule T &amp; ISO 9001:2015 certified operations.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DEC9] space-y-1">
                <div className="flex items-center gap-2">
                  <Leaf size={16} className="text-[#153C27]" />
                  <span className="text-xs font-bold text-[#153C27]">100% Bio-Potent Extracts</span>
                </div>
                <p className="text-[11px] text-[#637565] leading-relaxed">
                  Whole-herb aqueous macerations preserving active saponins, withanolides, and natural healing bio-markers.
                </p>
              </div>
            </div>
          </div>

          {/* Executive Leadership & Certificate Card (Right Col) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div
              className="h-full rounded-3xl bg-[#153C27] text-white p-6 sm:p-8 border-2 border-[#C59A3F] shadow-xl flex flex-col justify-between relative overflow-hidden"
              style={{ backgroundColor: '#153C27' }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-5 border-b border-white/20">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C59A3F]/30 text-[#FFD778] text-[11px] font-bold uppercase tracking-wider border border-[#C59A3F]/50">
                    <Quote size={13} />
                    <span>Driven by Excellence</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#FFD778]/90 tracking-widest">
                    Tirupati, AP
                  </span>
                </div>

                <blockquote
                  className="mt-6 text-base sm:text-lg font-medium italic text-white leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "We don't just sell medicines; we advocate for a lifestyle shift. Ayurveda is the science of life, and our goal is to bring that life back to its most vibrant state."
                </blockquote>

                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="text-sm font-bold text-[#FFD778] tracking-wide">
                    The Board of Directors
                  </div>
                  <div className="text-xs text-white/90 font-medium">
                    M/s. Shatavari Ayurvedic and Pharmaceutical Private Limited
                  </div>
                </div>
              </div>

              {/* Verified Facility Official Address Box */}
              <div className="mt-6 p-4 rounded-2xl bg-black/25 backdrop-blur-md border border-white/20 space-y-2 text-xs">
                <div className="flex items-start gap-2 text-white">
                  <MapPin size={15} className="text-[#FFD778] flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    23-7-169, 3rd Floor, Santhi Nagar, MR Palli Circle, Tirupati, AP - 517502
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/15 text-[11px] text-white/90">
                  <span className="flex items-center gap-1.5">
                    <Phone size={13} className="text-[#FFD778]" />
                    <span>+91 94937 82350</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail size={13} className="text-[#FFD778]" />
                    <span>shatavariayurvedic@gmail.com</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 3 Pillars Row: Vision, Mission & Commitment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* 🎯 Our Vision */}
          <div className="p-7 rounded-3xl bg-white border border-[#E8DEC9] shadow-2xs space-y-3 hover:shadow-md transition">
            <div className="text-3xl">🎯</div>
            <h3 className="text-xl font-bold text-[#153C27]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Vision
            </h3>
            <p className="text-sm text-[#526454] leading-relaxed">
              To be the global leader in natural wellness by validating ancient wisdom through rigorous science and standardized pharmaceutical processes.
            </p>
          </div>

          {/* 🌱 Our Mission */}
          <div className="p-7 rounded-3xl bg-white border border-[#E8DEC9] shadow-2xs space-y-3 hover:shadow-md transition">
            <div className="text-3xl">🌱</div>
            <h3 className="text-xl font-bold text-[#153C27]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Mission
            </h3>
            <p className="text-sm text-[#526454] leading-relaxed">
              To provide high-quality, safe, and accessible Ayurvedic products that empower individuals to live healthier, chemical-free lives.
            </p>
          </div>

          {/* 🤝 Our Commitment */}
          <div className="p-7 rounded-3xl bg-white border border-[#E8DEC9] shadow-2xs space-y-3 hover:shadow-md transition">
            <div className="text-3xl">🤝</div>
            <h3 className="text-xl font-bold text-[#153C27]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Commitment
            </h3>
            <p className="text-sm text-[#526454] leading-relaxed">
              Sustainability is at our core. We partner directly with indigenous herbal cultivators, protecting the ecosystem while wild-harvesting botanicals.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
