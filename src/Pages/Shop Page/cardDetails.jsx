import { FaHeart } from "react-icons/fa";
import french_coffee from "../../assets/photos/france coffee.png";
import tea from "../../assets/photos/tea.png";
import green_tea from "../../assets/photos/green tea.png";
import osmosis from "../../assets/photos/cherry osmosis.png";
import orange_jucie from "../../assets/photos/orange jucie.png";
import ice_coffee from "../../assets/photos/ice coffee.png";
import turkish_coffee from "../../assets/photos/turkish coffee.png";

export const Details = [
  {
    id: 1,
    img: french_coffee,
    label: "",
    icon: <FaHeart />,
    name: "Frensh Coffee",
    price: 23,
    discount: 30,
    category: "coffee",
  },
  {
    id: 2,
    img: green_tea,
    label: "save 10%",
    icon: <FaHeart />,
    name: "Green Tea",
    price: 42,
    discount: 48,
    category: "tea",
  },
  {
    id: 3,
    img: orange_jucie,
    label: "save 10%",
    icon: <FaHeart />,
    name: "Orange Juice",
    price: 50,
    discount: 60,
    category: "juice",
  },
  {
    id: 4,
    img: osmosis,
    label: "New",
    icon: <FaHeart />,
    name: "Cherry Osmosis",
    price: 30,
    discount: null,
    category: "osmosey",
  },
  {
    id: 5,
    img: ice_coffee,
    label: "",
    icon: <FaHeart />,
    name: "Ice Coffee",
    price: 12,
    discount: null,
    category: "coffee",
  },
  {
    id: 6,
    img: tea,
    label: "save 10%",
    icon: <FaHeart />,
    name: "Tea",
    price: 12,
    discount: 20,
    category: "tea",
  },
  {
    id: 7,
    img: turkish_coffee,
    label: "",
    icon: <FaHeart />,
    name: "Turkish Coffee",
    price: 25,
    discount: null,
    category: "coffee",
  },
];
