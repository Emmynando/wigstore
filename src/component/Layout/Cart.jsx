import { useState } from "react";

import Cancel from "./CancelSvg";
import styles from "./cart.module.css";

function CartPage(props) {
  const { title, quantity, imagez, price } = props.item;

  const [cancelCart, setCancelCart] = useState(true);

  function cancelHandler() {
    setCancelCart(false);
  }

  return (
    <div>
      <div>
        <div className={styles["cart-cancel"]}>
          <button onClick={cancelHandler}>
            <Cancel />
          </button>
        </div>
        <div className={styles["cart-item"]}>
          <h3> Cart Items</h3>
          {/* <p>
            Cart Empty <br />
            add items to cart
          </p> */}
          <li>
            <img src={imagez} />
            <div className={styles["items-info"]}>
              <div>
                <h3>
                  {title}. ${price}
                </h3>
              </div>
              <div className={styles.actions}>
                <button> - </button>
                <p> {quantity} </p>
                <button>+</button>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

{
  /* <li>
  <img src={require("../wigPictures/wig-1.png")} />
  <div className={styles["items-info"]}>
    <div>
      <h3> Brazillian Wig. ($114)</h3>
    </div>
    <div className={styles.actions}>
      <button> - </button>
      <p> 0 </p>
      <button>+</button>
    </div>
  </div>
</li> */
}
