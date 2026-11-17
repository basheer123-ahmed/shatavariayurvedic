import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { useCart } from '../context/CartContext';
import { categories } from '../data/categories';

export const Navbar = () => {
  const { totalItems, openCart, openSearch } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3'
            : 'bg-[#FAF7F2] py-2.5 sm:py-3.5 border-b border-[#EBE3D5]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Main Header Bar */}
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Logo />
            </div>

            {/* Desktop Navigation Links (md: and above) */}
            <nav className="hidden md:flex items-center gap-1.5 lg:gap-2.5">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-[#153C27] bg-[#EAE3D4]/90 border border-[#D9CDB8] shadow-xs'
                      : 'text-[#3E4A3F] hover:text-[#153C27] hover:bg-[#F2ECE1]'
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-[#153C27] bg-[#EAE3D4]/90 border border-[#D9CDB8] shadow-xs'
                      : 'text-[#3E4A3F] hover:text-[#153C27] hover:bg-[#F2ECE1]'
                  }`
                }
              >
                About Us
              </NavLink>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-semibold tracking-wide transition-colors duration-200 flex items-center gap-1 whitespace-nowrap ${
                      isActive || location.pathname.startsWith('/product') || location.pathname.startsWith('/shop')
                        ? 'text-[#153C27] bg-[#EAE3D4]/90 border border-[#D9CDB8] shadow-xs'
                        : 'text-[#3E4A3F] hover:text-[#153C27] hover:bg-[#F2ECE1]'
                    }`
                  }
                >
                  <span>Products</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-[#C59A3F]' : ''}`}
                  />
                </NavLink>

                {/* Dropdown Menu */}
                {productsDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-72 bg-white rounded-2xl shadow-2xl border border-[#E8DEC9] py-3 px-2 z-50 animate-fadeIn">
                    <Link
                      to="/products"
                      onClick={() => setProductsDropdownOpen(false)}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold text-[#153C27] bg-[#F7F3EB] hover:bg-[#EAE3D4] mb-2 transition"
                    >
                      <span>Explore All 16 Formulations</span>
                      <Sparkles size={14} className="text-[#C59A3F]" />
                    </Link>

                    <div className="space-y-1">
                      {categories.map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/products?category=${cat.id}`}
                          onClick={() => setProductsDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-[#3A483B] hover:text-[#153C27] hover:bg-[#FAF7F2] transition group"
                        >
                          <img
                            src={cat.image}
                            alt=""
                            className="w-7 h-7 rounded-full object-cover border border-[#E2D7C2]"
                          />
                          <div className="flex-1">
                            <div className="font-semibold group-hover:text-[#C59A3F] transition-colors">{cat.name}</div>
                            <div className="text-[10px] text-[#7C8D7E]">{cat.itemCount} Formulations</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-[#153C27] bg-[#EAE3D4]/90 border border-[#D9CDB8] shadow-xs'
                      : 'text-[#3E4A3F] hover:text-[#153C27] hover:bg-[#F2ECE1]'
                  }`
                }
              >
                Contact Us
              </NavLink>
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Search Icon */}
              <button
                type="button"
                onClick={openSearch}
                className="p-2 sm:p-2.5 text-[#153C27] hover:text-[#C59A3F] hover:bg-[#F0EAE0] rounded-full transition-colors relative"
                aria-label="Search Shatavari Ayurvedic Products"
                title="Search Products"
              >
                <Search size={20} />
              </button>

              {/* Account Icon (Desktop only) */}
              <div className="relative hidden sm:block">
                <button
                  type="button"
                  onClick={() => setIsAccountOpen(!isAccountOpen)}
                  className="p-2 sm:p-2.5 text-[#153C27] hover:text-[#C59A3F] hover:bg-[#F0EAE0] rounded-full transition-colors"
                  aria-label="Customer Account"
                  title="My Account"
                >
                  <User size={20} />
                </button>

                {/* Account Preview Dropdown */}
                {isAccountOpen && (
                  <div
                    className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-[#E8DEC9] py-3 px-4 z-50 animate-fadeIn"
                    onMouseLeave={() => setIsAccountOpen(false)}
                  >
                    <div className="flex items-center gap-3 pb-3 border-b border-[#F0EAE0]">
                      <div className="w-10 h-10 rounded-full bg-[#EBF3ED] text-[#153C27] flex items-center justify-center font-bold">
                        SA
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#153C27]">Namaste, Guest!</div>
                        <div className="text-xs text-[#7B8B7D]">Welcome to Shatavari</div>
                      </div>
                    </div>
                    <div className="py-2 text-xs space-y-1 text-[#465348]">
                      <div className="p-2 hover:bg-[#F9F6F0] rounded cursor-pointer font-medium">My Orders &amp; Tracking</div>
                      <div className="p-2 hover:bg-[#F9F6F0] rounded cursor-pointer font-medium">Ayurvedic Dosha Profile</div>
                      <div className="p-2 hover:bg-[#F9F6F0] rounded cursor-pointer font-medium">Saved Prescriptions</div>
                      <div className="p-2 hover:bg-[#F9F6F0] rounded cursor-pointer font-medium">Reward Points: <span className="text-[#C59A3F] font-bold">150 Pts</span></div>
                    </div>
                    <div className="pt-2 border-t border-[#F0EAE0]">
                      <button
                        onClick={() => setIsAccountOpen(false)}
                        className="w-full py-1.5 bg-[#153C27] text-white rounded-lg text-xs font-semibold hover:bg-[#1E5437] transition"
                      >
                        Sign In / Register
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Shopping Bag / Cart with Dynamic Count */}
              <button
                type="button"
                onClick={openCart}
                className="p-2 sm:p-2.5 text-[#153C27] hover:text-[#C59A3F] hover:bg-[#F0EAE0] rounded-full transition-colors relative flex items-center justify-center"
                aria-label={`Shopping Cart with ${totalItems} items`}
                title="View Shopping Bag"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#C59A3F] text-white text-[10px] font-bold w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger Button (Visible only on mobile < md) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#153C27] hover:text-[#C59A3F] hover:bg-[#F0EAE0] rounded-full transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Secondary Quick-Nav Strip (Visible only on mobile < md) */}
          <nav className="flex md:hidden items-center justify-between gap-1 pt-2.5 mt-2 border-t border-[#EAE0CF]">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex-1 text-center py-1 px-1 rounded-lg text-xs font-semibold transition ${
                  isActive
                    ? 'text-[#153C27] bg-[#EAE3D4] font-bold shadow-2xs'
                    : 'text-[#48564A] hover:bg-[#F4EEE2]'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex-1 text-center py-1 px-1 rounded-lg text-xs font-semibold transition ${
                  isActive
                    ? 'text-[#153C27] bg-[#EAE3D4] font-bold shadow-2xs'
                    : 'text-[#48564A] hover:bg-[#F4EEE2]'
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `flex-1 text-center py-1 px-1 rounded-lg text-xs font-semibold transition ${
                  isActive || location.pathname.startsWith('/product') || location.pathname.startsWith('/shop')
                    ? 'text-[#153C27] bg-[#EAE3D4] font-bold shadow-2xs'
                    : 'text-[#48564A] hover:bg-[#F4EEE2]'
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex-1 text-center py-1 px-1 rounded-lg text-xs font-semibold transition ${
                  isActive
                    ? 'text-[#153C27] bg-[#EAE3D4] font-bold shadow-2xs'
                    : 'text-[#48564A] hover:bg-[#F4EEE2]'
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#FAF7F2] shadow-2xl flex flex-col z-50">
            {/* Drawer Header */}
            <div className="p-4 border-b border-[#E8DEC9] flex items-center justify-between bg-white">
              <Logo />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-stone-500 hover:text-stone-900 rounded-full"
              >
                <X size={22} />
              </button>
            </div>

            {/* Quick Search trigger in mobile */}
            <div className="p-3.5 bg-[#F2ECE1] border-b border-[#E8DEC9]">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openSearch();
                }}
                className="w-full flex items-center justify-between px-3 py-2 bg-white rounded-xl border border-[#D9CDB8] text-xs text-[#5D6B5E]"
              >
                <span className="flex items-center gap-2">
                  <Search size={15} className="text-[#C59A3F]" />
                  <span>Search Ayurvedic products...</span>
                </span>
                <span className="text-[10px] bg-[#EBF3ED] text-[#153C27] px-2 py-0.5 rounded font-bold">GO</span>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
              <NavLink
                to="/"
                end
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                    isActive ? 'bg-[#153C27] text-white' : 'text-[#2D392E] hover:bg-[#EAE3D4]'
                  }`
                }
              >
                <span>Home</span>
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                    isActive ? 'bg-[#153C27] text-white' : 'text-[#2D392E] hover:bg-[#EAE3D4]'
                  }`
                }
              >
                <span>About Us</span>
              </NavLink>

              <div className="pt-1">
                <NavLink
                  to="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                      isActive || location.pathname.startsWith('/product')
                        ? 'bg-[#153C27] text-white'
                        : 'text-[#2D392E] hover:bg-[#EAE3D4]'
                    }`
                  }
                >
                  <span>Products</span>
                  <span className="text-[10px] bg-[#ECC468] text-[#153C27] px-2 py-0.5 rounded-full font-bold">16</span>
                </NavLink>

                {/* Subcategories */}
                <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-[#E5DAC6] ml-3 my-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/products?category=${cat.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#4B5A4D] hover:bg-[#F4EFE6] transition"
                    >
                      <img src={cat.image} alt="" className="w-5 h-5 rounded-full object-cover border border-[#E2D7C2]" />
                      <span>{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                    isActive ? 'bg-[#153C27] text-white' : 'text-[#2D392E] hover:bg-[#EAE3D4]'
                  }`
                }
              >
                <span>Contact Us</span>
              </NavLink>
            </div>

            {/* Mobile Drawer Footer */}
            <div className="p-4 border-t border-[#E8DEC9] bg-white space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#153C27] font-semibold">
                <Sparkles size={14} className="text-[#C59A3F]" />
                <span>M/s. Shatavari Ayurvedic &amp; Pharmaceutical Pvt Ltd</span>
              </div>
              <div className="text-[11px] text-[#697A6B]">
                Tirupati, AP - 517502 | +91 94937 82350
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
