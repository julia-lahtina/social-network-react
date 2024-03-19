import React from 'react';
import {Post} from './post/Post';
import s from './MyPosts.module.css'
import {AddPostType, ProfilePageType} from '../../../redux/state';


export const MyPosts = (props: ProfilePageType & AddPostType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCounts={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const onClickHandler = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current?.value)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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

