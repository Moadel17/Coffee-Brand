import { createContext, useEffect, useState } from "react";

export const Fav = createContext();

export const Favouite = ({ children }) => {
  const [f, setF] = useState([]);

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("fav")) || [];
    setF(fav);
  }, []);

  return <Fav.Provider value={{ f, setF }}>{children}</Fav.Provider>;
};
