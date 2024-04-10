import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile_reducer';
import {MyPosts} from './MyPosts';
import {AppRootStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {PostType} from '../../../redux/store';

type MapStateToPropsType = {
    posts: PostType[]
    newPostText: string
}

type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export type MyPostsPagePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            const action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)