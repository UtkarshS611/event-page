// redux/store.ts
import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './eventSlice'

export const store = configureStore({
  reducer: {
    contact: eventReducer,
  },
})

export type AppStore = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch