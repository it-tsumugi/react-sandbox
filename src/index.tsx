import React from "react";
import ReactDOM from "react-dom";
import { initializeApp } from "firebase/app";

import { App } from "./App";

import { firebaseConfig } from "./config";
import { getChatRef } from "./functions/atoms/getChatRef";

export const app = initializeApp(firebaseConfig);
export const chatRef = getChatRef(app);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
