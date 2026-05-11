import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(() => {
    const saved = localStorage.getItem('aliyah_currency');
    return saved || 'NGN';
  });

  const exchangeRate = 1550; // Dynamic for launch

  useEffect(() => {
    localStorage.setItem('aliyah_currency', currency);
  }, [currency]);

  const toggleCurrency = () => {
    setCurrency(prev => prev === 'NGN' ? 'USD' : 'NGN');
  };

  const convertPrice = (priceNum) => {
    if (currency === 'NGN') {
      return '₦' + priceNum.toLocaleString();
    }
    const usdPrice = Math.round(priceNum / exchangeRate);
    return '$' + usdPrice.toLocaleString();
  };

  return (
    <CurrencyContext.Provider value={{ currency, toggleCurrency, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};
