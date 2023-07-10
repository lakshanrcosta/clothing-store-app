import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';
import Button from '../button/button.component';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cardItem={item}></CartItem>)
        ) : (
          <EmptyMessage as='span'>Cart is empty!</EmptyMessage>
        )}
      </CartItems>
      <Button buttonType='base' onClick={goToCheckoutHandler}>
        Go to checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
