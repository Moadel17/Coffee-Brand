import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../header/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
