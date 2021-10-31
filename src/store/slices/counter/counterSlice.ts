import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { counterType, RootState } from "../../reduxType";
import { useAppSelector } from "../../hooks";

const initialState: counterType = {
    value: 0,
    status: "idle",
};

export const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

//action
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

//selector
//インテリセンスを利用したい、インポートを少なくしたいという理由からhooksを作成
export const useCountSelector = () => {
    const count = useAppSelector((state: RootState) => state.counter.value);
    return { count };
};

//reducer
export const counterReducer = counterSlice.reducer;