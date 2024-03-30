import './index.css';
import state, {subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addMessage, RootStateType, updateNewMessageText, updateNewPostText} from './redux/state'
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
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
    ;
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree)

