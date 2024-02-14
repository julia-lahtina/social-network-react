import React from 'react';
import s from '../NavBar.module.css'

console.log(s)

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a>Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a>Message</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
};

