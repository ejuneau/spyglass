import { createSlice, current } from "@reduxjs/toolkit";

export const sortSlice = createSlice({
    name: 'sort',
    initialState: {
        //initialise cart slice as an array of objects containing the id of the frame and a quantity
        sortBy: "",
    },
    reducers: {
        handleSortChange: (state, action) => {
			state.sortBy = state.sortBy===action.payload?"":action.payload;
        },
         
    }
})

export const { handleSortChange } = sortSlice.actions
export default sortSlice.reducer