import { CartItemContainer, ItemDetails } from './cart-item.styles';

const CartItem = ({ cardItem }) => {
  const { name, imageUrl, price, quantity } = cardItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
