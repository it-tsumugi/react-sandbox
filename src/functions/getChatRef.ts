import { FirebaseApp } from "firebase/app";
import {
    getDatabase,
    Database,
    ref,
    DatabaseReference,
} from "firebase/database";

export const getChatRef = (app: FirebaseApp) => {
    //データベースの取得
    const db: Database = getDatabase(app);
    //データベース上のチャットへの参照を取得
    const chatRef: DatabaseReference = ref(db, "chats");
    return chatRef;
};
