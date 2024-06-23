import { AnyAction, Dispatch } from "redux";
import { api } from "../api/api";
import { ThunkDispatch } from "redux-thunk";
import { AppRootStateType } from "./redux-store";

// types
export type initialStateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};
type setUserDataType = ReturnType<typeof setAuthUserData>;

type ActionsType = setUserDataType;

// reducer
const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (
  state: initialStateType = initialState,
  action: ActionsType
): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// actions
export const setAuthUserData = (
  userId: null,
  email: null,
  login: null,
  isAuth: boolean
) =>
  ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } } as const);

// thunks
export const getAuthUserData = () => (dispatch: Dispatch) => {
  api
    .me()
    .then(res => {
      if (res.data.resultCode === 0) {
        const { id, email, login } = res.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    })
    .catch(err => {
      console.log("error: ", err);
    });
};

export const login =
  (email: string, password: string, rememberMe: boolean) =>
  (dispatch: ThunkDispatch<AppRootStateType, unknown, AnyAction>) => {
    api
      .login(email, password, rememberMe)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(getAuthUserData());
        }
      })
      .catch(err => {
        console.log("error: ", err);
      });
  };

export const logout =
  () => (dispatch: ThunkDispatch<AppRootStateType, unknown, AnyAction>) => {
    api
      .logout()
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false));
        }
      })
      .catch(err => {
        console.log("error: ", err);
      });
  };
