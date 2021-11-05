import moment from "moment";
import { VFC } from "react";
import styled from "styled-components";

import { CircularProgress } from "@material-ui/core";

import { useFetchData } from "../../../hooks/useFetchData";
import { useChatDataSelector } from "../../../store/slices/chatDataSlice";

export const FirebaseChatDisplayArea: VFC = () => {
    const { chatData } = useChatDataSelector();
    useFetchData();
    console.log("チャット表示領域のレンダリング");
    return (
        <SChatListContainer>
            {chatData.status === "loading" ? (
                <CircularProgress />
            ) : chatData.value.length === 0 ? (
                <div>チャットはありません</div>
            ) : (
                chatData.value.map((item) => {
                    return (
                        <SChatContainer key={item.key}>
                            <SContent>{item.value.user_name}</SContent>
                            <SContent>{item.value.text}</SContent>
                            <SContent>
                                {moment(item.value.createdAt).fromNow()}
                            </SContent>
                        </SChatContainer>
                    );
                })
            )}
        </SChatListContainer>
    );
};

const SChatListContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SChatContainer = styled.div`
    display: flex;
`;

const SContent = styled.div`
    width: 200px;
`;
