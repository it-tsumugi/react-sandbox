import {
    query,
    limitToLast,
    Query,
    onValue,
    endBefore,
    orderByChild,
} from "firebase/database";
import { chatRef } from "../../assets/data/referenceData";
import { chatDataStateType, stringStateType } from "../../store/reduxType";
import {
    setChatDataStatus,
    setChatDataValue,
} from "../../store/slices/chatDataSlice";
import { convertChatData } from "../atoms/convertChatData";

type propsType = {
    dispatch: any;
    lastKey: stringStateType;
    chatData: chatDataStateType;
};

export const loadMore = (props: propsType) => {
    const { dispatch, lastKey, chatData } = props;
    const chatQuery: Query = query(
        chatRef,
        orderByChild("createdAt"),
        endBefore(lastKey.value),
        //なんで＋１？
        limitToLast(5 + 1)
    );
    onValue(
        chatQuery,
        (snapshot) => {
            console.log("チャットデータの取得");
            const newBufChatData = convertChatData(snapshot.val());
            dispatch(setChatDataStatus("loading"));
            dispatch(setChatDataValue([...chatData.value, ...newBufChatData]));
            dispatch(setChatDataStatus("idle"));
        },
        {
            onlyOnce: true,
        }
    );
};
