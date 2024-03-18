import React from 'react';
import {Post} from './post/Post';
import s from './MyPosts.module.css'
import {ProfilePageType} from '../../../redux/state';


export const MyPosts = (props: ProfilePageType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCounts={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

