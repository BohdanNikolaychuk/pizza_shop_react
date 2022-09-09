import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizzaToCart(state, action) {
      const findPizza = state.items.find((obj) => obj.id === action.payload.id);
      if (findPizza) {
        findPizza.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
    },
    removePizza(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
    },
    removePizaFromCart(state, action) {
      const findPizza = state.items.find((obj) => obj.id === action.payload);
      if (findPizza) {
        findPizza.count--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
    },
    clearAllPizzas(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addPizzaToCart, removePizza, clearAllPizzas, removePizaFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
