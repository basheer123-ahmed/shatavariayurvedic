import React from 'react';
import { products } from '../data/products';
import { ProductGrid } from './ProductGrid';

export const BestSellers = () => {
  const bestSellers = products.filter(p => p.isBestSeller);

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#E8DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductGrid
          products={bestSellers}
          subtitle="Customer Favorites"
          title="Best Selling Ayurvedic Formulations"
          viewAllLink="/shop?filter=bestsellers"
          viewAllText="Explore All Best Sellers"
          carousel={true}
        />
      </div>
    </section>
  );
};
