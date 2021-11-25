import { ThunkAction, Action } from "@reduxjs/toolkit";

import { store } from "../../store/store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

// export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
