import { useContext } from "react";
import Count from "../../Components/count/count";
import "./cartpage.css";
import { Details } from "../Shop Page/cardDetails";
import { CART } from "../../Context/cart";
import { Link } from "react-router-dom";
import { TbGardenCartOff } from "react-icons/tb";

export default function CartPage() {
  const { cart, setCart } = useContext(CART);

  const products = cart.map((item) => {
    const pro = Details.find((ele) => item.id === ele.id);
    return { ...pro, count: item.count };
  });

  function remove(id) {
    const remove = products.filter((item) => item.id !== id);
    setCart(remove);
    localStorage.setItem("cart", JSON.stringify(remove));
  }

  const showProducts = products.map((ele) => (
    <div key={ele.id} className="product">
      <img src={ele.img} alt="" />
      <div className="data">
        <h3>{ele.name}</h3>
        <div className="price">
          <p className="current">${ele.price}USD</p>
          <p
            className="discount"
            style={{ display: ele.discount ? "block" : "none" }}>
            ${ele.discount}USD
          </p>
          <p
            className="label"
            style={{ display: ele.label ? "block" : "none" }}>
            {ele.label}
          </p>
        </div>
        <p className="count">
          Qunatily :<Count count={ele.count} />
        </p>
        <div className="btn">
          <Link>Cheak Out</Link>
          <button onClick={() => remove(ele.id)}>Remove from Cart</button>
        </div>
      </div>
    </div>
  ));

  const showEmpty = (
    <div className="empty">
      <TbGardenCartOff />
      <h2>Cart Shop is empty</h2>
      <Link to="/shop" className="btn-shop">
        Countine Shopping
      </Link>
    </div>
  );

  return (
    <div className={`cart-page ${cart.length > 0 ? "" : "none"}`}>
      <div className="products">
        {products.length > 0 ? showProducts : showEmpty}
      </div>
    </div>
  );
}
