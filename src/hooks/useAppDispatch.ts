import { AppThunkDispatch } from "../assets/type/reduxType";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  return { dispatch };
};
