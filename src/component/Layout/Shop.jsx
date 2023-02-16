import { useDispatch } from "react-redux";

import { cartActions } from "../../store/CartSlice";
import CartIcon from "../UI/cartIcon";
import classes from "./shop.module.css";

function ShopSection(props) {
  const { id, imagez, title, price, formerPrice } = props.shop;

  const dispatch = useDispatch();

  function addItemHandler() {
    dispatch(cartActions.itemOrdered({ id, title, imagez, price }));
  }

  return (
    <>
      <div key={id} className={classes["item-container"]}>
        <img src={imagez} alt="wigs" />
        <h2>{title}</h2>
        <h3 className={classes.price}>
          <span className={classes.former}>${formerPrice}</span> ${price}
        </h3>
        <button onClick={addItemHandler}>
          Add to
          <span className={classes.iconz}>
            <CartIcon />
          </span>
        </button>
      </div>
    </>
  );
}

export default ShopSection;
