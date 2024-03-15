import React from 'react';
import {Post} from './post/Post';
import s from './MyPosts.module.css'

export const MyPosts = () => {

    let posts = [
        {message: 'Hi, how are you?', likes: 15},
        {message: 'It\'s my first post', likes: 20},
        {message: 'bla bla test', likes: 5},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCounts={p.likes}/>)

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

