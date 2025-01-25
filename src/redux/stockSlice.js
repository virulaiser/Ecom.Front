import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "stock",
  initialState: 0,
  reducers: {
    setStock(state, action) {
        
    },
  },
});

const { actions, reducer } = cartSlice;
export const { setStock } = actions;
export default reducer;