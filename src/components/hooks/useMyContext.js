import { useContext } from "react";
import { MyContext } from "../context/context";

export const useMyContext = () => useContext(MyContext);
