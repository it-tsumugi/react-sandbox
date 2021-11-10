import { AppDispatch } from "../assets/type/reduxType";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();
  return { dispatch };
};
