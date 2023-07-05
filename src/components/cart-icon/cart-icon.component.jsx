import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartIsOpenContext } from '../../contexts/is-cart-open.context';
import './cart-icon.styles.scss';
import { useContext } from 'react';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartIsOpenContext);

  const toggleIsCartOpen = () => {
    return setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;
