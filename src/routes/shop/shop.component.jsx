import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CategoryProducts from '../category-products/category-products.component';
import Category from '../category/category.component';
import { fetchCategoriesAsync } from '../../store/categories/category.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoryProducts />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
