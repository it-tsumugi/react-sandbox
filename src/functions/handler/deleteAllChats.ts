import { set } from "firebase/database";

import { chatRef } from "../..";

export const deleteAllChats = () => {
  set(chatRef, {}).catch((error) => {
    window.alert("データの削除時に問題が発生しました");
    console.log(error);
  });
};
