import React from 'react';
import "./NavBar.css";
export const NavBar = () => {
    return (
        <nav className={"nav"}>
            <div className={"item"}>
                <a href="">Profile</a>
            </div>
            <div className={"item"}>
                <a href="">Message</a>
            </div>
            <div className={"item"}>
                <a href="">News</a>
            </div>
            <div className={"item"}>
                <a href="">Music</a>
            </div>
            <div className={"item"}>
                <a href="">Settings</a>
            </div>
        </nav>
    );
};

