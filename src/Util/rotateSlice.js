import { createSlice, current } from "@reduxjs/toolkit";

export const rotateSlice = createSlice({
    name: 'rotate',
    initialState: {
        rotateBy: 0,
        antiRotateBy: 0,
        tanRotateBy: 0
    },
    reducers: {
        handleRotateChange: (state, action) => {
			state.rotateBy = !action.payload?"0rad":`${-1 * action.payload}rad`;
            state.antiRotateBy = !action.payload?"0rad":`${ action.payload}rad`;
            state.tanRotateBy = !action.payload?0:Math.tan(action.payload);
            console.log("Rotation:", state.rotateBy)
        },
         
    }
})

export const { handleRotateChange } = rotateSlice.actions
export default rotateSlice.reducer