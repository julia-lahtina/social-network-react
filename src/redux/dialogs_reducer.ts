import {ActionsTypes, DialogPageType, MessageType} from './store';


const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
export const dialogsReducer = (state: DialogPageType, action: ActionsTypes): DialogPageType => {
    switch (action.type) {

        case 'ADD_MESSAGE':
            const newMessage: MessageType = {id: 5, message: state.newMessageText};
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };

        case 'UPDATE_NEW_MESSAGE_TEXT':
            return {
                ...state,
                newMessageText: action.newMessageText
            };

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