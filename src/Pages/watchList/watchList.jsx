import "./watchList.css";
import { FaTrash } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { Details } from "../Shop Page/cardDetails";
import { useContext, useState } from "react";
import { HiMiniHeart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Fav } from "../../Context/fav";

export const WatchList = () => {
  const { f, setF } = useContext(Fav);
  const cards = Details.filter((ele) => f.includes(ele.id));

  function clearItem(id) {
    const clear = f.filter((ele) => ele !== id);
    localStorage.setItem("fav", JSON.stringify(clear));
    setF(clear);
  }

  const showCards = cards.map((card) => (
    <div key={card.id} className="card">
      <div className="label">
        <p style={{ display: card.label ? "block" : "none" }}>{card.label}</p>
        <button onClick={() => clearItem(card.id)}>
          <FaTrash />
        </button>
      </div>
      <img src={card.img} alt="" />
      <h5>{card.name}</h5>
      <div className="price">
        <p className="new-price">${card.price}USD</p>
        <p className="old-price">${card.discount}USD</p>
      </div>
      <button>
        <FaCartShopping /> Add To Cart
      </button>
    </div>
  ));
  const showEmpty = (
    <div className="empty">
      <HiMiniHeart />
      <h2>Watch List is empty</h2>
      <Link to="/shop" className="btn-shop">
        Countine Shopping
      </Link>
    </div>
  );

  return (
    <div className={`watch-list ${f.length > 0 ? "show" : "none"}`}>
      <div className="label">
        <h2>
          <MdFavorite />
          Watch List
        </h2>
        <p className="item-count">{f.length} item in your watch list</p>
      </div>
      <button
        className="btn"
        onClick={() => {
          localStorage.removeItem("fav");
          setF([]);
        }}>
        <FaTrash />
        Clear All
      </button>
      <div className="cards">{f.length > 0 ? showCards : showEmpty}</div>
    </div>
  );
};
