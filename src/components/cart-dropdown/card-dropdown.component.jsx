import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './card-dropdown.styles.scss';

const CardDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cardItem={item}></CartItem>
        ))}
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CardDropdown;
