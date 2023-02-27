import { useDispatch } from "react-redux";
import { cartActions } from "../../store/CartSlice";

import styles from "./cart.module.css";

function CartPage(props) {
  // const selector = useSelector((state) => state.cart.items);
  const { id, title, quantity, imagez, price } = props.item;

  const dispatch = useDispatch();

  // removing items rom cart using item id
  function removeItemHandler() {
    dispatch(cartActions.itemDecreased(id));
  }

  // adding items to cart using the props key
  function addItemHandler() {
    dispatch(cartActions.itemOrdered({ id, title, imagez, price }));
  }
  return (
    <div>
      <div>
        <div className={styles["cart-item"]}>
          <li>
            <img src={imagez} />
            <div className={styles["items-info"]}>
              <div>
                <h3>
                  <span className={styles["item-price"]}>{title}.</span> $
                  {price}
                </h3>
              </div>
              <div className={styles.actions}>
                <button onClick={removeItemHandler}> - </button>
                <p> {quantity} </p>
                <button onClick={addItemHandler}>+</button>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
