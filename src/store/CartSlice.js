import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  // change: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload?.items || [];
      state.totalQuantity = action.payload?.totalQuantity || 0;
      state.totalAmount = action.payload?.totalAmount || 0;
    },
    itemOrdered(state, action) {
      const newItem = action.payload;
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + state.items.price;
      // state.change = true;
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          imagez: newItem.imagez,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.price = existingItem.price + newItem.price;
      }
    },
    itemDecreased(state, action) {
      const id = action.payload;
      state.totalAmount = state.totalAmount - action.payload;
      state.totalQuantity--;
      // state.change = true;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.price = existingItem.price - existingItem.totalPrice;
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
