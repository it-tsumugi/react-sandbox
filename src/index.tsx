import React from "react";
import ReactDOM from "react-dom";
import { DatabaseReference } from "firebase/database";

import { App } from "./App";

import { InitFirebase } from "./function/InitFirebase";

export const chatRef: DatabaseReference = InitFirebase();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
