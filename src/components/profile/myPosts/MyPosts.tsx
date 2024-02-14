import React from 'react';
import {Post} from './post/Post';

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={'posts'}>
                <Post message={'Hi, how are you?'} likeCounts={15}/>
                <Post message={"It's my first post"} likeCounts={20}/>
            </div>
        </div>
    );
};

