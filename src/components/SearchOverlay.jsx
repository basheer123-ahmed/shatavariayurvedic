import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Star, ArrowRight, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { Link, useNavigate } from 'react-router-dom';

export const SearchOverlay = () => {
  const { isSearchOpen, closeSearch } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSearchTerm('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isSearchOpen) {
        closeSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, closeSearch]);

  if (!isSearchOpen) return null;

  const filteredProducts = searchTerm.trim() === ''
    ? []
    : products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.ingredients && p.ingredients.some(i => i.toLowerCase().includes(searchTerm.toLowerCase())))
      );

  const handleProductClick = (id) => {
    closeSearch();
    navigate(`/product/${id}`);
  };

  const popularSearches = ['Shatavari', 'Triphala', 'Kumkumadi', 'Hair Oil', 'Amla', 'Shilajit', 'Ashwagandha'];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Top Search Area */}
      <div className="bg-[#FAF7F2] border-b border-[#E0D5C1] shadow-xl p-4 sm:p-6 w-full max-w-4xl mx-auto rounded-b-3xl">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[#153C27]">
            <Search size={18} className="text-[#C59A3F]" />
            <span>Search Shatavari Ayurvedic</span>
          </div>
          <button
            type="button"
            onClick={closeSearch}
            className="p-1.5 rounded-full hover:bg-[#EAE1D1] text-stone-600 transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Input box */}
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type herb or product name (e.g., Shatavari, Triphala, Saffron)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-[#D9CBB5] text-base text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#153C27] shadow-inner"
          />
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
        </div>

        {/* Popular Tags */}
        <div className="mt-4 flex items-center flex-wrap gap-2 text-xs">
          <span className="text-[#7A8A7C] font-medium flex items-center gap-1">
            <Tag size={12} />
            <span>Popular:</span>
          </span>
          {popularSearches.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSearchTerm(tag)}
              className="px-2.5 py-1 rounded-full bg-[#EFE8DC] hover:bg-[#E0D5C1] text-[#153C27] font-medium transition"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results Container */}
      <div
        className="flex-1 overflow-y-auto max-w-4xl w-full mx-auto p-4 sm:p-6"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeSearch();
        }}
      >
        {searchTerm.trim() !== '' && (
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-[#E9DFC0]">
            <div className="text-xs font-semibold text-[#768778] uppercase tracking-wider mb-4">
              Found {filteredProducts.length} Results for "{searchTerm}"
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-12 text-center text-stone-500 space-y-2">
                <p className="font-semibold text-[#153C27]">No Ayurvedic products found matching your search.</p>
                <p className="text-xs">Try searching for generic terms like "Juice", "Oil", "Shatavari", or "Cream".</p>
              </div>
            ) : (
              <div className="divide-y divide-[#F0E8DC]">
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleProductClick(p.id)}
                    className="py-3.5 px-2 hover:bg-[#FAF7F2] rounded-xl flex items-center gap-4 cursor-pointer transition group"
                  >
                    <div className="w-14 h-14 rounded-lg bg-[#FAF7F2] p-1 flex-shrink-0 border border-[#EBE3D5]">
                      <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-[#C59A3F] uppercase tracking-wider">{p.category}</div>
                      <div className="text-sm font-bold text-[#153C27] group-hover:text-[#C59A3F] transition truncate">
                        {p.name}
                      </div>
                      <div className="text-xs text-stone-500 truncate">{p.shortDescription}</div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <div className="text-sm font-bold text-[#153C27]">₹{p.price}</div>
                      {p.originalPrice && (
                        <div className="text-xs text-stone-400 line-through">₹{p.originalPrice}</div>
                      )}
                    </div>

                    <ArrowRight size={16} className="text-[#C59A3F] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
