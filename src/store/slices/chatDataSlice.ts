import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState, stateStatusType } from "../reduxType";
import { useAppSelector } from "../hooks";
import { chatDataType } from "../../assets/type/dataType";

type chatDataStateType = {
    value: chatDataType[];
    status: stateStatusType;
};

const initialState: chatDataStateType = {
    value: [],
    status: "loading",
};

export const chatDataSlice = createSlice({
    name: "chatData",
    initialState: initialState,
    reducers: {
        setChatData: (state, action: PayloadAction<chatDataType[]>) => {
            state.value = action.payload;
            state.status = "idle";
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
