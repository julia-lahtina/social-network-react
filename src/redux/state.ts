export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}

export type SidebarType = {
    friends: FriendType[]
}

export type FriendType = {
    id: number
    name: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _rerenderEntireTree: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: ActionType) => void
}


export type PostMessageType = {
    dispatch: (action: ActionType) => void
}

export type MessageDialogsType = {
    dispatch: (action: ActionType) => void
}


export type AddPostActionType = {
    type: 'ADD_POST'
    postMessage: string
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE_NEW_POST_TEXT'
    newPostText: string
}

export type AddMessageType = {
    type: 'ADD_MESSAGE'
    newMessageText: string
}

export type UpdateNewMessageTextType = {
    type: 'UPDATE_NEW_MESSAGE_TEXT'
    newMessageText: string
}


export type ActionType = AddPostActionType | UpdateNewPostTextActionType | AddMessageType | UpdateNewMessageTextType

export type AppPropsType = RootStateType & PostMessageType & MessageDialogsType


const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';


let store: StoreType = {
    _state:
        {
            profilePage: {
                posts: [
                    {id: 1, message: 'Hi, how are you?', likesCount: 15},
                    {id: 2, message: 'It\'s my first post', likesCount: 20},
                    {id: 3, message: 'bla bla test', likesCount: 5},
                ],
                newPostText:
                    '',
            }
            ,
            dialogsPage: {
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
            ,
            sidebar: {
                friends: [
                    {id: 1, name: 'Sveta'},
                    {id: 2, name: 'Valera'},
                    {id: 3, name: 'Viktor'},
                ]
            }
        }
    ,
    _rerenderEntireTree(state: RootStateType) {
    },

    getState() {
        return this._state
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action: ActionType) {
        if (action.type === ADD_POST) {
            let newPost: PostType = {id: 4, message: action.postMessage, likesCount: 0};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerenderEntireTree(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            this._rerenderEntireTree(this._state)
        } else if (action.type === ADD_MESSAGE) {
            const newMessage: MessageType = {id: 5, message: action.newMessageText};
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._rerenderEntireTree(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._rerenderEntireTree(this._state)
        }
    }
}

export const addPostActionCreator = (postMessage: string) => {
    return {
        type: ADD_POST,
        postMessage: postMessage
    } as const
}

export const updateNewPostTextActionCreator = (newPostText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText
    } as const
}

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

export default store;
