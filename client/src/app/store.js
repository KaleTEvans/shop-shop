import { configureStore } from "@reduxjs/toolkit";

import cartReducer from '../utils/cartSlice';
import categoriesReducer from '../utils/categoriesSlice';
import productsReducer from '../utils/productsSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoriesReducer,
    products: productsReducer
  }
});