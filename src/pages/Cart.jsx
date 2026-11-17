import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft, ArrowRight, ShieldCheck, Tag, Truck, Sparkles, Check } from 'lucide-react';

export const Cart = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    freeShippingThreshold,
    isFreeShipping,
    shippingFee,
    finalTotal
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponStatus, setCouponStatus] = useState(null); // null | 'success' | 'error'
  const [couponMessage, setCouponMessage] = useState('');
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [simulatedOrderId, setSimulatedOrderId] = useState('');
  const navigate = useNavigate();

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'AYUR10') {
      const discountAmount = Math.round(subtotal * 0.1);
      setAppliedDiscount(discountAmount);
      setCouponStatus('success');
      setCouponMessage('Coupon AYUR10 applied! 10% Off your order.');
    } else if (code === 'VEDIC20' && subtotal >= 999) {
      const discountAmount = Math.round(subtotal * 0.2);
      setAppliedDiscount(discountAmount);
      setCouponStatus('success');
      setCouponMessage('Coupon VEDIC20 applied! 20% Off your order.');
    } else {
      setCouponStatus('error');
      setCouponMessage('Invalid code or minimum cart value of ₹999 not met.');
    }
  };

  const grandTotal = Math.max(0, finalTotal - appliedDiscount);

  const handleSimulateCheckout = () => {
    const randomId = 'SA-' + Math.floor(100000 + Math.random() * 900000);
    setSimulatedOrderId(randomId);
    setOrderModalOpen(true);
    clearCart();
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16 border-b border-[#E8DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-[#C59A3F] uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <Sparkles size={14} />
              <span>Checkout Review</span>
            </div>
            <h1
              className="text-3xl sm:text-4xl font-bold text-[#153C27]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your Shopping Cart
            </h1>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#153C27] hover:text-[#C59A3F] transition"
          >
            <ArrowLeft size={14} />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {cart.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 sm:p-16 border border-[#E9DFCF] shadow-sm text-center max-w-2xl mx-auto space-y-4">
            <div className="w-20 h-20 rounded-full bg-[#FAF7F2] text-[#153C27] flex items-center justify-center mx-auto">
              <Truck size={36} className="text-[#C59A3F]" />
            </div>
            <h2 className="text-2xl font-bold text-[#153C27]">Your Wellness Bag is Empty</h2>
            <p className="text-sm text-stone-500 max-w-md mx-auto">
              You currently have no items in your cart. Explore our natural wellness formulations and add pure Ayurvedic remedies to your cart.
            </p>
            <div className="pt-2">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#153C27] hover:bg-[#1E5437] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#153C27]/20 transition"
              >
                <span>Explore Products</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        ) : (
          /* Active Cart Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Cart Items (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Free shipping bar */}
              <div className="bg-white rounded-2xl p-4 border border-[#E9DFCF] shadow-sm flex items-center gap-3">
                <Truck size={20} className="text-[#C59A3F] flex-shrink-0" />
                <div className="flex-1 text-xs">
                  {isFreeShipping ? (
                    <span className="text-[#1E5437] font-bold">
                      🎉 Free standard shipping has been unlocked for your order!
                    </span>
                  ) : (
                    <span>
                      Add <strong className="text-[#153C27]">₹{freeShippingThreshold - subtotal}</strong> more to qualify for <strong>FREE Delivery</strong> across India.
                    </span>
                  )}
                </div>
              </div>

              {/* Items Container */}
              <div className="bg-white rounded-2xl border border-[#E9DFCF] shadow-sm overflow-hidden divide-y divide-[#F0E8DC]">
                {cart.map((item) => (
                  <div key={item.cartItemId} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    
                    {/* Thumbnail */}
                    <div className="w-20 h-20 rounded-xl bg-[#FAF7F2] p-1.5 border border-[#EAE1D1] flex-shrink-0 flex items-center justify-center">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#C59A3F]">
                        {item.category}
                      </div>
                      <Link to={`/product/${item.id}`} className="text-base font-bold text-[#153C27] hover:text-[#C59A3F] transition truncate block">
                        {item.name}
                      </Link>
                      {item.size && (
                        <div className="text-xs text-stone-500 font-medium mt-0.5">
                          Pack Size: {item.size}
                        </div>
                      )}
                      <div className="text-xs font-semibold text-[#153C27] mt-1 sm:hidden">
                        ₹{item.price} each
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center border border-[#D9CDB8] rounded-xl bg-[#FAF8F5] p-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="p-1.5 hover:text-[#C59A3F] text-stone-600 transition"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 text-xs font-bold text-[#153C27]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="p-1.5 hover:text-[#C59A3F] text-stone-600 transition"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* Item Subtotal */}
                    <div className="text-right min-w-[80px]">
                      <div className="text-base font-bold text-[#153C27]">
                        ₹{item.price * item.quantity}
                      </div>
                      <div className="text-[10px] text-stone-400 hidden sm:block">
                        (₹{item.price} ea)
                      </div>
                    </div>

                    {/* Remove Action */}
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="text-stone-400 hover:text-rose-600 p-1.5 transition ml-auto sm:ml-0"
                      title="Remove product"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Clear Cart Button */}
              <div className="text-right">
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs font-semibold text-rose-600 hover:underline"
                >
                  Clear All Items
                </button>
              </div>

            </div>

            {/* Right Column: Order Summary (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Promo Code Box */}
              <div className="bg-white rounded-2xl p-5 border border-[#E9DFCF] shadow-sm space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#153C27] uppercase tracking-wider">
                  <Tag size={14} className="text-[#C59A3F]" />
                  <span>Have a Promo Code?</span>
                </div>

                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Try AYUR10"
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#D9CBB5] text-xs font-semibold uppercase text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#153C27]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-[#153C27] hover:bg-[#1E5437] text-white text-xs font-bold tracking-wider uppercase transition"
                  >
                    Apply
                  </button>
                </form>

                {couponMessage && (
                  <p className={`text-xs ${couponStatus === 'success' ? 'text-emerald-700 font-semibold' : 'text-rose-600'}`}>
                    {couponMessage}
                  </p>
                )}
              </div>

              {/* Summary Card */}
              <div className="bg-white rounded-2xl p-6 border border-[#E9DFCF] shadow-sm space-y-4">
                <h3 className="font-bold text-base text-[#153C27] pb-3 border-b border-[#F0E8DC]">
                  Order Summary
                </h3>

                <div className="space-y-2 text-xs text-[#5D6F60]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-stone-800">₹{subtotal}</span>
                  </div>

                  {appliedDiscount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>Voucher Discount</span>
                      <span>-₹{appliedDiscount}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Estimated Shipping</span>
                    <span>
                      {isFreeShipping ? (
                        <strong className="text-[#1E5437]">FREE</strong>
                      ) : (
                        <span>₹{shippingFee}</span>
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-[11px] text-stone-400">
                    <span>GST (Estimated 12%)</span>
                    <span>Included</span>
                  </div>

                  <div className="pt-3 border-t border-[#F0E8DC] flex justify-between text-lg font-extrabold text-[#153C27]">
                    <span>Total Amount</span>
                    <span>₹{grandTotal}</span>
                  </div>
                </div>

                {/* Checkout Trigger */}
                <button
                  type="button"
                  onClick={handleSimulateCheckout}
                  className="w-full py-4 rounded-xl bg-[#153C27] hover:bg-[#1E5437] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#153C27]/20 flex items-center justify-center gap-2 transition active:scale-95"
                >
                  <span>Place Simulated Order</span>
                  <ArrowRight size={16} />
                </button>

                <div className="text-center pt-2 space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#556957]">
                    <ShieldCheck size={14} className="text-[#C59A3F]" />
                    <span>Safe &amp; Authentic Ayurvedic Delivery</span>
                  </div>
                  <p className="text-[10px] text-stone-400">
                    This frontend demonstration will not charge your card.
                  </p>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>

      {/* Checkout Success Modal */}
      {orderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-[#D9CBB5] shadow-2xl text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#EBF3ED] text-[#153C27] flex items-center justify-center mx-auto">
              <Sparkles size={32} className="text-[#C59A3F]" />
            </div>

            <h3
              className="text-2xl font-bold text-[#153C27]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Order Successfully Received!
            </h3>

            <div className="inline-block px-3 py-1 bg-[#FAF7F2] rounded-full border border-[#E8DEC9] text-xs font-bold text-[#C59A3F]">
              Reference #{simulatedOrderId}
            </div>

            <p className="text-xs sm:text-sm text-[#5D6F60] leading-relaxed">
              Namaste! Your simulated order for Shatavari Ayurvedic wellness products has been registered. You will receive an SMS and email dispatch update once packed by our apothecary team.
            </p>

            <button
              type="button"
              onClick={() => {
                setOrderModalOpen(false);
                navigate('/');
              }}
              className="w-full py-3 rounded-xl bg-[#153C27] hover:bg-[#1E5437] text-white font-bold text-xs tracking-wider uppercase transition shadow-md"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
