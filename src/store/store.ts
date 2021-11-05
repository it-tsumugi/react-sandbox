import { configureStore } from "@reduxjs/toolkit";

import { chatDataReducer } from "./slices/chatDataSlice";
import { counterReducer } from "./slices/counterSlice";
import { lastKeyReducer } from "./slices/lastKeySlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        chatData: chatDataReducer,
        lastKey: lastKeyReducer,
    },
});
