import { Fragment } from "react";
import { useSelector } from "react-redux";

import Slider from "../component/Layout/Slider";
import ShopItem from "../component/Layout/ShopItem";
import CartItems from "../component/Layout/CartItems";

function Hompage() {
  const uiSelector = useSelector((state) => state.ui.showCart);
  return (
    <Fragment>
      <Slider />
      {uiSelector && <CartItems />}
      <ShopItem />
    </Fragment>
  );
}

export default Hompage;
