import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './card-dropdown.styles.scss';

const CardDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-tem'></div>
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CardDropdown;
