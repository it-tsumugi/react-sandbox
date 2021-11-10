import { useEffect } from "react";
import { useChatDataSelector } from "../store/slices/chatDataSlice";
import { useAppDispatch } from "./useAppDispatch";
import {
    setLastCreatedAt,
    useLastCreatedAtSelector,
} from "../store/slices/lastKeySlice";

export const useSetHasMore = (
    setHasMore: React.Dispatch<React.SetStateAction<boolean>>
) => {
    const dispatch = useAppDispatch();
    const { chatData } = useChatDataSelector();
    const { lastCreatedAt } = useLastCreatedAtSelector();

    useEffect(() => {
        if (chatData.status === "idle") {
            const chatDataLength = chatData.value.length;
            console.log("useSetHasMore");
            if (chatDataLength === 0) {
                setHasMore(false);
            } else {
                const chatDataLastCreatedAt =
                    chatData.value[chatDataLength - 1].createdAt;

                if (lastCreatedAt === chatDataLastCreatedAt) {
                    setHasMore(false);
                } else {
                    setHasMore(true);
                }
                dispatch(setLastCreatedAt(chatDataLastCreatedAt));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chatData]);
};
