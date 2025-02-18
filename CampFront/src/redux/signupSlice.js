import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: "",
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    company: "",
  };
  
   
const signupSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    updateSignUpData: (state, action) => {
      return { ...state, ...action.payload }; 
    },
    resetSignUpData: () => initialState, 
  },
});

export const { updateSignUpData, resetSignUpData } = signupSlice.actions;
export default signupSlice.reducer;
