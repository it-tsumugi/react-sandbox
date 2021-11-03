import moment from "moment";
import { useState, VFC } from "react";
import styled from "styled-components";
import "moment/locale/ja";

import { CircularProgress } from "@material-ui/core";

import { useChatDataSelector } from "../../store/slices/chatDataSlice";
import { addUser } from "../../function/addUser";
import { useFetchData } from "../../hooks/useFetchData";

export const FireBasePage1: VFC = () => {
    const [userName, setUserName] = useState("");
    const [text, setText] = useState("");
    const { chatData } = useChatDataSelector();
    moment.locale("ja");
    useFetchData();
    console.log("レンダリング");

    return (
        <SComponentContainer>
            <SActionArea>
                <SUserName>ユーザー名</SUserName>
                <SUserNameInput
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="ユーザー名を入力してください"
                ></SUserNameInput>
                <SText>テキスト</SText>
                <STextInput
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="テキストを入力してください"
                />
                <SButton
                    onClick={() =>
                        addUser({ userName, text, setUserName, setText })
                    }
                >
                    データ追加
                </SButton>
                <SDbUserName>ユーザー名</SDbUserName>
                <SDbText>テキスト</SDbText>
                <SDbTimestamp>作成日時</SDbTimestamp>
            </SActionArea>
            <SChatListContainer>
                {chatData.status === "loading" ? (
                    <CircularProgress />
                ) : (
                    chatData.value.map((item, index) => {
                        return (
                            <SChatContainer
                                key={item.key}
                                style={{ order: -index }}
                            >
                                <SContent>{item.value.user_name}</SContent>
                                <SContent>{item.value.text}</SContent>
                                <SContent>
                                    {moment(item.value.createAt).fromNow()}
                                </SContent>
                            </SChatContainer>
                        );
                    })
                )}
            </SChatListContainer>
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    text-align: center;
`;

const SActionArea = styled.div`
    display: grid;
    grid-template-columns: 150px 150px 150px;
    grid-template-rows: 50px 50px 50px 50px;
`;

const SUserName = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
`;

const SUserNameInput = styled.input`
    grid-column-start: 2;
    grid-column-end: 4;
`;

const SText = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
`;

const STextInput = styled.input`
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
`;

const SButton = styled.button`
    grid-row-start: 3;
    grid-row-end: 4;
`;

const SDbUserName = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
`;

const SDbText = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
`;

const SDbTimestamp = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 4;
    grid-row-end: 5;
`;

const SChatListContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SChatContainer = styled.div`
    display: flex;
`;

const SContent = styled.div`
    width: 150px;
`;
