import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/header/Header";
import Home from "../../Components/Home/Home";
import Owners from "../../Components/owners/owners";
import Products from "../../Components/product/Product";
import SignIn from "../../Components/SignIn/signIn";

export default function HomePage() {
  return (
    <div className="container">
      <Home />
      <Products />
      <SignIn />
      <Owners />
    </div>
  );
}
