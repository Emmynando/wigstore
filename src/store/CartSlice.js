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
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + state.items.price;
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        const addedItem = state.items.map((item) => {
          let newQty = item.quantity + action.payload.quantity;
          let newPrice = item.price * newQty;
          return { ...item, price: newPrice, quantity: newQty };
        });
        state.items = addedItem;
        // }
      } else {
        state.items.push({
          id: action.payload.id,
          tile: action.payload.tile,
          imagez: action.payload.images,
          price: action.payload.price,
          quantity: 1,
        });
      }
      // state.items.push({
      //   id: newItem.id,
      //   title: newItem.title,
      //   imagez: newItem.imagez,
      //   price: newItem.price,
      //   quantity: 1,
      // });
      // } else {
      //   existingItem.quantity++;
      //   existingItem.totalAmount = existingItem.totalAmount + newItem.price;
      // }
    },
    // itemDecreased(state, action) {
    //   state.totalAmount = state.totalAmount - action.payload;
    //   state.totalQuantity--;
    //   const newId = action.payload;
    //   const existingItem = state.item.find((item) => item.id === newId.id);
    //   if (existingItem === 1) {
    //     state.item = state.item.filter((item) => item !== newId);
    //   } else {
    //     existingItem.quantity--;
    //     existingItem.price = state.price - existingItem.price;
    // existingItem.quantity--;
    // existingItem.totalAmount =
    //   existingItem.totalAmount - existingItem.price;
    //   }
    // },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
