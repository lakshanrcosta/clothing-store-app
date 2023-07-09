import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {
  const PREVIEW_PRODUCT_COUNT = 4;
  return (
    <div className='category-preview-container'>
      <h2>
        <span className='title'>{title.toUpperCase()}</span>
      </h2>
      <div className='preview'>
        {products
          .filter((_, idx) => idx < PREVIEW_PRODUCT_COUNT)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
