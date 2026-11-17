import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('shatavari_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      console.error('Failed to load cart from localStorage', e);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('shatavari_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addToCart = (product, quantity = 1, selectedSize = null) => {
    const size = selectedSize || product.volumeOrWeight || (product.sizes && product.sizes[0]) || '';
    const cartItemId = `${product.id}-${size}`;

    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [
          ...prevCart,
          {
            cartItemId,
            id: product.id,
            name: product.name,
            subtitle: product.subtitle,
            category: product.category,
            image: product.image,
            price: product.price,
            originalPrice: product.originalPrice,
            size,
            quantity
          }
        ];
      }
    });

    showToast(`Added "${product.name}" (${size}) to cart`);
  };

  const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (cartItemId) => {
    setCart(prevCart => {
      const removedItem = prevCart.find(item => item.cartItemId === cartItemId);
      if (removedItem) {
        showToast(`Removed "${removedItem.name}" from cart`);
      }
      return prevCart.filter(item => item.cartItemId !== cartItemId);
    });
  };

  const clearCart = () => {
    setCart([]);
    showToast('Shopping cart cleared');
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const freeShippingThreshold = 499;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingFee = cart.length === 0 ? 0 : isFreeShipping ? 0 : 50;
  const finalTotal = subtotal + shippingFee;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        freeShippingThreshold,
        isFreeShipping,
        shippingFee,
        finalTotal,
        isCartOpen,
        setIsCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        toggleCart: () => setIsCartOpen(prev => !prev),
        isSearchOpen,
        setIsSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
        toggleSearch: () => setIsSearchOpen(prev => !prev),
        toastMessage
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
