import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartBagSVG from "../component/Layout/CartBagSVG.jsx";
import { uiActions } from "../store/uiSlice.js";
import styles from "./Goodbye.module.css";

function GoodByePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const homeHandler = () => {
    // closing the cart
    dispatch(uiActions.toggle());
    dispatch(uiActions.showCheckOut());
    // navigating user back home
    navigate("/");
  };
  return (
    <div className={styles.goodbye}>
      <h1> Order Complete!</h1>
      <span className={styles["cart-bag"]}>
        <CartBagSVG />
      </span>
      <p> Thank you for your patronage hopefully, we see you soon!!</p>
      <button onClick={homeHandler}> Go Back Home</button>
    </div>
  );
}

export default GoodByePage;
