import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { showCart: false, items: [] },
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
    cartData(state, action) {
      state.data = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
