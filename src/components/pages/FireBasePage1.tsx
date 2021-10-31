import { child, get, ref, set, getDatabase } from "firebase/database";
import { useState, VFC } from "react";
import { db } from "../../index";

export const FireBasePage1: VFC = () => {
    const [userName, setUserName] = useState("");
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        })
        .catch((error) => {
            console.error(error);
        });
    return (
        <>
            <div>Page1</div>
            <input
                onChange={(e) => setUserName(e.target.value)}
                placeholder="ユーザー名を入力してください"
            ></input>
            <button
                onClick={() => {
                    set(ref(db, "users/"), {
                        username: userName,
                    });
                }}
            >
                データ追加
            </button>
        </>
    );
};
