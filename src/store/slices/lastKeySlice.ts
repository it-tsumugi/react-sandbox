import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../assets/type/reduxType";
import { useAppSelector } from "../../hooks/useAppSelector";

const initialState: string = "";

export const lastCreatedAtSlice = createSlice({
    name: "lastCreatedAt",
    initialState: initialState,
    reducers: {
        setLastCreatedAt: (state, action: PayloadAction<string>) => {
            return (state = action.payload);
        },
    },
});

//reducer
export const lastCreatedAtReducer = lastCreatedAtSlice.reducer;

//action
export const { setLastCreatedAt } = lastCreatedAtSlice.actions;

//selector
export const useLastCreatedAtSelector = () => {
    const lastCreatedAt = useAppSelector(
        (state: RootState) => state.lastCreatedAt
    );
    return { lastCreatedAt };
};
