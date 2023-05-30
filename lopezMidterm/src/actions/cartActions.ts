import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, CartAction, ClearCartAction, Product } from '../types/cartTypes';

export const addToCart = (product: Product): CartAction => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (itemId: number): CartAction => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemId,
  };
};

export const clearCart = (): ClearCartAction => {
  return {
    type: CLEAR_CART,
  };
};
