import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, ShieldCheck, Heart, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#0F281B] text-[#D8E2DA] border-t border-[#1C4530] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#1E4D36]">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo light={true} variant="large" />
            <p className="text-xs sm:text-sm text-[#B3C4B8] max-w-sm leading-relaxed">
              SHATAVARI AYURVEDIC is dedicated to preserving ancient Vedic knowledge through authentic, GMP-certified herbal formulations. Designed to bring harmony, vitality, and natural radiance to your daily modern life.
            </p>
            <div className="pt-2 flex items-center gap-3 text-stone-300">
              <a href="#social" className="w-9 h-9 rounded-full bg-[#183E2A] hover:bg-[#C59A3F] hover:text-[#153C27] flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={17} />
              </a>
              <a href="#social" className="w-9 h-9 rounded-full bg-[#183E2A] hover:bg-[#C59A3F] hover:text-[#153C27] flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook size={17} />
              </a>
              <a href="#social" className="w-9 h-9 rounded-full bg-[#183E2A] hover:bg-[#C59A3F] hover:text-[#153C27] flex items-center justify-center transition-colors" aria-label="YouTube">
                <Youtube size={17} />
              </a>
              <a href="#social" className="w-9 h-9 rounded-full bg-[#183E2A] hover:bg-[#C59A3F] hover:text-[#153C27] flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#E8C568] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A8BEB0]">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/shop" className="hover:text-white transition">Shop All Products</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Shatavari Ayurvedic</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link to="/cart" className="hover:text-white transition">Shopping Cart</Link></li>
              <li><a href="#vaidya" className="hover:text-white transition">Consult an Ayurvedic Doctor</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#E8C568] uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A8BEB0]">
              <li><Link to="/shop?category=ayurvedic-wellness" className="hover:text-white transition">Ayurvedic Wellness</Link></li>
              <li><Link to="/shop?category=herbal-juices" className="hover:text-white transition">Herbal Juices</Link></li>
              <li><Link to="/shop?category=natural-skincare" className="hover:text-white transition">Natural Skincare</Link></li>
              <li><Link to="/shop?category=hair-care" className="hover:text-white transition">Hair Care &amp; Oils</Link></li>
              <li><Link to="/shop?category=daily-wellness" className="hover:text-white transition">Daily Wellness</Link></li>
              <li><Link to="/shop?category=herbal-supplements" className="hover:text-white transition">Supplements &amp; Churnas</Link></li>
            </ul>
          </div>

          {/* Customer Support & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#E8C568] uppercase tracking-wider">
              Customer Support
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8BEB0]">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#C59A3F] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  23-7-169, 3rd Floor, Santhi Nagar, MR Palli Circle, Tirupati, AP - 517502
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-[#C59A3F] flex-shrink-0" />
                <a href="tel:+919493782350" className="hover:text-[#ECC468] transition">
                  +91 94937 82350
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-[#C59A3F] flex-shrink-0" />
                <a href="mailto:shatavariayurvedic@gmail.com" className="hover:text-[#ECC468] transition">
                  shatavariayurvedic@gmail.com
                </a>
              </li>
              <li className="pt-2 text-[11px] text-[#7A9382]">
                Support Hours: Monday – Saturday (9:00 AM – 6:00 PM IST)
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#89A191]">
          <p>© {new Date().getFullYear()} SHATAVARI AYURVEDIC. All Rights Reserved. Pure Herbal E-Commerce.</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-white transition">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-white transition">Terms &amp; Conditions</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition">Shipping &amp; Returns</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
