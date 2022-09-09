import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzaItems = createAsyncThunk('pizza/fetchPizzaItems', async function (params) {
  const { categories, sort, searchValue } = params;
  const { data } = await axios.get(
    `https://62e27f5fe8ad6b66d85cd42a.mockapi.io/pizzas?${categories > 0 ? `category=${categories}` : ''
    }&sortBy=${sort.sorting}&order=desc&search=${searchValue}`,
  );
  return data;
});

const initialState = {
  items: [],
  status: null,
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducer: {},
  extraReducers: {
    [fetchPizzaItems.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchPizzaItems.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.items = action.payload;
    },
    [fetchPizzaItems.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export default pizzaSlice.reducer;
