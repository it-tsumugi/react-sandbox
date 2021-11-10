import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../assets/type/reduxType";
import { useAppSelector } from "../../hooks/useAppSelector";

const initialState: number = 0;

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state += 1;
    },
    decrement: (state) => {
      state -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state += action.payload;
    },
  },
});

//action
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

//selector
export const useCountSelector = () => {
  const count = useAppSelector((state: RootState) => state.counter);
  return { count };
};

//reducer
export const counterReducer = counterSlice.reducer;
