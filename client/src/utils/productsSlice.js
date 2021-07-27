
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: []
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updatedProducts(state, action) {
      state.products = action.payload;
    }
  }
});

export const { updatedProducts } = productsSlice.actions;

export default productsSlice.reducer;