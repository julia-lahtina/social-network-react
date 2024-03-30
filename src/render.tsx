import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {RootStateType, updateNewPostText} from './redux/state'
import {addPost} from './redux/state';

export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                profilePage={state.profilePage}
                dialogsPage={state.dialogsPage}
                sidebar={state.sidebar}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
    ;
}



