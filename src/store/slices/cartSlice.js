import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addPizzaToCart(state, action) {
            const findPizza = state.items.find(obj => obj.id === action.payload.id);
            if (findPizza) {
                findPizza.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                })
            }
            state.totalPrice = state.items.reduce((sum,obj)=>(obj.price * obj.count) + sum,0)
        },
        removePizza(state, action) {
            state.items = state.items.filter(obj => obj.id !== action.payload)
        },
        clearAllPizzas(state) {
            state.items = [];
        }

    }
})

export const {addPizzaToCart } = cartSlice.actions;

export default cartSlice.reducer;