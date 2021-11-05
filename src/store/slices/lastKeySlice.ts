import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState, stringStateType } from "../reduxType";
import { useAppSelector } from "../hooks";

const initialState: stringStateType = {
    value: "",
    status: "loading",
};

export const lastKeySlice = createSlice({
    name: "lastKey",
    initialState: initialState,
    reducers: {
        setlastKey: (state, action: PayloadAction<string>) => {
            state.status = "loading";
            state.value = action.payload;
            state.status = "idle";
        },
    },
});

//reducer
export const lastKeyReducer = lastKeySlice.reducer;

//action
export const { setlastKey } = lastKeySlice.actions;

//selector
export const useLastKeySelector = () => {
    const lastKey = useAppSelector((state: RootState) => state.lastKey);
    return { lastKey };
};
