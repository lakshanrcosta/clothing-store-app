import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CategoryProducts from '../category-products/category-products.component';
import Category from '../category/category.component';
import { getCollectionAndDocument } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCollectionAndDocument('categories');
      dispatch(setCategories(categories));
    };
    getCategories();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoryProducts />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
