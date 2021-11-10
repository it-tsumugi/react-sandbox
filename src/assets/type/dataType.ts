export type dbChatDataType = {
    user_name: string;
    text: string;
    createdAt: string;
};

export type bufChatDataType = {
    key: string;
    value: dbChatDataType;
};

export type chatDataType = {
    key: string;
    user_name: string;
    text: string;
    createdAt: string;
};
