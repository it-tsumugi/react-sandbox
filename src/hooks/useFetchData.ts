import {
    limitToLast,
    onValue,
    orderByChild,
    query,
    Query,
} from "firebase/database";
import { useEffect } from "react";

import {
    setChatDataStatus,
    setChatDataValue,
    useChatDataSelector,
} from "../store/slices/chatDataSlice";
import { convertChatData } from "../functions/atoms/convertChatData";
import { useAppDispatch } from "./useAppDispatch";
import { chatRef } from "..";

export const useFetchData = () => {
    const dispatch = useAppDispatch();
    const { chatData } = useChatDataSelector();
    const chatQuery: Query = query(
        chatRef,
        orderByChild("createdAt"),
        limitToLast(40)
    );

    useEffect(() => {
        onValue(query(chatQuery), (snapshot) => {
            console.log("チャットデータの取得");
            const newChatData = convertChatData(snapshot.val());
            dispatch(setChatDataValue(newChatData));
            if (chatData.status === "loading")
                dispatch(setChatDataStatus("idle"));
        });
        //dispatchに対して依存配列に入れるように警告がでるのでeslintを無効化
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
