import {ActionsTypes, DialogPageType} from './state';


const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
export const dialogsReducer = (state: DialogPageType, action: ActionsTypes): DialogPageType => {
    switch (action.type) {

        case 'ADD_MESSAGE':
            return state;

        case 'UPDATE_NEW_MESSAGE_TEXT':
            return state;

        default:
            return state
    }
}


export type AddMessageType = ReturnType<typeof addMessageActionCreator>
export type UpdateNewMessageTextType = ReturnType<typeof updateNewMessageTextActionCreator>
export const addMessageActionCreator = (newMessageText: string) => {
    return {
        type: ADD_MESSAGE,
        newMessageText: newMessageText
    } as const
}

export const updateNewMessageTextActionCreator = (newMessageText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: newMessageText
    } as const
}