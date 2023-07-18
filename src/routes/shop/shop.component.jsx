import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CategoryProducts from '../category-products/category-products.component';
import Category from '../category/category.component';
import { fetchCategoriesStart } from '../../store/categories/category.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoryProducts />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
