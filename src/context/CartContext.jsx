import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('aliyah_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('aliyah_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, size) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.selectedSize === size) 
          ? { ...item, quantity: (item.quantity || 1) + 1 } 
          : item
        );
      }
      return [...prev, { ...product, selectedSize: size, quantity: 1, note: '', cartId: Date.now() }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (cartId, delta) => {
    setCart(prev => prev.map(item => 
      item.cartId === cartId 
      ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) } 
      : item
    ));
  };

  const updateNote = (cartId, note) => {
    setCart(prev => prev.map(item => 
      item.cartId === cartId ? { ...item, note } : item
    ));
  };

  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter(item => item.cartId !== cartId));
  };

  const clearCart = () => setCart([]);

  // Use priceNum directly for calculations to avoid parsing errors
  const totalPrice = cart.reduce((acc, item) => {
    return acc + (item.priceNum * (item.quantity || 1));
  }, 0);

  const formatPrice = (price) => {
    return '₦' + (price || 0).toLocaleString();
  };

  const generateWhatsAppMessage = () => {
    let message = "Hello Aliyah Concierge, I would like to place a bespoke order for the following items:\n\n";
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.arabic})\n`;
      message += `   Qty: ${item.quantity || 1} | Size: ${item.selectedSize}\n`;
      if (item.note) message += `   Bespoke Note: ${item.note}\n`;
      message += `   Price: ${formatPrice(item.priceNum)} each\n\n`;
    });

    message += `Total Estimated: ${formatPrice(totalPrice)}\n\n`;
    message += "Please confirm availability and the next steps for my bespoke tailoring.";
    
    return encodeURIComponent(message);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity,
      updateNote,
      isCartOpen, 
      setIsCartOpen, 
      totalPrice, 
      formatPrice,
      generateWhatsAppMessage,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};
