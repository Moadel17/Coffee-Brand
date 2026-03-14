import { FaCartFlatbed, FaShop } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { MdAddIcCall, MdPlace } from "react-icons/md";

export const Btns = [
  {
    text: "Home",
    id: 1,
    href: "/",
  },
  {
    text: "Shop",
    id: 2,
    href: "/shop",
  },
  {
    text: "Products",
    id: 3,
    href: "#products",
  },
  {
    text: "Our Placses",
    id: 4,
  },
  {
    text: "Contact US",
    id: 5,
  },
  {
    text: "About",
    id: 6,
  },
];

export const SideBtns = [
  {
    id: 1,
    icon: <IoHome />,
    name: "Home",
  },
  {
    id: 2,
    icon: <FaShop />,
    name: "Shop",
  },
  {
    id: 3,
    icon: <FaCartFlatbed />,
    name: "Products",
  },
  {
    id: 4,
    icon: <MdPlace />,
    name: "Our Places",
  },
  {
    id: 5,
    icon: <MdAddIcCall />,
    name: "Contact US",
  },
];
