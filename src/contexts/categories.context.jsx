import { createContext, useState, useEffect } from 'react';
import { getCollectionAndDocument } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCollectionAndDocument();
      setCategoriesMap(categories);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
