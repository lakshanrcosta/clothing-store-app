import CategoryItem from '../category-item/category-item.component';
import CATEGORY_DATA from '../../data/category.data.json';
import './category-container.scss';

const CategoryContainer = () => {
  const { categories } = CATEGORY_DATA;
  console.log(categories);
  return (
    <div className={'categories-container'}>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default CategoryContainer;
