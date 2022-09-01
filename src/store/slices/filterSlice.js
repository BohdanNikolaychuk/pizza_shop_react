import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
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
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoriesID, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
