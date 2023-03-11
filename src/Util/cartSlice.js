import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        //initialise cart slice as an array of objects containing the id of the frame and a quantity
        contents: [],
    },
    reducers: {
        clearCart: (state) => {
            state.contents = []
        },
        addToCart: (state, action) => {
            //expects a payload of an object containing the id of the frame and a quantity
            state.contents.push(action.payload)
        },
        removeFromCart: (state, action) => {
            //expects a payload of an id of the frame to be removed
            state.contents.splice(state.contents.indexOf(action.payload), 1)
        },
        modifyQuantity: (state, action) => {
            //expects a payload of an object containing the id of the frame and the new quantity
            state.contents[state.contents.indexOf(action.payload.id)].quantity = action.payload.newQuantity;
        }
    }
})

export const { clearCart, addToCart, removeFromCart, modifyQuantity } = cartSlice.actions
export default cartSlice.reducer