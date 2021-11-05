import {
    limitToLast,
    onValue,
    orderByChild,
    query,
    Query,
} from "firebase/database";
import { useEffect } from "react";

import { chatRef } from "../assets/data/referenceData";
import { chatDataType, dbDataType } from "../assets/type/dataType";
import { useAppDispatch } from "../store/hooks";
import { setChatData } from "../store/slices/chatDataSlice";

export const useFetchData = () => {
    const dispatch = useAppDispatch();
    const chatQuery: Query = query(
        chatRef,
        orderByChild("createdAt"),
        limitToLast(17)
    );

    useEffect(() => {
        onValue(chatQuery, (snapshot) => {
            console.log("チャットデータの取得");
            const dbData: any = snapshot.val();
            const bufChatData: chatDataType[] = Object.entries<dbDataType>(
                dbData || {}
            ).map(([key, value]) => ({
                key: key,
                value: value,
            }));
            //非破壊的に逆順に変更
            const newBufChatData = [...bufChatData].reverse();
            dispatch(setChatData(newBufChatData));
        });
        //dispatchに対して依存配列に入れるように警告がでるのでeslintを無効化
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
