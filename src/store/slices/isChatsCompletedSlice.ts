import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../assets/type/reduxType";
import { useAppSelector } from "../../hooks/useAppSelector";

const initialState: boolean = false;

export const isChatsCompletedSlice = createSlice({
  name: "isChatsCompleted",
  initialState: initialState,
  reducers: {
    setIsChatsCompleted: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

//reducer
export const isChatsCompletedReducer = isChatsCompletedSlice.reducer;

//action
export const { setIsChatsCompleted } = isChatsCompletedSlice.actions;

//selector

export const useIsChatsCompletedSelector = () => {
  const isChatsCompleted = useAppSelector(
    (state: RootState) => state.isChatsCompleted
  );
  return { isChatsCompleted };
};
