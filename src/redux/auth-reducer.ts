import { Dispatch } from "redux"
import { api } from "../api/api"

// types
export type initialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type setUserDataType = ReturnType<typeof setAuthUserData>

type ActionsType = setUserDataType


// reducer
const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data, isAuth: true }
        default:
            return state
    }
}


// actions
export const setAuthUserData = (data: initialStateType) => ({ type: SET_USER_DATA, data } as const)

// thunks
export const authMe = () => (dispatch: Dispatch) => {
    api.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(res.data.data))
            }
        })
        .catch(err => {
            console.log('error: ', err)
        })
}