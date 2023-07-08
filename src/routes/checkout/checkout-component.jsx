import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>I am checkout page</h1>
      {cartItems.map((cartItem) => {
        const { id, name, quantity } = cartItem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <h4>{quantity}</h4>
            <button onClick={() => addItemToCart(cartItem)}>+</button>
            <button onClick={() => removeItemFromCart(cartItem)}>-</button>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
