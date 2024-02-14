import React from 'react';
import s from './Post.module.css';

export type PostPropsType = {
    message: string
    likeCounts: number
}
export const Post = ({message, likeCounts}: PostPropsType) => {
    return (
        <div className={s.item}>
            <img
                src={'https://www.fr.de/assets/images/30/586/30586280-3d-bueste-einer-figur-aus-avatar-2WsZTh7umIec.jpg'}
                alt={'avatar'}/>
            {message}
            <div>
                <span>{likeCounts} like</span>
            </div>
        </div>
    );
};

