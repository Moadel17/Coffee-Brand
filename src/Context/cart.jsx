import { createContext, useEffect, useState } from "react";

export const CART = createContext();

export const AddCart = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(getCart);
  }, []);

  return <CART.Provider value={{ cart, setCart }}> {children}</CART.Provider>;
};
