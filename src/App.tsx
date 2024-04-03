import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {NavBar} from './components/navBar/NavBar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import {AppPropsType} from './redux/state';


function App(props: AppPropsType) {


    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route
                    path={'/dialogs'}
                    render={() =>
                        <Dialogs
                            newMessageText={props.dialogsPage.newMessageText}
                            dialogs={props.dialogsPage.dialogs}
                            messages={props.dialogsPage.messages}
                            dispatch={props.dispatch}
                        />}/>
                <Route path={'/profile'} render={() =>
                    <Profile
                        posts={props.profilePage.posts}
                        newPostText={props.profilePage.newPostText}
                        dispatch={props.dispatch}
                    />}/>

                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>

            </div>
        </div>
    );
}

export default App;
