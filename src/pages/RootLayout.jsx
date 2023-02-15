import { Outlet } from "react-router-dom";
import Navbar from "../component/UI/NavBar";

function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
