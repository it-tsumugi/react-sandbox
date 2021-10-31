import { useState, VFC } from "react";

import { useAppDispatch } from "../../store/hooks";
import {
    decrement,
    increment,
    incrementByAmount,
    useCountSelector,
} from "../../store/slices/counter/counterSlice";

export const ReduxPage1: VFC = () => {
    const dispatch = useAppDispatch();
    const { count } = useCountSelector();
    const [incrementAmount, setIncrementAmount] = useState(2);

    return (
        <>
            <div>Page1</div>
            <button onClick={() => dispatch(increment())}>
                インクリメント
            </button>
            <button onClick={() => dispatch(decrement())}>デクリメント</button>
            <input
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(Number(e.target.value))}
            />
            <button
                onClick={() => dispatch(incrementByAmount(incrementAmount))}
            >
                数値分インクリメント
            </button>
            <div>{count}</div>
        </>
    );
};
