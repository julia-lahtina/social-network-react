import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';
import { MapStateToProps } from './HeaderContainer';


export const Header = (props: MapStateToProps) => {

    return (
        <header className={s.header}>
            <img src="https://www.svgrepo.com/show/343564/italki-communication-interaction-message-network-connection.svg" alt="" />
            <div className={s.loginBlog}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

