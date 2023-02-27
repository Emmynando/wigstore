import { Fragment } from "react";
import { useSelector } from "react-redux";

import Slider from "../component/Layout/Slider";
import ShopItem from "../component/Layout/ShopItem";
import CartItems from "../component/Layout/CartItems";
import NotificationItem from "../component/UI/NotificationItem";
import CheckOut from "../component/Layout/CheckOut";

function Hompage() {
  const uiSelector = useSelector((state) => state.ui.showCart);
  const notifSelector = useSelector((state) => state.ui.notification);
  const checkOutz = useSelector((state) => state.ui.checkOutz);
  return (
    <Fragment>
      <Slider />
      {uiSelector && <CartItems />}
      {checkOutz && <CheckOut />}
      <ShopItem />
      {notifSelector && <NotificationItem />}
    </Fragment>
  );
}

export default Hompage;
