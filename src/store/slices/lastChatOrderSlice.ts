import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../assets/type/reduxType";
import { useAppSelector } from "../../hooks/useAppSelector";
import { START_CHAT_ORDER } from "../../assets/data/constNum";

const initialState: number = START_CHAT_ORDER;

export const lastChatOrderSlice = createSlice({
  name: "lastChatOrder",
  initialState: initialState,
  reducers: {
    setLastChatOrder: (state, action: PayloadAction<number>) => {
      return action.payload;
    },
  },
});

//reducer
export const lastChatOrderReducer = lastChatOrderSlice.reducer;

//action
export const { setLastChatOrder } = lastChatOrderSlice.actions;

//selector

export const useLastChatOrderSelector = () => {
  const lastChatOrder = useAppSelector(
    (state: RootState) => state.lastChatOrder
  );
  return { lastChatOrder };
};
