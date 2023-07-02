import { createContext, useState, useEffect } from 'react';
import PRODUCTS_DATA from '../data/products.data.json';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {}
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS_DATA.products);
  const value = { products, setProducts };

  useEffect(() => {});

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
