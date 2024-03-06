import React from 'react';
import {Post} from './post/Post';
import s from './MyPosts.module.css'

export const MyPosts = () => {
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
                <Post message={'Hi, how are you?'} likesCounts={15}/>
                <Post message={'It\'s my first post'} likesCounts={20}/>
            </div>
        </div>
    );
};

