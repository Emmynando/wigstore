import { useEffect, useRef } from "react";
import CartIcon from "./cartIcon";

import { uiActions } from "../../store/uiSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "./NavBar.module.css";
// import { useRef } from "react";

function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const selectorRef = useRef();

  const scrollHandler = (_) => {
    const position = selectorRef.current.getBoundingClientRect();
    if (position.top >= 0) {
      // console.log(position);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);

  const cartToggleHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <>
      <div className={styles.discount}>
        <h3>
          Shop for items above $1000 and get free delivery...Offer expires in 28
          days...
        </h3>
      </div>
      <nav ref={selectorRef}>
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
