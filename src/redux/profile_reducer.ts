import { ActionsTypes, PostType, ProfilePageType } from './store';


export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
export type SetUserProfileType = ReturnType<typeof setUserProfile>

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState: ProfilePageType = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'It\'s my first post', likesCount: 20 },
        { id: 3, message: 'bla bla test', likesCount: 5 },
    ],
    newPostText:
        '',
    profile: {
        aboutMe: '',
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
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        photos: {
            small: '',
            large: ''
        },
        userId: 2,
    }
}
export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = { id: state.posts.length + 1, message: state.newPostText, likesCount: 0 };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return { ...state, newPostText: action.newPostText };
        case 'SET_USER_PROFILE':
            return { ...state, profile: { ...state.profile, ...action.profile } }
        default:
            return state
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST } as const)
export const updateNewPostTextActionCreator = (newPostText: string) => ({ type: UPDATE_NEW_POST_TEXT, newPostText } as const)
export const setUserProfile = (profile: ProfilePageType) => ({ type: SET_USER_PROFILE, profile } as const)