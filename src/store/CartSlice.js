import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    itemOrdered(state, action) {
      const newItem = action.payload;
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + state.items.price;
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
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.price = existingItem.price - existingItem.totalPrice;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
