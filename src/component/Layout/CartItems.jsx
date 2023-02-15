import { useSelector } from "react-redux";
import CartPage from "./Cart";
import styles from "./cart.module.css";

function CartItems() {
  const cartSelector = useSelector((state) => state.ui.items);
  console.log(cartSelector);

  return (
    <div className={styles["cart-container"]}>
      <ul>
        {cartSelector.map((item) => (
          <CartPage
            item={{
              title: item.title,
              quantity: item.quantity,
              imagez: item.imagez,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default CartItems;
