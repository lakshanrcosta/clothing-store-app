import { CART_ACTION_TYPES } from './cart.action-types';

const INITIAL_CART_STATE = {
  isCartOpen: false,
  cartItems: []
};

export const cartReducer = (state = INITIAL_CART_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.setIsCartOpen:
      return {
        ...state,
        isCartOpen: payload
      };
    case CART_ACTION_TYPES.setCartItems:
      return {
        ...state,
        cartItems: payload
      };

    default:
      return state;
  }
};
