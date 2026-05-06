import { BsCupStraw } from "react-icons/bs";
import { CiCoffeeCup } from "react-icons/ci";
import { IoEye } from "react-icons/io5";
import { SiGitea } from "react-icons/si";
import { TbMilkFilled, TbMilkshake } from "react-icons/tb";
import french_coffee from "../../assets/photos/france coffee.png";
import tea from "../../assets/photos/tea.png";
import green_tea from "../../assets/photos/green tea.png";
import osmosis from "../../assets/photos/cherry osmosis.png";
import orange_jucie from "../../assets/photos/orange jucie.png";
import ice_coffee from "../../assets/photos/ice coffee.png";
import { FaTruck } from "react-icons/fa";

export const categories = [
  {
    id: 1,
    icon: <CiCoffeeCup />,
    text: "Coffee",
    items: "12 items",
  },
  { id: 2, icon: <SiGitea />, text: "Tea", items: "8 items" },
  { id: 3, icon: <TbMilkshake />, text: "Juice", items: "9 items" },
  { id: 4, icon: <BsCupStraw />, text: "Osmosis", items: "18 items" },
  { id: 5, icon: <TbMilkFilled />, text: "Milks", items: "15 items" },
];

export const mostSell = [
  {
    id: 1,
    label: "most",
    image: french_coffee,
    name: "French Coffee",
    more: "Discover More",
    icon: <IoEye />,
  },
  {
    id: 2,
    label: "most",
    image: tea,
    name: "Tea",
    more: "Discover More",
    icon: <IoEye />,
  },
  {
    id: 3,
    label: "most",
    image: osmosis,
    name: "Cherry Smoothie",
    more: "Discover More",
    icon: <IoEye />,
  },
];

export const lastProducts = [
  {
    id: 1,
    type: 20 + "%",
    image: french_coffee,
    name: "Hazelnut Coffee",
    price: 20,
    discount: 18,
    icon: <IoEye />,
  },
  {
    id: 2,
    type: "New",
    image: tea,
    name: "Tea",
    price: 12,
    discount: 10,
    icon: <IoEye />,
  },
  {
    id: 3,
    type: null,
    image: osmosis,
    name: "Cherry Osmosis",
    price: 39,
    discount: null,
    icon: <IoEye />,
  },
  {
    id: 4,
    type: null,
    image: orange_jucie,
    name: "Orange Jucie",
    price: 44,
    discount: null,
    icon: <IoEye />,
  },
  {
    id: 5,
    type: null,
    image: ice_coffee,
    name: "Ice Coffee",
    price: 34,
    discount: null,
    icon: <IoEye />,
  },
  {
    id: 6,
    type: "New",
    image: green_tea,
    name: "Green Tea",
    price: 26,
    discount: null,
    icon: <IoEye />,
  },
];
