import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        },
        removefromCart: (state, action) => {
            const newState = state.filter((item) => item.id != action.payload.id)
            return newState
        },
        changeItemQuantity : (state, action) => {
            const item = state.find((item) => item.id == action.payload.id)
            item.quantity = action.payload.quantity
        }
    }
})

export const { addToCart, changeItemQuantity, removefromCart } = cartReducer.actions

export default cartReducer.reducer