import moment from "moment";
import { push } from "firebase/database";

import { chatRef } from "../../assets/data/referenceData";
import { dbDataType } from "../../assets/type/dataType";

type addUserType = {
    userName: string;
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    isLogin: boolean;
};

export const addChat = (props: addUserType) => {
    const { userName, text, setText, isLogin } = props;
    if (isLogin === false) {
        window.alert("ログインしてください");
    } else if (text.length === 0) {
        window.alert("テキストを入力してください");
    } else {
        const timestamp = moment();
        const postData: dbDataType = {
            user_name: userName,
            text: text,
            createdAt: timestamp.format("YYYY-MM-DD HH:mm:ss"),
        };
        push(chatRef, postData);
        setText("");
    }
};
