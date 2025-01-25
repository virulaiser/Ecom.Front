import { createSlice } from "@reduxjs/toolkit";

const orderPriceSlice = createSlice({
  name: "orderPrice",
  initialState: 0,
  reducers: {
    addPrice(state, action) {
      return (state = state + action.payload);
    },
    removePrice(state, action) {
      return (state = state - action.payload);
    },
    removeTotalPrice(state, action) {
      return (state = state - action.payload);
    },
    resetPrice(state, action) {
      return state = 0;
    }
  },
});

const { actions, reducer } = orderPriceSlice;
export const { addPrice, removePrice, removeTotalPrice, resetPrice } = actions;
export default reducer;
