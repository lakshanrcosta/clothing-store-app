import { createContext, useState, useEffect } from 'react';

export const CardContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {}
});

const addCartItem = (cartItems, productToAdd) => {};

export const CardContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {};

  const value = { isCartOpen, setIsCartOpen };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
