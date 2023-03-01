import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";

import classes from "./CheckOut.module.css";
import { cartActions } from "../../store/CartSlice";

function BackDropModal(props) {
  return <div className={classes.backdrop} onClick={props.onClick} />;
}

function OverlayModal() {
  // getting total amount from store
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const [isComplete, setIsComplete] = useState(true);
  const navigate = useNavigate();

  function submitHandler() {
    // closing the checkout form
    setIsComplete(false);
    // clearing items in the form when checking out
    dispatch(cartActions.clearCart());
    // navigating user when checked out
    navigate("/checkout");
  }

  return (
    isComplete && (
      <div className={classes.checkout}>
        <h3> Check Out Items</h3>
        <p>
          Total Amount: <span className={classes.price}>${totalAmount}</span>
        </p>
        <button onClick={submitHandler} className={classes.btn}>
          Complete
        </button>
      </div>
    )
  );
}

function CheckOut() {
  const [iscartz, setisCartz] = useState(true);
  function closeCartHandler() {
    setisCartz(false);
  }

  // helper variable that will be rendered in the jsx
  const helperDOM = (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDropModal onClick={closeCartHandler} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <OverlayModal />,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
  return <>{iscartz && helperDOM}</>;
}

export default CheckOut;
