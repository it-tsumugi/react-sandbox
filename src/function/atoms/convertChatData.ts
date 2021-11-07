import { chatDataType, dbDataType } from "../../assets/type/dataType";

export const convertChatData = (dbChatData: any) => {
    const bufChatData: chatDataType[] = Object.entries<dbDataType>(
        dbChatData || {}
    ).map(([key, value]) => ({
        key: key,
        value: value,
    }));
    //非破壊的に逆順に変更
    const newBufChatData: chatDataType[] = [...bufChatData].reverse();
    return newBufChatData;
};
