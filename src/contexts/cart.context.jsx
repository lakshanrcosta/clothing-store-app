import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

const CART_ACTION_TYPES = {
  setIsCartOpen: 'SET_IS_CART_OPEN',
  setCartItems: 'SET_CART_ITEMS',
  setCartItemCount: 'SET_CART_ITEM_COUNT',
  setCartTotal: 'SET_CART_TOTAL'
};

const INITIAL_CART_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartItemCount: 0,
  cartTotal: 0
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);

  if (!existingCartItem) {
    return;
  }

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  );
};

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};

const cartReducer = (state, action) => {
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
        ...payload
      };
    default:
      throw new Error(`Unhandled type: ${type} in userReducer`);
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartItemCount: 0,
  cartTotal: 0
});

export const CartContextProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartItemCount, cartTotal }, dispatch] = useReducer(
    cartReducer,
    INITIAL_CART_STATE
  );

  const updateCartItemsReducer = (newCartItems) => {
    const newCartTotalQuantity = newCartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);

    const newCartTotalAmount = newCartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);

    dispatch(
      createAction(CART_ACTION_TYPES.setCartItems, {
        isCartOpen,
        cartItems: newCartItems,
        cartTotal: newCartTotalAmount,
        cartItemCount: newCartTotalQuantity
      })
    );
  };

  const updateIsCartOpenReducer = (isOpen) => {
    dispatch(createAction(CART_ACTION_TYPES.setIsCartOpen, isOpen));
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
    //setCartItems();
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
    //setCartItems();
  };

  const clearItemFromCart = (productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear);
    updateCartItemsReducer(newCartItems);
    //setCartItems();
  };

  const setIsCartOpen = (isOpen) => {
    updateIsCartOpenReducer(isOpen);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItemCount,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
