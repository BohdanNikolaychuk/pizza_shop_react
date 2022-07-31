import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: 0,
  sort: {
    name: 'popularity',
    sorting: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoriesID(state, action) {
      state.categories = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoriesID, setSort } = filterSlice.actions;

export default filterSlice.reducer;
