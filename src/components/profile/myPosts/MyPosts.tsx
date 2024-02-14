import React from 'react';
import s from './MyPosts.module.css';

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={'posts'}>
                <div className={s.item}>
                    <img
                        src={'https://www.fr.de/assets/images/30/586/30586280-3d-bueste-einer-figur-aus-avatar-2WsZTh7umIec.jpg'}
                        alt={'avatar'}/>
                    post 1
                </div>
                <div className={s.item}>
                    <img
                        src={'https://www.fr.de/assets/images/30/586/30586280-3d-bueste-einer-figur-aus-avatar-2WsZTh7umIec.jpg'}
                        alt={'avatar'}/>
                    post 2
                </div>
            </div>
        </div>
    );
};

