import { createSlice, current } from "@reduxjs/toolkit";
import verbose from "./verbose";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        gender: "",
        sunglasses: undefined
    },
    reducers: {
        handleGenderChange: (state, action) => {
            verbose && console.log("Gender Filter: received payload of "+action.payload+" while current payload is " +current(state).gender)
			state.gender = state.gender===action.payload?"":action.payload;
            verbose && console.log("Gender Filter: New filter status is: " + current(state).gender);
        },
        handleSunglassesChange: (state, action) => {
            verbose && console.log("Sunglasses Filter: setting filter status to "+ action.payload)
            state.sunglasses = action.payload;
        }
         
    }
})

export const { handleGenderChange, handleSunglassesChange } = filterSlice.actions
export default filterSlice.reducer