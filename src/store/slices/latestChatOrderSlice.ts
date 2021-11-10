import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../assets/type/reduxType";
import { useAppSelector } from "../../hooks/useAppSelector";
import { START_CHAT_ORDER } from "../../assets/data/constNum";

const initialState: number = START_CHAT_ORDER - 1;

export const latestChatOrderSlice = createSlice({
  name: "latestChatOrder",
  initialState: initialState,
  reducers: {
    setLatestChatOrder: (state, action: PayloadAction<number>) => {
      return action.payload;
    },
  },
});

//reducer
export const latestChatOrderReducer = latestChatOrderSlice.reducer;

//action
export const { setLatestChatOrder } = latestChatOrderSlice.actions;

//selector

export const useLatestChatOrderSelector = () => {
  const latestChatOrder = useAppSelector(
    (state: RootState) => state.latestChatOrder
  );
  return { latestChatOrder };
};
