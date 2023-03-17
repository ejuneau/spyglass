import { createSlice, current } from "@reduxjs/toolkit";

export const rotateSlice = createSlice({
    name: 'rotate',
    initialState: {
        rotateBy: 0,
    },
    reducers: {
        handleRotateChange: (state, action) => {
			state.rotateBy = action.payload;
        },
         
    }
})

export const { handleRotateChange } = rotateSlice.actions
export default rotateSlice.reducer