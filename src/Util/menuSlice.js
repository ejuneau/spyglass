import { createSlice, current } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        //initialise cart slice as an array of objects containing the id of the frame and a quantity
        showMenu: false,
    },
    reducers: {
        toggleMenu: (state) => {
			state.showMenu = !state.showMenu;
        },
         
    }
})

export const { toggleMenu } = menuSlice.actions
export default menuSlice.reducer