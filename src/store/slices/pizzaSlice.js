import axios from "axios";
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPizzaItems = createAsyncThunk('pizza/fetchPizzaItems', async (params) => {
    const { categories,sort,searctValue} = params;

    const {data} = await axios.get(`https://62e27f5fe8ad6b66d85cd42a.mockapi.io/pizzas?${
        categories > 0 ? `category=${categories}` : ''}&sortBy=${sort.sorting}&order=desc&search=${searctValue}`)
    return data
});


const initialState = {
    items: []
}


const pizzaSlice = createSlice({
    name: "pizzaSlice",
    initialState,
    extraReducers: {
        [fetchPizzaItems.pending]: (state) => {
            state.status = 'loading'
            state.items = [];
        },
        [fetchPizzaItems.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.items = action.payload;
        },
        [fetchPizzaItems.rejected]: (state, action) => {

            state.status = 'error'
            state.items = [];
        },

    }
})

export default pizzaSlice.reducer;