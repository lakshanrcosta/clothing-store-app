import {
  BackgroundImage,
  CategoryItemBodyContainer,
  CategoryItemContainer
} from './category-item.styles';

const CategoryItem = ({ category: { imageUrl, title } }) => {
  return (
    <CategoryItemContainer>
      <BackgroundImage imageurl={imageUrl} />
      <CategoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryItemBodyContainer>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
