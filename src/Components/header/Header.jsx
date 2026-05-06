import { FaBars, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import "./header.css";
import { MdFavorite } from "react-icons/md";
import { Btns, SideBtns } from "./NB-Btns";
import { useContext, useState } from "react";
import { Window } from "../../Context/windowWidth";
import profile from "../../../src/assets/photos/person 1.png";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { Fav } from "../../Context/fav";
import { IoCartOutline } from "react-icons/io5";
import { CART } from "../../Context/cart";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const isWindow = useContext(Window);
  const { f } = useContext(Fav);
  const { cart } = useContext(CART);

  const navTop = (
    <div className="nav-top">
      <div className="brand-box">
        <button
          className="bars"
          style={{ display: isWindow > 840 ? "none" : "inline" }}>
          <FaBars onClick={() => setOpenMenu((prev) => !prev)} />
        </button>
        <Link to="/" className="brand">
          Bellesmo
        </Link>
      </div>
      <div
        className="search-box"
        style={{ display: isWindow > 840 ? "flex" : "none" }}>
        <input type="text" placeholder="Enter Your Product" />
        <button>
          <FaSearch />
        </button>
      </div>
      <div className="icons">
        <Link to={`/watchlist`}>
          {f.length > 0 ? <MdFavorite /> : <CiHeart />}
        </Link>
        <Link to={`/cart`}>
          {cart.length > 0 ? <FaShoppingCart /> : <IoCartOutline />}
        </Link>
        <Link>
          <FaUser />
        </Link>
      </div>
    </div>
  );

  const navSide = (
    <div
      className={`nav-side ${openMenu ? "active" : ""}`}
      style={{
        display: isWindow > 840 ? "none" : "flex",
      }}>
      <div className="search-box">
        <input type="text" placeholder="Enter Product" />
        <button>
          <FaSearch />
        </button>
      </div>
      {SideBtns.map((btn) => (
        <button key={btn.id}>
          {btn.icon} {btn.name}
        </button>
      ))}
      <div
        className="profile"
        style={{ bottom: isWindow >= 724 ? "130px" : "150px" }}>
        <img src={profile} alt="" />
        <p>Mohamed Adel</p>
      </div>
    </div>
  );

  const navBottom = (
    <div className="nav-bottom">
      {Btns.map((btn) =>
        btn.href?.startsWith("#") ? (
          <a href="#products" key={btn.id}>
            {btn.text}
          </a>
        ) : (
          <Link to={btn.href} key={btn.id}>
            {btn.text}
          </Link>
        ),
      )}
    </div>
  );

  return (
    <nav className="nav">
      {navTop} {navSide} {navBottom}
    </nav>
  );
}
