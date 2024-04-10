import {ActionsTypes, DialogPageType, MessageType} from './store';


const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState: DialogPageType = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Viktor'},
    ],
    messages:
        [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yoohoo'},
            {id: 4, message: 'Yoohoo'},
        ],
    newMessageText:
        '',
}

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes): DialogPageType => {
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

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    } as const
}

export const updateNewMessageTextActionCreator = (newMessageText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: newMessageText
    } as const
}