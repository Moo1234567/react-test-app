import { CartActionTypes } from "./cart.types";

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  return cartItems.filter(item => item.id !== cartItemToClear.id);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem) {
    if (existingCartItem.quantity === 1)
      return clearItemFromCart(cartItems, cartItemToRemove);
    else
      return cartItems.map(cartItem => {
        if (cartItem.id === cartItemToRemove.id)
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        else return cartItem;
      });
  }
  return cartItems;
};
