import {
  limitToLast,
  onValue,
  orderByChild,
  query,
  Query,
} from "firebase/database";
import { useEffect } from "react";

import { setChatData } from "../store/slices/chatDataSlice";
import { convertChatData } from "../functions/features/chatData/convertChatData";
import { useAppDispatch } from "./useAppDispatch";
import { chatRef } from "..";
import { setIsChatsCompleted } from "../store/slices/isChatsCompletedSlice";
import { setHasMore } from "../store/slices/hasMoreSlice";
import { setLatestChatOrder } from "../store/slices/latestChatOrderSlice";
import { setLastChatOrder } from "../store/slices/lastChatOrderSlice";
import { FETCH_CHAT_NUM, START_CHAT_ORDER } from "../assets/data/constNum";

export const useFetchData = () => {
  const { dispatch } = useAppDispatch();
  const chatQuery: Query = query(
    chatRef,
    orderByChild("order"),
    limitToLast(FETCH_CHAT_NUM)
  );

  useEffect(() => {
    onValue(query(chatQuery), (snapshot) => {
      console.log("チャットデータの取得");
      const newChatData = convertChatData(snapshot.val());
      dispatch(setChatData(newChatData));

      //一番最初と最後の番号を記録
      if (newChatData.length === 0) {
        dispatch(setLatestChatOrder(START_CHAT_ORDER - 1));
        dispatch(setLastChatOrder(START_CHAT_ORDER));
      } else {
        const lastChatData = newChatData[newChatData.length - 1];
        dispatch(setLatestChatOrder(newChatData[0].order));
        dispatch(setLastChatOrder(lastChatData.order));
      }

      //更に読み込むページがあるかの判定
      if (newChatData.length < FETCH_CHAT_NUM) {
        dispatch(setHasMore(false));
      } else {
        dispatch(setHasMore(true));
      }

      dispatch(setIsChatsCompleted(true));
    });
    //dispatchに対して依存配列に入れるように警告がでるのでeslintを無効化
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
