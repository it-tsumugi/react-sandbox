import { ThunkAction, Action } from "@reduxjs/toolkit";
import { chatDataType, dbDataType } from "../assets/type/dataType";

import { store } from "./store";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
export type stateStatusType = "idle" | "loading";

export type chatDataStateType = {
    value: chatDataType[];
    status: stateStatusType;
};

export type stringStateType = {
    value: string;
    status: stateStatusType;
};
