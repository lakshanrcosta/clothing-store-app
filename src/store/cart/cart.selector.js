import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector([selectCartReducer], ({ cartItems }) => cartItems);

export const selectIsCartOpen = createSelector([selectCartReducer], (cart) => cart.isCartOpen);

export const selectCartTotalQuantity = createSelector([selectCartReducer], ({ cartItems }) =>
  cartItems.reduce((quantity, cartItem) => {
    return quantity + cartItem.quantity;
  }, 0)
);

export const selectCartTotalAmount = createSelector([selectCartReducer], ({ cartItems }) =>
  cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price;
  }, 0)
);
