import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: null,
  error: null,
  errorMsg: null,
  success: false,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    signupRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload;
      state.success = true;
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.errorMsg = action.payload;
      state.success = false;
    }
  },
});

export const { signupRequest, signupSuccess, signupFailure } =
  signupSlice.actions;

export default signupSlice.reducer;
