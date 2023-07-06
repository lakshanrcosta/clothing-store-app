import './cart-item.styles.scss';

const CartItem = ({ cardItem }) => {
  const { name, imageUrl, price, quantity } = cardItem;
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
