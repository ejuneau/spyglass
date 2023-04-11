import { createSlice, current } from "@reduxjs/toolkit";
import Products from './Products';

function updateTotal(state) {
    var total = 0;
    for (var i = 0; i < state.contents.length; i++) {
        total += (Products.filter(product => product.id === current(state.contents)[i].id)[0].price) * current(state.contents)[i].quantity;
    }
    return total
}
function updateQuantity(state) {
    var quantity = 0;
    for( var i = 0; i < state.contents.length; i++) {
        quantity += state.contents[i].quantity 
    }
    
    state.total = updateTotal(state);
    return quantity;
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        //initialise cart slice as an array of objects containing the id of the frame and a quantity
        contents: [],
        count: 0,
        total: 0
    },
    reducers: {
        clearCart: (state) => {
			// console.log("Dumping cart contents...")
            state.contents.length = 0;
			// console.log("Current cart status: ");
			// console.log(current(state.contents));
            state.count = 0;
        },
        addToCart: (state, action) => {
            //expects a payload of an object containing the id of the frame and a quantity

            //Skip action if item is already in cart
            if (action.payload.quantity === 0) {console.log("Not adding 0 items to cart!")} 
            else {
                // console.log("adding " + action.payload.quantity + " x " + action.payload.id + " to cart...")
                // console.log("Checking if "); console.log(action.payload.id); console.log(" is in "); console.log(current(state.contents))
                if (!current(state.contents).find(item => item.id === action.payload.id && item.variant === action.payload.variant)) {
                    // console.log(current(state.contents).find(item => item.id === action.payload.id))
                    // console.log(action.payload.id +" not found in cart, adding...")
                    state.contents.push(action.payload)
                } 
                else {
					// console.log(action.payload.id+" already in cart. skipping action")
					}
            }
            // console.log("Current cart contents: "); console.log(current(state.contents));

            state.count = updateQuantity(state);
        },
        removeFromCart: (state, action) => {
            //expects a payload of an id of the frame to be removed
			// console.log("Removing "+action.payload.id+" from cart") 
			// console.log(current(state.contents));
            // console.log(action.payload)
            state.contents.splice(state.contents.indexOf(state.contents.filter(item => item.id === action.payload.id).find(item => item.variant === action.payload.variant)), 1);
			// console.log("Current cart status: ");
            // console.log(current(state.contents));
            state.count = updateQuantity(state);

        },
        modifyQuantity: (state, action) => {
            //expects a payload of an object containing the id of the frame and the new quantity
            if (action.payload.newQuantity === 0) {
                // console.log("Removing "+action.payload.id+" from cart") 
                // console.log(current(state.contents));
                // console.log(action.payload)
                state.contents.splice(state.contents.indexOf(state.contents.filter(item => item.id === action.payload.id).find(item => item.variant === action.payload.variant)), 1);
                // console.log("Current cart status: ");
                // console.log(current(state.contents));
            } else {
            // console.log("setting the quantity of "+action.payload.id+" to "+action.payload.newQuantity)
            state.contents.filter(item => item.id === action.payload.id).find(item => item.variant === action.payload.variant).quantity = action.payload.newQuantity;
            // console.log("Current cart status: ");
            // console.log(current(state.contents));
            }
        state.count = updateQuantity(state);
        }   
    }
})

export const { clearCart, addToCart, removeFromCart, modifyQuantity } = cartSlice.actions
export default cartSlice.reducer