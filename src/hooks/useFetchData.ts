import {
    limitToLast,
    onValue,
    orderByChild,
    query,
    Query,
} from "firebase/database";
import { useEffect } from "react";

import { chatRef } from "../assets/data/referenceData";
import { useAppDispatch } from "../store/hooks";
import {
    setChatDataStatus,
    setChatDataValue,
} from "../store/slices/chatDataSlice";
import { convertChatData } from "../function/atoms/convertChatData";

export const useFetchData = () => {
    const dispatch = useAppDispatch();
    const chatQuery: Query = query(
        chatRef,
        orderByChild("createdAt"),
        limitToLast(40)
    );

    useEffect(() => {
        onValue(chatQuery, (snapshot) => {
            console.log("チャットデータの取得");
            const newChatData = convertChatData(snapshot.val());
            dispatch(setChatDataStatus("loading"));
            dispatch(setChatDataValue(newChatData));
            dispatch(setChatDataStatus("idle"));
        });
        //dispatchに対して依存配列に入れるように警告がでるのでeslintを無効化
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
