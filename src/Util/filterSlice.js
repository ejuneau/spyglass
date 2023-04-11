import { createSlice, current } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        gender: "",
        sunglasses: undefined
    },
    reducers: {
        handleGenderChange: (state, action) => {
			state.gender = state.gender===action.payload?"":action.payload;
        },
        handleSunglassesChange: (state, action) => {
            state.sunglasses = action.payload;
        }
         
    }
})

export const { handleGenderChange, handleSunglassesChange } = filterSlice.actions
export default filterSlice.reducer