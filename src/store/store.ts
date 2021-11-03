import { configureStore } from "@reduxjs/toolkit";

import { chatDataReducer } from "./slices/chatDataSlice";
import { counterReducer } from "./slices/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        chatData: chatDataReducer,
    },
});
