import { configureStore } from '@reduxjs/toolkit'
import trophyReducer from './features/trophy/trophySlice'

export const store = configureStore({
    reducer: {
        trophy: trophyReducer
    }
})