import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login(state, action) {
      console.log("hacia el state",action.payload);
      return  action.payload
    },
    logout(state, action) {
      return null;
    },
  },
});

const { actions, reducer } = userSlice;
export const { login, logout } = actions;
export default reducer;
