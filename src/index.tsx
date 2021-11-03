import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getDatabase();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
