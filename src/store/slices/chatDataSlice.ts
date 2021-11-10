import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../assets/type/reduxType";
import { chatDataType } from "../../assets/type/dataType";
import { useAppSelector } from "../../hooks/useAppSelector";

const initialState: chatDataType[] = [];

export const chatDataSlice = createSlice({
  name: "chatData",
  initialState: initialState,
  reducers: {
    setChatData: (state, action: PayloadAction<chatDataType[]>) => {
      return action.payload;
    },
  },
});

//reducer
export const chatDataReducer = chatDataSlice.reducer;

//action
export const { setChatData } = chatDataSlice.actions;

//selector
export const useChatDataSelector = () => {
  const chatData = useAppSelector((state: RootState) => state.chatData);
  return { chatData };
};
