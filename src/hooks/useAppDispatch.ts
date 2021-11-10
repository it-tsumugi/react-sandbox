import { AppDispatch } from "../assets/type/reduxType";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
