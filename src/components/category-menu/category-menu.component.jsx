import CategoryItem from '../category-item/category-item.component';
import Categories from '../../data/category.data.json';
import './category-container.scss';

const CategoryContainer = () => {
  const { categories } = Categories;
  return (
    <div className={'categories-container'}>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default CategoryContainer;
