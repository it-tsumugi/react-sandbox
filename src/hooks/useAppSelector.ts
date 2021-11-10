import { useSelector } from "react-redux";
import { RootState } from "../assets/type/reduxType";
import { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
