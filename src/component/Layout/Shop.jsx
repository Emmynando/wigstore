import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../store/CartSlice";
import CartIcon from "../UI/cartIcon";
import classes from "./shop.module.css";

// Handling cart Items for database since no backend
function ShopSection(props) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { id, imagez, title, price, formerPrice } = props.shop;

  const addToCartHandler = () => {
    const newTotalQuantity = cart.totalQuantity + 1;
    const newTotalAmount = cart.totalAmount + price;

    const updatedItems = cart.items.slice();
    const existingItem = updatedItems.find((item) => item.id === id);
    if (existingItem) {
      const updatedItem = { ...existingItem };
      updatedItem.quantity++;
      updatedItem.totalAmount = updatedItem.totalPrice + price;
      updatedItem.price = updatedItem.price + price;
      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === id
      );
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({
        id: id,
        title: title,
        imagez: imagez,
        price: price,
        totalPrice: price,
        quantity: 1,
      });
    }

    const newCart = {
      items: updatedItems,
      totalQuantity: newTotalQuantity,
      totalAmount: newTotalAmount,
    };

    dispatch(cartActions.replaceCart(newCart));
  };

  return (
    <>
      <div key={id} className={classes["item-container"]}>
        <img src={imagez} alt="wigs" />
        <h2>{title}</h2>
        <h3 className={classes.price}>
          <span className={classes.former}>${formerPrice}</span> ${price}
        </h3>
        <button onClick={addToCartHandler}>
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
