import { configureStore } from "@reduxjs/toolkit";

import cartReducer from '../features/cartSlice';
import categoriesReducer from '../features/categoriesSlice';
import productsReducer from '../features/productsSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoriesReducer,
    products: productsReducer
  }
});