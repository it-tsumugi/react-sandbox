import moment from "moment";
import { set } from "firebase/database";

import { chatRef } from "../..";
import { dbChatDataType } from "../../assets/type/dataType";

export const addSeedData = () => {
  let timestamp = moment();
  let seedData: dbChatDataType[] = [];

  for (let i = 0; i < 60; i++) {
    let strNum: string = "";
    if (i < 10) strNum = "0" + i;
    else strNum = `${i}`;

    seedData[i] = {
      user_name: "つむぎ",
      text: `${i + 1}`,
      createdAt: timestamp.format(`YYYY-MM-DD HH:mm:${strNum}`),
      order: i + 1,
    };
  }
  set(chatRef, seedData);
};
