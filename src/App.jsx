import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SearchOverlay } from './components/SearchOverlay';
import { FloatingWidgets } from './components/FloatingWidgets';

// Pages
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname, search]);

  return null;
}

export function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#122115] relative">
          {/* Top Announcement Bar */}
          <AnnouncementBar />

          {/* Sticky Responsive Header */}
          <Navbar />

          {/* Main Content Router */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Shop />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />

          {/* Interactive Global Drawers & Floating Widgets */}
          <CartDrawer />
          <SearchOverlay />
          <FloatingWidgets />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
