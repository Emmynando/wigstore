import CartIcon from "./cartIcon";

import { uiActions } from "../../store/uiSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "./NavBar.module.css";
import { useRef } from "react";

function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const selectorRef = useRef();

  function mountRect() {
    const rect = selectorRef.current?.getBoundingClientRect();
    console.log(rect);
  }

  const cartToggleHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <>
      <div className={styles.discount}>
        <h3>
          Shop for items above $100 and get free delivery...Offer expires in 28
          days...
        </h3>
      </div>
      <nav>
        <header>
          <h1> Wigstore</h1>
        </header>
        <ul>
          <li>
            <button onClick={cartToggleHandler}>
              <span className={styles.icon}>
                <CartIcon />
              </span>
              <span>Cart {totalQuantity}</span>
            </button>
          </li>
          <li>Logout</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
