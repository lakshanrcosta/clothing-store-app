import { useNavigate } from 'react-router-dom';
import {
  BackgroundImage,
  CategoryItemBodyContainer,
  CategoryItemContainer
} from './category-item.styles';

const CategoryItem = ({ category: { imageUrl, title, route } }) => {
  const navigate = useNavigate();

  const navigateHandler = () => navigate(route);
  return (
    <CategoryItemContainer onClick={navigateHandler}>
      <BackgroundImage imageurl={imageUrl} />
      <CategoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryItemBodyContainer>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
