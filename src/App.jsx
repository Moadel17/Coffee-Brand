import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/Shop Page/shopPage";
import SingleProduct from "./Pages/SingleProduct/singleProduct";
import { Layout } from "./Components/LayOut/loyOut";
import { WatchList } from "./Pages/watchList/watchList";
import CartPage from "./Pages/CartPage/cartpage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/productpage/:id" element={<SingleProduct />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;
