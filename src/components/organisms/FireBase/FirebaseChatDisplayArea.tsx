import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";
import moment from "moment";

import { CircularProgress } from "@material-ui/core";

import { useFetchData } from "../../../hooks/useFetchData";
import { useChatDataSelector } from "../../../store/slices/chatDataSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { loadMore } from "../../../functions/handler/loadMore";
import { useIsChatsCompletedSelector } from "../../../store/slices/isChatsCompletedSlice";
import { useHasMoreSelector } from "../../../store/slices/hasMoreSlice";
import { useLastChatOrderSelector } from "../../../store/slices/lastChatOrderSlice";

export const FirebaseChatDisplayArea = () => {
  const { chatData } = useChatDataSelector();
  const { hasMore } = useHasMoreSelector();
  const { isChatsCompleted } = useIsChatsCompletedSelector();
  const { lastChatOrder } = useLastChatOrderSelector();
  const { dispatch } = useAppDispatch();

  //初回時のみ実行、それ以降はDBに変更があった時のみ動作
  useFetchData();

  console.log("チャット表示領域のレンダリング");

  return (
    <SChatListContainer>
      {isChatsCompleted ? (
        <InfiniteScroll
          loadMore={() =>
            loadMore({
              dispatch,
              chatData,
              lastChatOrder,
              hasMore,
            })
          }
          hasMore={hasMore}
          loader={<CircularProgress key={0} />}
          initialLoad={false}
          threshold={50}
        >
          {chatData.length === 0 ? (
            <div>チャットはありません</div>
          ) : (
            chatData.map((item) => {
              return (
                <SChatContainer key={item.key}>
                  <SContent>{item.user_name}</SContent>
                  <SContent>{item.text}</SContent>
                  <SContent>{moment(item.createdAt).fromNow()}</SContent>
                  <SContent>{item.order}</SContent>
                </SChatContainer>
              );
            })
          )}
        </InfiniteScroll>
      ) : (
        <CircularProgress />
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
