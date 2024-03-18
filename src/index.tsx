import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import state from './redux/state'
import {addPost} from './redux/state';

ReactDOM.render(
    <BrowserRouter>
        <App
            profilePage={state.profilePage}
            dialogsPage={state.dialogsPage}
            sidebar={state.sidebar}
            addPost={addPost}
        />
    </BrowserRouter>,
    document.getElementById('root')
);