import React from 'react';
import s from './Post.module.css';

export type PostPropsType = {
    message: string
}
export const Post = ({message}: PostPropsType) => {
    return (
        <div className={s.item}>
            <img
                src={'https://www.fr.de/assets/images/30/586/30586280-3d-bueste-einer-figur-aus-avatar-2WsZTh7umIec.jpg'}
                alt={'avatar'}/>
            {message}
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

