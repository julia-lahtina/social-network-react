import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './myPosts/MyPosts';

export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
                    alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

