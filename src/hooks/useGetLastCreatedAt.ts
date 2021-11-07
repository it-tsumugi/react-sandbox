import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { useChatDataSelector } from "../store/slices/chatDataSlice";
import {
    setlastKeyStatus,
    setlastKeyValue,
    useLastKeySelector,
} from "../store/slices/lastKeySlice";

export const useGetLastCreatedAt = (setHasMore: any) => {
    const dispatch = useAppDispatch();
    const { chatData } = useChatDataSelector();
    const { lastKey } = useLastKeySelector();

    useEffect(() => {
        if (chatData.status === "idle" && lastKey.status === "idle") {
            if (chatData.value.length === 0) {
                console.log(false);
                setHasMore(false);
            } else {
                if (
                    lastKey.value ===
                    chatData.value[chatData.value.length - 1].value.createdAt
                ) {
                    setHasMore(false);
                }
                dispatch(setlastKeyStatus("loading"));
                dispatch(
                    setlastKeyValue(
                        chatData.value[chatData.value.length - 1].value
                            .createdAt
                    )
                );
                dispatch(setlastKeyStatus("idle"));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chatData]);
};
