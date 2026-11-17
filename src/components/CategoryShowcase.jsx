import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CategoryShowcase = () => {
  return (
    <section className="py-10 sm:py-16 bg-[#FAF7F2] border-b border-[#E8DEC9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-1.5 sm:space-y-2">
          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#C59A3F]">
            <Sparkles size={13} />
            <span>Pure Vedic Formulations</span>
          </div>
          <h2
            className="text-2xl sm:text-4xl font-bold text-[#153C27]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Shop by Category
          </h2>
          <p className="text-xs sm:text-base text-[#607062]">
            Discover targeted remedies tailored for your mind, body, skin, and daily vitality.
          </p>
        </div>

        {/* Circular Categories Grid - 3 cols on mobile, 6 cols on desktop */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group flex flex-col items-center text-center focus:outline-none"
            >
              {/* Circular Container with Hover Zoom & Ring */}
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-34 lg:h-34 mb-2 p-1 rounded-full bg-white shadow-md group-hover:shadow-xl transition-all duration-300 border-2 border-[#E5DAC6] group-hover:border-[#C59A3F] flex items-center justify-center overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-[#153C27]/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              </div>

              {/* Title & Item Count */}
              <h3 className="text-xs sm:text-sm lg:text-base font-bold text-[#153C27] group-hover:text-[#C59A3F] transition-colors leading-tight mb-0.5 line-clamp-1">
                {cat.name}
              </h3>
              <span className="text-[10px] sm:text-xs font-medium text-[#7C8D7E] group-hover:text-[#153C27] transition-colors">
                {cat.itemCount} Items
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom Quick Link */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#153C27] hover:text-[#C59A3F] transition-colors pb-1 border-b-2 border-[#153C27] hover:border-[#C59A3F]"
          >
            <span>View All Categories &amp; Products</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
};
