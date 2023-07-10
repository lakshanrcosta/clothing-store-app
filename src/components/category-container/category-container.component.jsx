import CategoryItem from '../category-item/category-item.component';
import CATEGORY_DATA from '../../data/category.data.json';
import { CategoriesContainer } from './category-container';

const CategoryContainer = () => {
  const { categories } = CATEGORY_DATA;
  return (
    <CategoriesContainer>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </CategoriesContainer>
  );
};

export default CategoryContainer;
