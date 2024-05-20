import React from 'react';
import './App.css';
import { NavBar } from './components/navBar/NavBar';
import { Route } from 'react-router-dom';
import { News } from './components/news/News';
import { Music } from './components/music/Music';
import { Settings } from './components/settings/Settings';
import { DialogsContainer } from './components/dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';


function App() {

    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <NavBar />
            <div className={'app-wrapper-content'}>
                <Route
                    path={'/dialogs'}
                    render={() =>
                        <DialogsContainer />} />
                <Route path={'/profile/:userId?'} render={() =>
                    <ProfileContainer />} />

                <Route path={'/news'} render={() => <News />} />
                <Route path={'/music'} render={() => <Music />} />
                <Route path={'/settings'} render={() => <Settings />} />
                <Route path={'/users'} render={() => <UsersContainer />} />

            </div>
        </div>
    );
}

export default App;
