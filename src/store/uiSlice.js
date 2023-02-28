import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { showCart: false, notification: null, checkOutz: false },
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = { message: action.payload?.message };
    },
    showCheckOut(state) {
      state.checkOutz = !state.checkOutz;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
