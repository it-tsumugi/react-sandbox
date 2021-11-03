import { DatabaseReference, onValue, ref } from "firebase/database";
import { useEffect } from "react";

import { chatDataType, dbDataType } from "../assets/type/dataType";
import { useAppDispatch } from "../store/hooks";
import { setChatData } from "../store/slices/chatDataSlice";
import { db } from "../index";

export const useFetchData = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const chatRef: DatabaseReference = ref(db, "users");
        onValue(chatRef, (snapshot) => {
            console.log("チャットデータの取得");
            if (snapshot.exists()) {
                const dbData = snapshot.val();
                const bufChatData: chatDataType[] = Object.entries<dbDataType>(
                    dbData || {}
                ).map(([key, value]) => ({
                    key: key,
                    value: value,
                }));
                dispatch(setChatData(bufChatData));
            } else {
                console.log("データがありません");
            }
        });
        //dispatchに対して依存配列に入れるように警告がでるのでeslintを無効化
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
