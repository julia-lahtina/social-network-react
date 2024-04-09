import React from 'react';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostMessageType, ProfilePageType} from '../../redux/store';


export const Profile = (props: ProfilePageType & PostMessageType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                newPostText={props.newPostText}
                posts={props.posts}
                dispatch={props.dispatch}
            />
        </div>
    );
};

