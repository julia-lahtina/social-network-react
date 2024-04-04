import {ActionsTypes, PostType, ProfilePageType} from './state';


export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


export const profileReducer = (state: ProfilePageType, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {id: state.posts.length + 1, message: state.newPostText, likesCount: 0};
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newPostText};
        default:
            return state
    }
}


export const addPostActionCreator = () => ({

    type: ADD_POST

}) as const

export const updateNewPostTextActionCreator = (newPostText: string) => ({

    type: UPDATE_NEW_POST_TEXT,
    newPostText

}) as const