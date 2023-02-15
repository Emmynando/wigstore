import { useDispatch } from "react-redux";

import { cartActions } from "../../store/CartSlice";
import CartIcon from "../UI/cartIcon";
import classes from "./shop.module.css";

function ShopSection(props) {
  const { id, imagez, title, price, formerPrice } = props.shop;

  const dispatch = useDispatch();

  function addItemHandler() {
    dispatch(cartActions.itemOrdered());
  }

  return (
    <>
      {/* <h3> Latest Arrival</h3> */}
      {/* <div className={classes["shop-container"]}> */}
      {/* {SHOP_DATA.map((item) => ( */}
      <div key={id} className={classes["item-container"]}>
        <img src={imagez} alt="wigs" />
        <h2>{title}</h2>
        {/* <h2>{item.title}</h2> */}
        <h3 className={classes.price}>
          <span className={classes.former}>${formerPrice}</span> ${price}
        </h3>
        {/* <img src={item.imagez} alt="wigs" /> */}
        {/* <h2>{item.title}</h2> */}
        {/* <h3 className={classes.price}>
                <span className={classes.former}>${item.formerPrice}</span> $
                {item.price}
              </h3> */}
        <button onClick={addItemHandler}>
          Add to
          <span className={classes.iconz}>
            <CartIcon />
          </span>
        </button>
      </div>
      {/* ))} */}
      {/* </div> */}
    </>
  );
}

export default ShopSection;
