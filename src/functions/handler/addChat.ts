import moment from "moment";
import { push } from "firebase/database";

import { chatRef } from "../..";
import { dbChatDataType } from "../../assets/type/dataType";

type propsType = {
  userName: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  isLogin: boolean;
  latestChatOrder: number;
};

export const addChat = (props: propsType) => {
  const { userName, text, setText, isLogin, latestChatOrder } = props;
  if (isLogin === false) {
    window.alert("ログインしてください");
  } else if (text.length === 0) {
    window.alert("テキストを入力してください");
  } else {
    const timestamp = moment();
    const postData: dbChatDataType = {
      user_name: userName,
      text: text,
      createdAt: timestamp.format("YYYY-MM-DD HH:mm:ss"),
      order: latestChatOrder + 1,
    };
    push(chatRef, postData);
    setText("");
  }
};
