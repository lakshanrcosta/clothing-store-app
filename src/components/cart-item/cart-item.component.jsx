import './cart-item.styles.scss';

const CartItem = ({ cardItem }) => {
  const { name, quantity } = cardItem;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
