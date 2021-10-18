import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@Store/store';

import { Cart, CartPage, ICartItem } from './interfaces';

const initialState: CartPage = {
  cart: {} as Cart,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id } = action.payload;
      const amount = state.cart[id] || 0;
      return {
        ...state,
        cart: {
          ...state.cart,
          [id]: amount + 1,
        },
      };
    },
    updateAmountItemCart(state, action) {
      const { id, amount } = action.payload;
      return {
        ...state,
        cart: {
          ...state.cart,
          [id]: amount,
        },
      };
    },
    removeToCart(state, action) {
      const { id } = action.payload;
      const newCart = { ...state.cart };
      delete newCart[id];
      return {
        ...state,
        cart: newCart,
      };
    },
    emptyCart(state) {
      return {
        ...state,
        cart: {},
      };
    },
  },
});

export const { addToCart, updateAmountItemCart, removeToCart, emptyCart } = cartSlice.actions;
export const getIdCartList = (state: RootState): number[] => Object.entries(state.cart.cart).map(([id]) => +id);
export const getCartList = (state: RootState): ICartItem[] => {
  const listCart = Object.entries(state.cart.cart);
  return listCart
    .filter(([id]) => state.page.entities[+id])
    .map(([id, amount]) => {
      return {
        ...state.page.entities[+id],
        amount,
      };
    });
};

export default cartSlice.reducer;
