export type dbDataType = {
    user_name: string;
    text: string;
    createdAt: string;
};

export type chatDataType = {
    key: string;
    value: dbDataType;
};
