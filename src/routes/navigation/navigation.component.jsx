import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { NavigationComponent, LogoContainer, NavLinks, NavLink } from './navigation.styles';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationComponent>
        <LogoContainer to={'/'}>
          <CrownLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to={'/shop'}>Shop</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              Sign out
            </NavLink>
          ) : (
            <NavLink to={'/auth'}>Sign in</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationComponent>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
