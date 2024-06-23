import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

export const Header = (props: any) => {
  return (
    <header className={s.header}>
      <img
        src="https://www.svgrepo.com/show/343564/italki-communication-interaction-message-network-connection.svg"
        alt=""
      />
      <div className={s.loginBlog}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
