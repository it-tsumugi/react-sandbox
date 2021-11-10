export type dbChatDataType = {
    user_name: string;
    text: string;
    createdAt: string;
    order: number;
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
    order: number;
};
