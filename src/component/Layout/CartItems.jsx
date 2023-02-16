import { useState } from "react";
import { useSelector } from "react-redux";
import Cancel from "./CancelSvg";

import CartPage from "./Cart";
import styles from "./cart.module.css";

function CartItems() {
  const cartSelector = useSelector((state) => state.cart.items);
  const emptyCart = cartSelector.length === 0;

  const [cancelCart, setCancelCart] = useState(true);

  function cancelHandler() {
    setCancelCart(false);
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
        </div>
      )}
    </div>
  );
}

export default CartItems;
