import { set } from "firebase/database";
import moment from "moment";
import { chatRef } from "../assets/data/referenceData";
import { dbDataType } from "../assets/type/dataType";

export const addSeedData = () => {
    let timestamp = moment();
    let seedData: dbDataType[] = [];

    for (let i = 0; i < 60; i++) {
        let strNum: string = "";
        if (i < 10) strNum = "0" + i;
        else strNum = `${i}`;

        seedData[i] = {
            user_name: "つむぎ",
            text: `${i}`,
            createdAt: timestamp.format(`YYYY-MM-DD HH:mm:${strNum}`),
        };
    }
    set(chatRef, seedData);
};
