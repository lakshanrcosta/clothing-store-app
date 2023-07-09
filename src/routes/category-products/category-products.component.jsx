import { useContext, Fragment } from 'react';
import { CategoriesContecxt } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoryProducts = () => {
  const { categoriesMap } = useContext(CategoriesContecxt);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoryProducts;
