import { DatabaseReference } from "firebase/database";

import { InitFirebase } from "../../function/atoms/InitFirebase";

export const chatRef: DatabaseReference = InitFirebase();
