import './category-item.styles.scss';

const CategoryItem = ({ category: { imageUrl, title } }) => {
  return (
    <div className={'category-item-container'}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='category-item-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
