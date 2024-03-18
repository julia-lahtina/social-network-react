import React from 'react';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';


export const Profile = (props: ProfilePageType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

