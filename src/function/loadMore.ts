import {
    query,
    limitToLast,
    Query,
    onValue,
    endBefore,
    orderByChild,
} from "firebase/database";
import { chatRef } from "../assets/data/referenceData";
import { chatDataType, dbDataType } from "../assets/type/dataType";
import { chatDataStateType, stringStateType } from "../store/reduxType";
import { setChatData } from "../store/slices/chatDataSlice";

type propsType = {
    dispatch: any;
    lastKey: stringStateType;
    chatData: chatDataStateType;
    setHasMore: React.Dispatch<React.SetStateAction<boolean>>;
};

export const loadMore = (props: propsType) => {
    const { dispatch, lastKey, chatData, setHasMore } = props;
    const chatQuery: Query = query(
        chatRef,
        orderByChild("createdAt"),
        endBefore(lastKey.value),
        limitToLast(5)
    );
    onValue(
        chatQuery,
        (snapshot) => {
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
            dispatch(setChatData([...chatData.value, ...newBufChatData]));
            if (
                lastKey.value ===
                chatData.value[chatData.value.length - 1].value.createdAt
            ) {
                setHasMore(false);
            }
        },
        {
            onlyOnce: true,
        }
    );
};
