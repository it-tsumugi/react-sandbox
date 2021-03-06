import { useState, VFC } from "react";
import styled from "styled-components";

import { addChat } from "../../../functions/handler/addChat";
import { login } from "../../../functions/handler/login";
import { deleteAllChats } from "../../../functions/handler/deleteAllChats";
import { addSeedData } from "../../../functions/handler/addSeedData";
import { useLatestChatOrderSelector } from "../../../store/slices/latestChatOrderSlice";

export const FirebaseActionArea: VFC = () => {
  const [userName, setUserName] = useState("");
  const [text, setText] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const { latestChatOrder } = useLatestChatOrderSelector();

  return (
    <SActionArea>
      <SUserName>ユーザー名</SUserName>
      {isLogin ? (
        <SUserNameText>{userName}</SUserNameText>
      ) : (
        <>
          <SUserNameInput
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="ユーザー名を入力してください"
          ></SUserNameInput>
          <SLoginButton onClick={() => login({ setIsLogin, userName })}>
            ログイン
          </SLoginButton>
        </>
      )}
      <SText>テキスト</SText>
      <STextInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="テキストを入力してください"
      />
      <SAddButton
        onClick={() =>
          addChat({
            userName,
            text,
            setText,
            isLogin,
            latestChatOrder,
          })
        }
      >
        データ追加
      </SAddButton>
      <SAddSeedDataButton onClick={addSeedData}>
        シードデータでリセット
      </SAddSeedDataButton>
      <SDeleteAllButton onClick={() => deleteAllChats()}>
        データ全削除
      </SDeleteAllButton>
      <SDbUserName>ユーザー名</SDbUserName>
      <SDbText>テキスト</SDbText>
      <SDbTimestamp>作成日時</SDbTimestamp>
      <SDbOrder>順番</SDbOrder>
    </SActionArea>
  );
};

const SActionArea = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px 200px;
  grid-template-rows: 50px 50px 50px 50px;
`;

const SUserName = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
`;

const SUserNameInput = styled.input`
  grid-column-start: 2;
  grid-column-end: 3;
`;

const SLoginButton = styled.button`
  grid-column-start: 3;
  grid-column-end: 4;
`;

const SUserNameText = styled.div`
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

const SAddButton = styled.button`
  grid-row-start: 3;
  grid-row-end: 4;
`;

const SAddSeedDataButton = styled.button`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
`;

const SDeleteAllButton = styled.button`
  grid-column-start: 3;
  grid-column-end: 4;
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

const SDbOrder = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 5;
`;
