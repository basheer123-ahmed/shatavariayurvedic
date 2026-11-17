import React, { useState } from 'react';
import { Star, CheckCircle, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Meenakshi Sundaram',
      role: 'Ayurvedic Practitioner & Wellness Mentor',
      location: 'Bengaluru, Karnataka',
      productUsed: 'Shatavari Kalpa Granules',
      rating: 5,
      review:
        'I routinely recommend Shatavari Kalpa to women suffering from hormonal fatigue and postpartum depletion. The purity of Shatavari Ayurvedic’s preparation with authentic cow ghee and fragrant elaichi makes it both clinically effective and deeply enjoyable to consume.'
    },
    {
      id: 2,
      name: 'Pooja Deshmukh',
      role: 'Verified Buyer',
      location: 'Pune, Maharashtra',
      productUsed: 'Kumkumadi Miraculous Beauty Oil',
      rating: 5,
      review:
        'After 3 weeks of applying 3 drops of Kumkumadi Tailam before sleeping, my stubborn acne spots and dullness have noticeably faded. It feels truly regal without feeling heavy on my combination skin.'
    },
    {
      id: 3,
      name: 'Rajesh K. Sharma',
      role: 'Verified Buyer',
      location: 'Jaipur, Rajasthan',
      productUsed: 'Triphala Detox & Digestion Juice',
      rating: 5,
      review:
        'Unlike synthetic laxatives that irritate the stomach, this Triphala juice is gentle, authentic, and naturally effective. My morning acidity and sluggish digestion improved within a single week.'
    },
    {
      id: 4,
      name: 'Ananya Roy',
      role: 'Verified Buyer',
      location: 'Kolkata, West Bengal',
      productUsed: 'Bhringraj & Brahmi Hair Oil',
      rating: 5,
      review:
        'My hair fall had doubled due to stress and hard water. The cooling aroma of Bhringraj and Brahmi calms my head instantly, and after a month I can see baby hairs growing along my temples!'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E8DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C59A3F] block">
            Real Stories, Real Wellness
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#153C27]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Words of Trust from Our Patrons
          </h2>
          <p className="text-sm sm:text-base text-[#627364]">
            Read how authentic Vedic formulations have enriched the lives of people across India.
          </p>
        </div>

        {/* Desktop 4-grid & Mobile carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#EBE3D3] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-[#C59A3F] text-[#C59A3F]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#475749] italic leading-relaxed mb-4">
                  "{t.review}"
                </p>
              </div>

              {/* Bottom Customer Info */}
              <div className="pt-4 border-t border-[#E8DEC9]">
                <div className="text-sm font-bold text-[#153C27] flex items-center gap-1.5">
                  <span>{t.name}</span>
                  <CheckCircle size={14} className="text-[#153C27]" />
                </div>
                <div className="text-[11px] text-[#7A8A7C] font-medium">
                  {t.location}
                </div>
                <div className="mt-1 text-[11px] font-semibold text-[#8C6239] bg-[#EFE7D8] px-2 py-0.5 rounded inline-block">
                  Verified: {t.productUsed}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
