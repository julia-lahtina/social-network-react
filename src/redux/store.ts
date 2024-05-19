import { AddPostActionType, profileReducer, SetUserProfileType, UpdateNewPostTextActionType } from './profile_reducer';
import { AddMessageType, dialogsReducer, UpdateNewMessageTextType } from './dialogs_reducer';
import { AppRootStateType } from './redux-store';



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
    profile: {
        aboutMe: string | null
        contacts: {
            facebook: string | null
            website: string | null
            vk: string | null
            twitter: string | null
            instagram: string | null
            youtube: string | null
            github: string | null
            mainLink: string | null
        }
        fullName: string
        lookingForAJob: boolean
        lookingForAJobDescription: string
        photos: {
            small: string
            large: string
        }
        userId: number
    }
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
    dispatch: (action: ActionsTypes) => void
}


export type PostMessageType = {
    dispatch: (action: ActionsTypes) => void
}

export type MessageDialogsType = {
    dispatch: (action: ActionsTypes) => void
}

export type AppPropsType = AppRootStateType & PostMessageType & MessageDialogsType


export type ActionsTypes = AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageType
    | UpdateNewMessageTextType
    | SetUserProfileType

let store: StoreType = {
    _state:
    {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 15 },
                { id: 2, message: 'It\'s my first post', likesCount: 20 },
                { id: 3, message: 'bla bla test', likesCount: 5 },
            ],
            newPostText:
                '',
            profile: {
                aboutMe: null,
                contacts: {
                    facebook: null,
                    website: null,
                    vk: null,
                    twitter: null,
                    instagram: null,
                    youtube: null,
                    github: null,
                    mainLink: null
                },
                lookingForAJob: true,
                lookingForAJobDescription: '',
                fullName: 'Dmitry',
                userId: 2,
                photos: {
                    small: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png',
                    large: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'
                }
            }
        }
        ,
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Viktor' },
            ],
            messages:
                [
                    { id: 1, message: 'Hi' },
                    { id: 2, message: 'How are you?' },
                    { id: 3, message: 'Yoohoo' },
                    { id: 4, message: 'Yoohoo' },
                ],
            newMessageText:
                '',
        }
        ,
        sidebar: {
            friends: [
                { id: 1, name: 'Sveta' },
                { id: 2, name: 'Valera' },
                { id: 3, name: 'Viktor' },
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

    dispatch(action: ActionsTypes) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._rerenderEntireTree(this._state)
    }
}

export default store;

// @ts-ignore
window.store = store;
