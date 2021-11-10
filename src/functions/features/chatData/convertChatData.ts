import {
  bufChatDataType,
  chatDataType,
  dbChatDataType,
} from "../../../assets/type/dataType";

export const convertChatData = (dbChatData: any) => {
  //jsonを配列に変換
  const bufChatData: bufChatDataType[] = Object.entries<dbChatDataType>(
    dbChatData || {}
  ).map(([key, value]) => ({
    key: key,
    value: value,
  }));

  //非破壊的に逆順に変更
  const reversedBufChatData: bufChatDataType[] = [...bufChatData].reverse();

  //valueを展開して見やすく変換
  let newBufChatData: chatDataType[] = [];
  reversedBufChatData.map((chat, index) => {
    newBufChatData[index] = { ...chat.value, key: chat.key };
    return 0;
  });

  return newBufChatData;
};
