import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

import { RootState } from "../assets/type/reduxType";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
