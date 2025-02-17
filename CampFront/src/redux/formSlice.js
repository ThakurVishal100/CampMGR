import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: "",
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    company: "",
  };
  

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      return { ...state, ...action.payload }; // Merge new data into state
    },
    resetFormData: () => initialState, // To clear the form if needed
  },
});

export const { updateFormData, resetFormData } = formSlice.actions;
export default formSlice.reducer;
