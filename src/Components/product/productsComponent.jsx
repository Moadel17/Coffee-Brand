import { BsCupStraw } from "react-icons/bs";
import { CiCoffeeCup } from "react-icons/ci";
import { IoEye } from "react-icons/io5";
import { SiGitea } from "react-icons/si";
import { TbMilkFilled, TbMilkshake } from "react-icons/tb";
import coffee from "../../../public/photos/coffee-product.png";
import tea from "/photos/tea.png";
import osm from "/photos/osmosey.png";
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
    image: coffee,
    name: "Hazelnut Coffee",
    more: "Discover More",
    icon: <IoEye />,
  },
  {
    id: 2,
    label: "most",
    image: tea,
    name: "Green Tea",
    more: "Discover More",
    icon: <IoEye />,
  },
  {
    id: 3,
    label: "most",
    image: osm,
    name: "Cherry Smoothie",
    more: "Discover More",
    icon: <IoEye />,
  },
];

export const lastProducts = [
  {
    id: 1,
    type: 20 + "%",
    image: coffee,
    name: "Hazelnut Coffee",
    price: 20,
    discount: 18,
    icon: <IoEye />,
  },
  {
    id: 2,
    type: "New",
    image: tea,
    name: "Hazelnut Coffee",
    price: 12,
    discount: 10,
    icon: <IoEye />,
  },
  {
    id: 3,
    type: null,
    image: osm,
    name: "Hazelnut Coffee",
    price: 70,
    discount: null,
    icon: <IoEye />,
  },
  {
    id: 4,
    type: null,
    image: osm,
    name: "Hazelnut Coffee",
    price: 70,
    discount: null,
    icon: <IoEye />,
  },
  {
    id: 5,
    type: null,
    image: osm,
    name: "Hazelnut Coffee",
    price: 70,
    discount: null,
    icon: <IoEye />,
  },
];
