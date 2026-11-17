import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { ProductCard } from '../components/ProductCard';
import { Search, Filter, SlidersHorizontal, ArrowUpDown, X, Sparkles, Check } from 'lucide-react';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const filterParam = searchParams.get('filter') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity'); // 'popularity' | 'price-asc' | 'price-desc' | 'rating'
  const [priceRange, setPriceRange] = useState(1500);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  // Sync state with URL params
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Compute filtered & sorted products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.categoryId !== selectedCategory) {
        return false;
      }

      // Predefined special filters (bestsellers / featured)
      if (filterParam === 'bestsellers' && !p.isBestSeller) {
        return false;
      }
      if (filterParam === 'featured' && !p.isFeatured) {
        return false;
      }

      // Max price filter
      if (p.price > priceRange) {
        return false;
      }

      // Search keyword filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesCat = p.category.toLowerCase().includes(query);
        const matchesDesc = p.shortDescription.toLowerCase().includes(query);
        const matchesIng = p.ingredients && p.ingredients.some(i => i.toLowerCase().includes(query));
        if (!matchesName && !matchesCat && !matchesDesc && !matchesIng) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        return a.price - b.price;
      } else if (sortBy === 'price-desc') {
        return b.price - a.price;
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      } else {
        // default: popularity / review count
        return (b.reviewCount || 0) - (a.reviewCount || 0);
      }
    });
  }, [selectedCategory, filterParam, searchQuery, sortBy, priceRange]);

  const handleCategorySelect = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('popularity');
    setPriceRange(1500);
    setSearchParams({});
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8 sm:py-12 border-b border-[#E8DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Shop Header */}
        <div className="mb-8 text-center sm:text-left">
          <div className="text-xs font-semibold text-[#C59A3F] uppercase tracking-widest mb-1.5 flex items-center justify-center sm:justify-start gap-1.5">
            <Sparkles size={14} />
            <span>Shatavari Ayurvedic Apothecary</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl font-bold text-[#153C27]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pure Ayurvedic Catalog
          </h1>
          <p className="mt-1 text-sm text-[#5F7061] max-w-2xl">
            Explore our classical Rasayanas, fresh cold-pressed herbal juices, organic churnas, and botanical beauty oils.
          </p>
        </div>

        {/* Quick Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
          <button
            type="button"
            onClick={() => handleCategorySelect('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
              selectedCategory === 'all'
                ? 'bg-[#153C27] text-[#ECC468] border border-[#153C27]'
                : 'bg-white hover:bg-[#F2ECE1] text-[#3E4A3F] border border-[#D9CBB5]'
            }`}
          >
            All Formulations ({products.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleCategorySelect(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 shadow-sm ${
                selectedCategory === cat.id
                  ? 'bg-[#153C27] text-[#ECC468] border border-[#153C27]'
                  : 'bg-white hover:bg-[#F2ECE1] text-[#3E4A3F] border border-[#D9CBB5]'
              }`}
            >
              <img src={cat.image} alt="" className="w-4 h-4 rounded-full object-cover" />
              <span>{cat.name} ({cat.itemCount})</span>
            </button>
          ))}
        </div>

        {/* Top Control Bar: Search Input, Price Slider, and Sort Select */}
        <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm border border-[#E9DFCF] flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by herb, juice, or benefit..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#D9CBB5] text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#153C27]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Right Controls: Price Filter + Sort Dropdown */}
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            {/* Inline Price Range Filter */}
            <div className="flex items-center gap-2 text-xs text-[#526454]">
              <span className="font-semibold text-[#153C27]">Max Price: ₹{priceRange}</span>
              <input
                type="range"
                min="250"
                max="1600"
                step="50"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-24 sm:w-32 accent-[#153C27] cursor-pointer"
                title={`Filter products up to ₹${priceRange}`}
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#6D7D6F] font-medium hidden sm:inline flex items-center gap-1">
                <ArrowUpDown size={13} />
                <span>Sort:</span>
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="py-2.5 px-3.5 rounded-xl bg-[#FAF7F2] border border-[#D9CBB5] text-xs font-semibold text-[#153C27] focus:outline-none focus:ring-1 focus:ring-[#153C27] cursor-pointer"
              >
                <option value="popularity">Most Popular &amp; Best Rated</option>
                <option value="rating">Highest Customer Rating</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

        </div>

        {/* Product Counter and Active Filters Bar */}
        <div className="flex items-center justify-between mb-6 pb-2.5 border-b border-[#E8DEC9]">
          <div className="text-xs font-medium text-[#68796A]">
            Showing <strong className="text-[#153C27] font-bold">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'product' : 'products'}
            {selectedCategory !== 'all' && (
              <span className="ml-2 font-normal text-[#C59A3F]">
                in {categories.find(c => c.id === selectedCategory)?.name || selectedCategory}
              </span>
            )}
          </div>

          {(selectedCategory !== 'all' || searchQuery !== '' || priceRange < 1500) && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="text-xs font-bold text-[#C59A3F] hover:text-[#966723] flex items-center gap-1"
            >
              <X size={13} />
              <span>Clear All Filters</span>
            </button>
          )}
        </div>

        {/* Full-Width Symmetrical 4-Column Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E9DFCF] shadow-sm space-y-4 my-8">
            <div className="w-16 h-16 rounded-full bg-[#FAF7F2] text-stone-400 flex items-center justify-center mx-auto">
              <Search size={28} />
            </div>
            <h3 className="text-lg font-bold text-[#153C27]">
              No matching Ayurvedic formulations found
            </h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              Try widening your price range or adjusting your search keyword.
            </p>
            <button
              type="button"
              onClick={handleClearFilters}
              className="px-6 py-2.5 rounded-full bg-[#153C27] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#1E5437] transition"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

      </div>

      {/* Mobile Filters Drawer */}
      {showMobileFilter && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowMobileFilter(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FAF7F2] shadow-2xl p-5 flex flex-col z-50">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8DEC9]">
              <h3 className="font-bold text-base text-[#153C27]">Filter Catalog</h3>
              <button
                type="button"
                onClick={() => setShowMobileFilter(false)}
                className="p-1 rounded-full text-stone-500 hover:text-stone-900"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-6">
              {/* Categories */}
              <div>
                <h4 className="font-bold text-xs text-[#153C27] uppercase tracking-wider mb-2">Categories</h4>
                <div className="space-y-1">
                  <button
                    type="button"
                    onClick={() => {
                      handleCategorySelect('all');
                      setShowMobileFilter(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium ${
                      selectedCategory === 'all' ? 'bg-[#153C27] text-white font-bold' : 'text-stone-700'
                    }`}
                  >
                    All Formulations ({products.length})
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => {
                        handleCategorySelect(c.id);
                        setShowMobileFilter(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium ${
                        selectedCategory === c.id ? 'bg-[#153C27] text-white font-bold' : 'text-stone-700'
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-xs text-[#153C27] uppercase tracking-wider">Max Price</h4>
                  <span className="text-xs font-bold text-[#153C27]">₹{priceRange}</span>
                </div>
                <input
                  type="range"
                  min="250"
                  max="1600"
                  step="50"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-[#153C27]"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8DEC9]">
              <button
                type="button"
                onClick={() => setShowMobileFilter(false)}
                className="w-full py-3 bg-[#153C27] text-white text-xs font-bold uppercase rounded-xl tracking-wider"
              >
                Apply Filters ({filteredProducts.length} Results)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
