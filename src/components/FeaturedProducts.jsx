import React from 'react';
import { products } from '../data/products';
import { ProductGrid } from './ProductGrid';

export const FeaturedProducts = () => {
  const featured = products.filter(p => p.isFeatured);

  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#E8DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductGrid
          products={featured}
          subtitle="Hand-Selected by Vaidyas"
          title="Featured Ayurvedic Formulations"
          viewAllLink="/shop?filter=featured"
          viewAllText="View All Featured"
          carousel={true}
        />
      </div>
    </section>
  );
};
