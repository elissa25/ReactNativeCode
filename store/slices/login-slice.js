import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    username: "",
    password: "",
    token: "",
    loading: false,
    status: "",
    error: null,
  },
  reducers: {
    loginRequest(state) {
      state.loading = true;
  
    },
    successLogin(state, action) { 
      state.status = "success";
      state.loading = false;
     state.token = action.payload.accessToken;
     
  
    },
    failedLogin(state, action) {
      state.status = "failed";
      state.loading = false;
      state.token = "";
      state.error = action.payload;
    },
    Logout(state, action) {
      state.token = "";
      state.status = "1";
      
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice;
