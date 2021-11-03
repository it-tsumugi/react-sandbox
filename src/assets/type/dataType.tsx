export type dbDataType = {
    user_name: string;
    text: string;
    createAt: string;
};

export type chatDataType = {
    key: string;
    value: dbDataType;
};
