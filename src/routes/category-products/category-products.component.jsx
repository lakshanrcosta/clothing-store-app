import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/categories/category.selector';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoryProducts = () => {
  const categories = useSelector(selectCategories);

  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return <CategoryPreview key={title} title={title} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoryProducts;
