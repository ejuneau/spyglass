import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        //initialise cart slice as an array of objects containing the id of the frame and a quantity
        contents: [],
    },
    reducers: {
        clearCart: (state) => {
			console.log("Dumping cart contents...")
            state.contents.length = 0;
			console.log("Current cart status: ");
			console.log(current(state.contents));
        },
        addToCart: (state, action) => {
            //expects a payload of an object containing the id of the frame and a quantity

            //Skip action if item is already in cart
            if (action.payload.quantity === 0) {console.log("Not adding 0 items to cart!")} 
            else {
                console.log("adding " + action.payload.quantity + " x " + action.payload.id + " to cart...")
                console.log("Checking if "); console.log(action.payload.id); console.log(" is in "); console.log(current(state.contents))
                if (!current(state.contents).find(item => item.id === action.payload.id)) {
                    console.log(current(state.contents).find(item => item.id === action.payload.id))
                    console.log(action.payload.id +" not found in cart, adding...")
                    state.contents.push(action.payload)
                } 
                else (console.log(action.payload.id+" already in cart. skipping action"))
            }
            console.log("Current cart contents: "); console.log(current(state.contents));
        },
        removeFromCart: (state, action) => {
            //expects a payload of an id of the frame to be removed
			console.log("Removing "+action.payload.id+" from cart") 
			console.log(current(state.contents));
			state.contents.splice(state.contents.indexOf(state.contents.find(item => item.id === action.payload.id)), 1)
			// console.log(current(state.contents).indexOf(current(state.contents).find(item => item.id === action.payload.id)))
            // state.contents.splice(state.contents.indexOf(action.payload.id), 1);
			console.log("Current cart status: ");
            console.log(current(state.contents));
        },
        modifyQuantity: (state, action) => {
            //expects a payload of an object containing the id of the frame and the new quantity
            console.log("setting the quantity of "+action.payload.id+" to "+action.payload.newQuantity)
            state.contents.find(item => item.id === action.payload.id).quantity = action.payload.newQuantity;
            console.log("Current cart status: ");
            console.log(current(state.contents));
        }   
    }
})

export const { clearCart, addToCart, removeFromCart, modifyQuantity } = cartSlice.actions
export default cartSlice.reducer