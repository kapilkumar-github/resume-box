import { ResumeData } from "@/assets/data/resume.data";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  // Default Data For Resume
  resumeData: ResumeData,
};

const resumeSlice = createSlice({
  name: "resumeSlice",
  initialState,
  reducers: {
    setResumeData: (state, action) => {
      state.resumeData = action.payload;
    },
  },
});

export const resumeReducer = resumeSlice.reducer;

export const { setResumeData } = resumeSlice.actions;
