import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../header/Header";
import { ScrollToTop } from "../../Context/ScrollToTop";

export const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
