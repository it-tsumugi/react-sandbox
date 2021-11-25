import { AnyAction } from "redux";
import { createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";

import { AppThunkDispatch, RootState } from "../../assets/type/reduxType";
import { useAppSelector } from "../../hooks/useAppSelector";

export type userDataType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const initialState: userDataType[] = [];

export const userDataSlice = createSlice({
  name: "userData",
  initialState: initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<userDataType[]>) => {
      // state = action.payload; だめ？
      return action.payload;
    },
  },
});

export const getUsers = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch: AppThunkDispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: userDataType[] = await res.json();
    dispatch(setUsers(data));
  };
};

//action
export const { setUsers } = userDataSlice.actions;

//selector
export const useUserDataSelector = () => {
  const userData = useAppSelector((state: RootState) => state.userData);
  return { userData };
};

//reducer
export const userDataReducer = userDataSlice.reducer;
