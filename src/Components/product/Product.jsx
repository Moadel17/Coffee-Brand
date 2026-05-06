import "./products.css";
import { categories, lastProducts, mostSell } from "./productsComponent";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Products() {
  const [view, setView] = useState(null);

  const Categories = (
    <motion.div className="category-items">
      {categories.map((cat) => (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "circInOut" }}
          key={cat.id}
          className="category">
          <button>
            <Link className="link" to="">
              {cat.icon}
            </Link>
          </button>
          <h5>{cat.text}</h5>
          <p style={{ color: "#545454" }}>{cat.items}</p>
        </motion.div>
      ))}
    </motion.div>
  );

  const MostSell = (
    <div className="most-sell">
      {mostSell.map((card) => (
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: card.id * 0.1 }}
          className="card"
          key={card.id}>
          <div className="text">
            <p>{card.label}</p>
            <h5>{card.name}</h5>
            <Link className="link" to={`/productPage/${card.id}`}>
              {card.icon}
              <p>{card.more}</p>
            </Link>
          </div>
          <img src={card.image} alt="" />
        </motion.div>
      ))}
    </div>
  );

  const LastProducts = (
    <div className="last-products">
      <div className="products">
        {lastProducts.map((card) => (
          <motion.div
            initial={{ x: -100, scale: 0, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => setView(view === card.id ? null : card.id)}
            key={card.id}
            className="card">
            <p
              style={{
                display:
                  card.type === "New"
                    ? "block"
                    : card.type === null
                      ? "none"
                      : card.type + "block",
              }}>
              {card.type}
            </p>
            <img src={card.image} alt="" />
            <h4>{card.name}</h4>
            <p style={{ margin: "10px" }}>
              <span style={{ color: "#296cfd", marginRight: "10px" }}>
                ${card.price} USD
              </span>
              <span
                style={{
                  display: card.type === null ? "none" : "inline",
                  color: "#FDABAF",
                  textDecoration: "line-through",
                }}>
                ${card.discount} USD
              </span>
            </p>

            <Link
              className={`icon ${view === card.id ? "show" : ""}`}
              to={`/productpage/${card.id}`}>
              {card.icon} View
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="products-secttion" id="products">
      <motion.h4
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="cateogry-label">
        Shop By Category
      </motion.h4>
      {Categories}
      <motion.h3
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}>
        Most Buying
      </motion.h3>
      {MostSell}
      <motion.h3
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}>
        Last Products
      </motion.h3>

      {LastProducts}
    </section>
  );
}
