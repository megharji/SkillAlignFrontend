import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: null,
  isAuthenticated: false,
  access_token: null,
  loading: false,
  user: null,
  error: null,
  errorMsg: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.access_token = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = null;
      state.role = action.payload.role;      
      state.access_token = action.payload.access_token;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.access_token = null;      
      state.loading = false;
      state.error = action.payload;
      state.errorMsg = action.payload;
      state.role = null;

    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      state.access_token = null;
      state.role = null;
    },
  },
});

export const { 
    loginRequest, loginSuccess, loginFailure,logout } =
  loginSlice.actions;

export default loginSlice.reducer;
