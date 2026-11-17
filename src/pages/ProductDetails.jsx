import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';
import {
  Star,
  ShoppingBag,
  ShieldCheck,
  Truck,
  Leaf,
  Plus,
  Minus,
  Sparkles,
  Award,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Check
} from 'lucide-react';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, openCart } = useCart();

  const product = products.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('benefits'); // 'benefits' | 'ingredients' | 'howToUse' | 'quality'

  useEffect(() => {
    if (product) {
      setSelectedSize(product.volumeOrWeight || (product.sizes && product.sizes[0]) || '');
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [product, id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-[#FAF7F2]">
        <h2 className="text-2xl font-bold text-[#153C27] mb-2">Product Not Found</h2>
        <p className="text-sm text-stone-600 mb-6">The Ayurvedic formulation you requested could not be located.</p>
        <Link
          to="/shop"
          className="px-6 py-3 rounded-full bg-[#153C27] text-white text-xs font-bold uppercase tracking-wider"
        >
          Return to Herbal Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize);
    openCart();
  };

  // Related products from same category
  const relatedProducts = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8 sm:py-14 border-b border-[#E8DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-xs text-[#7B8B7D] mb-8 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-[#153C27] transition">Home</Link>
          <ChevronRight size={13} />
          <Link to="/shop" className="hover:text-[#153C27] transition">Shop</Link>
          <ChevronRight size={13} />
          <Link to={`/shop?category=${product.categoryId}`} className="hover:text-[#153C27] transition">
            {product.category}
          </Link>
          <ChevronRight size={13} />
          <span className="text-[#153C27] font-semibold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Product Details Main Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E9DFCF] shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Product Image Area (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full aspect-square bg-gradient-to-b from-[#FAF8F5] to-white rounded-2xl border border-[#F0EAE0] p-6 flex items-center justify-center overflow-hidden shadow-inner group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  {product.discount > 0 && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#B73E1E] text-white shadow-sm">
                      {product.discount}% OFF
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#153C27] text-[#ECC468] shadow-sm">
                      Best Seller
                    </span>
                  )}
                </div>
              </div>

              {/* Trust Micro-Pills under image */}
              <div className="mt-4 grid grid-cols-3 gap-2 w-full text-center">
                <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#EBE3D5] text-[11px] font-semibold text-[#153C27]">
                  🌿 100% Herbal
                </div>
                <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#EBE3D5] text-[11px] font-semibold text-[#153C27]">
                  ✨ GMP Certified
                </div>
                <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#EBE3D5] text-[11px] font-semibold text-[#153C27]">
                  🛡️ Lab Tested
                </div>
              </div>
            </div>

            {/* Right Info Area (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Category & Rating */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C59A3F]">
                  {product.category}
                </span>

                <div className="flex items-center gap-1.5 text-xs font-bold text-[#153C27] bg-[#EBF3ED] px-3 py-1 rounded-full">
                  <Star size={14} className="fill-[#C59A3F] text-[#C59A3F]" />
                  <span>{product.rating}</span>
                  <span className="text-[#6F8271] font-normal">({product.reviewCount} Reviews)</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h1
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#153C27] leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {product.name}
                </h1>
                {product.subtitle && (
                  <p className="mt-1 text-sm sm:text-base font-medium text-[#7D6B4E]">
                    {product.subtitle}
                  </p>
                )}
              </div>

              {/* Price Block */}
              <div className="p-3.5 sm:p-4 bg-[#FAF7F2] rounded-2xl border border-[#EBE3D5] flex flex-wrap items-baseline gap-2 sm:gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#153C27]">
                  ₹{product.price}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-sm sm:text-base text-stone-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="text-xs text-[#205232] font-semibold bg-[#E2EFE5] px-2.5 py-0.5 rounded-full">
                    Save ₹{product.originalPrice - product.price} ({product.discount}%)
                  </span>
                )}
                <span className="w-full sm:w-auto sm:ml-auto text-[11px] text-[#788879]">Inclusive of all taxes</span>
              </div>

              {/* Short Description */}
              <p className="text-sm text-[#556657] leading-relaxed">
                {product.fullDescription || product.shortDescription}
              </p>

              {/* Size / Variation Selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#153C27]">
                    Select Size / Package:
                  </label>
                  <div className="flex items-center gap-2">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedSize(s)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                          selectedSize === s
                            ? 'bg-[#153C27] text-white shadow-md'
                            : 'bg-[#F6F1E8] text-[#153C27] hover:bg-[#EAE1D1]'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Controls & Add to Cart Action Bar */}
              <div className="pt-4 border-t border-[#F0EAE0] flex flex-col sm:flex-row items-center gap-3">
                
                {/* Quantity */}
                <div className="flex items-center border border-[#D9CDB8] rounded-xl bg-[#FAF8F5] p-1 w-full sm:w-auto justify-between sm:justify-start">
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="p-2 hover:text-[#C59A3F] text-stone-600 transition"
                  >
                    <Minus size={15} />
                  </button>
                  <span className="px-4 text-sm font-bold text-[#153C27]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="p-2 hover:text-[#C59A3F] text-stone-600 transition"
                  >
                    <Plus size={15} />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#153C27] hover:bg-[#1E5437] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#153C27]/20 transition active:scale-95"
                >
                  <ShoppingBag size={16} />
                  <span>Add to Wellness Bag</span>
                </button>

                {/* Buy Now Button */}
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-[#C59A3F] hover:bg-[#D4AF37] text-[#153C27] font-bold text-xs uppercase tracking-wider shadow-md transition active:scale-95 whitespace-nowrap"
                >
                  Buy Now
                </button>
              </div>

              {/* Free Shipping Highlight Banner */}
              <div className="p-3 bg-[#EBF3ED] rounded-xl flex items-center gap-2.5 text-xs text-[#1E5437]">
                <Truck size={16} className="text-[#C59A3F] flex-shrink-0" />
                <span>
                  <strong>Free Express Shipping</strong> across India on orders over ₹499. COD available at checkout.
                </span>
              </div>

            </div>

          </div>

          {/* Tabbed In-Depth Information: Benefits / Ingredients / Usage / Certifications */}
          <div className="mt-14 pt-8 border-t border-[#E8DEC9]">
            
            {/* Tab Navigation - High-Contrast Distinct Pill Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 no-scrollbar">
              {[
                { id: 'benefits', label: 'Key Vedic Benefits', icon: <Sparkles size={14} /> },
                { id: 'ingredients', label: 'Pure Ingredients', icon: <Leaf size={14} /> },
                { id: 'howToUse', label: 'How to Use & Dosage', icon: <Award size={14} /> },
                { id: 'quality', label: 'Quality Standards', icon: <ShieldCheck size={14} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase whitespace-nowrap transition-all shadow-xs ${
                    activeTab === tab.id
                      ? 'bg-[#153C27] text-white shadow-md ring-2 ring-[#153C27]'
                      : 'bg-white text-[#3C4C3E] hover:text-[#153C27] hover:bg-[#F4EFE6] border border-[#D9CDB8]'
                  }`}
                >
                  <span className={activeTab === tab.id ? 'text-[#ECC468]' : 'text-[#C59A3F]'}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content Display - Crystal Clear High-Contrast Cards */}
            <div className="py-6">
              {activeTab === 'benefits' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                  {product.benefits ? (
                    product.benefits.map((b, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#E5DAC6] hover:border-[#153C27] shadow-xs hover:shadow-md transition-all duration-200 group"
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#153C27] group-hover:bg-[#1E5437] text-[#ECC468] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                          <Check size={16} strokeWidth={2.8} />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-[#153C27] leading-relaxed">
                          {b}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm font-medium text-[#153C27]">Formulated to support natural wellness, equilibrium, and vitality.</p>
                  )}
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm font-semibold text-[#153C27]">
                    Every batch uses only ethically wild-crafted botanicals sourced directly from their native agro-climatic zones:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {product.ingredients ? (
                      product.ingredients.map((ing, i) => (
                        <div
                          key={i}
                          className="p-4 bg-white rounded-2xl border-2 border-[#E5DAC6] hover:border-[#153C27] shadow-xs flex items-center gap-3 transition"
                        >
                          <div className="w-8 h-8 rounded-full bg-[#EBF3ED] text-[#153C27] flex items-center justify-center flex-shrink-0 font-bold">
                            <Leaf size={16} className="text-[#C59A3F]" />
                          </div>
                          <div>
                            <span className="text-xs sm:text-sm font-bold text-[#153C27] block">
                              {ing}
                            </span>
                            <span className="text-[10px] text-[#718273] uppercase tracking-wider font-semibold">
                              Certified Organic Botanical
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm font-medium text-[#153C27]">100% Pure Botanical Herbs.</p>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'howToUse' && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#E5DAC6] shadow-xs space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#C59A3F] uppercase tracking-wider">
                    <Award size={16} />
                    <span>Recommended Ayurvedic Anupana (Medium)</span>
                  </div>
                  <h4
                    className="text-lg sm:text-xl font-bold text-[#153C27] leading-snug"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Classical Dinacharya Regimen &amp; Consumption Protocol
                  </h4>
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9DFCF] text-xs sm:text-sm font-semibold text-[#153C27] leading-relaxed">
                    {product.howToUse || 'Take 1 to 2 teaspoons with lukewarm water or warm milk twice daily after meals.'}
                  </div>
                  <div className="flex items-start gap-2 text-[11px] font-medium text-[#68796A] pt-1 border-t border-[#F0EAE0]">
                    <Sparkles size={14} className="text-[#C59A3F] flex-shrink-0 mt-0.5" />
                    <span>
                      For targeted chronic conditions or specialized herbal synergy, consult with your Ayurvedic Vaidya or physician for customized timing and vehicle.
                    </span>
                  </div>
                </div>
              )}

              {activeTab === 'quality' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {product.certifications ? (
                    product.certifications.map((c, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border-2 border-[#E5DAC6] hover:border-[#153C27] text-[#153C27] shadow-xs transition"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#153C27] text-[#ECC468] flex items-center justify-center flex-shrink-0 font-bold shadow-2xs">
                          <ShieldCheck size={17} />
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-bold block">{c}</span>
                          <span className="text-[10px] text-[#718273] uppercase tracking-wider font-semibold">
                            Tirupati Facility Batch Audited
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm font-medium text-[#153C27]">Manufactured under strict GMP and Ayush standards.</p>
                  )}
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Related Products Carousel / Grid */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C59A3F] block mb-1">
                Complementary Formulations
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#153C27]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                You May Also Like
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
