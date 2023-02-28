import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GoodByePage from "./pages/GoodBye";
import Hompage from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import { cartData, fetchCartData } from "./store/cart-action";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Hompage />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <GoodByePage />,
  },
]);

// let initial = true;

function App() {
  const cartSelector = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (cartSelector.change) {
    // }
    dispatch(fetchCartData());
  }, [dispatch]);

  // effect for sending items to firebase
  useEffect(() => {
    dispatch(cartData(cartSelector));
  }, [cartSelector, dispatch]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
