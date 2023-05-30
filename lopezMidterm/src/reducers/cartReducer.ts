import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, CartAction, CartItem } from '../types/cartTypes';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
