import { createSlice, current } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        isLoading: true,
    },
    reducers: {
        setLoading: (state, action) => {
            if (action.payload === true || action.payload === false) {
                state.isLoading = action.payload } else { window.alert("setLoading called with invalid parameter!")}
        },
    }
})

export const { setLoading } = loadingSlice.actions
export default loadingSlice.reducer