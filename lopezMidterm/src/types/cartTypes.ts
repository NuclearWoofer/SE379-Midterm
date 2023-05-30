export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

export interface Product {
  id: number;
  title: string;
  price: number;
}

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: Product;
}

interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: number; // itemId
}

interface ClearCartAction {
  type: typeof CLEAR_CART;
  payload: null;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export type CartAction = AddToCartAction | RemoveFromCartAction | ClearCartAction;
