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



function App(props: AppPropsType) {


    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                <Route path={'/profile'} render={() => <Profile posts={props.posts}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
