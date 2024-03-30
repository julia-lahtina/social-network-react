let rerenderEntireTree = (state: RootStateType) => {

}

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

export type AddPostType = {
    addPost: (postMessage: string) => void
    updateNewPostText: (newPostText: string) => void
}

export type AddMessageType = {
    addMessage: (newMessageText: string) => void
    updateNewMessageText: (newMessageText: string) => void
}


export type AppPropsType = RootStateType & AddPostType & AddMessageType


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
        ],
        newMessageText: 'Hello...',
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

export const addMessage = (newMessageText: string) => {
    const newMessage: MessageType = {id: 5, message: newMessageText};
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state)
}

export const updateNewMessageText = (newMessageText: string) => {
    state.dialogsPage.newMessageText = newMessageText;
    rerenderEntireTree(state)
}

export const subscribe = (observer: (state: RootStateType) => void) => {
    rerenderEntireTree = observer;
}

export default state;