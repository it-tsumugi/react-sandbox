import moment from "moment";
import { push } from "firebase/database";

import { chatRef } from "../index";

type addUserType = {
    userName: string;
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    isLogin: boolean;
};

export const addUser = (props: addUserType) => {
    const { userName, text, setText, isLogin } = props;
    if (isLogin === false) {
        window.alert("ログインしてください");
    } else if (text.length === 0) {
        window.alert("テキストを入力してください");
    } else {
        let timestamp = moment();
        const postData = {
            user_name: userName,
            text: text,
            createAt: timestamp.format("YYYY-MM-DD HH:mm:ss"),
        };
        push(chatRef, postData);
        setText("");
    }
};
