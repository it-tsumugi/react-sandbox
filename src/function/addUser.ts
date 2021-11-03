import moment from "moment";
import { push, ref } from "firebase/database";

import { db } from "../index";

type addUserType = {
    userName: string;
    text: string;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    setText: React.Dispatch<React.SetStateAction<string>>;
};

export const addUser = (props: addUserType) => {
    const { userName, text, setUserName, setText } = props;
    if (userName.length !== 0 && text.length !== 0) {
        moment.locale("ja");
        let timestamp = moment();
        const postData = {
            user_name: userName,
            text: text,
            createAt: timestamp.format("YYYY-MM-DD HH:mm:ss"),
        };
        const dbRef = ref(db, "users/");
        push(dbRef, postData);
        setUserName("");
        setText("");
    } else {
        window.alert("ユーザー名とテキストを入力してください");
    }
};
