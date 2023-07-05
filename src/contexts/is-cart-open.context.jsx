import { createContext, useState, useEffect } from 'react';

export const CartIsOpenContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {}
});

export const IsCartOpenProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  useEffect(() => {});

  return <CartIsOpenContext.Provider value={value}>{children}</CartIsOpenContext.Provider>;
};
