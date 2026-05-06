import { CiFilter } from "react-icons/ci";
import DropdownCategory from "./dropDown/dropDownCategory";
import { Details } from "./cardDetails";
import { Link } from "react-router-dom";
import "./shopPage.css";
import { FaSearch } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import { useContext, useState } from "react";
import DropdownPrice from "./dropDown/dropDownPrice";
import { motion } from "framer-motion";
import { Window } from "../../Context/windowWidth";
import { Fav } from "../../Context/fav";

export default function ShopPage() {
  const { f, setF } = useContext(Fav);
  const [select, setSelect] = useState("All Categories");
  const [sort, setSort] = useState("default");
  const isWindow = useContext(Window);
  const [search, setSearch] = useState("");

  const cardFilterd =
    select === "All Categories"
      ? Details
      : Details.filter((item) => item.category === select);

  const searchFiterd = cardFilterd.filter((item) =>
    !search ? true : item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const sortPrice =
    sort === "default"
      ? searchFiterd
      : sort === "low"
        ? [...searchFiterd].sort((a, b) => a.price - b.price)
        : [...searchFiterd].sort((a, b) => b.price - a.price);

  function addTofav(id) {
    let current = JSON.parse(localStorage.getItem("fav")) || [];
    if (current.includes(id)) {
      current = current.filter((item) => item !== id);
    } else {
      current.push(id);
    }
    localStorage.setItem("fav", JSON.stringify(current));
    setF([...current]);
  }
  return (
    <div
      style={{ top: isWindow >= 724 ? "110px" : "130px" }}
      className="shop-page">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="label">
        <h2>Our Coffee Shop</h2>
        <p>Browse our extensive collection of quality products and supplies.</p>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="filter-box">
        <div className="icon">
          <CiFilter />
          <h5>Filters</h5>
        </div>
        <div className="inputs">
          <div className="box">
            <p>Search Products</p>
            <div className="search">
              <FaSearch />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search By Name"
              />
            </div>
          </div>
          <div className="box">
            <p>Category</p>
            <DropdownCategory
              select={select}
              setSelect={setSelect}
              className="cat"
            />
          </div>
          <div className="box">
            <p>Sort By Price</p>
            <DropdownPrice sort={sort} setSort={setSort} className="price" />
          </div>
        </div>
      </motion.div>

      <p className="show-p">
        Showing {searchFiterd.length} of {Details.length}
      </p>

      <div className="cards">
        {sortPrice.map((card) => {
          return (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              key={card.id}
              className="card">
              <div className="icons">
                <p
                  style={{
                    display: card.label ? "block" : "none",
                  }}>
                  {card.label}
                </p>
                <button
                  onClick={() => addTofav(card.id)}
                  className={f.includes(card.id) ? "fav" : "unfav"}>
                  {card.icon}
                </button>
              </div>
              <img src={card.img} alt="" />
              <h3>{card.name}</h3>
              <div className="price">
                <p style={{ color: "#296cfd" }}>{card.price}USD</p>
                <p
                  style={{
                    color: "#FDABAF",
                    textDecoration: "line-through",
                    display: card.discount ? "block" : "none",
                  }}>
                  {card.discount}USD
                </p>
              </div>
              <Link to={`/productpage/${card.id}`} className="link">
                <BsEyeFill />
                Show Details
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
