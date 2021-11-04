import { onValue } from "firebase/database";
import { useEffect } from "react";
import { chatRef } from "..";

import { chatDataType, dbDataType } from "../assets/type/dataType";
import { useAppDispatch } from "../store/hooks";
import { setChatData } from "../store/slices/chatDataSlice";

export const useFetchData = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        onValue(chatRef, (snapshot) => {
            console.log("チャットデータの取得");
            if (snapshot.exists()) {
                const dbData: any = snapshot.val();
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
