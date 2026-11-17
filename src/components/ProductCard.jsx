import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Eye, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="product-card group bg-white rounded-2xl border border-[#E9DFCF] hover:border-[#C59A3F]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden relative">
      
      {/* Top Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
        {product.discount > 0 && (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#B73E1E] text-white shadow-sm">
            {product.discount}% OFF
          </span>
        )}
        {product.isBestSeller && (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#153C27] text-[#ECC468] shadow-sm">
            Best Seller
          </span>
        )}
      </div>

      {/* Product Image Area - Perfectly Symmetrical 1:1 Aspect Ratio */}
      <Link
        to={`/product/${product.id}`}
        className="block relative w-full aspect-square bg-gradient-to-b from-[#FAF8F5] to-white p-3 overflow-hidden border-b border-[#F4EFE6]"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-x-0 bottom-2.5 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 px-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#153C27] text-xs font-semibold shadow-md hover:bg-[#153C27] hover:text-white transition">
            <Eye size={13} />
            <span>View Details</span>
          </span>
        </div>
      </Link>

      {/* Card Details Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[10px] font-semibold text-[#8C7653] uppercase tracking-wider truncate max-w-[130px]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-[11px] font-bold text-[#153C27] bg-[#EBF3ED] px-1.5 py-0.5 rounded">
              <Star size={11} className="fill-[#C59A3F] text-[#C59A3F]" />
              <span>{product.rating}</span>
              {product.reviewCount && (
                <span className="text-[#6C7E6E] font-normal text-[10px]">({product.reviewCount})</span>
              )}
            </div>
          </div>

          {/* Product Title - Clean 2-line fixed height for consistent grid baseline */}
          <Link to={`/product/${product.id}`}>
            <h3
              className="font-bold text-sm sm:text-base text-[#153C27] hover:text-[#C59A3F] transition-colors leading-snug line-clamp-2 min-h-[2.6rem]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {product.name}
            </h3>
          </Link>

          {/* Short Description - Clean 2-line fixed height */}
          <p className="mt-1 text-xs text-[#5D6F60] line-clamp-2 min-h-[2rem] leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Pricing & Actions */}
        <div className="mt-3 pt-2.5 border-t border-[#F2ECE1]">
          {/* Price Row */}
          <div className="flex items-baseline gap-2 mb-2.5">
            <span className="text-base sm:text-lg font-bold text-[#153C27]">
              ₹{product.price}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-[#9DA89F] line-through">
                ₹{product.originalPrice}
              </span>
            )}
            {product.volumeOrWeight && (
              <span className="ml-auto text-[11px] font-medium text-[#7A8A7C]">
                {product.volumeOrWeight}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-1.5">
            <button
              type="button"
              onClick={handleAddToCart}
              className="py-2 px-2 rounded-xl bg-[#153C27] hover:bg-[#1E5437] text-white text-[11px] font-semibold flex items-center justify-center gap-1 shadow-xs hover:shadow transition active:scale-95"
            >
              <ShoppingBag size={13} />
              <span>Add to Cart</span>
            </button>

            <Link
              to={`/product/${product.id}`}
              className="py-2 px-2 rounded-xl bg-[#F6F1E8] hover:bg-[#EAE1D1] text-[#153C27] text-[11px] font-semibold flex items-center justify-center gap-1 transition text-center"
            >
              <span>Details</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
