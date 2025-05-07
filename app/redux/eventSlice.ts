// redux/contactSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EventState } from '../types/event'

const initialState: EventState = {
  eventName: "",
  collegeName: "",
  description: "",
}

const eventSlice = createSlice({
  name: 'Event',
  initialState,
  reducers: {
    setEventName: (state, action: PayloadAction<string>) => {
      state.eventName = action.payload
    },
    setCollegeName: (state, action: PayloadAction<string>) => {
      state.collegeName = action.payload
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload
    },
    resetForm: () => initialState,
  },
})

export const {
  setEventName,
  setCollegeName,
  setDescription,
  resetForm
} = eventSlice.actions

export default eventSlice.reducer