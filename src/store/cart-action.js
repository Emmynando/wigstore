import { cartActions } from "./CartSlice";
import { uiActions } from "./uiSlice";

// loading cart data on cart
export function fetchCartData() {
  return async (dispatch) => {
    async function getDatum() {
      const getData = await fetch(
        "https://wigstore-9d8f4-default-rtdb.firebaseio.com/cart.json"
      );
      if (!getData.ok) {
        throw new Error("error");
      }
      const response = await getData.json();
      return response;
    }
    try {
      const cartData = await getDatum();
      dispatch(cartActions.replaceCart(cartData));
    } catch (err) {
      console.log(err.message);
    }
  };
}

// sending cart data to firebase
export const cartData = (cartSelector) => {
  return async (dispatch) => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({ message: "adding to cart" }));
      const data = await fetch(
        "https://wigstore-9d8f4-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartSelector),
        }
      );
      if (!data.ok) {
        // throw new Error("error");
        dispatch(
          uiActions.showNotification({ message: "couldn't add to cart" })
        );
      }
      const response = await data.json();
      return response;
    };

    try {
      await sendCartData();
      dispatch(uiActions.showNotification({ message: "item added" }));
    } catch (err) {
      console.log(err);
    }
  };
};
