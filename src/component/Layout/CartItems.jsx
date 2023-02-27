import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/CartSlice";
import Cancel from "./CancelSvg";

import CartPage from "./Cart";
import styles from "./cart.module.css";
import { uiActions } from "../../store/uiSlice";

function CartItems() {
  const cartSelector = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const emptyCart = cartSelector.length === 0;

  // rendring cart state
  const [cancelCart, setCancelCart] = useState(true);

  // functionality for closing the cart using cancel button
  function cancelHandler() {
    setCancelCart(false);
    dispatch(uiActions.toggle());
  }

  // dispatch to clear all items in cart
  function clearCartHandler() {
    dispatch(cartActions.clearCart());
  }

  // dispatching actions for checking out of the cart
  function submitCartHandler() {
    setCancelCart(false);
    dispatch(uiActions.showCheckOut());
  }

  return (
    <div>
      {cancelCart && (
        <div className={styles["cart-container"]}>
          <div className={styles["cart-cancel"]}>
            <button onClick={cancelHandler}>
              <Cancel />
            </button>
          </div>
          <h2> Cart Items</h2>
          {/* conditional remdering if cart is empty */}
          {emptyCart && (
            <p className={styles.p}>
              Cart Empty <br />
              add items to cart
            </p>
          )}
          <ul>
            {cartSelector.map((item) => (
              <CartPage
                key={item.id}
                item={{
                  id: item.id,
                  title: item.title,
                  quantity: item.quantity,
                  imagez: item.imagez,
                  price: item.price,
                }}
              />
            ))}
          </ul>
          {/* buttons for if items is in the cart */}
          {!emptyCart && (
            <div className={styles.flexButton}>
              <button
                onClick={submitCartHandler}
                className={styles["check-out"]}
              >
                Check Out
              </button>
              <button
                onClick={clearCartHandler}
                className={styles["clear-cart"]}
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CartItems;
