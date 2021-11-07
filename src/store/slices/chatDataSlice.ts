import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { chatDataStateType, RootState, stateStatusType } from "../reduxType";
import { useAppSelector } from "../hooks";
import { chatDataType } from "../../assets/type/dataType";

const initialState: chatDataStateType = {
    value: [],
    status: "loading",
};

export const chatDataSlice = createSlice({
    name: "chatData",
    initialState: initialState,
    reducers: {
        setChatDataStatus: (state, action: PayloadAction<stateStatusType>) => {
            state.status = action.payload;
        },
        setChatDataValue: (state, action: PayloadAction<chatDataType[]>) => {
            state.value = action.payload;
        },
    },
});

//reducer
export const chatDataReducer = chatDataSlice.reducer;

//action
export const { setChatDataValue, setChatDataStatus } = chatDataSlice.actions;

//selector
export const useChatDataSelector = () => {
    const chatData = useAppSelector((state: RootState) => state.chatData);
    return { chatData };
};
