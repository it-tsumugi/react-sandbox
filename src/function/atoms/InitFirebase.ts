import { initializeApp } from "firebase/app";
import {
    getDatabase,
    Database,
    ref,
    DatabaseReference,
} from "firebase/database";

import { firebaseConfig } from "../../config";

export const InitFirebase = () => {
    // Initialize Firebase
    initializeApp(firebaseConfig);
    //データベースの取得
    const db: Database = getDatabase();
    //データベース上のチャットへの参照を取得
    const chatRef: DatabaseReference = ref(db, "chats");
    return chatRef;
};
