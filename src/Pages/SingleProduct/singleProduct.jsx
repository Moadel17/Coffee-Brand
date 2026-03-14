import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import "./singleProduct.css";
import Count from "./count/count";
import { Link, useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useContext, useState } from "react";
import { Details } from "../Shop Page/cardDetails";
import { Window } from "../../Context/windowWidth";
import { CART } from "../../Context/cart";

export default function SingleProduct() {
  const [watchList, setWatch] = useState(false);
  const { id } = useParams();
  const product = Details.find((item) => item.id === Number(id));
  const isWindow = useContext(Window);
  const [count, setCount] = useState(1);
  const { cart, setCart } = useContext(CART);

  function addToCart(id) {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = localCart.findIndex((product) => product.id === id);
    if (item !== -1) {
      localCart[item].count += count;
    } else {
      const newProduct = {
        id: product.id,
        count: count,
      };
      localCart.push(newProduct);
    }
    localStorage.setItem("cart", JSON.stringify(localCart));
    setCart([...localCart]);
  }

  return (
    <div
      style={{ top: isWindow > 724 ? "113px" : "130px" }}
      className="single-product">
      <Link className="link" to={`/shop`}>
        <MdKeyboardDoubleArrowLeft />
        Back to Shop
      </Link>
      <div key={product.id} className="product">
        <div className="image">
          <p className="label">{product.label}</p>
          <img src={product.img} alt="" />
        </div>
        <div className="product-data">
          <h3> {product.name} </h3>
          <div className="price">
            <h4>${product.price}USD</h4>
            <h4
              style={{
                display: product.discount === null ? "none" : product.discount,
              }}>
              ${product.discount}USD
            </h4>
          </div>
          <p className="desc">{product.description}</p>
          <div className="count">
            <span>Quantity :</span> <Count count={count} setCount={setCount} />
          </div>
          <div className="btn-add">
            <button onClick={() => addToCart(product.id)}>
              <FaCartShopping /> Add to cart
            </button>
            <button
              onClick={() => setWatch((prev) => !prev)}
              className={watchList === false ? "" : "watch-list"}>
              <FaHeart />
              Add to watchList
            </button>
          </div>
          <ul className="features">
            <h5>Product Features :</h5>
            <li>
              <span>✓</span>
              <span>Premium quality ingredients</span>
            </li>
            <li>
              <span>✓</span>
              <span>Tested and certified for safeliy</span>
            </li>
            <li>
              <span>✓</span>
              <span>Fast and secure delivery</span>
            </li>
            <li>
              <span>✓</span>
              <span>30-day money-back guarantee</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
