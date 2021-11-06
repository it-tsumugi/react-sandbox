import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { useChatDataSelector } from "../store/slices/chatDataSlice";
import { setlastKey } from "../store/slices/lastKeySlice";

export const useGetLastCreatedAt = () => {
    const dispatch = useAppDispatch();
    const { chatData } = useChatDataSelector();

    useEffect(() => {
        if (chatData.status === "idle") {
            dispatch(
                setlastKey(
                    chatData.value[chatData.value.length - 1].value.createdAt
                )
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
