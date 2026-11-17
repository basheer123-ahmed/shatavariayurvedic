import React, { useRef, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const ProductGrid = ({
  products = [],
  title,
  subtitle,
  viewAllLink,
  viewAllText = 'View All Formulations',
  carousel = true
}) => {
  const scrollContainerRef = useRef(null);

  // Auto-scroll product cards every 3 seconds
  useEffect(() => {
    if (!carousel) return;

    const timer = setInterval(() => {
      if (scrollContainerRef.current) {
        const el = scrollContainerRef.current;
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScroll - 20) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [carousel]);

  if (!products || products.length === 0) {
    return (
      <div className="py-12 text-center text-stone-500">
        No Ayurvedic products found matching this criteria.
      </div>
    );
  }

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full relative">
      {/* Header with Title & Navigation Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          {subtitle && (
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C59A3F] block mb-1">
              {subtitle}
            </span>
          )}
          {title && (
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#153C27]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {title}
            </h2>
          )}
        </div>

        <div className="flex items-center gap-4 self-start md:self-auto">
          {/* Scroll Navigation Arrows for Carousel */}
          {carousel && (
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scroll('left')}
                className="w-9 h-9 rounded-full bg-white hover:bg-[#153C27] text-[#153C27] hover:text-white border border-[#E0D5C1] shadow-sm flex items-center justify-center transition active:scale-95"
                aria-label="Scroll left"
                title="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                className="w-9 h-9 rounded-full bg-white hover:bg-[#153C27] text-[#153C27] hover:text-white border border-[#E0D5C1] shadow-sm flex items-center justify-center transition active:scale-95"
                aria-label="Scroll right"
                title="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {viewAllLink && (
            <Link
              to={viewAllLink}
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#153C27] hover:text-[#C59A3F] transition-colors pb-1 border-b-2 border-[#153C27] hover:border-[#C59A3F] whitespace-nowrap"
            >
              <span>{viewAllText}</span>
              <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </div>

      {/* Smooth Horizontal Scrolling Carousel / Grid */}
      <div
        ref={scrollContainerRef}
        className={
          carousel
            ? 'flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 scroll-smooth no-scrollbar snap-x snap-mandatory'
            : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6'
        }
        style={carousel ? { scrollbarWidth: 'none', msOverflowStyle: 'none' } : {}}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className={
              carousel
                ? 'w-[250px] sm:w-[280px] lg:w-[295px] flex-shrink-0 snap-start'
                : 'w-full'
            }
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
