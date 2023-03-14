import { createSlice, current } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        gender: "",
        sunglasses: undefined
    },
    reducers: {
        handleFilterChange: (state, action) => {
			state.gender = state.gender===action.payload?"":action.payload;
        },
         
    }
})

export const { handleFilterChange } = filterSlice.actions
export default filterSlice.reducer