import React, { ChangeEvent } from 'react';
import { Post } from './post/Post';
import s from './MyPosts.module.css'
import { MyPostsPagePropsType } from './MyPostsContainer';


export const MyPosts = (props: MyPostsPagePropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCounts={p.likesCount} />)

    const onClickHandler = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newPostText = e.currentTarget.value;
        props.updateNewPostText(newPostText)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} />
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

