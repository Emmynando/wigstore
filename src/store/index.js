import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./uiSlice";
import cartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
  },
});

export default store;
