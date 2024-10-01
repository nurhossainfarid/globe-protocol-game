import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const trophySlice = createSlice({
    name: 'trophy',
    initialState,
    reducers: {
        increment: (state, { payload }) => {
            state.value += payload
        }, 
        decrement: (state, { payload }) => {
            state.value -= payload
        }
    }
})

export const { increment, decrement } = trophySlice.actions;
export default trophySlice.reducer;