import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { chatDataReducer } from "./slices/chatDataSlice";
import { counterReducer } from "./slices/counterSlice";
import { isChatsCompletedReducer } from "./slices/isChatsCompletedSlice";
import { hasMoreReducer } from "./slices/hasMoreSlice";
import { latestChatOrderReducer } from "./slices/latestChatOrderSlice";
import { lastChatOrderReducer } from "./slices/lastChatOrderSlice";
import { userDataReducer } from "./slices/userData";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chatData: chatDataReducer,
    isChatsCompleted: isChatsCompletedReducer,
    hasMore: hasMoreReducer,
    latestChatOrder: latestChatOrderReducer,
    lastChatOrder: lastChatOrderReducer,
    userData: userDataReducer,
  },
  middleware: [thunk],
});
