import { CircularProgress } from "@material-ui/core";
import moment from "moment";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";
import { useFetchData } from "../../../hooks/useFetchData";
import { useAppDispatch } from "../../../store/hooks";
import { useChatDataSelector } from "../../../store/slices/chatDataSlice";
import { useLastKeySelector } from "../../../store/slices/lastKeySlice";
import { useGetLastCreatedAt } from "../../../hooks/useGetLastCreatedAt";
import { loadMore } from "../../../function/handler/loadMore";

export const FirebaseInfinite = () => {
    const { chatData } = useChatDataSelector();
    const { lastKey } = useLastKeySelector();
    const dispatch = useAppDispatch();
    const [hasMore, setHasMore] = useState(true);

    //初回時のみ実行、それ以降はDBに変更があった時のみ動作
    useFetchData();
    //chatData変更時のみ実行、
    useGetLastCreatedAt(setHasMore);

    console.log("チャット表示領域のレンダリング");

    return (
        <SChatListContainer>
            <button onClick={() => loadMore({ dispatch, chatData, lastKey })}>
                走らせる
            </button>
            {chatData.status === "loading" ? (
                <CircularProgress />
            ) : (
                <InfiniteScroll
                    pageStart={0}
                    loadMore={() => loadMore({ dispatch, chatData, lastKey })}
                    hasMore={hasMore}
                    loader={<CircularProgress key={"0"} />}
                    initialLoad={false}
                    threshold={50}
                >
                    {chatData.value.length === 0 ? (
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
