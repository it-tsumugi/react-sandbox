import InfiniteScroll from "react-infinite-scroller";
import { useState } from "react";
import styled from "styled-components";
import moment from "moment";

import { CircularProgress } from "@material-ui/core";

import { useFetchData } from "../../../hooks/useFetchData";
import { useChatDataSelector } from "../../../store/slices/chatDataSlice";
import { useLastCreatedAtSelector } from "../../../store/slices/lastKeySlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { loadMore } from "../../../functions/handler/loadMore";
import { useSetHasMore } from "../../../hooks/useSetHasMore";

export const FirebaseChatDisplayArea = () => {
    const { chatData } = useChatDataSelector();
    const { lastCreatedAt } = useLastCreatedAtSelector();
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useAppDispatch();

    //初回時のみ実行、それ以降はDBに変更があった時のみ動作
    useFetchData();
    //chatData変更時のみ実行、
    useSetHasMore(setHasMore);

    console.log("チャット表示領域のレンダリング");
    return (
        <SChatListContainer>
            {chatData.status === "loading" ? (
                <CircularProgress />
            ) : (
                <InfiniteScroll
                    loadMore={() =>
                        loadMore({
                            dispatch,
                            chatData,
                            lastCreatedAt,
                        })
                    }
                    hasMore={hasMore}
                    loader={<CircularProgress key={0} />}
                    initialLoad={false}
                    threshold={50}
                >
                    {/* {console.log(page)} */}
                    {chatData.value.length === 0 ? (
                        <div>チャットはありません</div>
                    ) : (
                        chatData.value.map((item) => {
                            return (
                                <SChatContainer key={item.key}>
                                    <SContent>{item.user_name}</SContent>
                                    <SContent>{item.text}</SContent>
                                    <SContent>
                                        {moment(item.createdAt).fromNow()}
                                    </SContent>
                                </SChatContainer>
                            );
                        })
                    )}
                </InfiniteScroll>
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
