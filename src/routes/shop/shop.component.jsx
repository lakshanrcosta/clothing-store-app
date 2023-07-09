import { Routes, Route } from 'react-router-dom';
import CategoryProducts from '../category-products/category-products.component';
import Category from '../category/category.component';
import './shop.styles.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryProducts />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
