import React, {ChangeEvent} from 'react';
import {Post} from './post/Post';
import s from './MyPosts.module.css'
import {AddPostType, ProfilePageType} from '../../../redux/state';


export const MyPosts = (props: ProfilePageType & AddPostType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCounts={p.likesCount}/>)

    const onClickHandler = () => {
            props.addPost(props.newPostText);
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
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

