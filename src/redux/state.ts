import {rerenderEntireTree} from '../render';

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

export type AddPostType = {
    addPost: (postMessage: string) => void
    updateNewPostText: (newPostText: string) => void
}


export type AppPropsType = RootStateType & AddPostType


let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post', likesCount: 20},
            {id: 3, message: 'bla bla test', likesCount: 5},
        ],
        newPostText: 'it-kamasutra.com',
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Viktor'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yoohoo'},
            {id: 4, message: 'Yoohoo'},
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Sveta'},
            {id: 2, name: 'Valera'},
            {id: 3, name: 'Viktor'},
        ]
    }
}


export const addPost = (postMessage: string) => {
    let newPost: PostType = {id: 4, message: postMessage, likesCount: 0};
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}

export const updateNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state)
}

export default state;