import { DatabaseReference } from "firebase/database";

import { InitFirebase } from "../../function/InitFirebase";

export const chatRef: DatabaseReference = InitFirebase();
