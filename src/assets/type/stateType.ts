import { chatDataType } from "./dataType";

export type stateStatusType = "idle" | "loading";

//stateの型
export type chatDataStateType = {
    value: chatDataType[];
    status: stateStatusType;
};
