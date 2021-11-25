import { VFC } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  getUsers,
  setUsers,
  useUserDataSelector,
} from "../../store/slices/userData";

export const ReduxThunkPage1: VFC = () => {
  const { userData } = useUserDataSelector();
  const { dispatch } = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch(getUsers())}>フェッチデータ</button>
      <button onClick={() => dispatch(setUsers([]))}>データクリア</button>
      {userData &&
        userData.map((user, index) => <div key={index}>{user.name}</div>)}
    </div>
  );
};
