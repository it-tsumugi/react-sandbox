import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState, stateStatusType, stringStateType } from "../reduxType";
import { useAppSelector } from "../hooks";

const initialState: stringStateType = {
    value: "",
    status: "idle",
};

export const lastKeySlice = createSlice({
    name: "lastKey",
    initialState: initialState,
    reducers: {
        setlastKeyStatus: (state, action: PayloadAction<stateStatusType>) => {
            state.status = action.payload;
        },
        setlastKeyValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

//reducer
export const lastKeyReducer = lastKeySlice.reducer;

//action
export const { setlastKeyStatus, setlastKeyValue } = lastKeySlice.actions;

//selector
export const useLastKeySelector = () => {
    const lastKey = useAppSelector((state: RootState) => state.lastKey);
    return { lastKey };
};
