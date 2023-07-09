import { createContext, useState, useEffect } from 'react';
import { getCollectionAndDocument } from '../utils/firebase/firebase.utils';
// import PRODUCTS_DATA from '../data/products.data.json';

// export const ProductsContext = createContext({
//   products: [],
//   setProducts: () => {}
// });

// export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const getCategoryMap = async () => {
//       const categoryMap = await getCollectionAndDocument();
//       console.log(categoryMap);
//     };
//     getCategoryMap();
//   }, []);

//   const value = { products, setProducts };
//   return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
// };

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
