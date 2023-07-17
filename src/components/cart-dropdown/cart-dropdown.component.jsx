import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';
import Button from '../button/button.component';
import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
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
