// redux/contactSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventState } from "../types/event";

const initialState: EventState = {
  eventName: "",
  collegeName: "",
  description: "",
  eventType: "",
  eventLocation: "",
  registrationCount: "",
  registrationDeadline: "",
  contactEmail: "",
  eventLink: "",
};

const eventSlice = createSlice({
  name: "Event",
  initialState,
  reducers: {
    setEventName: (state, action: PayloadAction<string>) => {
      state.eventName = action.payload;
    },
    setCollegeName: (state, action: PayloadAction<string>) => {
      state.collegeName = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setEventType: (state, action: PayloadAction<string>) => {
      state.eventType = action.payload;
    },
    setEventLocation: (state, action: PayloadAction<string>) => {
      state.eventLocation = action.payload;
    },
    setRegistrationCount: (state, action: PayloadAction<string>) => {
      state.registrationCount = action.payload;
    },
    setRegistrationDeadline: (state, action: PayloadAction<string>) => {
      state.registrationDeadline = action.payload;
    },
    setContactEmail: (state, action: PayloadAction<string>) => {
      state.contactEmail = action.payload;
    },
    setEventLink: (state, action: PayloadAction<string>) => {
      state.eventLink = action.payload;
    },

    resetForm: () => initialState,
  },
});

export const {
  setEventName,
  setCollegeName,
  setDescription,
  setEventType,
  setEventLocation,
  setRegistrationCount,
  setRegistrationDeadline,
  setContactEmail,
  setEventLink,
  resetForm,
} = eventSlice.actions;

export default eventSlice.reducer;
