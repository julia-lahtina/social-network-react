import React, {ChangeEvent} from 'react';
import {Post} from './post/Post';
import s from './MyPosts.module.css'
import {PostMessageType, ProfilePageType} from '../../../redux/store';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile_reducer';


export const MyPosts = (props: ProfilePageType & PostMessageType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCounts={p.likesCount}/>)

    const onClickHandler = () => {
            props.dispatch(addPostActionCreator());
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newPostText = e.currentTarget.value;
        props.dispatch(updateNewPostTextActionCreator(newPostText))
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onClickHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

