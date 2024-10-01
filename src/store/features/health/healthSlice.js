import { createSlice } from "@reduxjs/toolkit";

const initialState = [1, 2, 3, 4, 5]

export const healthSlice = createSlice({
    name: 'health',
    initialState,
    reducers: {
        gainHealth: (state) => {
            state.pop()
        }, 
        loseHealth: (state) => {
            state.pop()
        }
    }
})

export const { gainHealth, loseHealth } = healthSlice.actions;
export default healthSlice.reducer;