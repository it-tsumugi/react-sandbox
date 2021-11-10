import {
    query,
    limitToLast,
    Query,
    onValue,
    endBefore,
    orderByChild,
} from "firebase/database";
import { chatRef } from "../..";
import { chatDataType } from "../../assets/type/dataType";
import { AppDispatch } from "../../assets/type/reduxType";
import { chatDataStateType } from "../../assets/type/stateType";
import {
    setChatDataStatus,
    setChatDataValue,
} from "../../store/slices/chatDataSlice";
import { convertChatData } from "../atoms/convertChatData";
import { READ_CHAT_NUM } from "../../assets/data/constNum";

type propsType = {
    dispatch: AppDispatch;
    lastCreatedAt: string;
    chatData: chatDataStateType;
};

export const loadMore = (props: propsType) => {
    const { dispatch, lastCreatedAt, chatData } = props;
    const chatQuery: Query = query(
        chatRef,
        orderByChild("createdAt"),
        endBefore(lastCreatedAt),
        //なんで＋１？
        limitToLast(READ_CHAT_NUM + 1)
    );

    onValue(
        chatQuery,
        (snapshot) => {
            console.log("チャットデータの取得");
            const newBufChatData: chatDataType[] = convertChatData(
                snapshot.val()
            );
            // dispatch(setChatDataStatus("loading"));
            dispatch(setChatDataValue([...chatData.value, ...newBufChatData]));
            // dispatch(setChatDataStatus("idle"));
        },
        {
            onlyOnce: true,
        }
    );
};
