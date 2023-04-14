import { createSlice, current } from "@reduxjs/toolkit";
import Products from '../Products';
import verbose from "./verbose";

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
			verbose && console.log("Dumping cart contents...")
            state.contents.length = 0;
			verbose && console.log("Current cart status: ");
			verbose && console.log(current(state.contents));
            state.count = 0;
        },
        addToCart: (state, action) => {
            //expects a payload of an object containing the id of the frame and a quantity

            //Skip action if item is already in cart
            if (action.payload.quantity === 0) {console.log("Not adding 0 items to cart!")} 
            else {
                verbose && console.log("adding " + action.payload.quantity + " x " + action.payload.id + " to cart...")
                verbose && console.log("Checking if "); console.log(action.payload.id); console.log(" is in "); console.log(current(state.contents))
                if (!current(state.contents).find(item => item.id === action.payload.id && item.variant === action.payload.variant)) {
                    verbose && console.log(current(state.contents).find(item => item.id === action.payload.id))
                    verbose && console.log(action.payload.id +" not found in cart, adding...")
                    state.contents.push(action.payload)
                } 
                else {
					verbose && console.log(action.payload.id+" already in cart. skipping action")
					}
            }
            verbose && console.log("Current cart contents: "); console.log(current(state.contents));

            state.count = updateQuantity(state);
        },
        removeFromCart: (state, action) => {
            //expects a payload of an id of the frame to be removed
			verbose && console.log("Removing "+action.payload.id+" from cart"); 
			verbose && console.log(current(state.contents));
            verbose && console.log(action.payload); 
            state.contents.splice(state.contents.indexOf(state.contents.filter(item => item.id === action.payload.id).find(item => item.variant === action.payload.variant)), 1);
			verbose && console.log("Current cart status: ");
            verbose && console.log(current(state.contents));
            state.count = updateQuantity(state);

        },
        modifyQuantity: (state, action) => {
            //expects a payload of an object containing the id of the frame and the new quantity
            if (action.payload.newQuantity === 0) {
                verbose && console.log("Removing "+action.payload.id+" from cart") 
                verbose && console.log(current(state.contents));
                verbose && console.log(action.payload)
                state.contents.splice(state.contents.indexOf(state.contents.filter(item => item.id === action.payload.id).find(item => item.variant === action.payload.variant)), 1);
                verbose && console.log("Current cart status: ");
                verbose && console.log(current(state.contents));
            } else {
            verbose && console.log("setting the quantity of "+action.payload.id+" to "+action.payload.newQuantity)
            state.contents.filter(item => item.id === action.payload.id).find(item => item.variant === action.payload.variant).quantity = action.payload.newQuantity;
            verbose && console.log("Current cart status: ");
            verbose && console.log(current(state.contents));
            }
        state.count = updateQuantity(state);
        }   
    }
})

export const { clearCart, addToCart, removeFromCart, modifyQuantity } = cartSlice.actions
export default cartSlice.reducer