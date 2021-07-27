
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  currentCategory: ''
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    updatedCategories(state, action) {
      state.categories = action.payload;
    },
    updatedCurrentCategory(state, action) {
      state.currentCategory = action.payload;
    }
  }
});

export const { updatedCategories, updatedCurrentCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;