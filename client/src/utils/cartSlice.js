  
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  cartOpen: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addedToCart(state, action) {
      state.cart.push(action.payload);
      state.cartOpen = true;
    },
    addedMultipleToCart(state, action) {
      state.cart.push(...action.payload);
    },
    removedFromCart(state, action) {
      const newCartState = state.cart.filter(product => product._id !== action.payload);
      state.cart = newCartState;
      state.cartOpen = newCartState.length > 0;
    },
    updatedQuantityInCart(state, action) {
      state.cart = state.cart.map(product => {
        if (product._id === action.payload._id) {
          product.purchaseQuantity = action.payload.purchaseQuantity;
        }
        return product;
      });
      state.cartOpen = true;
    },
    clearedCart(state) {
      state.cart = [];
      state.cartOpen = false;
    },
    toggledCart(state) {
      state.cartOpen = !state.cartOpen;
    }
  }
});

export const { addedToCart, addedMultipleToCart, removedFromCart, updatedQuantityInCart, clearedCart, toggledCart } = cartSlice.actions;

export default cartSlice.reducer;