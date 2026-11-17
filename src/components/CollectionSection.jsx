import React, { useRef, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';

export const CollectionSection = ({
  title,
  subtitle,
  description,
  categorySlug,
  products = [],
  bgColor = 'bg-white'
}) => {
  const scrollRef = useRef(null);

  // Auto-scroll collection cards every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const el = scrollRef.current;
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScroll - 20) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={`py-14 sm:py-20 ${bgColor} border-b border-[#E8DEC9]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header with Description & Scroll Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#C59A3F] mb-1">
              <Leaf size={13} />
              <span>{subtitle}</span>
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#153C27]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {title}
            </h2>
            {description && (
              <p className="mt-1.5 text-sm sm:text-base text-[#607062]">
                {description}
              </p>
            )}
          </div>

          <div className="flex items-center gap-4 self-start md:self-auto">
            {/* Scroll Navigation Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scroll('left')}
                className="w-9 h-9 rounded-full bg-white hover:bg-[#153C27] text-[#153C27] hover:text-white border border-[#E0D5C1] shadow-sm flex items-center justify-center transition active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                className="w-9 h-9 rounded-full bg-white hover:bg-[#153C27] text-[#153C27] hover:text-white border border-[#E0D5C1] shadow-sm flex items-center justify-center transition active:scale-95"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <Link
              to={`/shop?category=${categorySlug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#153C27] hover:text-[#C59A3F] transition-colors pb-1 border-b-2 border-[#153C27] hover:border-[#C59A3F] whitespace-nowrap"
            >
              <span>View Collection</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Horizontal Scrolling Products Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[250px] sm:w-[280px] lg:w-[295px] flex-shrink-0 snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
