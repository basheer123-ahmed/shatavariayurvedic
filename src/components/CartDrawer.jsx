import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, Truck, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    freeShippingThreshold,
    isFreeShipping,
    shippingFee,
    finalTotal,
    clearCart
  } = useCart();

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderPlacedId, setOrderPlacedId] = useState('');
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const progressPercentage = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const remainingForFreeShipping = freeShippingThreshold - subtotal;

  const handleSimulateCheckout = () => {
    const randomId = 'SA-' + Math.floor(100000 + Math.random() * 900000);
    setOrderPlacedId(randomId);
    setCheckoutModalOpen(true);
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-full sm:w-[420px] max-w-full bg-[#FAF7F2] shadow-2xl flex flex-col z-50 border-l border-[#E5DAC6]">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 bg-white border-b border-[#E8DEC9] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-[#153C27]" />
              <h2
                className="text-lg font-bold text-[#153C27]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Your Wellness Bag ({cart.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              type="button"
              onClick={closeCart}
              className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition"
              aria-label="Close Shopping Bag"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-[#F3ECE0] px-4 py-3 border-b border-[#E5DAC6]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#153C27] mb-1.5">
              <Truck size={14} className="text-[#C59A3F]" />
              {isFreeShipping ? (
                <span className="text-[#1E5437] font-bold">🎉 Congratulations! You unlocked FREE SHIPPING!</span>
              ) : (
                <span>Add <strong className="text-[#C59A3F]">₹{remainingForFreeShipping}</strong> more for Free Shipping</span>
              )}
            </div>
            <div className="w-full bg-[#E0D5C1] rounded-full h-2 overflow-hidden">
              <div
                className="bg-[#153C27] h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cart.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EAE1D1] text-[#153C27] flex items-center justify-center mx-auto">
                  <ShoppingBag size={28} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#153C27]">Your Wellness Bag is Empty</h3>
                  <p className="text-xs text-stone-500 max-w-xs mx-auto mt-1">
                    Explore our pure Ayurvedic preparations, cold-pressed juices, and skincare elixirs.
                  </p>
                </div>
                <button
                  onClick={() => {
                    closeCart();
                    navigate('/shop');
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#153C27] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#1E5437] transition"
                >
                  Explore Herbal Shop
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.cartItemId}
                  className="bg-white rounded-xl p-3.5 border border-[#EBE3D3] shadow-sm flex gap-3 relative group"
                >
                  {/* Product thumbnail */}
                  <div className="w-16 h-16 rounded-lg bg-[#FAF7F2] p-1 flex-shrink-0 border border-[#E8DEC9] flex items-center justify-center">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 pr-6">
                    <div className="text-[10px] font-semibold text-[#C59A3F] uppercase tracking-wider">
                      {item.category}
                    </div>
                    <h4 className="text-sm font-bold text-[#153C27] truncate">
                      {item.name}
                    </h4>
                    {item.size && (
                      <span className="text-[11px] text-[#718273] font-medium block">
                        Size: {item.size}
                      </span>
                    )}

                    {/* Quantity controls & price */}
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center border border-[#D9CDB8] rounded-lg bg-[#FAF8F5]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-1 hover:text-[#C59A3F] text-stone-600 transition"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-[#153C27]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1 hover:text-[#C59A3F] text-stone-600 transition"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-sm font-bold text-[#153C27]">
                          ₹{item.price * item.quantity}
                        </span>
                        {item.quantity > 1 && (
                          <div className="text-[10px] text-stone-400">
                            (₹{item.price} each)
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Delete button */}
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.cartItemId)}
                    className="absolute top-3 right-3 text-stone-400 hover:text-rose-600 transition"
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer Summary */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t border-[#E8DEC9] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-900">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Shipping</span>
                  <span>
                    {isFreeShipping ? (
                      <strong className="text-[#1E5437]">FREE</strong>
                    ) : (
                      <span>₹{shippingFee}</span>
                    )}
                  </span>
                </div>
                <div className="pt-2 border-t border-stone-200 flex justify-between text-base font-bold text-[#153C27]">
                  <span>Total Amount</span>
                  <span>₹{finalTotal}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleSimulateCheckout}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#153C27] hover:bg-[#1E5437] text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-[#153C27]/20 transition active:scale-95"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    closeCart();
                    navigate('/cart');
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#F6F1E8] hover:bg-[#EAE1D1] text-[#153C27] font-semibold text-xs transition"
                >
                  View Full Cart &amp; Apply Coupon
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#718273] pt-1">
                <ShieldCheck size={14} className="text-[#C59A3F]" />
                <span>100% Secure Ayurvedic Checkout (Simulation)</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Simulated Checkout Confirmation Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-[#D9CBB5] shadow-2xl text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#EBF3ED] text-[#153C27] flex items-center justify-center mx-auto">
              <Sparkles size={32} className="text-[#C59A3F]" />
            </div>

            <h3
              className="text-2xl font-bold text-[#153C27]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Order Confirmed!
            </h3>

            <div className="inline-block px-3 py-1 bg-[#FAF7F2] rounded-full border border-[#E8DEC9] text-xs font-bold text-[#C59A3F]">
              Order Reference #{orderPlacedId}
            </div>

            <p className="text-xs sm:text-sm text-[#5D6F60] leading-relaxed">
              Thank you for trusting <strong>SHATAVARI AYURVEDIC</strong> with your holistic health journey. In this frontend demonstration, your mock order has been safely placed.
            </p>

            <div className="p-3 bg-[#FAF8F5] rounded-xl text-left text-xs space-y-1 text-[#627364]">
              <div>📦 <strong>Packaging:</strong> Eco-friendly tamper-proof Ayurvedic seal</div>
              <div>🚚 <strong>Estimated Dispatch:</strong> Within 24-48 business hours</div>
              <div>🌿 <strong>Ayurvedic Guidance:</strong> Instructions included with package</div>
            </div>

            <button
              type="button"
              onClick={() => {
                setCheckoutModalOpen(false);
                closeCart();
                navigate('/');
              }}
              className="w-full py-3 rounded-xl bg-[#153C27] hover:bg-[#1E5437] text-white font-bold text-xs tracking-wider uppercase transition shadow-md"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
