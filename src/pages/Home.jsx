import React from 'react';
import { HeroBanner } from '../components/HeroBanner';
import { CategoryShowcase } from '../components/CategoryShowcase';
import { AboutSection } from '../components/AboutSection';
import { BestSellers } from '../components/BestSellers';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { CollectionSection } from '../components/CollectionSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { Newsletter } from '../components/Newsletter';
import { products } from '../data/products';

export const Home = () => {
  // Collections for sections 7, 8, 9 with full product sets for smooth horizontal scrolling
  const herbalWellnessProducts = products.filter(
    p => p.categoryId === 'ayurvedic-wellness' || p.categoryId === 'daily-wellness' || p.categoryId === 'herbal-supplements'
  );

  const naturalSkincareProducts = products.filter(
    p => p.categoryId === 'natural-skincare'
  );

  const hairCareProducts = products.filter(
    p => p.categoryId === 'hair-care' || p.id === 'wild-amla-juice' || p.id === 'brahmi-memory-tablets' || p.id === 'shatavari-kalpa-granules'
  );

  return (
    <div id="home" className="home-page">
      {/* Dynamic Scrolling Hero Carousel Banner */}
      <HeroBanner />

      {/* Shop by Category */}
      <CategoryShowcase />

      {/* About Us Story Section */}
      <AboutSection />

      {/* Products Section */}
      <div id="products">
        {/* Best Sellers Horizontal Scrolling Carousel */}
        <BestSellers />

        {/* Featured Ayurvedic Products Carousel */}
        <FeaturedProducts />

        {/* Herbal Wellness Collection Carousel */}
        <CollectionSection
          title="Herbal Wellness Collection"
          subtitle="Rasayana & Vitality"
          description="Classical Shatavari preparations, rejuvenating vitality juices, and stress-balancing herbal solutions."
          categorySlug="ayurvedic-wellness"
          products={herbalWellnessProducts}
          bgColor="bg-[#FAF7F2]"
        />

        {/* Natural Skincare Collection Carousel */}
        <CollectionSection
          title="Natural Skincare Collection"
          subtitle="Vedic Radiance & Purity"
          description="Authentic Kumkumadi tailams, nourishing saffron moisturizers, and clarifying herbal cleansers."
          categorySlug="natural-skincare"
          products={naturalSkincareProducts}
          bgColor="bg-white"
        />

        {/* Hair Care Collection Carousel */}
        <CollectionSection
          title="Hair Care Collection"
          subtitle="Scalp Health & Root Nourishment"
          description="Potent Bhringraj herb oils and sulfate-free onion cleansers to curb hair fall and restore lustre."
          categorySlug="hair-care"
          products={hairCareProducts}
          bgColor="bg-[#FAF7F2]"
        />
      </div>

      {/* Why Choose Shatavari Ayurvedic? */}
      <WhyChooseUs />

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Newsletter Subscription */}
      <Newsletter />
    </div>
  );
};
