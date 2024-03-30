import React from 'react';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {AddPostType, ProfilePageType} from '../../redux/state';


export const Profile = (props: ProfilePageType & AddPostType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts updateNewPostText={props.updateNewPostText} newPostText={props.newPostText} posts={props.posts} addPost={props.addPost}/>
        </div>
    );
};

