import ProductCard from '../product-card/product-card.component';
import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  const PREVIEW_PRODUCT_COUNT = 4;
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < PREVIEW_PRODUCT_COUNT)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
