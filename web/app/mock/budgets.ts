import { IoGiftSharp, IoFastFoodSharp } from "react-icons/io5";
import {
  BiSolidSpa,
  BiSolidHomeHeart,
  BiSolidShoppingBagAlt,
} from "react-icons/bi";
import { RiBillFill } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import { GiSmart } from "react-icons/gi";
import { SiDcentertainment, SiTransportforlondon } from "react-icons/si";
import {
  MdFamilyRestroom,
  MdLocalGroceryStore,
  MdHealthAndSafety,
  MdOtherHouses,
  MdSportsBaseball,
  MdWork,
} from "react-icons/md";
import { BsFillAirplaneFill } from "react-icons/bs";
import { BudgetType } from "../module";

export const budgets: Array<BudgetType> = [
  {
    name: "Beauty",
    icon: BiSolidSpa,
  },
  {
    name: "Bills & Fees",
    icon: RiBillFill,
  },
  {
    name: "Car",
    icon: AiFillCar,
  },
  {
    name: "Education",
    icon: GiSmart,
  },
  {
    name: "Entertainment",
    icon: SiDcentertainment,
  },
  {
    name: "Family & Personal",
    icon: MdFamilyRestroom,
  },
  {
    name: "Food & Drink",
    icon: IoFastFoodSharp,
  },
  {
    name: "Gifts",
    icon: IoGiftSharp,
  },
  {
    name: "Groceries",
    icon: MdLocalGroceryStore,
  },
  {
    name: "Healthcare",
    icon: MdHealthAndSafety,
  },
  {
    name: "Home",
    icon: BiSolidHomeHeart,
  },
  {
    name: "Other",
    icon: MdOtherHouses,
  },
  {
    name: "Shopping",
    icon: BiSolidShoppingBagAlt,
  },
  {
    name: "Sport & Hobbies",
    icon: MdSportsBaseball,
  },
  {
    name: "Transport",
    icon: SiTransportforlondon,
  },
  {
    name: "Travel",
    icon: BsFillAirplaneFill,
  },
  {
    name: "Work",
    icon: MdWork,
  },
];
