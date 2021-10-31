import { ThunkAction, Action } from "@reduxjs/toolkit";
import { store } from "./store";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
export type counterType = {
    value: number;
    status: "idle" | "loading" | "failed";
};
