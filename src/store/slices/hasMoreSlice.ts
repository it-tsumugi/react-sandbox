import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../assets/type/reduxType";
import { useAppSelector } from "../../hooks/useAppSelector";

const initialState: boolean = true;

export const hasMoreSlice = createSlice({
  name: "hasMore",
  initialState: initialState,
  reducers: {
    setHasMore: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

//reducer
export const hasMoreReducer = hasMoreSlice.reducer;

//action
export const { setHasMore } = hasMoreSlice.actions;

//selector

export const useHasMoreSelector = () => {
  const hasMore = useAppSelector((state: RootState) => state.hasMore);
  return { hasMore };
};
