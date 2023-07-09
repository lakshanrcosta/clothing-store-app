import { createContext, useState, useEffect } from 'react';
import { getCollectionAndDocument } from '../utils/firebase/firebase.utils';

export const CategoriesContecxt = createContext({
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
  return <CategoriesContecxt.Provider value={value}>{children}</CategoriesContecxt.Provider>;
};
