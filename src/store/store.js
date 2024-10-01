import { configureStore } from '@reduxjs/toolkit'
import trophyReducer from './features/trophy/trophySlice'
import healthReducer from './features/health/healthSlice'

export const store = configureStore({
    reducer: {
        trophy: trophyReducer,
        health: healthReducer
    }
})