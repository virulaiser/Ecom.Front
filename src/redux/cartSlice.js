import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const checkCart = state.find(
        (product) => product._id === action.payload._id
      );
      if (checkCart) {
        checkCart.quantity = checkCart.quantity + 1;
        checkCart.totalPrice = checkCart.totalPrice + action.payload.price;
      } else {
        action.payload.quantity = 1;
        action.payload.totalPrice = action.payload.price;
        state.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      const selectedProduct = state.find(
        (product) => product._id === action.payload._id
      );
      if (selectedProduct.quantity > 1) {
        selectedProduct.quantity = selectedProduct.quantity - 1;
        selectedProduct.totalPrice =
          selectedProduct.totalPrice - action.payload.price;
      } else {
        return state.filter((product) => product._id !== action.payload._id);
      }
    },
    removeProductFromCart(state, action) {
      return state.filter((product) => product._id !== action.payload._id);
    },
    resetCart(state, action) {
      return state = [];
    }
  },
});

const { actions, reducer } = cartSlice;
export const { addToCart, removeFromCart, removeProductFromCart, resetCart } = actions;
export default reducer;
