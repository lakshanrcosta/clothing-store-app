import './category-item.styles.scss';
import PropTypes from 'prop-types';

const CategoryItem = ({ category: { imageUrl, title } }) => {
  return (
    <div className={'category-container'}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
};

export default CategoryItem;
